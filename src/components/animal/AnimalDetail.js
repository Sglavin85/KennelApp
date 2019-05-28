import React, { Component } from "react"
import "./animal.css"
import dog from "./DogIcon.svg"
import AnimalCardModal from './AnimalCardModal'
import OwnerManager from '../../modules/OwnerManager';


export default class AnimalDetail extends Component {
    state = {
        owners: [],
        modalVis: false
    }

    modalVis = () => {
        this.setState({ modalVis: false })
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
            <section className="animal">
                <div key={this.props.animal.id} className="detailCard">
                    <div className="detailCardBody">
                        <h4 className="card-title">
                            <img src={dog} alt="dog" className="detailImg" />
                            {this.props.animal.name}
                        </h4>
                        <h6 className="card-title">{this.props.animal.breed}</h6>
                        <h4>Owners:</h4>
                        {
                            this.state.owners.map((owner, i) =>
                                <h5 key={i}>{owner}</h5>
                            )
                        }
                        <button className="cardBtn green" onClick={() => {
                            this.props.history.push(`/animals`)
                        }}>GO BACK</button>
                        <button className="cardBtn red del" onClick={
                            () => {
                                this.setState(
                                    { modalVis: true }
                                )
                            }
                        }
                            disabled={this.state.saveDisabled}
                        >DELETE</button>
                    </div>
                </div>
                {
                    this.state.modalVis ? <AnimalCardModal
                        delete={this.props.functions.deleteFromDetails}
                        animalID={this.props.animal.id}
                        modalVis={this.modalVis}
                        owners={this.owners} /> : null
                }
            </section>
        )
    }
}