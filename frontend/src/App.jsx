import Header from "./components/Header";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper">
      <Header />
      <main>
        <Hero />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
