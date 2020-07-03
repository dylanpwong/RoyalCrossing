import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


class ShowAuthorBox extends React.Component {
    constructor(props){
        super(props)

        this.toAuthor=this.toAuthor.bind(this);
    }

    toAuthor(){
        // debugger;
        this.props.history.push(`/profile/${this.props.author.id}`)
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
                    <div onClick={this.toAuthor}className="circlePic">
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
// withRouter
export default withRouter(ShowAuthorBox)