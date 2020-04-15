import React from 'react'


class ChaptersShow extends React.Component{
    constructor(props){
        super(props)
    }


    componentDidMount() {
        this.props.fetchStory(this.props.storyId)
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
                            <button className="fictionButton"><i className="fas fa-book"></i> Fiction Page</button>
                        </div>
                    </div>

                    <div className="chapterContentContainer">
                        <div className="NextChaptersContainer">{/** */}
                            <button className="prevNextButtonStyle"><i className="fas fa-less-than"></i><i className="fas fa-less-than"></i> Previous Chapter</button>
                            <button className="prevNextButtonStyle"><i className="fas fa-greater-than"></i><i className="fas fa-greater-than"></i> Next Chapter</button>
                        </div>

                        <div className="chapterContent">{/* content**/}
                            {this.props.chapter.content}
                        </div>


                        <div className="NextChaptersContainer">{/** */}
                            <button className="prevNextButtonStyle"><i className="fas fa-less-than"></i><i className="fas fa-less-than"></i> Previous Chapter</button>
                            <button className="prevNextButtonStyle"><i className="fas fa-greater-than"></i><i className="fas fa-greater-than"></i> Next Chapter</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ChaptersShow