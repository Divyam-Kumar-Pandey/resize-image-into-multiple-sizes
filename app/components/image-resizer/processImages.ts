import Pica from "pica";
import JSZip from "jszip";
import type { Dimension } from "./types";

type ProcessArgs = {
  file: File;
  previewUrl: string;
  dimensions: Dimension[];
};

function getValidDimensions(dimensions: Dimension[]) {
  return dimensions.filter(
    (d) =>
      typeof d.width === "number" &&
      d.width > 0 &&
      typeof d.height === "number" &&
      d.height > 0,
  ) as Array<{ id: string; width: number; height: number }>;
}

function splitFileName(name: string) {
  const lastDot = name.lastIndexOf(".");
  if (lastDot <= 0) return { baseName: name, extension: "jpg" };
  return {
    baseName: name.slice(0, lastDot),
    extension: name.slice(lastDot + 1) || "jpg",
  };
}

export async function processImagesToZipAndDownload({
  file,
  previewUrl,
  dimensions,
}: ProcessArgs) {
  const validDimensions = getValidDimensions(dimensions);

  if (validDimensions.length === 0) {
    throw new Error(
      "Please add at least one valid dimension (width > 0 and height > 0).",
    );
  }

  const pica = new Pica();
  const zip = new JSZip();

  const img = new Image();
  img.src = previewUrl;
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error("Failed to load preview image."));
  });

  for (const dim of validDimensions) {
    const canvas = document.createElement("canvas");
    canvas.width = dim.width;
    canvas.height = dim.height;

    let blob: Blob | null = null;
    try {
      await pica.resize(img, canvas, {
        unsharpAmount: 80,
        unsharpRadius: 0.6,
        unsharpThreshold: 2,
      });
      blob = await pica.toBlob(canvas, file.type || "image/jpeg", 0.9);
    } catch (picaError) {
      console.warn(
        "Pica processing failed. Falling back to native canvas API.",
        picaError,
      );
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        blob = await new Promise<Blob | null>((resolve) => {
          canvas.toBlob((b) => resolve(b), file.type || "image/jpeg", 0.9);
        });
      }
    }

    if (!blob) {
      throw new Error(
        `Failed to create blob for dimensions ${dim.width}x${dim.height}`,
      );
    }

    const { baseName, extension } = splitFileName(file.name);
    zip.file(`${baseName}_${dim.width}x${dim.height}.${extension}`, blob);
  }

  const zipBlob = await zip.generateAsync({ type: "blob" });
  const downloadUrl = URL.createObjectURL(zipBlob);

  try {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `resized_${file.name}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } finally {
    URL.revokeObjectURL(downloadUrl);
  }
}

