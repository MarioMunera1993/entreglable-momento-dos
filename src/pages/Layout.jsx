import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection"

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f4f3ef]">
      <Navbar />
      <HeroSection/>
      <Footer />
    </div>
  );
};
