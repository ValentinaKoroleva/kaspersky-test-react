import { Component} from "react";
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import FAQ from "./FAQ";
import SystemRequirements from "./SystemRequirements";

function ControlledTabs(){
    const [key, setKey] = useState('FAQ');
    let activeTab ={
        "FAQ": "Frequently asked questions",
        "systemR": "System Requirements"
    } ;
    return <Tabs variant="pills"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className=" justify-content-start"
    >
        <Tab className="custom-tab" eventKey="disabled" title={activeTab[key]} disabled></Tab>
        <Tab eventKey="FAQ" title="FAQ" >
            <FAQ />
        </Tab>
        <Tab eventKey="systemR" title="System Requirements">
            <SystemRequirements />
        </Tab>
    </Tabs>
}
class TabsFAQ extends Component {
    render() {
        return <ControlledTabs/>
    }
}

export default TabsFAQ;