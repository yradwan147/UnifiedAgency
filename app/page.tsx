import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Difference from "@/components/Difference";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import GitHubShowcase from "@/components/GitHubShowcase";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 w-full">
        <Hero />
        <ValueProps />
        <Services />
        <Portfolio />
        <Difference />
        <Process />
        <Testimonials />
        <GitHubShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
