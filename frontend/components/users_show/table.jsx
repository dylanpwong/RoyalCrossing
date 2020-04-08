

import React from 'react';

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            joined: "joined",
            Last_Active: "",
            Gender: "Gender",
            Location: "N/A",

        }
    }

    render(){   
        return(
        <>
            <table >
                <tbody>
                    <tr>
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
                </tbody>
            </table>
            

        </>
        );
    }
}

export default Table;