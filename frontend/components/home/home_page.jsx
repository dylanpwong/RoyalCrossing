import React from 'react'
import Carousel from './carousel';
import RecentFictions_container from './recentFictions_container';
import footer_container from '../footer/footer_container';
import { Route } from 'react-router-dom';



class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // let height = document.documentElement.scrollHeight;
        // let backgroundEle = document.getElementById('background');
        // backgroundEle.setAttribute('style', `height: ${height}px`);
        // console.log(`height: ${height}`)
    }

    render(){
        return(
            <>
            <div className='homePageWrapper'>
                <div className='carouselContainer'> {/** image container */}
                    <Carousel currentUserId = {this.props.currentUserId} demoLogin={this.props.demoLogin}/>
                </div>
                <div className="homePageBottomContent"> 

                    {/* <div className = "latestUpdatesPannel"> * latest Updates */}

                    {/* </div> */}

                    <div className="recentFictionsPannelContainer">
                        <RecentFictions_container/>
                    </div>
                </div>
            </div>
            
            {/* <Route path='/' component={footer_container} />  */}
            </>
        )
    }
}

export default HomePage;