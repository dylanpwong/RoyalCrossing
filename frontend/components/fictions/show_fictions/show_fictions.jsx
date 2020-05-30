
import React from 'react';
import TableOfContents from './TableOfContents';
import { getStories } from '../../../actions/story_actions';
import ShowAuthorBox from './show_author_box';
import Follow_favBox from './follow_favBox';


class ShowFiction extends React.Component{
    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.fetchStory(this.props.storyId)
    }


    render(){
        //debugger
        if(Object.values(this.props.stories).length == 0 ) return(<></>)
    //    debugger
       const genresList = this.props.story.genres.map((ele)=>{
           return <li className="RemoveListStyle genreItem"key={ele.id}>{ele.name}</li>;
       })
       const genres = (genresList.length>4)? genresList.slice(0,5) : genresList;
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
                                <ul className="genreList">
                                    {genres}
                                </ul>
                                <div className="SynopsisBlock">
                                    {this.props.story.synopsis}
                                </div>
                             </div>

                        </div> 
                        <div className="TableOfContentsContainer">

                            <TableOfContents chapters = {this.props.story.chapters}/>
                        </div>
                    </div>

                    <div className='rightSideFictionBox'>
                        <Follow_favBox story={this.props.story} addFollows={this.props.addFollows}/>
                        <div className='AuthorBox'> {/*right Side */}
                            <ShowAuthorBox author={this.props.story.author}/>
                        </div>

                    </div>

                    
                </div>
            </div>
        )
    }
}

export default ShowFiction