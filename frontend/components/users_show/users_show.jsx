import React from 'react'
import PersonalInfo from './personal_info'
import UserSidebar from './user_sidebar'






class UsersShow extends React.Component{
    constructor(props){
        super(props)

        this.state={
            render1: 'false'
        }
    }

    componentDidMount(){
        this.props.getUser(this.props.userId);
        this.setState({render1: 'true'});
        // debugger;
    }


    render(){
        if(this.state.render1 ==='false'){
            return(
                <>
                </>
            )
        }
        else{

            return(
                <>
                <section className="UsersShowSection">{/*the Entire use show*/}
            
                    <PersonalInfo user={this.props.user}/>
               
                </section>
                </>
            )
        }
       
    }
}


export default UsersShow