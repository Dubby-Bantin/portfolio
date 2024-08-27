import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

const Home = () => {
  return (
    <div className="bg-[#050112]">
      <Hero />
      <AboutMe />
      <TechStack />
    </div>
  );
};

export default Home;
