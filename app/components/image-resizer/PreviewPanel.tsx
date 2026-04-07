"use client";

type Props = {
  fileName: string;
  previewUrl: string;
  onChangeImage: () => void;
};

export function PreviewPanel({ fileName, previewUrl, onChangeImage }: Props) {
  return (
    <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-6 organic-glow flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold font-headline">Preview</h3>
        <span className="text-xs font-bold uppercase tracking-wider text-outline px-2 py-1 bg-surface-container-highest rounded">
          {fileName}
        </span>
        <button
          onClick={onChangeImage}
          className="text-sm font-bold text-primary hover:underline"
        >
          Change Image
        </button>
      </div>
      <div className="flex-1 w-full rounded-lg overflow-hidden bg-surface-variant flex items-center justify-center relative min-h-[400px]">
        <img
          alt="Uploaded preview"
          className="max-w-full max-h-[600px] object-contain"
          src={previewUrl}
        />
      </div>
    </div>
  );
}

