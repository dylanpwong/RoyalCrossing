import { connect } from "react-redux"
import UsersShow from "./users_show"
import { getUser } from "../../actions/user_actions"
import { getMyStories } from "../../actions/story_actions"





const mapStateToProps=(state,ownProps)=>{
   // debugger
    return({
        userId: ownProps.match.params.userId,
        user: state.entities.users[ownProps.match.params.userId],
        stories: state.entities.stories,
    })
}

const mapDispatchToProps=(dispatch)=>{

    return({
        fetchUser: (userId)=>{ return dispatch(getUser(userId))},
        fetchMyStories: (userId)=>(dispatch(getMyStories(userId)))
    })
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersShow)