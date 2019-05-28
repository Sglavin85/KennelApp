import React, { Component } from "react"
import "./employee.css"
import AnimalCard from '../animal/AnimalCards'


export default class EmployeeDetail extends Component {
    state = {
        modalVis: false,
        animals: []
    }

    modalVis = () => {
        this.setState({ modalVis: false })
    }

    componentDidMount() {
        const filterAnimal = this.props.animals.filter(animal => parseInt(animal.employeeId) === parseInt(this.props.employee.id))
        this.setState({ animals: filterAnimal })

    }


    render() {
        console.log(this.animals)
        return (
            <section className="employee">
                <div key={this.props.employee.id} className="detailCard">
                    <div className="detailCardBody">
                        <h1 className="card-title">
                            {this.props.employee.name}
                        </h1>
                        <div className="employeeInfo">

                            <h5>Address: {this.props.employee.address} {this.props.employee.city}, {this.props.employee.state}</h5>
                            <h5>Phone Number: {this.props.employee.phone}</h5>
                            <h5>Email: {this.props.employee.email}</h5>
                        </div>
                        <h4>Assigned Animals:</h4>
                        <div class="assignedAnimals">

                            {

                                !!this.state.animals.length ? this.state.animals.map(animal =>

                                    <div key={animal.id} className="employeeAnimalcard">
                                        <AnimalCard {...this.props}
                                            animal={animal}
                                            owner={this.props.owners}
                                            delete={this.props.animalFunctions.delete} />

                                    </div>

                                ) : <h2>This employee has no assigned animals</h2>


                            }
                        </div>
                        <div className="btnDiv">
                            <button className="cardBtn green" onClick={() => {
                                this.props.history.push(`/employees/${this.props.employee.id}/edit`)
                            }
                            }>EDIT</button>
                            <button className="cardBtn green employeeDetailBack" onClick={() => {
                                this.props.history.push(`/employees`)
                            }}>GO BACK</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}