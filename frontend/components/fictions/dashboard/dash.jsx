import React from 'react'
import DashShow from './dashStory';
import TableOfContents from '../show_fictions/TableOfContents';


class dash extends React.Component{

    constructor(props){
        super(props);

       

        this.dashNav=this.dashNav.bind(this);
        this.followersAndFavorites=this.followersAndFavorites.bind(this);
        this.dashChapters=this.dashChapters.bind(this);
    }

    componentDidMount(){
        this.props.fetchStory(this.props.storyId);
    }

    dashNav(){
        return(
            <div className="dashNavContainer">
                <div className="dashNavBlock">
                    <i className="fas fa-tachometer-alt"></i>
                    Dashboard
                </div>
                <div className="dashNavBlock">
                    <i className="fas fa-edit"></i>
                    Edit
                </div>
                <div className="dashNavBlock">
                    <i className="fas fa-file-alt"></i>
                    Chapters
                </div>
            </div>
        )
    }

    followersAndFavorites(){
        return(

        <div className="secondNavContainer">
            <div className="secondNavHeader">
                FOLLOWERS
                <div className="secondNavContentContainer">
                    <div className="iconContainer">
                    <i className="fas fa-users"></i>

                    </div>
                    &nbsp;USERS
                    {/*get the followers*/}
                </div>
            </div>
             <div className="secondNavHeader">
                FAVORITES
                <div className="secondNavContentContainer">
                    <div className="iconContainer">
                    <i className="fas fa-star"></i>

                    </div>
                    &nbsp;USERS
                    {/*get the followers*/}
                </div>
            </div>
        </div>
        );
    }

    dashChapters() {
        if(!this.props.story){
            return(
                <>
                </>
            )
        }else{

            return (
                <div className="chaptersContainer">
                    <div className="latestChapters">
                        <i className="fas fa-file-alt"></i>
                        &nbsp;Latest Chapters
                    </div>
                    <TableOfContents dash="true" chapters={this.props.story.chapters} />
                </div>
            )
        }
    }

    render(){
        // debugger
        return(
            <>
            <div className="singleFictionShow paddingIn">
                {this.dashNav()}
                {this.followersAndFavorites()}
                <div className="dashStoryContainer">
                    <DashShow  story={this.props.story}/>
                </div>
                {this.dashChapters()}
            </div>
            </>
        )
    }
}

export default dash;