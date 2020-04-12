import React from'react'


class MyFictionBlock extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <>
            <div className='fictionBlockContainer'>
                <div className="fictionBlock">
                    <div className='defaultCover'></div> {/*picture*/}
                    <div className='SingleFictionHolder'>
                        <h3 className="fictionTitle">{this.props.story.title}</h3>

                        <div> {/* the favorites/follows/ratings comments view*/}
                            <div className="followersFavoritesAmount"> 
                                <div>10</div> {/*placeHolder*/}
                                <div>favorites</div>
                            </div>
                        </div>

                        
                    <div className="fictionShowButtons">{/*links to show pages, and add chapter*/}
                        <ul>
                            <button className="showButton pageButton">Page</button>
                            <button className="showButton dashButton">DashBoard</button>
                            <button className="showButton addChapterButton">Add Chapter</button>
                        </ul>
                    </div>

                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default MyFictionBlock