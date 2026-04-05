import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function TermsOfService() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#faf6f0] border-b border-stone-200 shadow-sm backdrop-blur-sm">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-serif font-bold text-[#4a7c59] tracking-tight hover:opacity-80 transition-opacity">
            MultiResize
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-stone-600 font-medium hover:text-[#4a7c59] transition-colors duration-200" href="/">Back to Home</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-sm organic-glow">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-[#4a7c59] mb-8 border-b border-[#4a7c59]/20 pb-6">Terms of Service</h1>
          
          <div className="space-y-8 text-stone-700 font-body leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">Acceptance of Terms</h2>
              <p>By accessing or using MultiResize, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">1. Use of Service</h2>
              <p>MultiResize is a free, simple client-side application designed to allow users to resize images into multiple dimensions simultaneously. You may use this tool for both personal and commercial purposes, provided your use is lawful.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">2. Client-Side Processing</h2>
              <p>Our application performs all image processing locally within your web browser. This means:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>We do not upload or store your images on our servers.</li>
                <li>We have no access to the content you process using the tool.</li>
                <li>You are solely responsible for ensuring you have the right to process the images you use.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">3. Intellectual Property</h2>
              <p>You retain all rights to the images you process using MultiResize. We do not claim any ownership over your original images or the resulting resized images. The MultiResize application itself, including its code, design, and structure, is open-source under the MIT License.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">4. No Warranties ("As Is")</h2>
              <p>The service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied. While we strive for high-quality resizing and reliable performance, we do not guarantee that the service will be error-free or uninterrupted. We are not responsible for any data loss, including the loss of your original or resized images.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">5. Limitation of Liability</h2>
              <p>In no event shall MultiResize or its developers be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2d4d36] mb-4">6. Changes to Terms</h2>
              <p>We reserve the right to modify or replace these Terms at any time. Any changes will be posted on this page. Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service.</p>
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
            <span className="text-lg font-serif text-[#4a7c59] font-bold">MultiResize</span>
            <p className="text-stone-500 text-sm mt-2 font-sans">© {new Date().getFullYear()} MultiResize. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link className="text-stone-500 font-sans text-sm hover:text-[#4a7c59] transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="text-stone-500 font-sans text-sm hover:text-[#4a7c59] transition-colors" href="/terms">Terms of Service</Link>
            <a className="flex items-center gap-2 text-stone-500 font-sans text-sm hover:text-[#4a7c59] transition-colors" href="https://github.com/Divyam-Kumar-Pandey/resize-image-into-multiple-sizes" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-4 h-4" />
              Github
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
