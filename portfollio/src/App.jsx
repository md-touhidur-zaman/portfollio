import HeroSection from "./Components/HeroSection/HeroSection"
import MyRecentWork from "./Components/MyRecentWork/MyRecentWork";
import Services from "./Components/Services/Services";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";



function App() {
 
  return (
    <div className="font-[Sora]">
      <div className="bg-gradient-to-r from-[#0F0715]  to-[#281745]">
        <HeroSection></HeroSection>
      </div>
      <Services></Services>
      <MyRecentWork></MyRecentWork>
      <Education></Education>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App
