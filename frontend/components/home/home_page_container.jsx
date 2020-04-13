import { connect } from "react-redux"
import HomePage from "./home_page"
import { login } from "../../actions/session_actions"


const mapStateToProps=(state)=>{
    return({
        currentUserId: state.session.id
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        demoLogin: (user)=> dispatch(login(user))
    })

}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)