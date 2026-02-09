import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Challenge from "./components/Challenge";
import Solution from "./components/Solution";
import Process from "./components/Process";
import Statistics from "./components/Statistics";
import Voices from "./components/Voices";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Marquee />
      <Challenge />
      <Solution />
      <Process />
      <Statistics />
      <Voices />
      <Footer />
    </>
  );
}
