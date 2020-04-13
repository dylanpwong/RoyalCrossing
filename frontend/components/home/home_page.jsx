import React from 'react'
import Carousel from './carousel';



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

                    <div className = "latestUpdatesPannel"> {/** latest Updates */}

                    </div>

                    <div className="trendingFictionsPannel">

                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;