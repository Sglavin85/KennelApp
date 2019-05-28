import React, { Component } from 'react'
import "./employee.css"


export class EmployeeCardModal extends Component {


    render() {
        console.log(this.props)
        return (
            <div className="modal">
                <div className="modalCard">
                    <h2>Are you sure you want to fire {this.props.employee.name}</h2>
                    <button className="yesBtn cardBtn red" onClick={
                        () => {
                            this.props.delete(this.props.employee.id)
                        }
                    }>YES</button>
                    <button className="noBtn cardBtn" onClick={
                        () => {
                            this.props.modalVis()
                        }
                    }>NO</button>
                </div>
            </div >
        )
    }
}

export default EmployeeCardModal