import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"
import menu from "./menu.svg"
import x from './x.svg'

class NavBar extends Component {
    state = {
        class: "nav1",
        img: menu
    }

    clickHandler = () => {
        if (this.state.img === menu) {
            this.setState({
                class: "nav1 expand",
                img: x
            })
        } else {
            this.setState({
                class: "nav1",
                img: menu
            })
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">

                <div className={this.state.class}>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="/locations">Locations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/animals">Animals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employees">Employees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/owners">Owners</Link>
                        </li>
                        <li>
                            <img className="menuBtn" src={this.state.img} alt="Menu" onClick={this.clickHandler} />
                        </li>

                    </ul>
                </div>
                <h1 className="titleBig">Fur Babies</h1>

                <div className="nav2">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <button className="nav-link logoutBtn" onClick={this.props.logout}>Log Out</button>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}

export default NavBar