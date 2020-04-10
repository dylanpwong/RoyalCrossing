import React from 'react'



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
        return(
            <>
                <h1>{this.state.stories[0].title}</h1>
            </>
        )
    }
}
export default MyFictions;