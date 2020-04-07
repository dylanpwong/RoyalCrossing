import React from 'react'
import { NavLink, Redirect,useHistory } from 'react-router-dom';



class SessionFormSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleOnSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then((res) => {
            // debugger
            this.props.history.push('/');
        }, (error) => {
            // debugger
            // console.log(errors.error)
        });
        
        // let history= useHistory();
        // history.push("/");
    }

    render() {
        return (
            <>
                <section className="credentialsForm">
                    <h1 className="formLogoHeader">Royal Crossing</h1>
                    <h1 className="errorMsg">{this.props.errors[0]}</h1>
                <div className="formcontainer">
                <h1>{this.props.formType}</h1>
                    <form onSubmit={this.handleOnSubmit}>
                        <label htmlFor="username">Username</label>
                        <input onChange={this.handleOnChange("username")} type="text" id="username" value={this.state.username}/>
                        <br/>
                        <label htmlFor="email">Email Address</label>
                        <input onChange={this.handleOnChange("email")} id="email" type="text" value={this.state.email} />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleOnChange("password")} type="text" value={this.state.password} />

                        <input type="submit" value="Register"/>
                    </form>
                    <NavLink to="/account/login">Have an Accont Log in!</NavLink>
                </div>
                </section>
            </>
        )
    }
}

export default SessionFormSignup