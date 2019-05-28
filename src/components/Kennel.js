import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    state = {
        isLoggedIn: false
    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    componentDidMount() {
        let loggedin = this.isAuthenticated()
        this.setState({ isLoggedin: loggedin })
    }

    logout = () => {
        sessionStorage.clear()
        let loggedin = this.isAuthenticated()
        this.setState({ isLoggedin: loggedin })
    }

    login = () => {
        let loggedin = this.isAuthenticated()
        this.setState({ isLoggedin: loggedin })
    }

    render() {
        return (
            <React.Fragment>
                <NavBar
                    isLoggedIn={this.state.isLoggedIn}
                    logout={this.logout} />
                <ApplicationViews
                    isLoggedIn={this.state.isLoggedIn}
                    loginState={this.login} />
            </React.Fragment>
        )
    }
}

export default Kennel
