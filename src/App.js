import "./App.css";
import Navbar from "./components/nav-bar/Navbar";
import Hero from "./components/hero/Hero";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
