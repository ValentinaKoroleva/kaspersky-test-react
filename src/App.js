import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainIdea from "./components/MainIdea";
import Offers from "./components/Offers"
import Footer from "./components/Footer";
import TabsFAQ from "./components/TabsFAQ";
function App() {
  return (
    <div className="App">
      <Header/>
      <MainIdea></MainIdea>
      <Offers></Offers>
      <TabsFAQ></TabsFAQ>
      <Footer></Footer>
    </div>
  );
}

export default App;
