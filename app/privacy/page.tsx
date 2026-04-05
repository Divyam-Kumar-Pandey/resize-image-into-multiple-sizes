import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#faf6f0] border-b border-stone-200 shadow-sm opacity-90 backdrop-blur-sm">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-serif font-bold text-[#4a7c59] tracking-tight hover:opacity-80 transition-opacity">
            Terra Resize
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-stone-600 font-medium hover:text-[#4a7c59] transition-colors duration-200" href="/">Back to Home</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-sm organic-glow">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-[#4a7c59] mb-8 border-b border-[#4a7c59]/20 pb-6">Privacy Policy</h1>
          
          <div className="space-y-8 text-stone-700 font-body leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">Introduction</h2>
              <p>Welcome to Terra Resize. We respect your privacy and are committed to protecting it. This Privacy Policy outlines what information we collect, how it is used, and how it is safeguarded when you use our image resizing tool.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">1. Information We Do NOT Collect</h2>
              <p>Terra Resize is designed as a client-side only application. This means:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>No Image Uploads:</strong> Your images are processed entirely within your web browser. They are never uploaded to our servers, nor do we have any access to them.</li>
                <li><strong>No Tracking:</strong> We do not use non-essential cookies, trackers, or invasive analytics to monitor your use of our tool.</li>
                <li><strong>No Personal Data Required:</strong> You do not need to create an account, provide an email address, or give us any personal information to use Terra Resize.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">2. Cookies and Local Storage</h2>
              <p>Our website may use local browser storage strictly for providing the service (e.g., remembering your preferred resize dimensions temporarily). We do not use this data to track you across the internet.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">3. Third-Party Services</h2>
              <p>Since the application runs locally and is hosted on secure platforms, minimal infrastructure logs may be collected by our hosting providers (such as Vercel). These logs are standard network logs (like IP addresses visiting the site) and are not used to identify individuals or trace specific actions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">4. Open Source and Security</h2>
              <p>The codebase for this application uses openly available client-side technologies. While we strive to maintain a secure environment, the processing occurs on your device. Ensure your own device is secure for processing sensitive images.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">5. Changes to This Policy</h2>
              <p>We may update our Privacy Policy from time to time if the functionality of our website changes. Any updates will be reflected on this page.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">Contact Us</h2>
              <p>If you have any questions or suggestions about our Privacy Policy, please feel free to reach out via our GitHub repository.</p>
            </section>

            <div className="text-sm text-stone-500 mt-12 pt-8 border-t border-stone-200">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#faf6f0] border-t border-stone-200 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0">
            <span className="text-lg font-serif text-[#4a7c59] font-bold">Terra Organic Design</span>
            <p className="text-stone-500 text-sm mt-2 font-sans">© {new Date().getFullYear()} Terra Organic Design. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link className="text-stone-500 font-sans text-sm hover:text-[#4a7c59] transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="text-stone-500 font-sans text-sm hover:text-[#4a7c59] transition-colors" href="/terms">Terms of Service</Link>
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
