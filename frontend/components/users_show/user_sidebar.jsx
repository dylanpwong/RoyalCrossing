import React from 'react'
import { NavLink } from 'react-router-dom';


class UserSidebar extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
       
        return(
            <div className="sidebarBg">
                <div className = 'userlinks'>
                    <NavLink className="RemoveTextDec sidebarLinksStyle" to="/supa"><i className="fas fa-user-circle"></i> Overview</NavLink>
                </div>
                <div className='userlinks'>
                    <NavLink className="RemoveTextDec sidebarLinksStyle" to="/my/fictions"><i className="fas fa-book"></i> Fictions</NavLink>
                </div>

                <div className='userlinks'>
                    <NavLink className="RemoveTextDec sidebarLinksStyle" to="/my/reviews"><i className="far fa-eye"></i> Reviews</NavLink>
                </div>
                <div className='userlinks'>
                    <NavLink className="RemoveTextDec sidebarLinksStyle" to="/my/favorties"><i className="fas fa-star"></i> Favorites</NavLink>
                </div>
            </div>
        );
    }
}

export default UserSidebar;