import React from 'react';
import './Header.scss';

const Header = props => {
    return (
        <header>
            <span className="populares">Películas Populares</span>
            <span className="upcomming">Próximas Películas </span>
            <span className="masvotadas">Películas más votadas</span>
        </header>
    );
}

export default Header;