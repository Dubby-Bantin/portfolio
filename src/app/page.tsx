import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import WorkApproach from "./components/WorkApproach";

const Home = () => {
  return (
    <div className="bg-[#050112] min-h-screen">
      <Hero />
      <AboutMe />
      <TechStack />
      <WorkApproach />
    </div>
  );
};

export default Home;
