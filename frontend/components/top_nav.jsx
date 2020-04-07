
import React from'react';

const TopNav =(props)=>{
    let children = props.children
    return(
        <nav className="userMenuNav">
            {children}
        </nav>
    );
}

export default TopNav;