



import React from 'react';

class Carousel extends React.Component{
    constructor(props){
        super(props)

        this.demoLogin = this.demoLogin.bind(this);
    }


    demoLogin(){
        const user ={
            email: "demo@gmail.com",
            password: "123456"
        }
        this.props.demoLogin(user);
    }

    // demoUserLogin() {
    //     const user = {
    //         email: "demo@gmail.com",
    //         password: "123456"
    //     }
    //     this.props.loginDemoUser(user).then((res) => {
    //         // debugger
    //         this.props.history.push("/");
    //     })
    // }

    loggoutContent(loggedin){
  
        if(!loggedin){
        return(
            <div className="shadedBoxContent">
            <div className='enjoy'>Welcome to Royal Crossing</div>
                <div className="contentForShaded"> Try Our Demo Login!</div>
            <button onClick={this.demoLogin}className="HomePageDemo"> Demo Login</button>
            </div>
        );
        }else{
            return(
                <>
                <div className="shadedBoxContent">
                    <div className='enjoy'>Welcome to Royal Crossing</div>
                    <div className="contentForShaded"> Read A Story!</div>
                </div>
                </>
            )
        }
    }


    render(){
        //debugger
        return(
            <div className="InsidecarouselContainer">
                <div className="carouselImage1"> {/**image */}
                    <div className="boxContentCon">
                        {this.loggoutContent(this.props.currentUserId)}
                    </div>

                    <div className="BoxCon">
                        <div className="carouselLightlyShadedBox">{/**lightly shadded box */}
                            </div> 

                        </div>
                    {/* <button className='transistionButton'>Transistion</button> */}
                </div>
            </div>
        )
    }
}

export default Carousel;