

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
            genre_ids: [],
            errors: false
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.onChangeCheck = this.onChangeCheck.bind(this);
        this.showErrors = this.showErrors.bind(this);
        this.editChecked =this.editChecked.bind(this);
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
            this.state.genre_ids.push(type.target.value);
            
            // this.setState({genre_ids: this.state.genre_ids});
        }else{
            // debugger
            this.state.genre_ids.splice(this.state.genre_ids.indexOf(type.target),1);
            // this.setState({ genre_ids: this.state.genre_ids });
        }

        // debugger
    }

    onChangeCheck2(type){
        
    }

    componentDidMount(){
        if (Object.values(this.props.genres).length === 0) {
            this.props.getGenres();
        }
        if(this.props.edit){
            // debugger;
            this.setState({
                synopsis: this.props.editStory.synopsis,
                storyTitle: this.props.editStory.title,
                genre_ids: this.props.editStory.genres
            })
        }
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
        if(this.state.synopsis==""){
            this.setState({errors: true});
        }else if(this.state.storyTitle==""){
            this.setState({ errors: true });
        }else if(this.state.chapterTitle==""){
            this.setState({ errors: true });
        }else if(this.state.content==""){
            this.setState({ errors: true });
        }else if (this.state.genre_ids.length ==0){
            this.setState({ errors: true });
        }else{
            this.state.errors=false;
            this.props.createAStory(data).then((res)=>{
                chapData.story_id = res.story.id;
                    this.props.createChapter(chapData).then((res2)=>{
                        // debugger;
                        this.props.history.push('/')
                    })
            })
        }
        // debugger
    }
    showErrors(){
        // console.log(this.state.errors);
        if( this.state.errors){
            let myDiv = document.getElementById('scrollForStory');
            // myDiv.innerHTML = variableLongText;
            myDiv.scrollTop = 0;
            return(
                <div >
                    Please Fill In All Fields
                </div>
            )
        }
        // return(
        //     <div>Hellos Errors</div>
        // )
        
    }

    chooseHeader(){
        if(this.props.edit){
            return(
                <>
                    <div className='editHeader'>
                        <i className="fas fa-edit"></i>
                            &nbsp;
                            EDIT
                    </div>
                </>
            )
        }else{

            return(
                <>
                    <i className="fas fa-book"></i> &nbsp; SUBMIT YOUR FICTION
                </>
            )
        }
    }
    chooseDesc(){
        if(!this.props.edit){
            return(
                <div className="CreateFictionReadme">
                    To Submit your Fiction please fill out the input fields below!
                </div>
            )
        }
    }

    createChapter(){
        if(!this.props.edit){
            return(
                <>
                    <CreateChapter onChangeInp={this.onChangeInp.bind(this)} />
                </>
            )
        }
    }

    editChecked(name){
        for(let i=0;i<this.state.genre_ids.length;i++){
            if (this.state.genre_ids[i].name === name){
                return true;
            }
        }
        return false;
        
    }



    render(){
        // debugger
        if(Object.values(this.props.genres).length === 0){
            return(<> </>)
        }
        // debugger
        return(
            <>
                <div id="scrollForStory"className="createWrapper">
                    <div className="createContainer">
                        <div className="SubFicHeader">
                            {/* <i className="fas fa-book"></i> &nbsp; SUBMIT YOUR FICTION */}
                            {this.chooseHeader.call(this)}
                        </div>
                        
                        {/* <div className="CreateFictionReadme">
                                To Submit your Fiction please fill out the input fields below!
                        </div> */}
                        {this.chooseDesc.call(this)}

                        <div className='theFictionCreate'>
                            <div className="storyCreationErrors">{this.showErrors()}</div>
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
                                        <input checked={this.editChecked('romance')}  onChange={this.onChangeCheck}type="checkbox" value={this.props.genres.romance.id} id="romance"/>
                                    </div>

                                    <div className="checkboxCreate">
                                        <label htmlFor="horror">{this.props.genres.horror.name}</label>
                                        <input checked={this.editChecked('horror')} onChange={this.onChangeCheck}type="checkbox" id="horror" value={this.props.genres.horror.id} />
                                    </div>

                                    <div className="checkboxCreate">
                                        <label htmlFor="comedy">{this.props.genres.comedy.name}</label>
                                        <input checked={this.editChecked('comedy')} onChange={this.onChangeCheck}type="checkbox" id="comedy" value={this.props.genres.comedy.id}/>
                                    </div>

                                    <div className="checkboxCreate">
                                        <label htmlFor="action">{this.props.genres.action.name}</label>
                                        <input checked={this.editChecked('action')} onChange={this.onChangeCheck}type="checkbox" id="action" value={this.props.genres.action.id} />
                                    </div>

                                </div>
                                {this.createChapter.call(this)}
                                {/* <CreateChapter onChangeInp={this.onChangeInp.bind(this)}/> */}
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