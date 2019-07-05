import React, {Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {

    render() {
      
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thanks for registering!</h1>
                        <p>Please check your email to confirm your account setup and start using the app!</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }    
}


export default Success;