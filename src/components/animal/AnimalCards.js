import React, { Component } from 'react'
import OwnerManager from '../../modules/OwnerManager';
import dog from "./DogIcon.svg"
import "./animal.css"

export class Owner extends Component {
    state = {
        owners: []
    }

    componentDidMount() {
        const owners = this.props.animal.ownerAnimal.map(relationship =>
            OwnerManager.get(relationship.ownerId)
                .then(owner => {
                    return owner.name
                }))
        Promise.all(owners)
            .then(names => this.setState({
                owners: names
            }))
    }



    render() {
        return (
            <div className="card-body">
                <div className="card-title">
                    <img src={dog} alt="dog" className="dog" />
                    <h2>{this.props.animal.name}</h2>
                    <h4>Owners:</h4>
                    {
                        this.state.owners.map((owner, i) =>
                            <h5 key={i}>{owner}</h5>
                        )
                    }
                    <button className="cardBtn" onClick={() => this.props.delete(this.props.animal.id)}>DELETE</button>
                    <button className="cardBtn">DETAILS</button>
                </div>
            </div>
        )
    }

}
export default Owner
