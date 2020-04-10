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
                    <h4>{this.props.story.title}</h4>
                </div>
            </div>
            </>
        )
    }
}

export default MyFictionBlock