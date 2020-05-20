import React from 'react';


class ChapterNew extends React.Component{
    constructor(props){
        super(props)
            // (: content,: title,: pre_note,: post_note,: story_id)
        this.state={
            content: "",
            title: "",
            pre_note: "",
            post_note: "",
            story_id:""
        }
        this.createChapterForm = this.createChapterForm.bind(this);
        this.changeInp =this.changeInp.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.state.story_id = this.props.storyId;
    }


    changeInp(type){
        return(event)=>{
            event.preventDefault();
            let value = event.target.value;
            this.setState({[type]: value});
        }
    }

    onSubmit(event){
        event.preventDefault();
        this.props.createChaper(this.state)
    }

    createChapterForm(){
        return(

        <div className="FirstChapterContainer">
            {/* <form > */}
            <form onSubmit={this.onSubmit}>

            <div className="titleInputsCreateFiction ">
                <label className="alignLabelsChapter" htmlFor="title">Chapter &nbsp;</label>
                <input onChange={this.changeInp("title")}className="inputForStoryCreation storyTitleinput" type="text" placeholder="Title of Chapter" id="title" />
            </div>

            <div className="cheeseBorder"></div>

            <div className="titleInputsCreateFictionSnyp">
                <label className="alignLabelsChapter" htmlFor="preNote">Pre-chapter author note &nbsp;</label>
                <textarea onChange={this.changeInp("pre_note")} className="inputForStoryCreationSnyp"id="preNote"  cols="30" rows="10"></textarea>
            </div>

            <div className="titleInputsCreateFictionSnyp">
                <label className="alignLabelsChapter" htmlFor="content">Chapter Content &nbsp;</label>
                <textarea onChange={this.changeInp("content")}className="inputForStoryCreationSnyp" id="content" cols="30" rows="10"></textarea>
            </div>

            <div className="cheeseBorder"></div>

            <div className="titleInputsCreateFictionSnyp">
                <label className="alignLabelsChapter" htmlFor="postNote">Post-chapter author note &nbsp;</label>
                <textarea onChange={this.changeInp("pre_note")} className="inputForStoryCreationSnyp" id="postNote"  cols="30" rows="10"></textarea>
            </div>
            {/* <input type="submit"/> */}

            {/* </form> */}
            <div className="chapterCreationSubContainer">
                <input className="chapterCreationSubmit" type="submit" value="Publish Chapter"/>

            </div>
            </form>
        </div>
        )
    }
    render(){
        console.log("In create Chapter")
        return(
            <>
            <div className='singleFictionShow'>
                {this.createChapterForm()}
            </div>
               
            </>
        )
    }
}

export default ChapterNew;