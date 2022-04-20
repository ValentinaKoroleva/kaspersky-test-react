import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQ from "./components/FAQ";
import SystemRequirements from "./components/SystemRequirements";
import Header from "./components/Header";
import { Tabs } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab'
import MainIdea from "./components/MainIdea";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <MainIdea></MainIdea>
      <Tabs
        defaultActiveKey="FAQ"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="FAQ" title="FAQ">
          <FAQ />
        </Tab>
        <Tab eventKey="systemR" title="SystemR">
          <SystemRequirements />
        </Tab>
      </Tabs>
      <Footer></Footer>
    </div>
  );
}

export default App;
