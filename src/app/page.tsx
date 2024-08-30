import AboutMe from "./components/AboutMe";
import Hero from "./components/Banner";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import WorkApproach from "./components/WorkApproach";

const Home = () => (
  <div className="bg-[#050112] min-h-screen">
    <Hero />
    <AboutMe />
    <TechStack />
    <WorkApproach />
    <Projects />
    <Footer />
  </div>
);

export default Home;
