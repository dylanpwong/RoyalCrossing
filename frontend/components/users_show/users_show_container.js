import { connect } from "react-redux"
import UsersShow from "./users_show"





const mapStateToProps=(state,ownProps)=>{
   // debugger
    return({
        user: state.entities.users[ownProps.match.params.userId]
    })
}

const mapDispatchToProps=(dispatch)=>{

    return({

    })
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersShow)