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
                <div className="profileTmp"></div> {/*Profile background Picture*/}
                <div> {/* profile stats container*/}
                    <SplashStat stories={this.props.stories}user={this.props.user}/>
                </div>
            </div>
            </>
        )
    }
}

export default UserShowSplash;