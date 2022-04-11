import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import MainCont from './components/MainCont';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';

function App() {
  return (
    <div className="font-Poppins bg-[#e6c994]">
      <Navbar />
      <MainCont />
      <Features />
      <Privacy />
      <About />
      <Footer />
    </div>
  );
}

export default App;
