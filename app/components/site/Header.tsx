import { FaGithub } from "react-icons/fa";
import { InfoNavButtons } from "../ui/InfoNavButtons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#faf6f0] border-b border-stone-200 shadow-sm">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-serif font-bold text-[#4a7c59] tracking-tight">
          MultiResize
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <InfoNavButtons />
          <a
            className="text-stone-600 font-medium hover:text-[#4a7c59] transition-colors duration-200"
            href="/privacy"
          >
            Privacy
          </a>
        </div>
        <a
          href="https://github.com/Divyam-Kumar-Pandey/resize-image-into-multiple-sizes"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4a7c59] text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition-all flex items-center"
        >
          <FaGithub className="mr-2 text-xl" />
          GitHub
        </a>
      </nav>
    </header>
  );
}

