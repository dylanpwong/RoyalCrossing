

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

        }
        this.submitHandler = this.submitHandler.bind(this);
    }

    onChangeInp(type){ 
        // debugger
        return (e)=>{
            this.setState({[type]: e.target.value})
        }
    }

    componentDidMount(){
        this.props.getGenres();
    }

    submitHandler(e){
        e.preventDefault();
        debugger
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
                                        <input type="checkbox" value="romance" id="romance"/>
                                    </div>

                                    <div className="checkboxCreate">
                                        <label htmlFor="horror">{this.props.genres.horror.name}</label>
                                        <input type="checkbox" id="horror" />
                                    </div>

                                    <div className="checkboxCreate">
                                        <label htmlFor="comedy">{this.props.genres.comedy.name}</label>
                                        <input type="checkbox" id="comedy" />
                                    </div>

                                    <div className="checkboxCreate">
                                        <label htmlFor="action">{this.props.genres.action.name}</label>
                                        <input type="checkbox" id="action" />
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