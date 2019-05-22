import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import OwnerManager from '../modules/OwnerManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'


class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    async componentDidMount() {
        try {
            const newState = {
                animals: await AnimalManager.getAll(),
                owners: await OwnerManager.getAll(),
                employees: await EmployeeManager.getAll(),
                locations: await LocationManager.getAll()
            }
            this.setState(newState)
        } catch (error) {
            console.log(error)
        }
    }


    //function contructor
    functionPackage(mod, resource) {

        return {
            delete: (id) => {
                return mod.removeAndList(id)
                    .then(response => this.setState({
                        [resource]: response
                    })
                    )
            },
            edit: (obj, id) => {
                return mod.editAndList(obj, id)
                    .then(response => this.setState({
                        [resource]: response
                    })
                    )
            },
            add: (obj) => {
                return mod.addAndList(obj)
                    .then(response => this.setState({
                        [resource]: response
                    })
                    )
            }
        }
    }



    render() {
        return (
            <React.Fragment>
                <Route path="/locations" render={(props) => {
                    return <LocationList
                        locations={this.state.locations}
                        //calls function contructor and passes an object of CRUD functions to child as prop
                        functions={this.functionPackage(LocationManager, "locations")} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList
                        animals={this.state.animals}
                        functions={this.functionPackage(AnimalManager, "animals")}
                        owners={this.state.owners}
                    />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList
                        employees={this.state.employees}
                        functions={this.functionPackage(EmployeeManager, "employees")} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList
                        owners={this.state.owners}
                        functions={this.functionPackage(OwnerManager, "owners")} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews