import React, { Component } from 'react'


export class Owner extends Component {

    render() {
        return (
            <div className="owners">
                <h3>{this.props.owner.id}: {this.props.owner.name}</h3>
                <p>{this.props.owner.phoneNumber}</p>
                <button className="cardBtn red" onClick={() => this.props.delete(this.props.animal.id)}>DELETE</button>
            </div>
        )
    }

}
export default Owner
