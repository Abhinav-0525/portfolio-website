import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Volunteer from "@/components/Volunteer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark text-dark-lighter dark:text-light-darker transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
