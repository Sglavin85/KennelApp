import React, { Component } from 'react'

export default class Kennel extends Component {
    render() {
        return (
            <section className="locations">
                <h1>Locations</h1>
                {
                    this.props.locations.map(location =>
                        <div className="locations" key={location.id}>
                            <h2>{location.name}</h2>
                            <h3>{location.address}</h3>
                            <br />
                        </div>
                    )
                }
            </section>
        )
    }
}