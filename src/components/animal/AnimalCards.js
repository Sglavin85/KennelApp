import React, { Component } from 'react'
import dog from "./DogIcon.svg"
import "./animal.css"
import AnimalCardModal from './AnimalCardModal'

export class Owner extends Component {
    state = {
        modalVis: false
    }



    modalVis = () => {
        this.setState({ modalVis: false })
    }


    render() {
        return (
            <div className="container">
                <div className="card-body">
                    <div className="card-title">
                        <img src={dog} alt="dog" className="dog" />
                        <h2>
                            {this.props.animal.name}
                        </h2>
                        <h6>{this.props.animal.breed}</h6>

                        <button className="cardBtn" onClick={() => {
                            this.props.history.push(`/animals/${this.props.animal.id}`)
                        }}>DETAILS</button>
                        <button className="cardBtn" onClick={() => {
                            this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                        }}
                        >EDIT</button>
                        <button className="cardBtn red del" onClick={
                            () => {
                                this.setState(
                                    { modalVis: true }
                                )
                            }
                        }
                        >DELETE</button>
                    </div>
                </div>
                {
                    this.state.modalVis ? <AnimalCardModal
                        {...this.props}
                        delete={this.props.delete}
                        animalID={this.props.animal.id}
                        modalVis={this.modalVis}
                        owners={this.owners} /> : null
                }
            </div>
        )
    }

}
export default Owner
