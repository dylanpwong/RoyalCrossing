import { logout } from "../../actions/session_actions"
import { connect } from "react-redux"
import Home from "./home"
import { getUser } from "../../actions/user_actions"




const mapStateToProps=(state)=>{
    //debugger
    return({
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id]
    })
}

const mapDispatchToProps=dispatch=>{
    return {
        logout: ()=> dispatch(logout()),
        fetchUser: (userId)=> dispatch(getUser(userId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);