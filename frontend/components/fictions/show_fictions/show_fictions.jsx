
import React from 'react';
import TableOfContents from './TableOfContents';
import { getStories } from '../../../actions/story_actions';


class ShowFiction extends React.Component{
    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.fetchStory(this.props.storyId)
    }


    render(){
        if(Object.values(this.props.stories).length == 0 ) return(<></>)
    //    debugger
       const genres = this.props.story.genres.map((ele)=>{
           return <li key={ele.id}>{ele.name}</li>;
       })
        return(
            <div className='singleFictionShow'>
                <div className='fictionHeader'> {/**fic header */}
                    <div className="HeaderBg">
                        <img className="cover"src={`${this.props.story.photoUrl}`} alt=""/>{/* Cover Art*/}
                        <div className='showTitleBlock'>
                             <div className="showTitle">{this.props.story.title}</div> {/** title */}
                             <div className='byAuthor'>by{` ${this.props.story.author.username}`}</div>
                        </div>
                    </div>
                </div>
                <div className="showBelowHeader">{/** below header */}
                    <div className="showLeftSide">{/**left side */}
                        <div className="showSynposisContainer">
                            <div className="synposisContentContainer">

                            </div>
                            <div className="genreList">
                                {genres}
                            </div>
                        </div> {/* fic synopsis*/}
                        <TableOfContents/>
                    </div>
                </div>
                <div> {/**right Side */}

                </div>
            </div>
        )
    }
}

export default ShowFiction