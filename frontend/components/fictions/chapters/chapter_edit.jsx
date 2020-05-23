import React from 'react';


class ChapterEdit extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            content: "",
            title: "",
            pre_note: "",
            post_note: "",
            story_id: "",
            creationErrors: 'false'
        }

        this.createChapterForm = this.createChapterForm.bind(this);
        this.changeInp = this.changeInp.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
        this.setFalse = this.setFalse.bind(this);
    }

    componentDidMount(){
        // debugger
        this.setState({
            id: this.props.chapter.id,
            content: this.props.chapter.content,
            title: this.props.chapter.title,
            pre_note: (this.props.chapter.pre_note) ? this.props.chapter.pre_note : "",
            post_note: (this.props.chapter.post_note) ? this.props.chapter.post_note : "",
            story_id: this.props.storyId,
        })
    }
    changeInp(type) {
        return (event) => {
            event.preventDefault();
            let value = event.target.value;
            this.setState({ [type]: value });
        }
    }
    errorHandler() {
        if (this.state.creationErrors === 'true') {
            return (
                <div className="storyCreationErrors">
                    Please Fill Title and Content Fields
                </div>
            )
        }
    }
    onSubmit(event) {
        event.preventDefault();
        for (const key in this.state) {
            if (this.state[key] === "" && (key === "title" || key === "content")) {
                this.setState({ creationErrors: 'true' });
                this.state.creationErrors = 'true';
            }
        }
        if (this.state.creationErrors === 'false') {
            this.props.editChapter(this.state).then((res) => {
                // debugger;
                this.props.history.push(`/fiction/${this.props.storyId}/chapters/${res.chapter.chapter_number}`);
            })
            // console.log(this.state.creationErrors);
            // console.log("Chapter Submitted");
        }
    }

    setFalse() {
        this.state.creationErrors = 'false';
    }
    createChapterForm() {
        return (

            <div className="FirstChapterContainer chapCreationPadding">
                {/* <form > */}
                {this.errorHandler()}
                <form onSubmit={this.onSubmit}>

                    <div className="titleInputsCreateFiction ">
                        <label className="alignLabelsChapter" htmlFor="title">Chapter &nbsp;</label>
                        <input value={this.state.title}onChange={this.changeInp("title")} className="inputForStoryCreation storyTitleinput" type="text" placeholder="Title of Chapter" id="title" />
                    </div>

                    <div className="cheeseBorder"></div>

                    <div className="titleInputsCreateFictionSnyp">
                        <label className="alignLabelsChapter" htmlFor="preNote">Pre-chapter author note &nbsp;</label>
                        <textarea value={this.state.pre_note} onChange={this.changeInp("pre_note")} className="inputForStoryCreationSnyp" id="preNote" cols="30" rows="10"></textarea>
                    </div>

                    <div className="titleInputsCreateFictionSnyp">
                        <label className="alignLabelsChapter" htmlFor="content">Chapter Content &nbsp;</label>
                        <textarea value={this.state.content} onChange={this.changeInp("content")} className="inputForStoryCreationSnyp" id="content" cols="30" rows="10"></textarea>
                    </div>

                    <div className="cheeseBorder"></div>

                    <div className="titleInputsCreateFictionSnyp">
                        <label className="alignLabelsChapter" htmlFor="postNote">Post-chapter author note &nbsp;</label>
                        <textarea value={this.state.post_note} onChange={this.changeInp("post_note")} className="inputForStoryCreationSnyp" id="postNote" cols="30" rows="10"></textarea>
                    </div>

                    <div className="cheeseBorder"></div>
                    {/* <input type="submit"/> */}

                    {/* </form> */}
                    <div className="chapterCreationSubContainer">
                        <input className="chapterCreationSubmit" type="submit" value="Save Changes" />

                    </div>
                </form>
            </div>
        )
    }

    render(){
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

export default ChapterEdit;