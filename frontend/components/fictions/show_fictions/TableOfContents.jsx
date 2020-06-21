import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';




class TableOfContents extends React.Component{
    constructor(props){
        super(props)
        this.onEdit=this.onEdit.bind(this);
        this.onDelete=this.onDelete.bind(this);

    }

    getDate(chapter) {
        // debugger
        const actualDateTime = new Date(chapter.created_at);
        const actualDate = chapter.created_at;
        let date = "";
        date = actualDate.slice(5, 7);
        date += "/";
        date += actualDate.slice(8, 10);
        date += '/';
        date += actualDate.slice(0, 4); //year
        // date += ', ';
        //debugger
        // date += actualDateTime.getHours() + ":" + actualDateTime.getMinutes() + ":" + actualDateTime.getSeconds(); //actualDate.slice(11, 19);

        return date;
    }

    onEdit(chapter){
        let myChap = chapter;
        // debugger;
        return (chapter)=>{
            myChap;
            this.props.history.push(`/fiction/${myChap.story_id}/chapter/edit/${myChap.chapter_number}`);

        }
    }
    onDelete(chapter) {

        return()=>{
            chapter;
            this.props.deleteChapter(chapter.id).then((res) => {
                this.props.history.push(`/my/fiction/${chapter.story_id}`);
            })
        }
    }
    titleExtender(title){
        return(
            <div className="titleExtender">
                {title}
            </div>
        )
    }


    render(){
        let myChapters;
        if (this.props.chapters){
        myChapters = Object.values(this.props.chapters);
        }else{
        myChapters=[];
        }
        const chapterItems = [];

        if(this.props.dash =="true"){
            chapterItems.push(<div className="chapterNameword titleWords" key={0}>
                <div className="sansSerifChapterName chapNameHeader">Chapter Name</div>
                <div className="sansSerifChapterName">Date</div>
                <div>Words</div>
                <div>Controls</div>
            </div>)
        }else{
            chapterItems.push(<div className="chapterNameword"key={0}> 
                <div className="sansSerifChapterName chapNameHeader">Chapter Name</div>
                <div className="sansSerifChapterName">Release Date</div>
            </div>)
        }
        // debugger
        // let index = 1 ;
        if(this.props.dash=="true"){
            for (let index = 0; index < myChapters.length; index++) {

                // console.log(index);
                if (index == 7) {
                    // console.log(index);
                    break;
                }
                chapterItems.push(
                    <div key={index + 1} className="chapterNameword ">
                        <NavLink className="RemoveTextDec sansSerifChapterName chapterTitleStyle" to={`/fiction/${myChapters[index].story_id}/chapters/${myChapters[index].chapter_number}`}>{this.titleExtender(myChapters[index].title)}</NavLink>
                        <div className="sansSerifChapterName chapterTitleStyle dateMove">{this.getDate(myChapters[index])}</div>
                        <div className="dateMove wordWidth">{myChapters[index].content.split(" ").length}</div>
                        <div className='dashIconContainer dateMove'>
                            <div className='editButton'>
                            <i onClick={this.onEdit(myChapters[index])}className="fas fa-edit blueDash"></i>

                            </div>
                            <div className="editButton">
                                <i onClick={this.onDelete(myChapters[index])} className="fas fa-trash-alt redDash "></i>
                            </div>
                        </div>
                    </div>
                )
            }
        }else{
            for (let index = 0; index < myChapters.length; index++) {

                // console.log(index);
                if (index == 7) {
                    // console.log(index);
                    break;
                }
                chapterItems.push(
                    <div key={index + 1} className="chapterNameword">
                        <NavLink className="RemoveTextDec sansSerifChapterName chapterTitleStyle" to={`/fiction/${myChapters[index].story_id}/chapters/${myChapters[index].chapter_number}`}>{myChapters[index].title}</NavLink>
                        <div className="sansSerifChapterName chapterTitleStyle">{this.getDate(myChapters[index])}</div>
                    </div>
                )
            }
        }
        
        // debugger
        if(this.props.dash=="true"){
            return(
                <>
                    <div className="chaptersWrapper"> {/** wrapper */}
                        {/* <h2 className="TableOfContentsWord"> <i className="fas fa-book"></i> {' TABLE OF CONTENTS'}</h2> */}
                        <div className="chaptersIndexContainer"> {/**div chapter container */}
                            {chapterItems}
                        </div>
                    </div>
                </>
            )
        }else{

            return(
                <>
                <div className="chaptersWrapper"> {/** wrapper */}
                        <h2 className="TableOfContentsWord"> <i className="fas fa-book"></i> {' TABLE OF CONTENTS'}</h2>
                        <div className="chaptersIndexContainer"> {/**div chapter container */}
                            {chapterItems}
                        </div>
                </div>
                </>
            )
        }
    }
}

// export default TableOfContents
export default withRouter(TableOfContents)