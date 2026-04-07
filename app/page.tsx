import { Footer } from "./components/site/Footer";
import { Header } from "./components/site/Header";
import { HowItWorksSection } from "./components/site/HowItWorksSection";
import { ImageResizer } from "./components/image-resizer/ImageResizer";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="max-w-7xl mx-auto px-6">
        <ImageResizer />
        <HowItWorksSection />
      </main>

      <Footer />
    </>
  );
}
