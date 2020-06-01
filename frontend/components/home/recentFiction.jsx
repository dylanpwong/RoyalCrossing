import React from 'react'
import StoryBlock from './storyBlock';

class RecentFiction extends React.Component {

   constructor(props){
       super(props);
   }

    componentDidMount(){
        this.props.fetchStories();
    }

    
    render(){

        if(this.props.stories.length===0){
            return <> </>
        }
        // debugger
        const StoryBlocks = this.props.stories.map((ele)=>{
            return <StoryBlock key={ele.id} story={ele}/>
        })
        let length = StoryBlocks.length>5? StoryBlocks.length - 5 : 0;
        return(
            <div className="storiesIndexWrapper">
                <div className="RecentNovels"> <i className="fas fa-clock"></i>&nbsp;LATEST STORIES</div>
                {StoryBlocks.reverse().slice(length)}
            </div>
        )
    }
}


export default RecentFiction;