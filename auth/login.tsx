import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, TouchableOpacity, TouchableHighlight } from 'react-native'
import styles from "./styles/login";
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth'

class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
        passwordReady: false,
        emailReady: false,
        isReady: false
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    emailChanged(text) {
        this.setState({ email: text })
        if (this.validateEmail(text)) {
            this.setState({ emailReady: true })
        } else {
            this.setState({ emailReady: true })
        }

        if (this.state.emailReady && this.state.passwordReady) {
            this.setState({ isReady: true })
        } else {
            this.setState({ isReady: false })
        }
    }

    passwordChanged(text) {
        this.setState({ password: text })
        if (text.length <= 8) {
            this.setState({ passwordReady: true })
        } else {
            this.setState({ passwordReady: true })
        }

        if (this.state.emailReady && this.state.passwordReady) {
            this.setState({ isReady: true })
        } else {
            this.setState({ isReady: false })
        }
    }

    render() {
        return (
            <ImageBackground style={styles.root} source={{ uri: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }}>
                <View style={styles.overlay}>
                    <Text style={styles.title}>Sign In</Text>
                    <Text style={styles.text}>Log into your account to view your tasty recipes. Don’t you have an account?</Text>
                    <TouchableOpacity style={styles.highlight}><Text style={{ fontWeight: 'bold', color: 'aqua' }}>Create one now </Text></TouchableOpacity>

                    <TextInput
                        label="Email address"
                        value={this.state.email}
                        style={styles.textInput}
                        theme={{ roundness: 10, colors: { accent: '#fff', surface: '#fff', backdrop: '#fff' } }}
                        underlineColor='white'

                        onChangeText={text => this.emailChanged(text)}
                    />

                    <TextInput
                        label="Password"
                        value={this.state.password}
                        style={styles.textInput}
                        theme={{ roundness: 10, colors: { accent: '#fff', surface: '#fff', backdrop: '#fff' } }}
                        underlineColor='white'
                        secureTextEntry={true}

                        onChangeText={text => this.passwordChanged(text)}
                    />

                    <TouchableOpacity onPress={() => {
                        auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
                            console.log('User account signed in!');
                        })
                            .catch(error => {
                                if (error.code === 'auth/email-already-in-use') {
                                    console.log('That email address is already in use!');
                                }

                                if (error.code === 'auth/invalid-email') {
                                    console.log('That email address is invalid!');
                                }

                                console.error(error);
                            });
                    }} disabled={!this.state.isReady} style={this.state.isReady ? styles.button : styles.buttonNotReady}>
                        <Text style={styles.buttonText}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default LoginScreen