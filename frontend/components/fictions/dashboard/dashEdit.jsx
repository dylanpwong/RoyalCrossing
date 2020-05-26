import React from 'react';
import DashNav from './dashNav';
import CreateFiction from '../myFictions/createFiction/createFiction';
import createFiction_container from '../myFictions/createFiction/createFiction_container';


class DashEdit extends React.Component{

    constructor(props){
        super(props);
        this.editComponent=this.editComponent.bind(this)
    }

    componentDidMount(){
        this.props.fetchStory(this.props.storyId);
        this.props.getGenres();
    }

    editHeader(){
        <div className='editHeader'>
            <i className="fas fa-edit"></i>
            <div>
                EDIT
            </div>
        </div>
    }

    editComponent(){
        return(
            <>
            {this.editHeader()}
            <CreateFiction edit={true}author={this.props.story.author} genres={this.props.genres} editStory={this.props.story}/>
            </>
        )
    }


    render(){
        // debugger;
        if(this.props.story == null){
            return(
                <>
                </>
            )
        }else{

            return(
                <>
                <div className="singleFictionShow paddingIn">
                    <DashNav/>
                    {this.editComponent()}
                </div>
                </>
            )
        }
    }
}

export default DashEdit;