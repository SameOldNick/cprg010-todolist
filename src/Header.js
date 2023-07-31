import React from 'react';

import logo from './images/logo.svg';

function Header({ }) {
    return (
        <header>
            <h1>Joe Blow's Website 🚀</h1>
            <img src={logo} width={50} height={50} />
        </header>
    );
}

export default Header;