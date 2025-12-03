import React from 'react';
import './Header.css';
import coffeeLogo from '../assets/logo-new.png';

const Header = () => {
    return (
        <header className="site-header">
            <div className="logo-container">
                <img src={coffeeLogo} alt="KoffeenKanvas Logo" className="logo-image" />
                <h1 className="logo-text">KoffeenKanvas</h1>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
