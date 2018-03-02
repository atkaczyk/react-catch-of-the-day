
import React from 'react';

//this is a stateless functional component
//since it has no state, when its called it just gets returned by a function
const Header = (props) => {
    return (
        <header className="top">
            <h1>Catch of the day yo</h1>
            <h3 className="tagline"><span>{props.tagline}</span></h3>
         </header>
    )
}
export default Header;
