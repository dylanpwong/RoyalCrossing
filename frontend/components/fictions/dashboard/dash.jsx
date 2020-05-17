import React from 'react'


class dash extends React.Component{

    constructor(props){
        super(props);

        this.dashNav=this.dashNav.bind(this);
    }

    dashNav(){
        return(
            <div className="dashNavContainer">
                <div className="dashNavBlock">
                    <i className="fas fa-tachometer-alt"></i>
                    Dashboard
                </div>
                <div className="dashNavBlock">
                    <i className="fas fa-edit"></i>
                    Edit
                </div>
                <div className="dashNavBlock">
                    <i className="fas fa-file-alt"></i>
                    Chapters
                </div>
            </div>
        )
    }

    render(){
        return(
            <>
            <div className="singleFictionShow">
                {this.dashNav()}
            </div>
            </>
        )
    }
}

export default dash;