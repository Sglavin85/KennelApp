import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]

    ownerAnimalJoin = [
        { id: 1, ownerId: 1, animalId: 1 },
        { id: 2, ownerId: 2, animalId: 1 },
        { id: 3, ownerId: 3, animalId: 2 },
        { id: 4, ownerId: 4, animalId: 2 },
        { id: 5, ownerId: 5, animalId: 3 },
        { id: 6, ownerId: 6, animalId: 3 }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI,
        relationships: this.ownerAnimalJoin
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/locations" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList
                        animals={this.state.animals}
                        owners={this.state.owners}
                        relationships={this.state.relationships} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews