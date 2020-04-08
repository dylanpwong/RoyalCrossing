

import React from 'react'
import Table from './table';
import UserShowSplash from './user_show_splash';

class PersonalInfo extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <>
                <div className="pseronal information">
                    <UserShowSplash user={this.props.user}/>
                    <h1> Personal Infomation</h1>
                    <Table/>
                </div>
            </>
        )
    }
}

export default PersonalInfo;