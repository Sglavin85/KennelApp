import React, { Component } from 'react'
import OwnerCards from './OwnerCards.js'

export default class OwnerList extends Component {

    render() {
        return (
            <div>
                <h1>Owners</h1>
                <section className="owners">
                    {
                        this.props.owners.map(owner =>
                            <div key={owner.id}>
                                <OwnerCards
                                    owner={owner}
                                />
                            </div>
                        )
                    }
                </section>
            </div>
        )
    }
}