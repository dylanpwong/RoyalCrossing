import React from 'react'
import PersonalInfo from './personal_info'
import UserSidebar from './user_sidebar'
import { Route } from 'react-router-dom'
import footer_container from '../footer/footer_container';






class UsersShow extends React.Component{
    constructor(props){
        super(props)

        this.state={
            render1: 'true'
        }
    }

    componentDidMount(){
       
// debugger;
    this.props.fetchUser(this.props.userId).then((res)=>{
        this.props.fetchMyStories(this.props.userId).then((res)=>{
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
                    {/* <Route path='/' component={footer_container} />  */}
                </>
            )
        }
       
    }
}


export default UsersShow