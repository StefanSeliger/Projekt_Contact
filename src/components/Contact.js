import React, { Component } from 'react';
import ContactItems from './ContactItems.js';
import contacts from './contacts.json'
import { v4 as uuidv4 } from 'uuid';

class Contact extends React.Component {
    state = {
        topFiveArray : contacts.slice(0,5),
        randomContact : contacts,
    }
    
    handleRandomContact = () => {
        this.setState({ topFiveArray: this.state.topFiveArray.concat(this.state.randomContact[Math.floor(Math.random()*contacts.length)]) });
    }

    handleSortNames = () => {
        console.log("click")
        this.setState({ topFiveArray: this.state.topFiveArray.sort((a,b) => (a.name > b.name) ? 1:-1)});
    }

    handleSortPopularity = () => {
        this.setState({ topFiveArray: this.state.topFiveArray.sort((a,b) => b.popularity - a.popularity) });
    }

    render() {
        return (
            <section className="contact">
                <button onClick={this.handleRandomContact}>Add random Contact</button>
                <button onClick={this.handleSortNames}>A-Z</button>
                <button onClick={this.handleSortPopularity}>Sort Popularity</button>
                {
                    this.state.topFiveArray.map(elt =>
                        <ContactItems
                            key={uuidv4()}
                            name={elt.name}
                            pictureUrl={elt.pictureUrl}
                            popularity={elt.popularity}
                        />)
                }
            </section>

        );
    }
}

export default Contact;