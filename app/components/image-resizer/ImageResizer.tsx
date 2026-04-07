"use client";

import { useEffect, useMemo, useState } from "react";
import type { Dimension } from "./types";
import { ImageUploader } from "./ImageUploader";
import { ResizeWorkspace } from "./ResizeWorkspace";
import { processImagesToZipAndDownload } from "./processImages";

const INITIAL_DIMENSIONS: Dimension[] = [{ id: "1", width: "", height: "" }];

export function ImageResizer() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<Dimension[]>(INITIAL_DIMENSIONS);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const hasImage = useMemo(() => Boolean(file && previewUrl), [file, previewUrl]);

  const handleFileSelected = (selectedFile: File) => {
    setFile(selectedFile);
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(selectedFile);
    });
  };

  const addDimension = () => {
    setDimensions((prev) => [
      ...prev,
      { id: Date.now().toString(), width: "", height: "" },
    ]);
  };

  const removeDimension = (id: string) => {
    setDimensions((prev) => prev.filter((dim) => dim.id !== id));
  };

  const updateDimension = (
    id: string,
    field: "width" | "height",
    value: number | "",
  ) => {
    setDimensions((prev) =>
      prev.map((dim) => (dim.id === id ? { ...dim, [field]: value } : dim)),
    );
  };

  const handlePresetClick = (width: number, height: number) => {
    setDimensions((prev) => {
      if (
        prev.length === 1 &&
        prev[0].width === "" &&
        prev[0].height === ""
      ) {
        return [{ id: Date.now().toString(), width, height }];
      }
      return [...prev, { id: Date.now().toString(), width, height }];
    });
  };

  const changeImage = () => {
    setFile(null);
    setPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
  };

  const downloadAll = async () => {
    if (!file || !previewUrl) return;

    setIsProcessing(true);
    try {
      await processImagesToZipAndDownload({ file, previewUrl, dimensions });
    } catch (error) {
      console.error("Error processing images:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to process the images. Please try again.",
      );
    } finally {
      setIsProcessing(false);
    }
  };

  if (!hasImage) {
    return <ImageUploader onFileSelected={handleFileSelected} />;
  }

  return (
    <ResizeWorkspace
      fileName={file!.name}
      previewUrl={previewUrl!}
      dimensions={dimensions}
      isProcessing={isProcessing}
      onChangeImage={changeImage}
      onPresetClick={handlePresetClick}
      onAddDimension={addDimension}
      onRemoveDimension={removeDimension}
      onUpdateDimension={updateDimension}
      onDownloadAll={downloadAll}
    />
  );
}

