import { getStories, getStory,getMyStories } from "../../../actions/story_actions"
import { connect } from "react-redux"
import MyFictions from "./myFictions"



const mapStateToProps=(state)=>{

    return({
        story: state.story,
        currentId: state.session.id
    })
}

const dispatchToProps=(dispatch)=>{
    return({
        getMyStories: (userId)=>dispatch(getMyStories(userId)),
        //getStory: (storyId)=>dispatch(getStory(storyId))
    })
}


export default connect(mapStateToProps,dispatchToProps)(MyFictions)