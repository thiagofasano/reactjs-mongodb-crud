import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

// import logo from '../assets/Logo.svg';

export default function Header(){
    return(
        <header id="header">
            <div className="container">
                <div className="header-logo">
                   <Link to="/"> <img src="" alt="Logo" /> </Link>
                </div>

                <nav className="header-menu">
                    <ul>
                        <li><Link to="/project">Gerenciar</Link></li>
                    </ul>
                </nav>
                
            </div>
        </header>
    )
}