import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';


class NavElement extends React.Component{
    constructor(props){
        super(props);
        this.icon=this.icon.bind(this);
    }

    clickAction(){
        switch(this.props.content){
            case 'Write':
                if(this.props.id){
                    this.props.history.push('/my/fictions');
                }else{
                    this.props.history.push('/account/login')
                }
                break;
            default:
                
        }
        
    }
    icon(){
        switch(this.props.content){
            case 'Read':
                return(
                    <i className="fas fa-book"></i>
                )
            case 'Write':
                return(
                    <i className="fas fa-pen"></i>
                )
            default:
        }
    }

    render(){
        //debugger
        return(
            <>
            <li onClick={this.clickAction.bind(this)}className="RemoveBullets navEle">
                {this.icon()}
                &nbsp;
                {this.props.content}
                </li>
            </>
        )
    }

    
}
export default withRouter(NavElement);