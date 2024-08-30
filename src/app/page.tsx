import AboutMe from "./components/AboutMe";
import Hero from "./components/Banner";
import Footer from "./components/Footer";
import HeadComponent from "./components/HeadComponent";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import WorkApproach from "./components/WorkApproach";

const Home = () => {
  return (
    <div className="bg-[#050112] min-h-screen">
      <HeadComponent />
      <Hero />
      <AboutMe />
      <TechStack />
      <WorkApproach />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
