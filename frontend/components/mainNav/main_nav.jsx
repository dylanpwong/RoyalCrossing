

import React from 'react'
import NavMenu from './nav_menu';

class MainNav extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="MainNavbar"> {/** the Whole block nav bar */}
                <NavMenu/>
            </div>
        );
    }
}

export default MainNav