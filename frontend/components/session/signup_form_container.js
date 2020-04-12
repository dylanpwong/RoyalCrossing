import { signup, login } from "../../actions/session_actions"
import { connect } from "react-redux"
//import SessionForm from "./session_form"
import SessionFormSignup from "./session_form_signup"



const mapStateToProps=(state)=>{
    if(state.errors.session.length ==0){
        return({
            formType: 'Registration',
            errors: state.errors.session
        })
    }else{
        state.errors.session= [];
        return ({
            formType: 'Registration',
            errors: state.errors.session
        })
    }
}

const mapDispatchToProps = dispatch=>{
    return({
        processForm: (user)=>dispatch(signup(user)),
        loginDemoUser: (user)=>dispatch(login(user))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionFormSignup)