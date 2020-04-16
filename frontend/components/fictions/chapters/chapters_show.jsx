import React from 'react'
import { withRouter } from 'react-router-dom';


class ChaptersShow extends React.Component{
    constructor(props){
        super(props)
        this.toFictionPage = this.toFictionPage.bind(this)
    }


    componentDidMount() {
        this.props.fetchStory(this.props.storyId)
    }

    preNote(){
        // debugger
        return(
            <div className="preNoteContainer">
                <div className="ANoteCon"><i className="fas fa-sticky-note"></i>{"  "}A NOTE FROM {this.props.story.author.username.toUpperCase()}</div>{/** title */}
                <div className='preNoteContent'> 
                    {this.props.chapter.pre_note}
                </div>
            </div>
        );
        }
    postNote(){
        return(
            <div className="postNoteContainer">
                <div className="ANoteCon"><i className="fas fa-sticky-note"></i>{"  "}A NOTE FROM {this.props.story.author.username.toUpperCase()}</div>{/** title */}
                <div className='preNoteContent'>
                    {this.props.chapter.post_note}
                </div>
            </div>
        );
    }

    toFictionPage(){
        // debugger
        this.props.history.push(`/fiction/${this.props.story.id}`)
    }
    render(){
        if (Object.values(this.props.stories).length == 0) return (<></>)
        // debugger
        return(
            <>
                <div className="singleFictionShow">
                    <div className='fictionHeader'> {/**fic header */}
                        <div className="HeaderBgForChapter">
                            <img className="coverForChapter" src={`${this.props.story.photoUrl}`} alt="" />{/* Cover Art*/}
                            <div className='showTitleBlockForChapter'>
                                <div className="showTitleForChapterStory">{this.props.story.title} by {this.props.story.author.username}</div>
                                <div className="showTitleForChapterTitle">{this.props.chapter.title}</div> {/** title */}
                                {/* <div className='byAuthor'>by{` ${this.props.story.author.username}`}</div> */}
                            </div>
                            <button onClick={this.toFictionPage} className="fictionButton"><i className="fas fa-book"></i> Fiction Page</button>
                        </div>
                    </div>

                    <div className="chapterContentContainer">
                        <div className="NextChaptersContainer">{/** */}
                            <button className="prevNextButtonStyle"><i className="fas fa-less-than"></i><i className="fas fa-less-than"></i> Previous Chapter</button>
                            <button className="prevNextButtonStyle">Next Chapter<i className="fas fa-greater-than"></i><i className="fas fa-greater-than"></i> </button>
                        </div>

                        {this.preNote.bind(this)()}

                        <div className="chapterContent">{/* content**/}
                            {this.props.chapter.content}
                        </div>


                        {this.postNote.bind(this)()}

                        <div className="NextChaptersContainerBottom">{/** */}
                            <button className="prevNextButtonStyle2"> Previous Chapter</button>
                            <button onClick={this.toFictionPage}className="fictionIndexButton2">Fiction Index</button>
                            <button className="prevNextButtonStyle2">Next Chapter</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ChaptersShow