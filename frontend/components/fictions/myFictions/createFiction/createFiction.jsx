

import React from 'react';
import CreateChapter from './createChapter'
// import { debug } from 'webpack';


class CreateFiction extends React.Component{
    constructor(props){
        super(props)

        this.state={
            synopsis: "",
            storyTitle: "",
            chapterTitle: "",
            content: "",
            genre_ids: []
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.onChangeCheck = this.onChangeCheck.bind(this);
    }

    onChangeInp(type){ 
        // debugger
        return (e)=>{
            this.setState({[type]: e.target.value})
        }
    }

    onChangeCheck(type){
        if(type.target.checked){
            // const idx = this.state.genre_ids.indexOf(type.target.value)
            this.state.genre_ids.push(type.target.value)
        }else{
            // debugger
            this.state.genre_ids.splice(this.state.genre_ids.indexOf(type.target),1)
        }

        // debugger
    }

    componentDidMount(){
        this.props.getGenres();
    }

    submitHandler(e){
        e.preventDefault();
        const data ={
            title: this.state.storyTitle,
            synopsis: this.state.synopsis,
            author_id: this.props.author.id,
            genre_ids: this.state.genre_ids
        }
        const chapData={
            title: this.state.chapterTitle,
            content: this.state.content,

        }
        this.props.createAStory(data).then((res)=>{
            chapData.story_id = res.story.id;
                this.props.createChapter(chapData).then((res2)=>{
                    // debugger;
                })
            
        })
        // debugger
    }



    render(){
        // debugger
        if(Object.values(this.props.genres).length === 0){
            return(<> </>)
        }
        // debugger
        return(
            <>
                <div className="createWrapper">
                    <div className="createContainer">
                        <div className="SubFicHeader">
                            <i className="fas fa-book"></i> &nbsp; SUBMIT YOUR FICTION
                        </div>

                        <div className="CreateFictionReadme">
                                To Submit your Fiction please fill out the input fields below!
                        </div>

                        <div className='theFictionCreate'>
                            <div className="smallHeader">
                                    THE FICTION
                            </div>

                            <form onSubmit={this.submitHandler} className='createForm'>

                                <div className="titleInputsCreateFiction "> 
                                    <label className="alignLabels" htmlFor="title">Title &nbsp;</label>
                                    <input className="inputForStoryCreation storyTitleinput" placeholder="Title Of Fiction" onChange={this.onChangeInp("storyTitle")} type="text" value={this.state.storyTitle}id="title"/>
                                </div>

                                <div className="cheeseBorder"></div>

                                <div className="titleInputsCreateFictionSnyp">
                                    <label className="alignLabels" htmlFor="synopsis">Synopsis &nbsp;</label>
                                    <textarea className={"inputForStoryCreationSnyp"} onChange={this.onChangeInp("synopsis")} id="synopsis" cols="30" rows="10" value={this.state.synopsis}></textarea>
                                </div>

                                <div className="cheeseBorder"></div>

                                <div className="genresContainer">

                                    <div className="checkboxCreate">
                                        <label htmlFor="romance">{this.props.genres.romance.name}</label>
                                        <input onChange={this.onChangeCheck}type="checkbox" value={this.props.genres.romance.id} id="romance"/>
                                    </div>

                                    <div className="checkboxCreate">
                                        <label htmlFor="horror">{this.props.genres.horror.name}</label>
                                        <input onChange={this.onChangeCheck}type="checkbox" id="horror" value={this.props.genres.horror.id} />
                                    </div>

                                    <div className="checkboxCreate">
                                        <label htmlFor="comedy">{this.props.genres.comedy.name}</label>
                                        <input onChange={this.onChangeCheck}type="checkbox" id="comedy" value={this.props.genres.comedy.id}/>
                                    </div>

                                    <div className="checkboxCreate">
                                        <label htmlFor="action">{this.props.genres.action.name}</label>
                                        <input onChange={this.onChangeCheck}type="checkbox" id="action" value={this.props.genres.action.id} />
                                    </div>

                                </div>

                                <CreateChapter onChangeInp={this.onChangeInp.bind(this)}/>
                                <div className="submitContainer">
                                    <input className="submitForStory" type="submit" value="Submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
            </>
        )

    }
}

export default CreateFiction;