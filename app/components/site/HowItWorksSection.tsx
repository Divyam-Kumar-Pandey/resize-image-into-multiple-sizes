export function HowItWorksSection() {
  return (
    <section className="py-20 border-t border-stone-200 mt-12">
      <h2 className="text-3xl font-bold text-center mb-16 font-headline">
        Simple as Nature
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-tertiary-fixed text-tertiary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-3xl">
              filter_vintage
            </span>
          </div>
          <h3 className="text-xl font-bold font-headline">1. Upload</h3>
          <p className="text-secondary leading-relaxed">
            Drop one high-resolution image into the canvas. Everything stays in
            your browser—nothing is uploaded.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-16 h-16 bg-primary-fixed text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-3xl">
              straighten
            </span>
          </div>
          <h3 className="text-xl font-bold font-headline">2. Select Sizes</h3>
          <p className="text-secondary leading-relaxed">
            List every size you need from that single photo—presets for social
            or your own exact widths and heights.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-16 h-16 bg-surface-container-highest text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-3xl">
              cloud_download
            </span>
          </div>
          <h3 className="text-xl font-bold font-headline">3. Download</h3>
          <p className="text-secondary leading-relaxed">
            Download all resized copies at once in one ZIP—each file named with
            its dimensions.
          </p>
        </div>
      </div>
    </section>
  );
}

