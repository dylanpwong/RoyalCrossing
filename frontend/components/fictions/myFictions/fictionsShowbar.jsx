import React from 'react'


class FictionsShowbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            
                <div className="showSidebar">
                    <div className="RemoveListStyle myBlock">My</div>
                    <div className ="myBlock2"><i className="fas fa-book"></i>&nbsp;Fictions</div>
                <div className="RemoveListStyle myBlock2"><i className="fas fa-flag"></i>&nbsp;Follow List</div>
                <div className="RemoveListStyle myBlock2"><i className="fas fa-star"></i>&nbsp;Favorites</div>
                </div>
            
        )
    }
}

export default FictionsShowbar;