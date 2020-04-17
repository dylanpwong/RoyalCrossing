import React from 'react'
import Carousel from './carousel';
import RecentFictions_container from './recentFictions_container';



class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
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
        )
    }
}

export default HomePage;