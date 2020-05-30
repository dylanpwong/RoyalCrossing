import { connect } from "react-redux"
import UsersShow from "./users_show"
import { getUser } from "../../actions/user_actions"





const mapStateToProps=(state,ownProps)=>{
   // debugger
    return({
        userId: ownProps.match.params.userId,
        user: state.entities.users[ownProps.match.params.userId]
    })
}

const mapDispatchToProps=(dispatch)=>{

    return({
        getUser: (userId)=>{dispatch(getUser(userId))}
    })
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersShow)