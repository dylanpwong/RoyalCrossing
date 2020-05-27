import React from 'react';
import { withRouter } from 'react-router-dom';


class DashNav extends React.Component{
    constructor(props){
        super(props);
        this.toEditStory=this.toEditStory.bind(this);
        this.toDash=this.toDash.bind(this);
        this.toChapters=this.toChapters.bind(this);
    }

    toDash() {
        this.props.history.push(`/my/fiction/${this.props.story.id}`);
    }
    toEditStory() {
        this.props.history.push(`/my/fiction/${this.props.story.id}/edit`);
    }
    toChapters() {
        this.props.history.push(`/my/fiction/${$this.props.storyId}/chapters`);
    }

    dashNav() {
        return (
            <div className="dashNavContainer">
                <div className="dashNavBlock" onClick={this.toDash}>
                    <i className="fas fa-tachometer-alt"></i>
                    Dashboard
                </div>
                <div onClick={this.toEditStory} className="dashNavBlock">
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

    followersAndFavorites() {
        return (

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

    render(){
        return(
            <div>
                {this.dashNav.call(this)}
                {/* {this.followersAndFavorites.call(this)} */}
            </div>
        )
    }
}

export default withRouter(DashNav);
// withRouter