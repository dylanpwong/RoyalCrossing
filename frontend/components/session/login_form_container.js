import { login } from "../../actions/session_actions"
import { connect } from "react-redux"
import SessionForm from "./session_form"


const mapStateToProps=(state)=>{
    return({
        erros: state.errors.session,
        formType: 'login'
    })
}

const mapDispatchToProps=dispatch=>{
    return({
        processForm: user=> dispatch(login(user))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)