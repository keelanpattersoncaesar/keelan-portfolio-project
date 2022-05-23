import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
