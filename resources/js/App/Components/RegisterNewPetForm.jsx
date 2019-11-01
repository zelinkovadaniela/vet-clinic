import React from 'react';

export default class RegisterNewClientForm extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            species: 'dog',
            breed: '',
            weight: '',
            age: '',
            photo: '',
          }

        this.state = this.initialState;
    }


  onFormSubmit = (data) => {
    const apiUrl = '/api/pets';
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
                <h2>Add a pet</h2>
                <form action="post" className="registerForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
                    
                    <label htmlFor="species">Species:</label>
                    <input type="text" id="species" name="species" value={this.state.species} onChange={(e) => this.setState({species: e.target.value})} />

                    <label htmlFor="breed">Breed:</label>
                    <input type="text" id="breed" name="breed" value={this.state.breed} onChange={(e) => this.setState({breed: e.target.value})} />
                    
                    <label htmlFor="weight">Weight:</label>
                    <input type="text" id="weight" name="weight" value={this.state.weight} onChange={(e) => this.setState({weight: e.target.value})} />
                    
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" name="age" value={this.state.age} onChange={(e) => this.setState({age: e.target.value})} />
                    
                    <label htmlFor="photo">Photo:</label>
                    <input type="file" id="photo" name="photo" value={this.state.photo} onChange={(e) => this.setState({photo: e.target.value})} />
                    
                    <button type="submit">Register</button>
                </form>
            </section>
        )
    }
}