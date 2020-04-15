import React from 'react';
import { NavLink } from 'react-router-dom';


class ShowAuthorBox extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        // debugger
        return(
            <>
            <div className="AuthorNameWord"> {/**Author header */}
                    <i className='fa fa-user'></i>
                    Author
            </div>

            <div className="namePicAligner">
                <div className="namePicContainer"> {/** name place */}
                    <div className="circlePic">
                        <img className="" src={this.props.author.photoUrl}/>
                    </div>
                    <NavLink to={`/profile/${this.props.author.id}`} className="fictionsAuthorName RemoveTextDec">
                        {this.props.author.username}
                    </NavLink>
                </div>
            </div>
            </>
        )

    }
}

export default ShowAuthorBox