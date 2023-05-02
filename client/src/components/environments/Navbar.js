import "../style/NavbarStyles.css";

function Navbar(){

    return(
        <nav>
  <a href="index.html">
    <img src="1.png" alt="Logo" width="55" height="54" viewBox="0 0 55 54" fill="none" />
  </a>
             <div>

                <ul id ="navbar">
                    <li><a href ="/Home">Home</a></li>
                    <li><a href ="/">Auction</a></li>
                    <li><a href ="/">Buy</a></li>
                    <li><a href ="/">Collections</a></li>
                    <li><a href ="/Exhibition">Exhibitions</a></li>
                    <li><a href ="/About">About the Artist</a></li>
                    <li><a href ="/Contact">Contact Us</a></li>
                    <li><a href ="/LandingPage">Sign up</a></li>
                    
                </ul>
             </div>
        
        </nav>
    )
}

export default Navbar;
