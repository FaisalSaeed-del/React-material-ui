import "./App.css";
import Navbar from "./components/nav-bar/Navbar";
import Hero from "./components/hero/Hero";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Form />
    </div>
  );
}

export default App;
