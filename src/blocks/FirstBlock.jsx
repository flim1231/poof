import React from 'react';
import clas from './style.module.css';

function FirstBlock() {
    return ( 
    <div className="wrapper">
        {/* Header */}
        <div className="header_container">

        {/* Header menu */}
            <div className="header_menu">
                <nav className="menu_body">
                    <ul className="menu_list">
                        <li className="list_item"><a href="#" className="list_link">Route</a></li>
                        <li className="list_item"><a href="#" className="list_link">Dates</a></li>
                        <li className="list_item"><a href="#" className="list_link">About us</a></li>
                    </ul>
                </nav>
            </div>
        {/* Header logo */}
            <div className="header_logo">
                    <span className="logo_text">Smart Travel</span>
            </div>
        </div>
        {/* Header phonenumber */}
        <div className="header_phonenumber">
            <span className="number">+375 (28) 829 49 24 </span>
        </div>
    </div>
    );
}

export default FirstBlock;