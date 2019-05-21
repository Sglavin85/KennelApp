import React, { Component } from 'react'
import Owner from './Owner'

export default class AnimalsList extends Component {
    getOwner(animalobj) {
        const ownersArray = []
        var animalOwnerId = this.props.relationships.filter(relationship =>
            relationship.animalId === animalobj.id)
        console.log("relates", animalOwnerId)
        animalOwnerId.forEach(animalOwner => {
            ownersArray.push(this.props.owners.filter(owner =>
                owner.id === animalOwner.ownerId))
        });
        return ownersArray

    }

    render() {
        return (
            <section className="animals">
                <h1>Animals</h1>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            <h1>{animal.id}: {animal.name}, {animal.breed}</h1>
                            <span>Owners:
                                <Owner
                                    owners={this.getOwner(animal)}
                                />
                            </span>
                        </div>
                    )
                }
            </section>
        )
    }
}