import { connect } from "react-redux"
import dash from "./dash"
import { getStory, getAnyStory } from "../../../actions/story_actions"



const mapStateToProps = (state,ownProps)=>{
    return({
         storyId: ownProps.match.params.storyId,
        stories: state.entities.stories,
        story: state.entities.stories[ownProps.match.params.storyId]
    })
}

const mapDispatchToProps=(dispatch)=>{
    return ({
        fetchStory: (storyId) => dispatch(getAnyStory(storyId))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(dash);