import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import MemorableMoments from "./components/MemorableMoments";

import WhySayYes from "./components/WhySayYes";
import Proposal from "./components/Proposal";
import Footer from "./components/Footer";
import FloatingHearts from "./components/FloatingHearts";
import MusicToggle from "./components/MusicToggle";

export default function App() {
  return (
    <div className="relative min-h-screen bg-rose-50 text-rose-950">
      <FloatingHearts />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <OurStory />
        <MemorableMoments />
        
        <WhySayYes />
        <Proposal />
      </main>
      <Footer />
      <MusicToggle />
    </div>
  );  
}
