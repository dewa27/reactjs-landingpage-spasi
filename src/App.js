import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ServiceSection from "./components/ServiceSection";
function App() {
  return (
    <div className="main">
      <Navbar />
      <main>
        <HeroSection />
        <ServiceSection />
        <PricingSection />
      </main>
    </div>
  );
}

export default App;
