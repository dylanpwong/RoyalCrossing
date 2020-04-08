import React from 'react';
import SplashStat from './user_splash_stat';



class UserShowSplash extends React.Component{
    //this is the top image of the profile page

    constructor(props){
        super(props);
    }



    render(){
        return(
            <>
            <div className="userSplashContainer">
                <div className="profileTmp"></div> {/*Profile background*/}
                <div> {/* profile stats container*/}
                    <SplashStat user={this.props.user}/>
                </div>
            </div>
            </>
        )
    }
}

export default UserShowSplash;