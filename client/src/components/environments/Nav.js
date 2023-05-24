import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../style/Nav.modules.css";
import 'boxicons/css/boxicons.min.css';


const Nav = ({children}) => {

const [show, setShow ] = useState(false)

const showSideBar = () => {
    setShow(!show)
}

const links = [
    {
        url: '/dashboard',
        i_class: 'bx bxs-dashboard',
        link_title: 'Dashboard',
        key: 0
    },
    {
        url: "/products",
        i_class: "bx bxs-shopping-bag-alt ",
        link_title: "Products",
        key: 1
    },
    {
        url: "/users",
        i_class: "bx bxs-user ",
        link_title: "Users",
        key: 2
    }
]


  return (
   <>
    <header className={`header ${show ? "add_body_padding" : " "}  `} id="admin-dash-header">
        <div className='header_toggle'>
        <i className={`bx bx-menu ${show ? "bx-x" : " "}`} id="header-toggle" onClick={showSideBar}></i>
        </div>
        <div className="dropdown sidebar-profile">
                    <span className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png" alt="avatar" className="avatar rounded-circle" />
                    </span>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                        <li>
                            <a className="dropdown-item" href="/my-account">
                                Profile
                            </a>
                        </li>
                       
                        <li>
                            <button className="dropdown-item">
                                Sign out
                            </button>
                        </li>
                    </ul>
                </div>
    </header>

    <aside className={`sidebar ${show ? "review" : " "} `} id="admin-dash-nav">
                <nav className="admin-dash-nav">
                    <div>
                        <NavLink to={"/"} className="nav_logo">
                            {" "}
                            <img src="../../logo.png" alt="logo" className="logo" /> <span className="nav_logo-name">Artofolio</span>{" "}
                        </NavLink>
                        <div className="nav_list">
                            { links.map((link)=> ( 
                            <NavLink to={link.url} className="nav_link " key={link.key}>
                            <i className={`${link.i_class}  nav_icon`}></i> <span className="nav_name">{link.link_title}</span>{" "}

                            </NavLink>
                           ))}
                        </div>
                    </div>
                    <span className="nav_link">
                        {" "}
                        <i className="bx bx-log-out bx-sm nav_icon"  ></i> <span className="nav_name">SignOut</span>{" "}
                    </span>
                </nav>
            </aside>

                <main className={` ${show ? "add_body_padding" : "main"} `}> {children} </main> 
   
   </>
  )
}

export default Nav