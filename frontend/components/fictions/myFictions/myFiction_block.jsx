import React from'react'
import { withRouter } from 'react-router-dom'


class MyFictionBlock extends React.Component{
    constructor(props){
        super(props)
        this.toStoryShow = this.toStoryShow.bind(this)
    }


    toStoryShow(){
        //debugger
        this.props.history.push(`/fiction/${this.props.story.id}`)
    }


    render(){
        return(
            <>
            <div className='fictionBlockContainer'>
                <div className="fictionBlock">
                    <div className='defaultCover'></div> {/*picture*/}
                    <div className='SingleFictionHolder'>
                        <h3 className="fictionTitle">{this.props.story.title}</h3>

                        <div> {/* the favorites/follows/ratings comments view*/}
                            <div className="followersFavoritesAmount"> 
                                <div>10</div> {/*placeHolder*/}
                                <div>favorites</div>
                            </div>
                        </div>

                        
                    <div className="fictionShowButtons">{/*links to show pages, and add chapter*/}
                        <ul>
                            <button onClick={this.toStoryShow}className="showButton pageButton">Page</button>
                            <button className="showButton dashButton">DashBoard</button>
                            <button className="showButton addChapterButton">Add Chapter</button>
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