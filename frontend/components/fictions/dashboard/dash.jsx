import React from 'react'
import DashShow from './dashStory';


class dash extends React.Component{

    constructor(props){
        super(props);

       

        this.dashNav=this.dashNav.bind(this);
        this.followersAndFavorites=this.followersAndFavorites.bind(this);
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
            </div>
            </>
        )
    }
}

export default dash;