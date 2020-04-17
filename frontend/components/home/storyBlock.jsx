import React from 'react'
import { NavLink } from 'react-router-dom';
import chapters_container from '../fictions/chapters/chapters_container';



class StoryBlock extends React.Component{
    constructor(props){
        super(props)
    }



    render(){
        // debugger
        const chapters = Object.values(this.props.story.chapters).map((ele)=>{
            return <NavLink className="RemoveTextDec chapterIndex" to={`/fiction/${this.props.story.id}/chapters/${ele.chapter_number}`} key={ele.id}> {ele.title} </NavLink>;
        })
        return(
            <div className="singleStoryBlock">
               
                <img className="imageForindex" src={this.props.story.photoUrl} alt=""/>
                
                <div className="indexstorieschapterscon ">
                    <NavLink className="RemoveTextDec titleindex"to={`/fiction/${this.props.story.id}`}>{this.props.story.title.toUpperCase()}</NavLink>
                    {chapters.slice(0,3)}
                </div>
            </div>
        );
    }
}

export default StoryBlock