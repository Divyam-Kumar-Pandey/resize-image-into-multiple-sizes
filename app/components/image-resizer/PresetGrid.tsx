"use client";

type Props = {
  onPresetClick: (width: number, height: number) => void;
};

export function PresetGrid({ onPresetClick }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        onClick={() => onPresetClick(1080, 1080)}
        className="flex flex-col items-center justify-center p-4 rounded-lg bg-surface border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all group"
      >
        <span className="material-symbols-outlined text-secondary group-hover:text-primary mb-2">
          square
        </span>
        <span className="text-sm font-bold">Instagram Square</span>
        <span className="text-xs text-outline">1080 x 1080</span>
      </button>
      <button
        onClick={() => onPresetClick(1080, 1920)}
        className="flex flex-col items-center justify-center p-4 rounded-lg bg-surface border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all group"
      >
        <span className="material-symbols-outlined text-secondary group-hover:text-primary mb-2">
          smartphone
        </span>
        <span className="text-sm font-bold text-primary">Story / Reel</span>
        <span className="text-xs text-primary/70">1080 x 1920</span>
      </button>
      <button
        onClick={() => onPresetClick(1584, 396)}
        className="flex flex-col items-center justify-center p-4 rounded-lg bg-surface border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all group"
      >
        <span className="material-symbols-outlined text-secondary group-hover:text-primary mb-2">
          view_day
        </span>
        <span className="text-sm font-bold">LinkedIn Banner</span>
        <span className="text-xs text-outline">1584 x 396</span>
      </button>
      <button
        onClick={() => onPresetClick(1600, 900)}
        className="flex flex-col items-center justify-center p-4 rounded-lg bg-surface border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all group"
      >
        <span className="material-symbols-outlined text-secondary group-hover:text-primary mb-2">
          chat_bubble
        </span>
        <span className="text-sm font-bold">Twitter Post</span>
        <span className="text-xs text-outline">1600 x 900</span>
      </button>
    </div>
  );
}

