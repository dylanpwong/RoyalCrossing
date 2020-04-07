import React from 'react'
import { NavLink, Redirect } from 'react-router-dom';



class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            email: "",
            password: ""
        }

        this.handleOnSubmit=this.handleOnSubmit.bind(this);
    }

    handleOnChange(type){
        return(e)=>{
            this.setState({[type]: e.target.value})
        }
    }

    handleOnSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state);
        this.props.history.push('/')
        
    }

    render(){   
        return(
            <>
            <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input onChange={this.handleOnChange("email")}id="email" type="text" value={this.state.email}/>
                    <br/>
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleOnChange("password")} type="text" value={this.state.password}/>

                        <input type="submit" value="Sign in"/>
                </form>
                <NavLink to="/account/register">Create a new account</NavLink>
            </>
        )
    }
}

export default SessionForm