import React, { Component } from 'react';
import logo from '../i/iconmonstr-bitcoin-6-240.png';
import '../Components/stilo.css';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar is-transparent container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={logo} alt="Crypto" width="55" height="38" />
                        <h1 className="title is-3 has-text-black">Crypto</h1>
                    </a>
                    <div className="navbar-burger burger" data-target="navbar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div id="navbar" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item bd-navbar-item-documentation is-active has-text-centered"
                            href="/Conversor">
                            <span className="is-hidden-touch is-hidden-widescreen">Conversor</span>
                            <span className="is-hidden-desktop-only">Conversor</span>
                        </a>
                        <a className="navbar-item bd-navbar-item-documentation is-active has-text-centered"
                            href="/Blog">
                            <span className="is-hidden-touch is-hidden-widescreen">Blog</span>
                            <span className="is-hidden-desktop-only">Blog</span>
                        </a>
                    </div>
                </div>
                
            </nav>

        )
    }

}

export default Nav;