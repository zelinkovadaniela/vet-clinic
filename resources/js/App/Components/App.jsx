import React from 'react';
import Clients from './Clients';
import '../../../../public/css/app.css';
import Client from './Client';
import LoginFrom from './LoginForm';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginBoxOpen: false,
        }
    }

    render() {
        return (
            <main>
                <div className="backgroundImage" />
                <header>
                    <div className="loginBoxWrapper">
                        <div className="loginToggle clickable" onClick={() => this.setState({loginBoxOpen: !this.state.loginBoxOpen})}>log in</div>
                        {this.state.loginBoxOpen &&
                            <LoginFrom />
                        }
                    </div> 
                </header>
                <section>
                
                <h1>St. Hector's Veterinary Clinic</h1>
                </section>
                
               
                <Clients />
               <hr />
               <Client />
               <div className="backgroundImage" />
            </main>
        )
    }
}