import { connect } from "react-redux"
import { getStory, getAnyStory, editChapter } from "../../../actions/story_actions"
import ChapterEdit from "./chapter_edit";

const mapStateToProps=(state,ownProps)=>{
    //storyId is really chapter iD

    let ChapId =  ownProps.match.params.chapterNumber;
    let storyId=  ownProps.match.params.storyId;
    // debugger;
    return({
        chapterNumber: ChapId,
        storyId: storyId,
        story: state.entities.stories[storyId],
        chapter: state.entities.stories[storyId].chapters[ChapId],
    })
}

const mapDispatchToProps=(dispatch)=>{
    return ({
        fetchStory: (storyId) => dispatch(getAnyStory(storyId)),
        editChapter: (chapter)=>dispatch(editChapter(chapter)),
        // fetchChapter: (chapterId)=>dispatch(),
    })
}


export default connect(mapStateToProps,mapDispatchToProps)(ChapterEdit);