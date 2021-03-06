

import React from 'react'
import Table from './table';
import UserShowSplash from './user_show_splash';
import UserSidebar from './user_sidebar';

class PersonalInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
       // debugger
        return(
            <>
                <div className="pseronal information">
                    <UserShowSplash stories={this.props.stories}user={this.props.user}/>
                    <div className="table-sidebarContainer">
                        <UserSidebar/>
                        <Table user={this.props.user}/>
                    </div>
                    {/* <img src={`${this.props.user.photoUrl}`}alt=""/> */}
                </div>
            </>
        )
    }
}

export default PersonalInfo;