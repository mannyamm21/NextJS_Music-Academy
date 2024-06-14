import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import Toolkit from "@/components/Toolkit";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import UseStickyScroll from "@/components/UseStickyScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <UseStickyScroll />
      <TestimonialCard />
      <UpcomingWebinars />
      <Toolkit />
      <Footer />
    </main>
  );
}
