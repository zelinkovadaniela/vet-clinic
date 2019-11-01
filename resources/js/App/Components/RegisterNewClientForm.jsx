import React from 'react';
import '../../../../public/css/app.css';

export default class RegisterNewClientForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            surname: '',
            address: '',
            phone: '',
            email: '',
        }
    }


    render() {
        return(
            <section>
                <h2>Register New Client</h2>
                <form action="post" className="registerForm">
                    <label htmlFor="first_name">First name:</label>
                    <input type="text" id="first_name" name="first_name" value={this.state.first_name} onChange={(e) => this.setState({first_name: e.target.value})} />
                    
                    <label htmlFor="surname">Surname:</label>
                    <input type="text" id="surname" name="surname" value={this.state.surname} onChange={(e) => this.setState({surname: e.target.value})} />
                    
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={this.state.address} onChange={(e) => this.setState({address: e.target.value})} />
                    
                    <label htmlFor="phone">Phone:</label>
                    <input type="phone" id="phone" name="phone" value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})} />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                    
                    <button type="submit">Register</button>
                </form>
            </section>
        )
    }
}