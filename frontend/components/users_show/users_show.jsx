import React from 'react'
import PersonalInfo from './personal_info'






class UsersShow extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
       // debugger
        return(
            <>
            <section className="UsersShowSection">
            <PersonalInfo user={this.props.user}/>
            </section>
            </>
        )
    }
}


export default UsersShow