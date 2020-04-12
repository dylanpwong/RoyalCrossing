import { connect } from "react-redux";
import React from 'react';
import NavElement from './nav_element'

class NavEleContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <NavElement id={this.props.currentUserId}content = {this.props.content}/>
        )
    }
}

const mapStateToProps=(state)=>{
    return({
        currentUserId: state.session.id
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({

    })
}


export default connect(mapStateToProps,mapDispatchToProps)(NavEleContainer)