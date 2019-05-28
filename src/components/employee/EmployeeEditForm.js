import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"

export default class EmployeeEditForm extends Component {
    state = {
        name: "",
        address: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        locationsId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()

        if (this.state.employee === "") {
            window.alert("Please select a caretaker");
        } else {
            const editedEmployee = {
                id: parseInt(this.props.match.params.employeeId),
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                phone: this.state.phone,
                email: this.state.email,
                locationsId: parseInt(this.state.locationsId)
            };

            this.props.functions.edit(editedEmployee, this.props.match.params.employeeId)
                .then(() => this.props.history.push("/employees"))
        }
    }

    componentDidMount() {
        EmployeeManager.get(this.props.match.params.employeeId)
            .then(employee => {
                this.setState({
                    id: employee.id,
                    name: employee.name,
                    address: employee.address,
                    city: employee.city,
                    state: employee.state,
                    phone: employee.phone,
                    email: employee.email,
                    locationsId: employee.locationsId
                });
            });
    }


    render() {
        return (
            <React.Fragment>
                <form className="form">
                    <h1>Edit Employee</h1>
                    <div className="form-group">
                        <label htmlFor="name">Employee name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="address"
                            value={this.state.address}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="city"
                            value={this.state.city}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="state"
                            placeholder="ex: TN"
                            value={this.state.state}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phone"
                            placeholder="***-***-****"
                            value={this.state.phone}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail Address</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="email"
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to location</label>
                        <select
                            name="location"
                            id="locationsId"
                            onChange={this.handleFieldChange}
                            value={this.state.locationsId}
                        >
                            <option value="">Select a location</option>
                            {this.props.locations.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.updateExistingEmployee}
                        className="btn btn-primary"
                    >
                        Submit
            </button>
                </form>
            </React.Fragment>
        );
    }
}