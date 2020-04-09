import React from 'react'
import { NavLink } from 'react-router-dom';


class UserSidebar extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
       
        return(
            <div className="sidebarBg">
                <div>
                    <NavLink to="/supa"><i className="fas fa-user-circle"></i> Overview</NavLink>
                </div>
                <div>
                    <NavLink to="/supa">Fictions</NavLink>
                </div>

                <div>
                    <NavLink to="/supa">Reviews</NavLink>
                </div>
                <div>
                    <NavLink to="/supa">Favorites</NavLink>
                </div>
            </div>
        );
    }
}

export default UserSidebar;