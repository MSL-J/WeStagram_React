import React, { Component } from 'react';
import "./Nav.css";
import logo from "./WeStagram/img/logo.png";
import logoText from "./WeStagram/img/logo_text.png";
import explore from "./WeStagram/img/explore.png";
import heart from "./WeStagram/img/heart.png";
import profile from "./WeStagram/img/profile.png";



class Nav extends Component {
    render () {
        return (
                <nav className="navi">
                    <div className="nav-content">
                        <div className="logoText">
                            <img className="logo firstLogo" alt="logo" src={logo} />
                            <img className="logo secondLogo" alt="Instagram" src={logoText} />
                        </div>
                        <div className="topSearch">
                            <input type="text" className="topSearchBox" placeholder="Search" />
                        </div>
                        <div className="side">
                            <div className="side-img">
                            <img className="logo" alt="explore" src={explore} />
                            <img className="logo" alt="heart" src={heart} />
                            <img className="logo" alt="profile" src={profile} />
                            </div>
                        </div>
                    </div>
                </nav>

        )
    };
}

export default Nav