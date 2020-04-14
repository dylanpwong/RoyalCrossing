import React from 'react'
import { NavLink, Redirect,useHistory } from 'react-router-dom';



class SessionFormSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            gender: "Male",
            birth: "",
            passwordAgain: "",
            errors: ""
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
            //debugger
        }
    }

    handleOnSubmit(e) {
        e.preventDefault();
        //debugger
        if(this.state.errors !== "") this.state.errors = "";
        if(this.state.password === this.state.passwordAgain){
                this.props.processForm(this.state).then((res) => {
                    // debugger
                    this.props.history.push('/');
                }, (error) => {
                    // debugger
                    // console.log(errors.error)
                });
        }else{
            this.setState({errors: "Passwords Must Match"})
        }
        
        // let history= useHistory();
        // history.push("/");
    }

    demoUserLogin(){
        const user={
            email: "demo@gmail.com",
            password: "123456"
        }
        this.props.loginDemoUser(user).then((res)=>{
           // debugger
            this.props.history.push("/");
        })
    }

    render() {
        return (
            <>
                <div className="backgroundImg">
                <section className="credentialsForm">
                    <h1 className="formLogoHeader">Royal Crossing</h1>
                <h1 className='SignInColor'>{this.props.formType}</h1>
                <button className="demoLogin" onClick={this.demoUserLogin.bind(this)}>Demo Login</button>
                <button className='githubButton'>GitHub</button>

                        <div className="login-divider">
                            <div className='orWrapper'>{/**wrapper for or */}
                                <span className='solid'>
                                    or
                                </span>
                            </div>
                        </div>

                <div className="formcontainer">
                    <div className="errorsLogin">
                        <h1 className="errorMsg">{this.props.errors[0]}</h1>
                        <h1 className='passwordsError'>{this.state.errors}</h1>
                    </div>
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="formLabelInputs"> 
                            <label className="loginLabels"htmlFor="username">Username:</label>
                            <input  onChange={this.handleOnChange("username")} type="text" id="username" value={this.state.username}/>
                        </div>

                        <div className="formLabelInputs"> 
                            <label  className="loginLabels" htmlFor="email">Email Address:</label>
                            <input onChange={this.handleOnChange("email")} id="email" type="text" value={this.state.email} />
                        </div>

                        <div className="pass-connector">
                            <label  className="loginLabels" htmlFor="password">Password:</label>
                            <input id="password" onChange={this.handleOnChange("password")} type="password" value={this.state.password} />
                        </div>

                        <div className="pass-connector">
                            <label className='passAgain loginLabels' htmlFor="passwordAgain">Password again:</label>
                            <input className='passAgain'onChange={this.handleOnChange("passwordAgain")} type="password" value={this.state.passwordAgain} />
                        </div>
                        <br/>

                        <div className='pass-connector'>
                            <label className="loginLabels" htmlFor="gender">Gender</label>
                            <select value="select a gender" onChange={this.handleOnChange("gender")}id="gender" placeholder="Select a Gender" value={this.state.gender}>
                                {/* <option disabled="disabled" selected="selected">Select your gender</option> */}
                                <option disabled='disabled' value="Not Valid">Select Your Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="pass-connector">
                        <label className='loginLabels passAgain' htmlFor="birth"> Date of birth:</label>
                        <div className="dateIconAligner">
                                        <i className="fa fa-calendar dateicon"></i>
                            <input onChange={this.handleOnChange("birth")} type="date" id="birth"/>
                        </div>
                        </div>
                        <br/>

                        <input type="submit" value="Register"/>
                    </form>
                    <NavLink to="/account/login">Have an Accont Log in!</NavLink>
                </div>
                </section>
                </div>
            </>
        )
    }
}

export default SessionFormSignup