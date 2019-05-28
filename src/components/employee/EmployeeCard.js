import React, { Component } from 'react'
import './employee.css'
import EmployeeCardModal from "./EmployeeCardModal"

export class EmployeeCard extends Component {

    state = {
        modalVis: false
    }

    modalVis = () => {
        this.setState({ modalVis: false })
    }


    render() {
        return (
            <>
                <div className="employee" key={this.props.employee.id}>
                    <div className="employeeText">
                        {this.props.employee.id}: {this.props.employee.name}
                    </div>
                    <div>

                        <button className="cardBtn" onClick={() => {
                            this.props.history.push(`/employees/${this.props.employee.id}`)
                        }}>DETAILS</button>
                        <button className="cardBtn red" onClick={
                            () => {
                                this.setState(
                                    { modalVis: true }
                                )
                            }
                        }>FIRE</button>
                    </div>
                    {
                        this.state.modalVis ? <EmployeeCardModal
                            delete={this.props.delete}
                            employee={this.props.employee}
                            modalVis={this.modalVis} /> : null
                    }
                </div>
            </>
        )
    }
}

export default EmployeeCard
