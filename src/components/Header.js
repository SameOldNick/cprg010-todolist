import React from 'react';
import { ThemeContext } from './ThemeContext';
import { Button } from 'reactstrap';

//function Header({ children, className }) {
function Header(props) {
    const { children, ...extra } = props;

    // children is what's inside the <Header> tag
    // extra is a JSON object with { className: 'top-header', id: 'header', title: 'This is the header' }
    
    const { toggleTheme, theme } = React.useContext(ThemeContext);

    const onThemeButtonClicked = () => {
        toggleTheme();
    }

    console.log(theme);

    return (
        /*<header className={props.className} id={props.id}>
                {props.children}
        </header>*/

        <header {...extra}>
            {children}

            <Button onClick={onThemeButtonClicked}>🌞🌛</Button>
        </header>
    );
}

export default Header;