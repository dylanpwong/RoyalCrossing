import { connect } from "react-redux"
import ChapterNew from "./chapter_new"
import { createChapter } from '../../../actions/story_actions';

const mapStateToProps=(state,ownProps)=>{
    return({
        storyId: ownProps.match.params.storyId,
    })

}

const mapDispatchToProps=(dispatch)=>{
    return({
        createChapter: (data) => dispatch(createChapter(data))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(ChapterNew);