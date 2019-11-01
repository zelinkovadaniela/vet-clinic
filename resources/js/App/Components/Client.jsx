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
            Client
        </section>
        : 
        <RegisterNewClientForm />
    }
}