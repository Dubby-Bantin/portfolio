import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import WorkApproach from "@/components/WorkApproach";

const Home = () => (
  <div className=" min-h-screen">
    <Banner />
    <AboutMe />
    <TechStack />
    <WorkApproach />
    <Projects />
    <Footer />
  </div>
);

export default Home;
