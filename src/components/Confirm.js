import React, {Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Process form//
        this.props.nextStep();
    };

    render() {
        const { values: {firstName, lastNames, email, phone, address, city, state, zip5 } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Are you sure you want to submit?" />   
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText= { firstName }
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText= { lastNames }
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText= { email }
                        />
                        <ListItem
                            primaryText="Phone"
                            secondaryText= { phone }
                        />
                        <ListItem
                            primaryText="Street address"
                            secondaryText= { address }
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText= { city }
                        />
                        <ListItem
                            primaryText="State"
                            secondaryText= { state }
                        />
                        <ListItem
                            primaryText="Zip"
                            secondaryText= { zip5 }
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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

export default Confirm;