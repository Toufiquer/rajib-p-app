import Footer from "@/components/custom/Footer/Footer";
import Hero from "@/components/custom/Hero/Hero";
import Navbar from "@/components/custom/Navbar/Navbar";
import Slider1 from "@/components/custom/Slider1/Slider1";
import Slider2 from "@/components/custom/Slider2/Slider2";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <h2 className="text-4xl text-center mt-12 mb-6">Title of page</h2>
      <Slider1 />
      <h2 className="text-4xl text-center mt-12 mb-6">Title of page</h2>
      <Slider2 />
      <Footer />
    </>
  );
}
