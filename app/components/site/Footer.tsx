import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#faf6f0] border-t border-stone-200">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0">
          <span className="text-lg font-serif text-[#4a7c59] font-bold">
            MultiResize
          </span>
          <p className="text-stone-500 text-sm mt-2 font-sans">
            © 2026 MultiResize. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <a
            className="text-stone-500 font-sans text-sm hover:text-[#4a7c59] transition-colors"
            href="/privacy"
          >
            Privacy Policy
          </a>
          <a
            className="text-stone-500 font-sans text-sm hover:text-[#4a7c59] transition-colors"
            href="/terms"
          >
            Terms of Service
          </a>
          <a
            className="flex items-center gap-2 text-stone-500 font-sans text-sm hover:text-[#4a7c59] transition-colors"
            href="https://github.com/Divyam-Kumar-Pandey/resize-image-into-multiple-sizes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-4 h-4" />
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

