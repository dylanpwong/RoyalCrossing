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
            story_id:"",
            creationErrors: 'false'
        }
        this.createChapterForm = this.createChapterForm.bind(this);
        this.changeInp =this.changeInp.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.errorHandler=this.errorHandler.bind(this);
        this.setFalse=this.setFalse.bind(this);
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
        for(const key in this.state){
            if(this.state[key] ==="" && (key ==="title" || key ==="content")){
                this.setState({creationErrors: 'true'});
                this.state.creationErrors = 'true';
            }
        }
        if(this.state.creationErrors === 'false'){
            this.props.createChapter(this.state).then((res)=>{
                // debugger
                this.props.history.push(`/fiction/${this.props.storyId}/chapters/${res.chapter.chapter_number}`);
            })
            // console.log(this.state.creationErrors);
            // console.log("Chapter Submitted");
        }
    }

    setFalse(){
        this.state.creationErrors = 'false';
    }

    errorHandler(){
        if(this.state.creationErrors ==='true'){
            return (
                <div className="storyCreationErrors">
                    Please Fill Title and Content Fields
                </div>
            )
        }
    }

    createChapterForm(){
        return(

        <div className="FirstChapterContainer chapCreationPadding">
            {/* <form > */}
            {this.errorHandler()}
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

            <div className="cheeseBorder"></div>
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
                {this.setFalse()}
            </div>
               
            </>
        )
    }
}

export default ChapterNew;