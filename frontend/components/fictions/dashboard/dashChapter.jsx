import React from 'react'
import DashNav from './dashNav'
import TableOfContents from '../show_fictions/TableOfContents';



class DashChapter extends React.Component{
    constructor(props){
        super(props)
        this.dashChapters=this.dashChapters.bind(this);
        this.createChapter=this.createChapter.bind(this);
    }

    componentDidMount(){
        this.props.fetchStory(this.props.storyId)
    }

    createChapter(){
        this.props.history.push(`/fiction/chapter/new/${this.props.storyId}`)
    }
    dashChapters() {
        if (!this.props.story) {
            return (
                <>
                </>
            )
        } else {

            return (
                <div className="chaptersContainer">
                    <div className="latestChapters chaptersSpacer">
                        <div>
                            <i className="fas fa-file-alt"></i>
                            &nbsp;Chapters
                        </div>
                        <div onClick={this.createChapter}className='newChapterContainer'>
                            <i className="fas fa-plus"></i>
                             New Chapter
                        </div>
                    </div>
                    
                    <TableOfContents dash="true" deleteChapter={this.props.deleteChapter} chapters={this.props.story.chapters} />
                </div>
            )
        }
    }
    render(){
        if(!this.props.story){
            return(
                <>
                </>
            )
        }else{
            // debugger
            return(
                <>
                    <div className="singleFictionShow paddingIn">
                        <DashNav story={this.props.story}/>
                        {this.dashChapters()}
                        </div>
                </>
            )
        }
    }

}

export default DashChapter;