import React from 'react';


class DashShow extends React.Component{
    constructor(props){
        super(props)

        this.dashHeader=this.dashHeader.bind(this);
        this.dashBody=this.dashBody.bind(this);
        this.dashChapters=this.dashChapters.bind(this);
    }

    dashHeader(){
        return(
            <div className="dashStoryHeader">
                <div className="dashTitle">
                    {this.props.story.title}
                </div>

                <div className="pageButton">
                    page
                    </div>

            </div>
        )
    }

    dashBody(){
        return(
            <>
            <div className="dashBodyContainer">
                <div className='dashBody'> 
                    <div>
                        <img className="dashCover" src={`${this.props.story.photoUrl}`} alt="" />{/* Cover Art*/}
                    </div>
                    <div>
                        {this.props.story.synopsis}
                    </div>

                    <div className="dashBodyList">
                            <div>
                                Followers
                            </div>
                            <div>
                                Favorites
                            </div>
                        
                    </div>

                </div>

            </div>
            </>
            
        )
    }

    dashChapters(){
        return(
            <div className="chaptersContainer">
                <div className="latestChapters">
                    <i className="fas fa-file-alt"></i>
                    &nbsp;Latest Chapters
                </div>
            </div>
        )
    }

    render(){
        // debugger
        if(!this.props.story){
            return(
                <>
                </>
            )
        }else{
            return(
                <>
                {this.dashHeader()}
                {this.dashBody()}
                {/* {this.dashChapters()} */}
                </>
            )

        }
    }
}

export default DashShow;