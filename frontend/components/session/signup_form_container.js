import { signup } from "../../actions/session_actions"
import { connect } from "react-redux"
//import SessionForm from "./session_form"
import SessionFormSignup from "./session_form_signup"



const mapStateToProps=(state)=>{
    return({
        formType: 'signup',
        errors: state.errors.session
    })
}

const mapDispatchToProps = dispatch=>{
    return({
        processForm: (user)=>dispatch(signup(user))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionFormSignup)