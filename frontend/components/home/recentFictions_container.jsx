// import { logout } from "../../actions/session_actions"
import { connect } from "react-redux"
import { getStories } from "../../actions/story_actions"
import RecentFiction from "./recentFiction"
import Home from "./home"




const mapStateToProps = (state) => {
    //debugger
    return ({
        // currentUser: state.entities.users[state.session.id]
        stories: Object.values(state.entities.stories)
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchStories: ()=> dispatch(getStories())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentFiction);