import { Component } from "react";
import "../style/NavbarStyles.css";


class Navbar extends Component{
    state={clicked:false};
    handleClick = () =>{
        this.setState({clicked:
        !this.state.clicked})
    }

    render(){

    return(
        <div className={"navi"}>
        <input type="checkbox" id="navi-check"></input>
        <div className={"navi-header"}>
          <div className={"navi-title"}>
         <img src="logo.png" alt="logo" width="50px" height="50px"></img> 
            {/* <h4 font-size="30px">Albiona Berisha</h4> */}
          </div>
        </div>
        <div className={"navi-btn"}>
          <label for="navi-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className={"navi-links"}>
                    <a href="/Home">Home</a>
                    <a href ="/Buy">Buy</a>
                    <a href ="/">Collections</a>
                    <a href ="/Exhibition">Exhibitions</a>
                    <a href ="/About">About the Artist</a>
                    <a href ="/Contact">Contact Us</a>
                    <a href ="/LandingPage">Sign up</a>
        </div>
      </div>
        
        
        
    )
}
}
export default Navbar;