import React from 'react'
import { connect } from 'react-redux'
import DashEdit from './dashEdit'
import { getStory, fetchGenres, editStory } from '../../../actions/story_actions'


const mapStatetoProps=(state,ownProps)=>{
    return({
        storyId: ownProps.match.params.storyId,
        story: state.entities.stories[ownProps.match.params.storyId],
        genres: state.entities.genres
    })
}

const mapDispatchToProps = (dispatch)=>{
    return({
        fetchStory: (storyId)=>{dispatch(getStory(storyId))},
        getGenres: () => dispatch(fetchGenres()),
        editStory: (story)=>dispatch(editStory(story))
    })
}

export default connect(mapStatetoProps,mapDispatchToProps)(DashEdit);