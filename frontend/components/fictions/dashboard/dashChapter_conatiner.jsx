import { connect } from "react-redux"
import DashChapter from "./dashChapter"
import { getStory, deleteChapter, createChapter } from "../../../actions/story_actions"



const mapStateToProps=(state,ownProps)=>{
    return({
        story: state.entities.stories[ownProps.match.params.storyId],
        storyId: ownProps.match.params.storyId
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
        fetchStory: (storyId)=>dispatch(getStory(storyId)),
        deleteChapter: (chapterId) => dispatch(deleteChapter(chapterId)),
        newChapter: (chapter)=> dispatch(createChapter(chapter)),
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(DashChapter)
