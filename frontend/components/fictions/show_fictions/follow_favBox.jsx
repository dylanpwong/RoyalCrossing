import React from 'react';


class Follow_favBox extends React.Component{
    constructor(props){
        super(props);

        this.addFollow=this.addFollow.bind(this);
        this.followButton=this.followButton.bind(this);
        this.removeFollow=this.removeFollow.bind(this);
        this.state={
            followed: (props.user.follows && props.user.follows[props.story.id]) ? 'true' : 'false'
        }
    }

    addFollow(){
        let data={
            storyId: this.props.story.id,
            userId: this.props.currentId
        }
        // debugger;
        if(!data.userId){
            this.props.history.push('/account/login');
        }else{
            this.props.addFollows(data);
            // window.location.reload();
            // console.log("Followed!");
            this.setState({followed: 'true'})
        }
    }
    removeFollow(){
        let follow = this.props.user.follows[this.props.story.id].followId;
        let data={
            followId: follow,
            userId: this.props.user.id
        }
        this.props.removeFollow(data);
        this.setState({followed: 'false'})
    }

    followButton(){
        // debugger
        if(this.state.followed === 'true'){
            return(
                <div onClick={this.removeFollow} className='FollowBox followed'>
                    Unfollow!
                    <i className="fas fa-bookmark black"></i>
                </div>

            )
        }else{
            return(
            <div onClick={this.addFollow} className='FollowBox'>
                Follow!
                    <i className="fas fa-bookmark grey"></i>
            </div>

            )
        }
    }

    render(){
        return(
            <div className='folFavbox'>
                {this.followButton()}
            </div>
        )
    }
}

export default Follow_favBox;