

import React from 'react';

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            joined: this.getDate.bind(this)(),
            Last_Active: this.props.user.lastActive,
            Gender: props.user.gender,
            Location: "N/A",
            bio: "N/A"
        }
    }

    getDate(){
       // debugger
        const actualDateTime = new Date(this.props.user.created_at);
        const actualDate = this.props.user.created_at;
        let date = "";
        date = actualDate.slice(5, 7);
        date += "/";
        date += actualDate.slice(8, 10);
        date += '/';
        date += actualDate.slice(0, 4); //year
        date += ', ';
        //debugger
        date += actualDateTime.getHours() + ":" + actualDateTime.getMinutes() +":" +actualDateTime.getSeconds(); //actualDate.slice(11, 19);
       
        return date;
    }

    render(){   
        //const joined = this.getDate.bind(this)();
        //"2020-04-09T01:51:40.291Z"
       //debugger
        return(
        <div className="personalinfoPage">
                <h1 className="personalInfoBlock"> <i className="fas fa-user"></i> Personal Infomation</h1>
            <table >
                <tbody>
                    <tr className="tableJoined"> 
                        <td >Joined:</td>
                         <td>{this.state.joined}</td>
                    </tr>
        
                    <tr>
                        <td>Gender:</td>
                        <td>{this.state.Gender}</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>{this.state.Location}</td>
                    </tr>

                    <tr>
                        <td>Bio</td>
                        <td>{this.state.bio}</td>
                    </tr>
                </tbody>
            </table>
            

        </div>
        );
    }
}

export default Table;