import React from 'react'
import MyFictionBlock from './myFiction_block';



class MyFictions extends React.Component{
    constructor(props){
        super(props)
        this.state={
            stories: []
        }

        this.newStoryHandler=this.newStoryHandler.bind(this);
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

    newStoryHandler(){
        this.props.history.push("/fictions/submission")
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
                <div className="fictionsShowContainer">{/*outer Show fiction page */}

                    <div className="fictionsShowbar">{/* sidebar stuffs*/}

                    </div>

                    <div className="fictionsBox">{/* this will hold fictions*/}
                        <div>
                            <div className='FictionsHeader'>
                                <div className='iconWordConatainer'> <i className="iconPlacer"className="fas fa-pen"></i> <h3 className ='fictionWord'> Fictions</h3> </div>
                                <button onClick={this.newStoryHandler}className="newStoryButton"> <i className="fas fa-plus"></i>{' New Story'}</button>
                            </div>
                            {myStories}
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
export default MyFictions;