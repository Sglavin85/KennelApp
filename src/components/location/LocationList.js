import React, { Component } from 'react'

export default class Kennel extends Component {
    render() {
        console.log(this.props)
        return (
            <section className="locations">
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <h1>{location.name}</h1>
                            <h2>{location.address}</h2>
                            <br />
                        </div>
                    )
                }
            </section>
        )
    }
}