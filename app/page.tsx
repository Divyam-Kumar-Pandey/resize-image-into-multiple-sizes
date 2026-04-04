import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 bg-[#faf6f0] border-b border-stone-200 shadow-sm opacity-60">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-serif font-bold text-[#4a7c59] tracking-tight">Terra Resize</div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-stone-600 font-medium hover:text-[#4a7c59] transition-colors duration-200" href="#">How it Works</a>
            <a className="text-stone-600 font-medium hover:text-[#4a7c59] transition-colors duration-200" href="#">Supported Formats</a>
            <a className="text-stone-600 font-medium hover:text-[#4a7c59] transition-colors duration-200" href="#">Privacy</a>
          </div>
          <button className="bg-[#4a7c59] text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition-all">
            Upload New
          </button>
        </nav>
      </header>
      
      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-6 max-w-3xl mx-auto leading-tight font-headline">
            Fast, Free, Organic Image Resizing
          </h1>
          <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto font-body leading-relaxed">
            Effortlessly adjust your photos for social media or print. Grounded in simplicity, rooted in quality. No tracking, no hassle.
          </p>
          
          {/* Drag & Drop Zone */}
          <div className="max-w-3xl mx-auto bg-surface-container border-2 border-dashed border-outline-variant rounded-xl p-12 transition-all hover:border-primary/50 group">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">upload_file</span>
              </div>
              <div>
                <p className="text-xl font-headline font-bold text-on-surface">Drag your images here</p>
                <p className="text-secondary mt-1">or</p>
              </div>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold organic-glow hover:opacity-95 transition-all">
                Select File
              </button>
              <p className="text-xs text-outline mt-4">JPG, PNG, WEBP and HEIC supported up to 20MB</p>
            </div>
          </div>
        </section>

        {/* Functional Section (Preview & Settings) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-24">
          {/* Preview Area */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-6 organic-glow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-headline">Preview</h3>
              <span className="text-xs font-bold uppercase tracking-wider text-outline px-2 py-1 bg-surface-container-highest rounded">Original: 3456 x 2234</span>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-surface-variant flex items-center justify-center relative group">
              <img 
                alt="Uploaded preview" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvziSwUjYaQZH8kf03iLK3SGxMFcCxh-4lg3_zNMe-qQEpgHTOD_Zcap11jWfhiI9_u-0wUe5__5AjDnfb4CcYB9hzIH5OdcfGKkBkAhQyObrwFta3-LnjLmISf2KHM8Fvw0x4obOst0Ms9QSMLlsKAF3YoNcRn6AU5oD27WCIOT6k6LQrS-UsvjbcUamVc31sZEO_4Iyk72n5k9nU4CxPXYG2BbWAtF1pEfErqV7Ng0aPpVvhf6E4PbzgqCY_Dx4lpE38uiMunjQ"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>

          {/* Resize Settings */}
          <div className="lg:col-span-5 bg-surface-container rounded-xl p-8 organic-glow space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-headline">Resize Settings</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-surface border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all group">
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary mb-2">square</span>
                  <span className="text-sm font-bold">Instagram Square</span>
                  <span className="text-xs text-outline">1080 x 1080</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-primary/10 border-2 border-primary transition-all">
                  <span className="material-symbols-outlined text-primary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>smartphone</span>
                  <span className="text-sm font-bold text-primary">Story / Reel</span>
                  <span className="text-xs text-primary/70">1080 x 1920</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-surface border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all group">
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary mb-2">view_day</span>
                  <span className="text-sm font-bold">LinkedIn Banner</span>
                  <span className="text-xs text-outline">1584 x 396</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 rounded-lg bg-surface border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all group">
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary mb-2">chat_bubble</span>
                  <span className="text-sm font-bold">Twitter Post</span>
                  <span className="text-xs text-outline">1600 x 900</span>
                </button>
              </div>
            </div>

            <div className="border-t border-outline-variant pt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold font-headline">Custom Dimensions</h4>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center space-x-4 opacity-50 pointer-events-none">
                <div className="flex-1">
                  <label className="text-xs font-bold text-outline block mb-1">Width (px)</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2 focus:ring-primary focus:border-primary" placeholder="1920" type="number" />
                </div>
                <span className="mt-6 text-outline">×</span>
                <div className="flex-1">
                  <label className="text-xs font-bold text-outline block mb-1">Height (px)</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-2 focus:ring-primary focus:border-primary" placeholder="1080" type="number" />
                </div>
              </div>
            </div>

            <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.98] transition-all">
              <span className="material-symbols-outlined">download</span>
              Download All
            </button>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 border-t border-stone-200">
          <h2 className="text-3xl font-bold text-center mb-16 font-headline">Simple as Nature</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-tertiary-fixed text-tertiary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">filter_vintage</span>
              </div>
              <h3 className="text-xl font-bold font-headline">1. Upload</h3>
              <p className="text-secondary leading-relaxed">Drop your high-resolution images into our secure canvas. We handle the heavy lifting while you stay grounded.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary-fixed text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">straighten</span>
              </div>
              <h3 className="text-xl font-bold font-headline">2. Select Sizes</h3>
              <p className="text-secondary leading-relaxed">Choose from our organic presets for social platforms or define your own custom growth boundaries.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-surface-container-highest text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">cloud_download</span>
              </div>
              <h3 className="text-xl font-bold font-headline">3. Download</h3>
              <p className="text-secondary leading-relaxed">Instantly receive your optimized, resized images in a clean ZIP package. Ready for the world.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#faf6f0] border-t border-stone-200">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0">
            <span className="text-lg font-serif text-[#4a7c59] font-bold">Terra Organic Design</span>
            <p className="text-stone-500 text-sm mt-2 font-sans">© 2024 Terra Organic Design. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a className="text-stone-500 font-sans text-sm hover:text-[#4a7c59] transition-colors" href="#">Privacy Policy</a>
            <a className="text-stone-500 font-sans text-sm hover:text-[#4a7c59] transition-colors" href="#">Terms of Service</a>
            <a className="flex items-center gap-2 text-stone-500 font-sans text-sm hover:text-[#4a7c59] transition-colors" href="#">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
              Github
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
