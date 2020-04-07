import { login, demoLogin } from "../../actions/session_actions"
import { connect } from "react-redux"
import SessionForm from "./session_form"


const mapStateToProps=(state)=>{
    //debugger
    return({
        errors: state.errors.session,
        formType: 'login'
    })
}

const mapDispatchToProps=dispatch=>{
    return({
        processForm: user=> dispatch(login(user)),
        demoLogin: ()=>dispatch(demoLogin())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)