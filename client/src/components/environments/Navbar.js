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
        <div className={"nav"}>
        <input type="checkbox" id="nav-check"></input>
        <div className={"nav-header"}>
          <div className={"nav-title"}>
            <img src="logo.png" alt="logo" width="50px" height="50px"></img>
          </div>
        </div>
        <div className={"nav-btn"}>
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className={"nav-links"}>
                    <a href="/Home">Home</a>
                    <a href ="/">Auction</a>
                    <a href ="/">Buy</a>
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