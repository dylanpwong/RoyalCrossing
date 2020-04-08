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
        this.props.processForm(this.state).then((res)=>{
           // debugger
            this.props.history.push('/');
        },(error)=>{
           // debugger
           // console.log(errors.error)
        });
        
    }
    demoUserLogin(e){
        this.state.email = 'demo@gmail.com';
        this.state.password = '123456';
        this.handleOnSubmit(e);
    }

    errorEraser(){
        
    }

    render(){   
        return(
            <>
            <div className="backgrounImg">
            <section className="credentialsForm">
            <h1 className="formLogoHeader">Royal Crossing</h1>
            <div className="formcontainer">
                <div className='errorsLogin'>
                    <h3 className="errorMsg">{this.props.errors[0]}</h3>
                </div>
                <h1 className='SignInColor'>{this.props.formType}</h1>
                    <form onSubmit={this.handleOnSubmit}>
                        <label htmlFor="email">Email Address</label>
                        <input className='loginInputs'onChange={this.handleOnChange("email")}id="email" type="text" value={this.state.email}/>
                        <br/>
                        <label htmlFor="password">Password</label>
                        <input className='loginInputs'onChange={this.handleOnChange("password")} type="text" value={this.state.password}/>
                        <br/>

                        <input type="submit" value="Sign in"/>
                    </form>
                <NavLink to="/account/register">Create a new account</NavLink>
                <br/>
                <button onClick={this.demoUserLogin.bind(this)}>Demo Login</button>
                </div>
            </section>
            </div>
            </>
        )
    }
}

export default SessionForm