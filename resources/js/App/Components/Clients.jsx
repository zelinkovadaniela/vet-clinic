import React from 'react';

export default class Clients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: [],
            searchQuery: '',
        }
    }

    componentDidMount() {
        fetch(`/clients/${this.state.searchQuery}`, {
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
            <section>
                <form action="post">
                    <input type="search" onChange={(e) => this.setState({searchQuery: e.target.value})} />
                </form>
            </section>  
        )
    }
}
