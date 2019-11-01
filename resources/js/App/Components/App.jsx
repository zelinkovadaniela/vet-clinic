import React from 'react';
import Clients from './Clients';

export default class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <main>
                <header>
                    <h1>St. Hector's Veterinary Clinic</h1>
                    <img src="/public/mainImage.jpg" alt="St. dog"/>
                </header>
               
                {/* <Clients /> */}
            </main>
        )
    }
}