import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';


class NavElement extends React.Component{
    constructor(props){
        super(props);
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

    render(){
        //debugger
        return(
            <>
            <li onClick={this.clickAction.bind(this)}className="RemoveBullets navEle">
                
                {this.props.content}
                </li>
            </>
        )
    }

    
}
export default withRouter(NavElement);