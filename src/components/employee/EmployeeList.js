import React, { Component } from 'react'
import './employee.css'
import EmployeeCard from './EmployeeCard'

export default class EmployeeList extends Component {



    render() {
        return (
            <section className="employees">
                <h1>Employees</h1>
                <button type="button"
                    id="addEmployee"
                    className="cardBtn"
                    onClick={() => {
                        this.props.history.push("/employees/new")
                    }
                    }>
                    NEW EMPLOYEE
            </button>
                <h2>Nashville North</h2>
                {
                    this.props.employees.filter(employee => parseInt(employee.locations.id) === 1).map(employee =>
                        < EmployeeCard {...this.props}
                            employee={employee}
                            delete={this.props.functions.delete}
                        />
                    )
                }
                <h2>Nashville South</h2>
                {
                    this.props.employees.filter(employee => parseInt(employee.locations.id) === 2).map(employee =>
                        <div key={employee.id}>
                            < EmployeeCard {...this.props}
                                employee={employee}
                                delete={this.props.functions.delete}
                            />
                        </div>
                    )
                }
            </section>
        )
    }
}