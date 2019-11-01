import React from 'react';

export default class Clients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        fetch('/clients', {
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });
    }

    render() {
        return (
            <h1>List of Clients</h1>
        )
    }
}
