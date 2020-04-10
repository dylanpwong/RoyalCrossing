import React from 'react'
import MyFictionBlock from './myFiction_block';



class MyFictions extends React.Component{
    constructor(props){
        super(props)
        this.state={
            stories: []
        }
    }

    test(){
        this.props.getMyStories(this.props.currentId).then((res)=>{
          debugger
        },(error)=>{
            
        });
    }

    componentDidMount(){
        this.props.getMyStories(this.props.currentId).then((res)=>{
            //debugger
            this.setState({stories: Object.values(res.stories)})
        })
    }

    render(){
        //debugger
        //this.test.bind(this)();
        if(this.state.stories.length === 0) return(<> </>);

        const myStories = this.state.stories.map((ele,idx)=>{
            //debugger
            return <MyFictionBlock key ={ele.id} story={ele}/>
        })
        return(
            <>
                {myStories}
            </>
        )
    }
}
export default MyFictions;