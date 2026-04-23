import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection"

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f6f2]">
      <Navbar />
      <HeroSection/>
      <Footer />
    </div>
  );
};
