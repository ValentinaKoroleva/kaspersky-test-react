import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <form>
            <select
              name="dropdown"
              style={{ font: 'Kaspersky Sans/16px Light', backgroundColor: 'white', borderRadius: '0px', borderColor: '#999999', border: '1.5px solid #CCCCCC', color:"#999999", boxShadow: 'none'}}
            >
              <option value="United Kingdom" selected>
              United Kingdom
              </option>
              <option value="...">...</option>
              <option value="...">...</option>
            </select>
          </form>
        )
    }
}
export default Footer;