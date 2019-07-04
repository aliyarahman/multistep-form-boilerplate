import React, {Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Confirm';


export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastNames: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }


    // Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    render() {
        const { step } = this.state;
        const { firstName, lastNames, email, phone, address, city, state, zip} = this.state;
        const values = { firstName, lastNames, email, phone, address, city, state, zip};

        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails

                    />
                );
            case 3: 
                return (
                    <Confirm

                    />
                );
            case 4: 
                return (
                    <Success 

                    />
            );
            default: return (<h1>Oops!</h1>);
        }
    }
}

export default UserForm;