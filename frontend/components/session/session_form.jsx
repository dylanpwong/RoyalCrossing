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
            <div className="backgroundImg">
            <section className="credentialsForm">
            <h1 className="formLogoHeader">Royal Crossing</h1>
                <h1 className='SignInColor'>{this.props.formType}</h1>
            <button className="demoLogin" onClick={this.demoUserLogin.bind(this)}>Demo Login</button>
            <button className='githubButton'>GitHub</button>

            <div className="login-divider"> 
             <div className='orWrapper'>
               <span className='solid'>
                 or
               </span>
               </div>
            </div>
            <div className="formcontainer">
                <div className='errorsLogin'>
                    <h3 className="errorMsg">{this.props.errors[0]}</h3>
                </div>
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="formLabelInputs"> 
                            <label className="loginLabels" htmlFor="email">Email Address:</label>
                            <input className='loginInputs'onChange={this.handleOnChange("email")}id="email" type="text" value={this.state.email}/>
                       </div>

                        <div className='formLabelInputs'>
                        <label  className="loginLabels" htmlFor="password">Password:</label>
                        <input className='loginInputs'onChange={this.handleOnChange("password")} type="text" value={this.state.password}/>
                        </div>

                        <input type="submit" value="Sign in"/>
                    </form>
                <NavLink className="RemoveTextDec navColorSignin" to="/account/register">Create a new account</NavLink>
                <br/>
                
                </div>
            </section>
            </div>
            </>
        )
    }
}

export default SessionForm