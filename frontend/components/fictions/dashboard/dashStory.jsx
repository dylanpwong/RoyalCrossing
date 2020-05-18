import React from 'react';


class DashShow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // debugger
        if(!this.props.story){
            return(
                <>
                </>
            )
        }else{
            return(
                <>
                <div className="dashStoryHeader">
                    {this.props.story.title}
                    <div className="pageButton">
                        page
                    </div>
                    
                </div>
                </>
            )

        }
    }
}

export default DashShow;