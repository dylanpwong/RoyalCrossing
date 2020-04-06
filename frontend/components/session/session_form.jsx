import React from 'react'



class SessionForm extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <>
            <h1>{this.props.formType}</h1>
            </>
        )
    }
}

export default SessionForm