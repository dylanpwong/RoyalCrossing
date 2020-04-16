import { connect } from "react-redux"
import { createAStory, fetchGenres } from "../../../../actions/story_actions"
import CreateFiction from "./createFiction"


const mapStateToProps = (state)=>{
    return({
        author: state.entities.users[state.session.id],
        genres: state.entities.genres
    })
}

const mapDispatchToProps=(dispatch)=>{
    return({
    createAStory: (data)=> dispatch(createAStory(data)),
    getGenres: ()=> dispatch(fetchGenres())
    })
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateFiction)
