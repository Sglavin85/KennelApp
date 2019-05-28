import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import OwnerManager from '../modules/OwnerManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'
import AnimalDetail from './animal/AnimalDetail'
import AnimalEditForm from './animal/AnimalEditForm'
import AnimalForm from './animal/AnimalForm'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeEditForm from './employee/EmployeeEditForm'
import Login from './authentication/Login'


class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    async componentDidMount() {
        const newState = {
            animals: await AnimalManager.getAll().catch((_error) => []),
            owners: await OwnerManager.getAll().catch((_error) => []),
            employees: await EmployeeManager.getAll().catch((_error) => []),
            locations: await LocationManager.getAll().catch((_error) => [])
        }
        this.setState(newState)
    }


    functionPackage(mod, resource) {

        return {
            delete: (id) => {
                return mod.removeAndList(id)
                    .then(response => {
                        this.props.history.push(`./${resource}`)
                        this.setState({
                            [resource]: response
                        })
                        console.log("state", this.state)
                    })
            },
            deleteFromDetails: (id) => {
                return mod.removeAndList(id)
                    .then(response => {
                        this.props.history.push(`./`)
                        this.setState({
                            [resource]: response
                        })
                        console.log("state", this.state)
                    })
            },
            edit: (obj, id) => {
                return mod.editAndList(obj, id)
                    .then(response => {
                        this.props.history.push(`./`)
                        this.setState({
                            [resource]: response
                        })
                    })
            },
            add: (obj) => {
                return mod.addAndList(obj)
                    .then(response => {
                        this.props.history.push(`./`)
                        this.setState({
                            [resource]: response
                        })
                    })
            }
        }
    }

    animalFunctions = this.functionPackage(AnimalManager, "animals")
    locationFunctions = this.functionPackage(LocationManager, "locations")
    employeesFunctions = this.functionPackage(EmployeeManager, "employees")
    ownersFunctions = this.functionPackage(OwnerManager, "owners")

    render() {
        return (
            <React.Fragment>
                <Route path="/login" render={(props) => {
                    return <Login {...props}
                        loginState={this.props.loginState}
                    />
                }}
                />
                <Route path="/locations" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props}
                            locations={this.state.locations}
                            functions={this.locationFunctions} />
                    } else {
                        return <Redirect to="/login"
                        />
                    }
                }}
                />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props}
                            animals={this.state.animals}
                            functions={this.animalFunctions}
                            owners={this.state.owners}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalForm {...props}
                            functions={this.animalFunctions}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        let animal = this.state.animals.find(animal =>
                            animal.id === parseInt(props.match.params.animalId)
                        )
                        if (!animal) {
                            animal = {
                                breed: null,
                                id: null,
                                name: null,
                                ownerAnimal: []
                            }
                        }
                        return <AnimalDetail {...props}
                            animal={animal}
                            functions={this.animalFunctions}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
                />
                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                    if (this.isAuthenticated()) {
                        return <AnimalEditForm {...props}
                            employees={this.state.employees}
                            functions={this.animalFunctions}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
                />
                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props}
                            animals={this.state.animals}
                            employees={this.state.employees}
                            functions={this.employeesFunctions} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {

                    if (this.isAuthenticated()) {
                        let employee = this.state.employees.find(employee =>
                            employee.id === parseInt(props.match.params.employeeId)
                        )
                        if (!employee) {
                            employee = {
                                id: null,
                                name: null,
                            }
                        }
                        return <EmployeeDetail {...props}
                            employee={employee}
                            employeeFunctions={this.employeeFunctions}
                            animalFunctions={this.animalFunctions}
                            animals={this.state.animals}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
                />
                <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeEditForm {...props}
                            locations={this.state.locations}
                            functions={this.employeesFunctions}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
                />
                <Route path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerList
                            owners={this.state.owners}
                            functions={this.ownersFunctions} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)