import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">
                    Juan Ahumada
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/consultancies" className="nav-links" onClick={toggleMenu}>
                            Consultorías
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cv" className="nav-links" onClick={toggleMenu}>
                            CV
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/courses" className="nav-links" onClick={toggleMenu}>
                            Cursos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
