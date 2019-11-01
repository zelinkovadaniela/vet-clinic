import React from 'react';

export default class RegisterNewClientForm extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            first_name: '',
            surname: '',
            address: '',
            phone: '',
            email: '',
          }

        this.state = this.initialState;
    }


  onFormSubmit = (data) => {
    const apiUrl = '/api/owners';

    console.log(data)
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    };

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(result => {
       console.log(result);
       console.log(data);
       this.props.handleSetClient(result);
      },
      (error) => {
        this.setState({ error });
      }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.onFormSubmit(this.state);
    this.setState(this.initialState);
  }


    render() {
        return(
            <section>
                <h2>Register New Client</h2>
                <form action="post" className="registerForm" onSubmit={this.handleSubmit}>
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