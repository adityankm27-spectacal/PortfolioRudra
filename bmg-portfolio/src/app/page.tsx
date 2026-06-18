import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Groups from "@/components/Groups";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Groups />
        <Work />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
