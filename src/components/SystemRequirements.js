import { Component } from "react";
import { ListGroup } from "react-bootstrap"


class SystemRequirements extends Component {
    render() {
        const checkpointImg = require("../assets/icons/checkpoint.png");
        const values = [
            "1500 MB free space on the hard drive",
            "Microsoft® Internet Explorer® 10 or higher",
            "Microsoft .NET Framework 4 or higher",
            "Microsoft Windows 101 Home / Pro / Enterprise2 3",
            "Microsoft Windows 8 & 8.1 / Pro / Enterprise3 / 8.1 update2",
            "Microsoft Windows 7 Starter / Home Basic & Premium / Professional / Ultimate — SP1 or higher2",
            "Processor: 1 GHz or higher",
            "Memory (RAM): 1 GB (32-bit) or 2 GB (64-bit)",
        ]
        let secondlist = [];
        let i = 0;
        for (let v of values) {
            secondlist.push(<ListGroup.Item  key={i}>
                <img className="checkpoint" src={checkpointImg} alt="checkpoint"></img>
                {v}
            </ListGroup.Item>)
            i++;
        }
        return (
            <div>
                <p style={{ fontSize: 'medium', textAlign: 'left', fontWeight: 'bold' }}>For all devices</p>
                <ListGroup>
                    <ListGroup.Item key="1">
                        <img className="checkpoint" src={checkpointImg} alt="checkpoint"></img>
                        Internet connection required – for product activation & updates and for access to some features
                    </ListGroup.Item>
                    <ListGroup.Item key="2">
                        <img className="checkpoint" src={checkpointImg} alt="checkpoint"></img>
                        Webcam Protection technology only runs on PCs & Mac computers. The feature is available for a range of compatible web-cameras. For the full list of compatible devices, please visit:<br></br> <a href="https://support.kaspersky.com/14108#block1" alt="website">https://support.kaspersky.com/14108#block1</a> (for PCs) and <a href="https://support.kaspersky.com/14248#block1" alt="website">https://support.kaspersky.com/14248#block1</a> (for Mac computers)
                    </ListGroup.Item>
                </ListGroup>
                <hr></hr>
                <p style={{ fontSize: 'medium', textAlign: 'left', fontWeight: 'bold' }}>Windows®-based desktops and laptops</p>
                <ListGroup>
                    {secondlist}
                </ListGroup>
                <hr></hr>
            </div>
        )
    }
}
export default SystemRequirements;