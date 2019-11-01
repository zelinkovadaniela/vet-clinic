import React from 'react';
import RegisterNewPetForm from './RegisterNewPetForm';

export default class Clients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: [],
            searchQuery: '',
            showClient: null,
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
            this.setState({clients: data})
        });
    }

    render() {
        const currentClient = this.state.clients.find((client) => client.id === this.state.showClient);
        
        return (
            <section>

                {
                    !currentClient?
                    <>
                        <form action="post" onSubmit={this.handleSubmit}>
                            <input className="searchBox" type="search" onChange={(e) => this.setState({searchQuery: e.target.value})} />
                        </form>

                        {!!this.state.clients.length &&
                            <div>
                                <h2>Clients found</h2>
                                {this.state.clients.map((client) => (
                                    <div className="clickable clientWrapper" key={client.id} onClick={() => this.setState({showClient: client.id})}>
                                        <h3>{client.first_name} {client.surname}</h3>
                                        <a href={`mailto:${client.email}`}>{client.email}</a>
                                        <a href={`tel:${client.phone}`}>{client.phone}</a>
                                    </div>
                                ))}
                            </div>
                        }
                    </>
                    :
                    <div>
                        <div className="clientWrapper">
                                        <h3>{currentClient.first_name} {currentClient.surname}</h3>
                                        <a href={`mailto:${currentClient.email}`}>{currentClient.email}</a>
                                        <a href={`tel:${currentClient.phone}`}>{currentClient.phone}</a>
                                    </div>
                        <RegisterNewPetForm />
                    </div>
                }
               
            </section>  
        )
    }
}
