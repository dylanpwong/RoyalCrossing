


import React from 'react'

class CreateChapter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            
            <div className="FirstChapterContainer">
                {/* <form > */}
                <div className="titleInputsCreateFiction "> 
                    <label className="alignLabelsChapter" htmlFor="title">Chapter &nbsp;</label>
                    <input onChange={this.props.onChangeInp('chapterTitle')}className="inputForStoryCreation storyTitleinput" type="text" placeholder="Title of Chapter" id="title"/>
                </div>

                <div className="cheeseBorder"></div>

                <div className="titleInputsCreateFictionSnyp"> 
                    <label className="alignLabelsChapter" htmlFor="content">Chapter Content &nbsp;</label>
                    <textarea onChange={this.props.onChangeInp('content')}className="inputForStoryCreationSnyp" id="content" cols="30" rows="10"></textarea>
                </div>

                <div className="cheeseBorder"></div>
                    {/* <input type="submit"/> */}

                {/* </form> */}
            </div>
        )
    }
}

export default CreateChapter