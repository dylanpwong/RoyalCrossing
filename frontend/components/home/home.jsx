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
        //console.log("pressed");
        let show = !this.state.dropdownVisible;
        this.setState({dropdownVisible: show});
    }

    handleMyProfile(e){
        
    }


    render(){
        // const hoverItems = ["My Profile", "My Fictions", "Log Out"].map((ele,idx)=>{
        //     return <li className="userHover" key={idx}>{ele}</li>
        // });
       

        //debugger
        if(this.props.currentUser){
            const hoverItems = [];
            hoverItems.push(<li className="userLiContainer userHover"key={1}><NavLink className="userNav" to={`/profile/${this.props.currentUser.id}`}><div className="userDropEle"><i className="far fa-user userDropdownIcons"></i> <div className="userdropText">My Profile</div></div></NavLink></li>)
            hoverItems.push(<li className="userLiContainer userHover" key={2}><NavLink className="userNav" to="/my/fictions"><div className="userDropEle"><i className="fas fa-pencil-alt userDropdownIcons"></i> <div className="userdropText">My Fiction</div></div></NavLink></li>)
            hoverItems.push(<li className="userLiContainer userHover" key={3} onClick={this.handleLogout.bind(this)}> <div className="userDropEle"><i className="fas fa-key userDropdownIcons"></i> <div className="userdropText">Logout</div></div></li>)
            return(
                <>
                    <div onClick={this.handleClickMenu}className="userContainer">
                        <h1 >{this.props.currentUser.username} </h1>
                        {/* <i className="down_arrow"> ˬ</i> */}
                        <i className="fa fa-angle-down down_arrow2"></i>
                        <DropDownUser dropdownVisible={this.state.dropdownVisible} items={hoverItems}/>
                   </div>
                
                
               
                </>
            );
        }else{
            return(
                <>
                    <NavLink className='loginStyle RemoveTextDec' to={`/account/login`}><i className="fas fa-sign-in-alt"></i> Log in</NavLink> 
                </>
            )
            }       
        }
}

export default Home;