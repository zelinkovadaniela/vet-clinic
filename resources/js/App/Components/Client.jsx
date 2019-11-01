import React from 'react';
import RegisterNewClientForm from './RegisterNewClientForm';

export default class Client extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showClient: null,
        }
    }

    render() {
        return this.state.showClient ?
        <section>
            {console.log(this.state.showClient)}
        </section>
        : 
        <RegisterNewClientForm handleSetClient={(client) => this.setState({showClient: client})} />
    }
}