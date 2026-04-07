"use client";

import type { Dimension } from "./types";
import { PresetGrid } from "./PresetGrid";
import { CustomDimensionsEditor } from "./CustomDimensionsEditor";

type Props = {
  dimensions: Dimension[];
  isProcessing: boolean;
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

export function ResizeSettingsPanel({
  dimensions,
  isProcessing,
  onPresetClick,
  onAddDimension,
  onRemoveDimension,
  onUpdateDimension,
  onDownloadAll,
}: Props) {
  return (
    <div className="lg:col-span-5 bg-surface-container rounded-xl p-8 organic-glow space-y-8 flex flex-col">
      <div>
        <h3 className="text-xl font-bold mb-4 font-headline">
          Resize Settings
        </h3>
        <PresetGrid onPresetClick={onPresetClick} />
      </div>

      <CustomDimensionsEditor
        dimensions={dimensions}
        onAddDimension={onAddDimension}
        onRemoveDimension={onRemoveDimension}
        onUpdateDimension={onUpdateDimension}
      />

      <button
        onClick={onDownloadAll}
        disabled={isProcessing}
        className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
      >
        {isProcessing ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined">download</span>
            Download All
          </>
        )}
      </button>
    </div>
  );
}

