import React from 'react'
import PersonalInfo from './personal_info'
import UserSidebar from './user_sidebar'






class UsersShow extends React.Component{
    constructor(props){
        super(props)

        this.state={
            render1: 'true'
        }
    }

    componentDidMount(){
       

    this.props.fetchUser(this.props.user.id).then((res)=>{
        this.props.fetchMyStories(this.props.user.id).then((res)=>{
            this.setState({render1: 'false'});

        })
    })
    
        // this.props.fetchUser(this.props.user.id).then((res)=>{
          
            
        //     this.setState({render1: 'false'});
        // });
        // debugger;
    }


    render(){
        if(this.state.render1 ==='true'){
            return(
                <>
                </>
            )
        }
        else{
            // debugger
            return(
                <>
                <section className="UsersShowSection">{/*the Entire use show*/}
            
                    <PersonalInfo stories={this.props.stories}user={this.props.user}/>
               
                </section>
                </>
            )
        }
       
    }
}


export default UsersShow