import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#191730]">
      <Navbar />Animated
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}