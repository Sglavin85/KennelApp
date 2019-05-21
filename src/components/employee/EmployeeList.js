import React, { Component } from 'react'


export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h1>Employees</h1>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.id}: {employee.name}
                        </div>
                    )
                }
            </section>
        )
    }
}