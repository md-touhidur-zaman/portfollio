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
      <div className="bg-[#050709]">
        <Services></Services>
      </div>
      <div className="bg-[#0F0715]">
        <MyRecentWork></MyRecentWork>
      </div>
     <div className="bg-[#050709]">
       <Education></Education>
     </div>
      <div className="bg-[#0F0715]">
        <Skills></Skills>
      </div>
      <div className="bg-[#050709]">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App
