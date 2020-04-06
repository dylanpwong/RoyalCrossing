import React from 'react';
import {NavLink} from 'react-router-dom'

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(){

    }


    render(){
        return(
            <>
                <NavLink to={`/account/login`}><button>Login!</button></NavLink> 
                
            </>
        )
    }
}

export default Home;