"use client";

import { useRef, type ChangeEvent, type DragEvent } from "react";

type Props = {
  onFileSelected: (file: File) => void;
};

export function ImageUploader({ onFileSelected }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelected(e.target.files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileSelected(e.dataTransfer.files[0]);
    }
  };

  return (
    <section className="py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-6 max-w-3xl mx-auto leading-tight font-headline">
        Turn one image into multiple sizes <br />
        fast and free
      </h1>
      <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto font-body leading-relaxed">
        Upload a single photo and export every width and height you need in one
        go—ZIP download, no uploads to a server, no tracking.
      </p>

      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="max-w-3xl mx-auto bg-surface-container border-2 border-dashed border-outline-variant rounded-xl p-12 transition-all hover:border-primary/50 group cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="flex flex-col items-center justify-center space-y-4 pointer-events-none">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-4xl">
              upload_file
            </span>
          </div>
          <div>
            <p className="text-xl font-headline font-bold text-on-surface">
              Drag your image here
            </p>
            <p className="text-secondary mt-1">or</p>
          </div>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold organic-glow hover:opacity-95 transition-all pointer-events-auto cursor-pointer">
            Select File
          </button>
          <p className="text-xs text-outline mt-4">
            JPG, PNG, WEBP and HEIC supported up to 20MB
          </p>
        </div>
      </div>

      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
      />
    </section>
  );
}

