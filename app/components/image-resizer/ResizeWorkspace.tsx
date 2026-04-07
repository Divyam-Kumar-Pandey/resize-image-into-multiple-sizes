"use client";

import type { Dimension } from "./types";
import { PreviewPanel } from "./PreviewPanel";
import { ResizeSettingsPanel } from "./ResizeSettingsPanel";

type Props = {
  fileName: string;
  previewUrl: string;
  dimensions: Dimension[];
  isProcessing: boolean;
  onChangeImage: () => void;
  onPresetClick: (width: number, height: number) => void;
  onAddDimension: () => void;
  onRemoveDimension: (id: string) => void;
  onUpdateDimension: (
    id: string,
    field: "width" | "height",
    value: number | "",
  ) => void;
  onDownloadAll: () => void;
};

export function ResizeWorkspace({
  fileName,
  previewUrl,
  dimensions,
  isProcessing,
  onChangeImage,
  onPresetClick,
  onAddDimension,
  onRemoveDimension,
  onUpdateDimension,
  onDownloadAll,
}: Props) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 pb-24">
      <PreviewPanel
        fileName={fileName}
        previewUrl={previewUrl}
        onChangeImage={onChangeImage}
      />

      <ResizeSettingsPanel
        dimensions={dimensions}
        isProcessing={isProcessing}
        onPresetClick={onPresetClick}
        onAddDimension={onAddDimension}
        onRemoveDimension={onRemoveDimension}
        onUpdateDimension={onUpdateDimension}
        onDownloadAll={onDownloadAll}
      />
    </section>
  );
}

