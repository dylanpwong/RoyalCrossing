import React from'react'
import { withRouter } from 'react-router-dom'


class MyFictionBlock extends React.Component{
    constructor(props){
        super(props)
        this.toStoryShow = this.toStoryShow.bind(this);
        this.toStoryDash =this.toStoryDash.bind(this);
        this.toNewChapter=this.toNewChapter.bind(this);
    }


    toStoryShow(){
        //debugger
        this.props.history.push(`/fiction/${this.props.story.id}`)
    }

    toStoryDash(){
        this.props.history.push(`/my/fiction/${this.props.story.id}`)
    }

    toNewChapter(){
        this.props.history.push(`/fiction/chapter/new/${this.props.story.id}`)
    }


    render(){
        // debugger
        return(
            <>
            <div className='fictionBlockContainer'>
                <div className="fictionBlock">
                    {/* <div className='defaultCover'></div> picture */}
                    <img className='defaultCover'src={this.props.story.photoUrl}></img>
                    <div className='SingleFictionHolder'>
                        <h3 className="fictionTitle">{this.props.story.title}</h3>

                        <div> {/* the favorites/follows/ratings comments view*/}
                            <div className="followersFavoritesAmount"> 
                                <div className='numberFollow'>{Object.values(this.props.story.followers).length}</div> {/*placeHolder*/}
                                <div className='FollowersStyle'>FOLLOWERS</div>
                            </div>
                        </div>

                        
                    <div className="fictionShowButtons">{/*links to show pages, and add chapter*/}
                        <ul>
                            <button onClick={this.toStoryShow}className="showButton pageButton">Page</button>
                            <button onClick={this.toStoryDash}className="showButton dashButton">DashBoard</button>
                            <button onClick={this.toNewChapter}className="showButton addChapterButton">Add Chapter</button>
                        </ul>
                    </div>

                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default withRouter(MyFictionBlock)