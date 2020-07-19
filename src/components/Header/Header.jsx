import React from 'react';
import './Header.scss';
// Componentes del Core
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <NavLink to='/popular'>
                <span className="populares">Películas Populares</span>
            </NavLink>  
            <NavLink to='/upcoming'>
                <span className="upcoming">Próximas Películas </span>
            </NavLink>  
            <NavLink to='/top_rated'>
                <span className="top_rated">Películas más votadas</span>
            </NavLink>
        </header>
    );
}

export default Header;