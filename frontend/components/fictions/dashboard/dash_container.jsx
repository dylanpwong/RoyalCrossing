import { connect } from "react-redux"
import dash from "./dash"
import { getStory, getAnyStory, deleteChapter } from "../../../actions/story_actions"



const mapStateToProps = (state,ownProps)=>{
    return({
         storyId: ownProps.match.params.storyId,
        stories: state.entities.stories,
        story: state.entities.stories[ownProps.match.params.storyId]
    })
}

const mapDispatchToProps=(dispatch)=>{
    return ({
        fetchStory: (storyId) => dispatch(getAnyStory(storyId)),
        deleteChapter: (chapterId)=> dispatch(deleteChapter(chapterId))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(dash);