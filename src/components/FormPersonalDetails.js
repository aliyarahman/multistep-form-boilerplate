import React, {Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="We need just a few more personal details!" />
                    <TextField
                        hintText="Enter your phone number"
                        floatingLabelText="Phone number"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                    />
                    <br />
                    <TextField
                        hintText="Enter your street address"
                        floatingLabelText="Street address"
                        onChange={handleChange('address')}
                        defaultValue={values.address}
                    />
                    <br />
                    <TextField
                        hintText="Enter your city"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        hintText="Enter your state or territory"
                        floatingLabelText="state"
                        onChange={handleChange('state')}
                        defaultValue={values.state}
                    />
                    <br />
                    <TextField
                        hintText="Enter your 5-digit zip code"
                        floatingLabelText="Zip code"
                        onChange={handleChange('zip5')}
                        defaultValue={values.zip5}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }    
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails;