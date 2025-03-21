import "./App.css";
import Navbar from "./components/Navbar"
import MainContainer from "./components/Maincontainer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <div id="container">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
    </>

  );
}


