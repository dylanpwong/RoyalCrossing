import { connect } from "react-redux"
import ShowFiction from "./show_fictions"
import { getStory, getAnyStory } from "../../../actions/story_actions"
import { addFollow, getUser, removeFollow } from "../../../actions/user_actions"



const mapStateToProps = (state,ownProps)=>{
//    debugger
    return({
        currentId: state.session.id,
        user: state.entities.users[state.session.id],
        storyId: ownProps.match.params.storyId,
        stories: state.entities.stories,
        story: state.entities.stories[ownProps.match.params.storyId]
    })
}

const mapDispatchToProps = (dispatch)=>{
    return({
        fetchStory: (storyId)=> dispatch(getAnyStory(storyId)),
        addFollows: (data)=>dispatch(addFollow(data)),
        getUser: (data)=>dispatch(getUser(data)),
        removeFollow: (data) =>dispatch(removeFollow(data))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowFiction)

