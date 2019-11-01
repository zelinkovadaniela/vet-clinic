import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status == 'success') {
                this.props.onLoginSuccess(data.data.token);
            }
        });
    }

    render() {
        return (
            <div className="loginBox">
                <form action="post" onSubmit={ this.handleSubmit }>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" onChange={(e) => this.setState({email: e.target.value})} />
                    
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={(e) => this.setState({password: e.target.value})} />

                    <button type="submit">Log in</button>
                </form>
            </div>
        )
    }
}