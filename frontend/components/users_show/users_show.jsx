import React from 'react'
import PersonalInfo from './personal_info'
import UserSidebar from './user_sidebar'






class UsersShow extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
       // debugger
        return(
            <>
            <section className="UsersShowSection">{/*the Entire use show*/}
        
                <PersonalInfo user={this.props.user}/>
           
            </section>
            </>
        )
    }
}


export default UsersShow