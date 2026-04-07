"use client";

import { useState } from "react";

export function InfoNavButtons() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showSupportedFormats, setShowSupportedFormats] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowHowItWorks(true)}
        className="text-stone-600 font-medium hover:text-[#4a7c59] transition-colors duration-200"
      >
        How it Works
      </button>
      <button
        onClick={() => setShowSupportedFormats(true)}
        className="text-stone-600 font-medium hover:text-[#4a7c59] transition-colors duration-200"
      >
        Supported Formats
      </button>

      {showHowItWorks && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowHowItWorks(false)}
        >
          <div
            className="bg-[#faf6f0] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowHowItWorks(false)}
              className="absolute top-6 right-6 text-stone-400 hover:text-[#4a7c59] transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="text-3xl font-bold font-headline text-[#4a7c59] mb-6">
              How it Works
            </h2>
            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p>
                MultiResize provides a simple, client-side only approach to
                resizing your images without uploading them to any external
                server. Here&apos;s our straightforward process:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4a7c59]/10 text-[#4a7c59] flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Select Your Image
                    </h4>
                    <p className="text-sm">
                      Drag and drop or select an image from your device. It
                      stays in your browser.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4a7c59]/10 text-[#4a7c59] flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Choose Dimensions
                    </h4>
                    <p className="text-sm">
                      Add one or multiple output sizes. Use standard presets or
                      define exact pixels.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#4a7c59]/10 text-[#4a7c59] flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Process & Download
                    </h4>
                    <p className="text-sm">
                      Our powerful core resizes the images instantly and bundles
                      them into a ZIP file for a clean download.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSupportedFormats && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowSupportedFormats(false)}
        >
          <div
            className="bg-[#faf6f0] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSupportedFormats(false)}
              className="absolute top-6 right-6 text-stone-400 hover:text-[#4a7c59] transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="text-3xl font-bold font-headline text-[#4a7c59] mb-6">
              Supported Formats
            </h2>
            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p>
                MultiResize is built to handle the most common standard image
                formats native to modern web browsers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                  <h4 className="font-bold text-[#4a7c59] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      image
                    </span>{" "}
                    JPEG / JPG
                  </h4>
                  <p className="text-sm text-stone-500">
                    Perfect for photographs and rich color images with standard
                    compression.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                  <h4 className="font-bold text-[#4a7c59] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      image
                    </span>{" "}
                    PNG
                  </h4>
                  <p className="text-sm text-stone-500">
                    Ideal for graphics, logos, and images requiring a
                    transparent background.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                  <h4 className="font-bold text-[#4a7c59] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      image
                    </span>{" "}
                    WEBP
                  </h4>
                  <p className="text-sm text-stone-500">
                    Modern format providing superior lossless and lossy
                    compression for web use.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                  <h4 className="font-bold text-[#4a7c59] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      image
                    </span>{" "}
                    HEIC
                  </h4>
                  <p className="text-sm text-stone-500">
                    Supported natively largely on Apple devices. Converted
                    seamlessly.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 text-amber-800 rounded-xl text-sm italic border border-amber-200">
                Note: Final exports are generally converted to standardized .jpg
                or matching formats depending on browser capabilities to ensure
                maximum compatibility.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

