import React from 'react';

const Navbar = () => {
    return (
        <header>
            <div>
                <ul className="main-menu" id="main-menu">
                    <li><a href="/"> Home </a></li>
                    <li><a href="/Merchants"> Merchants </a></li>
                    <li><a href="/Customers"> Customers </a></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;