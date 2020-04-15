import { connect } from "react-redux"
import { getStory, getAnyStory } from "../../../actions/story_actions"
import ChaptersShow from "./chapters_show"


const mapStateToProps = (state,ownProps)=>{
    let chapsObj;
    // debugger
    if (Object.values(state.entities.stories).length == 0){
    chapsObj={
        storyId: ownProps.match.params.storyId,
        stories: state.entities.stories,
        story: state.entities.stories[ownProps.match.params.storyId],
    };
    }else{
     chapsObj={
        storyId: ownProps.match.params.storyId,
        stories: state.entities.stories,
        story: state.entities.stories[ownProps.match.params.storyId],
        chapter: state.entities.stories[ownProps.match.params.storyId].chapters[ownProps.match.params.chapterId]
    };
    }
    return (chapsObj);
}

const mapDispatchToProps = (dispatch)=>{
    return({
        fetchStory: (storyId) => dispatch(getAnyStory(storyId))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(ChaptersShow)