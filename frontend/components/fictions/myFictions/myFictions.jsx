import React from 'react'
import MyFictionBlock from './myFiction_block';
import FictionsShowbar from './fictionsShowbar';
import { Route } from 'react-router-dom';
import footer_container from '../../footer/footer_container';

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
            // debugger
            this.setState({stories: Object.values(res.stories)})
        })
        // let myFicHeight=document.getElementById("myFictionsShow");
        // // debugger
        // let height = document.documentElement.scrollHeight;
        // let backgroundEle = document.getElementById('background');
        // backgroundEle.setAttribute('style', `height: ${height}px`);
    }
    componentDidUpdate(){
        // let myFicHeight = document.getElementById("myFictionsShow").offsetHeight;
        // // let height = document.documentElement.scrollHeight;
        // let backgroundEle = document.getElementById('background');
        // backgroundEle.setAttribute('style', `height: ${myFicHeight}px`);
    }

    newStoryHandler(){
        this.props.history.push("/fictions/submission")
    }

    noStoriesRender(){
        return(
            <div className="fictionsShowContainer">{/*outer Show fiction page */}

                <div className="fictionsShowbar">{/* sidebar stuffs*/}

                </div>

                <div className="fictionsBox">{/* this will hold fictions*/}
                    <div>
                        <div className='FictionsHeader'>
                            <div className='iconWordConatainer'> <i className="iconPlacer" className="fas fa-pen"></i> <h3 className='fictionWord'> Fictions</h3> </div>
                            <button onClick={this.newStoryHandler} className="newStoryButton"> <i className="fas fa-plus"></i>{' New Story'}</button>
                        </div>
                        {/* {myStories} */}
                    </div>
                </div>

            </div>
        )
    }

    render(){
        //debugger
        //this.test.bind(this)();
        if(this.state.stories.length === 0) return(this.noStoriesRender.bind(this)());

        const myStories = this.state.stories.map((ele,idx)=>{
            //debugger
            return <MyFictionBlock key ={ele.id} story={ele}/>
        })
        return(
            <>
                <div id="myFictionsShow"className="fictionsShowContainer">{/*outer Show fiction page */}

                    <div className="fictionsShowbar">{/* sidebar stuffs*/}
                        <FictionsShowbar/>
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
                
                {/* <Route path='/' component={footer_container} />  */}
            </>
        )
    }
}
export default MyFictions;