import React, { Component } from "react"
import './login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.fadeOut = React.createRef();
        this.fadeIn = React.createRef();
    }

    // Set initial state
    state = {
        email: "",
        password: "",
        class: "loginContainer",
        welcomeclass: "welcomeMsg",
        loginclass: "loginForm"
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    setCredentials = () => {
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        )
        this.props.loginState()
        this.props.history.push("/Animals")
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        this.setState({
            class: "loginContainer AloginContainer",
            welcomeclass: "welcomeMsg AwelcomeMsg",
            loginclass: "loginForm AloginForm"
        })
        window.setTimeout(() => { this.setCredentials() }, 2250)
    }

    render() {
        return (
            <div className={this.state.class}>

                <div className={this.state.loginclass}>
                    <h1 className="titleBig center">Fur Babies</h1>

                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <div className="loginItem">
                        <label htmlFor="inputEmail">
                            Email address
                </label>
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                    </div>
                    <div className="loginItem">
                        <label htmlFor="inputPassword">
                            Password
                </label>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                    </div>
                    <button className="loginBtn" onClick={this.handleLogin}>
                        Sign in
                </button>
                </div>
                <h1 className={this.state.welcomeclass}>Welcome</h1>
            </div>
        )
    }
}