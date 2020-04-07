import React from 'react';
import {NavLink} from 'react-router-dom'

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    handleLogout(e){
        this.props.logout();
    }
    handleClickMenu(e){

    }


    render(){
        const hoverItems = ["My Profile", "My Fictions", "Log Out"].map((ele,idx)=>{
            return <li key={idx}>{ele}</li>
        });
        
        //debugger
        if(this.props.currentUser){
            return(
                <>
                    <div className="userContainer">
                        <h1 >{this.props.currentUser.username} </h1>
                        <i className="down_arrow"> ˬ</i>
                   </div>
                   <ul className="dropdown">
                       {hoverItems}
                   </ul>
                
                <button onClick={this.handleLogout.bind(this)}>Logout</button>
                </>
            );
        }else{
            return(
                <>
                    <NavLink to={`/account/login`}><button>Login!</button></NavLink> 
                </>
            )
            }       
        }
}

export default Home;