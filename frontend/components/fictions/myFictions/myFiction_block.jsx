import React from'react'


class MyFictionBlock extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <>
            <div>
                <div></div> {/*picture*/}
                <div>
                    <h3>{this.props.story.title}</h3>

                    <div> {/* the favorites/follows/ratings comments view*/}
                        <div>
                            <p>10</p> {/*placeHolder*/}
                            <p>favorites</p>
                        </div>
                    </div>

                    <nav>{/*links to show pages, and add chapter*/}
                        <ul>
                            <li>Page</li>
                            <li>DashBoard</li>
                            <li>Add Chapter</li>
                        </ul>
                    </nav>

                </div>
            </div>
            </>
        )
    }
}

export default MyFictionBlock