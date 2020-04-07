import React from 'react';
import {NavLink} from 'react-router-dom'
import DropDownUser from './dropdownUser';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dropdownVisible: false
        }

        this.handleClickMenu=this.handleClickMenu.bind(this)
    }

    handleLogout(e){
        this.props.logout();
    }
    handleClickMenu(e){
        console.log("pressed");
        let show = !this.state.dropdownVisible;
        this.setState({dropdownVisible: show});
    }

    handleMyProfile(e){
        
    }


    render(){
        const hoverItems = ["My Profile", "My Fictions", "Log Out"].map((ele,idx)=>{
            return <li className="userHover" key={idx}>{ele}</li>
        });
        hoverItems.push(<li  className="userHover"key={hoverItems.length} onClick={this.handleLogout.bind(this)}>Logout</li>)

        //debugger
        if(this.props.currentUser){
            return(
                <>
                    <div onClick={this.handleClickMenu}className="userContainer">
                        <h1 >{this.props.currentUser.username} </h1>
                        <i className="down_arrow"> ˬ</i>
                        <DropDownUser dropdownVisible={this.state.dropdownVisible} items={hoverItems}/>
                   </div>
                
                
               
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