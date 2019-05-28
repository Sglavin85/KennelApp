import React, { Component } from 'react'
import "./animal.css"


export class AnimalCardModal extends Component {


    render() {
        console.log(this.props)
        return (
            <div className="modal">
                <div className="modalCard">
                    <h2>Are you sure you want to kill this defenseless puppy?</h2>
                    <button className="yesBtn cardBtn red" onClick={
                        () => {
                            this.props.delete(this.props.animalID)
                        }
                    }>YES</button>
                    <button className="noBtn cardBtn" onClick={
                        () => {
                            this.props.modalVis()
                        }
                    }>NO</button>
                </div>
            </div >
        )
    }
}

export default AnimalCardModal
