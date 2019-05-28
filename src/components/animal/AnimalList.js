import React, { Component } from 'react'
import AnimalCards from './AnimalCards'
import "./animal.css"

export default class AnimalsList extends Component {

    render() {
        return (
            <>
                <div className="animalButton animal">
                    <h1>Animals</h1>
                    <button type="button"
                        id="add"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
            </button>
                </div>
                <div>
                    <section className="animals animal">
                        {
                            this.props.animals.map(animal =>
                                <div key={animal.id} className="card">
                                    <AnimalCards {...this.props}
                                        animal={animal}
                                        owner={this.props.owners}
                                        delete={this.props.functions.delete}
                                    />
                                </div>
                            )
                        }
                    </section>
                </div>
            </>
        )
    }
}