import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import BreadCum from "./components/BreadCum";
import MainPage from "./components/MainPage";
import CreateSection from "./components/CreateSection";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App px-5 ">
      <div className="container m-auto">
        <Navbar />
        <BreadCum />
        <MainPage />
        <CreateSection/>
        <FAQ/>
      </div>
    </div>
  );
}

export default App;
