import React, { Component } from 'react'

export class Owner extends Component {
    render() {
        return (
            this.props.owners.map(owner =>
                <h3 className="owner" key={owner[0].id}>{owner[0].name}</h3>
            )
        )
    }
}

export default Owner
