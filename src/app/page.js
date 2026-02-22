import NavbarMVP from "../components/NavbarMVP";
import Hero from "../components/Hero";
import Credibility from "../components/Credibility";
import Services from "../components/Services";
import Process from "../components/Process";
import Contact from "../components/Contact";
import WhyMe from "../components/WhyMe";
import BookNowCTA from "../components/BookNowCTA";

export default function Home() {
  return (
    <main>
      <NavbarMVP />
      <Hero />
      <Credibility />
      <Services />
      <Process />
      <Contact />
      <WhyMe />
      <BookNowCTA />
    </main>
  );
}
