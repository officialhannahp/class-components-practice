import React, { Component } from 'react'

export default class HockeyTeam extends Component {
    render() {
        let {teamName, homeTown, wins,loses, otl} = this.props
        return (
            <div>
                <h3>{teamName}</h3>
                <p>{homeTown}A</p>
                <h4>Record</h4>
                <p>{wins}-{loses}-{otl}</p>
            </div>
        )
    }
}
