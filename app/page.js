import Hero from "./components-v2/hero";
import Partners from "./components-v2/partners";
import About from "./components-v2/about";
import CDM from "./components-v2/cdm";
import SolutionSuite from "./components-v2/solution-suite";
import Faqs from "./components-v2/faq";
import Footer from "./components-v2/footer";
import "./layout.css"

export default function Home() {
  return (
    <div className="main">
        <Hero />
        <Partners />
        <About />
        <CDM />
        <SolutionSuite />
        <Faqs />
        <Footer />
    </div>
  );
}
