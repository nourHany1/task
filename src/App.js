import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import What from "./components/What";
import Recommend from "./components/Recommend";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <What />
      <Recommend/>
      <Projects/>
      <Services/>
    </div>
  );
}

export default App;
