import React from 'react';

export default class Clients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: [],
            searchQuery: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/api/owners/search/${this.state.searchQuery}`, {
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
                <form action="post" onSubmit={this.handleSubmit}>
                    <input className="searchBox" type="search" onChange={(e) => this.setState({searchQuery: e.target.value})} />
                </form>
            </section>  
        )
    }
}
