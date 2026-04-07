"use client";

import type { Dimension } from "./types";

type Props = {
  dimensions: Dimension[];
  onAddDimension: () => void;
  onRemoveDimension: (id: string) => void;
  onUpdateDimension: (
    id: string,
    field: "width" | "height",
    value: number | "",
  ) => void;
};

export function CustomDimensionsEditor({
  dimensions,
  onAddDimension,
  onRemoveDimension,
  onUpdateDimension,
}: Props) {
  return (
    <div className="border-t border-outline-variant pt-6 flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold font-headline">Custom Dimensions</h4>
        <button
          onClick={onAddDimension}
          className="text-primary font-semibold text-sm cursor-pointer flex items-center"
        >
          <span className="material-symbols-outlined text-[18px] mr-1">
            add
          </span>{" "}
          <span className="hover:underline">Add Size</span>
        </button>
      </div>

      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 pb-4">
        {dimensions.map((dim) => (
          <div key={dim.id} className="flex items-center space-x-4">
            <div className="flex-1">
              <label className="text-xs font-bold text-outline block mb-1">
                Width (px)
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2 focus:ring-primary focus:border-primary"
                placeholder="1920"
                type="number"
                value={dim.width}
                onChange={(e) =>
                  onUpdateDimension(
                    dim.id,
                    "width",
                    e.target.value ? parseInt(e.target.value, 10) : "",
                  )
                }
              />
            </div>
            <span className="mt-6 text-outline font-bold">×</span>
            <div className="flex-1">
              <label className="text-xs font-bold text-outline block mb-1">
                Height (px)
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2 focus:ring-primary focus:border-primary"
                placeholder="1080"
                type="number"
                value={dim.height}
                onChange={(e) =>
                  onUpdateDimension(
                    dim.id,
                    "height",
                    e.target.value ? parseInt(e.target.value, 10) : "",
                  )
                }
              />
            </div>
            {dimensions.length > 1 && (
              <button
                onClick={() => onRemoveDimension(dim.id)}
                className="mt-6 text-red-400 hover:text-red-600 transition"
                title="Remove Size"
              >
                <span className="material-symbols-outlined leading-none block">
                  close
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

