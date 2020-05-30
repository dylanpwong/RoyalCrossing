import React from 'react';


class Follow_favBox extends React.Component{
    constructor(props){
        super(props);

        this.addFollow=this.addFollow.bind(this);
    }

    addFollow(){
        let data={
            storyId: this.props.story.id,
            userId: this.props.story.author.id,
        }
        this.props.addFollows(data);
        console.log("Followed!");
    }

    render(){
        return(
            <div className='folFavbox'>
                <div onClick={this.addFollow} className='FollowBox'>
                    Follow!
                <i className="fas fa-bookmark grey"></i>
                </div>
            </div>
        )
    }
}

export default Follow_favBox;