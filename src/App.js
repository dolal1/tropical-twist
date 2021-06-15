import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    //BEM
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
