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
        return(
            <div className="storiesIndexWrapper">
                <div className="RecentNovels"> <i className="fas fa-clock"></i>&nbsp;LATEST STORIES</div>
                {StoryBlocks}
            </div>
        )
    }
}


export default RecentFiction;