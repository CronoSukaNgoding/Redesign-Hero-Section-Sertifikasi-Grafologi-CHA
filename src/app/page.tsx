import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-brand-gold selection:text-white">
      <Header />
      <HeroSection />
    </main>
  );
}