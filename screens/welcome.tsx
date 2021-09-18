import React, { useState, useEffect } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, Check } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "../styles/welcome";
import { Platform } from "react-native";
import { TextInput } from "react-native-paper";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin'
import Video from 'react-native-video';

const slides = {
    en: [
        {
            key: 1,
            title: 'Welcome to Diningbold',
            subtitle: 'Welcome to the land of good food and fresh drinks.',
            text: 'We prepared you fancy dishes that you can create right in your kitchen. From simple to professional you can prepare what you want without having to order food. Do you want to invite your friends to a movie tonight? Cook something tasty and amaze them.',
            image: require('../assets/images/diningbold_mainapplogo.png'),
            backgroundColor: 'yellow',
            //  videoUrl: 'https://firebasestorage.googleapis.com/v0/b/foodapp-2021.appspot.com/o/video6.mp4?alt=media&token=244b482d-5bd0-40d6-9069-9f3acc2ad323',
            backgroundImage: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
        },
        {
            key: 2,
            title: 'Learn to cook like a chef',
            subtitle: 'So you like cooking, huh?',
            text: 'With our 5000+ professional recipes you can exercise your cooking skills, and who knows? Maybe one day you’ll become a successful chef. Just write a shopping list, buy all your ingredients and go cook something you like. ',
            image: require('../assets/images/diningbold_mainapplogo.png'),
            backgroundColor: '#59b2ab',
            videoUrl: 'https://firebasestorage.googleapis.com/v0/b/foodapp-2021.appspot.com/o/video.mp4?alt=media&token=39f500ba-d397-4137-9a28-68f0e7b80447',
            backgroundImage: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
        },
        {
            key: 3,
            title: 'Add your recipes to Diningbold',
            subtitle: 'Save your recipes privately or publicly',
            text: 'Create a free account and add your recipes to Diningbold and store them in a safe place, share them with your friends and family or with the comunity.',
            image: require('../assets/images/diningbold_mainapplogo.png'),
            backgroundColor: '#59b2ab',
            //videoUrl: 'https://firebasestorage.googleapis.com/v0/b/foodapp-2021.appspot.com/o/home_carousel%2Fproduction%20ID%204783679.mp4?alt=media&token=83223a0a-4a66-4a10-9752-3722d8df8ac0',
            backgroundImage: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
        },
        {
            key: 4,
            isSignup: true,
            image: require('../assets/images/diningbold_mainapplogo.png'),
            backgroundColor: 'white',
            //backgroundImage: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80'
        }]
};

function WelcomeScreen({ navigation }) {
    return (
        <AppIntroSlider renderItem={_renderItem} data={slides.en} onDone={() => navigation.navigate('default')} nextLabel="Next" />
    )
}

function _renderItem({ item }) {
    const createAccount = () => {
        console.log('buttonClicked')
    }

    if (item.isSignup != null) {
        return (
            <View style={[{ backgroundColor: 'white' }, {
                width: '100%',
                height: '100%',
            }]}>

                <View style={{ backgroundColor: 'white', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{
                        position: 'absolute',
                        top: Platform.OS == 'ios' ? 80 : 40,
                        height: 22,
                        width: 120,
                        alignSelf: 'center',
                    }} source={require('../assets/images/diningbold_mainapplogo_black.png')} />

                    <View style={{ alignSelf: 'center', width: '80%', height: '50%', borderRadius: 5 }}>

                        <Text style={{ color: '#333333', fontSize: 22, padding: 30, alignSelf: 'center' }}>Create an Account</Text>

                        <TextInput
                            label="Full Name"
                            // value={this.state.email}
                            style={{
                                borderRadius: 10,
                                overflow: 'hidden',
                                marginTop: 20,
                                backgroundColor: '#fff',
                                borderColor: '#999999',
                                borderWidth: 1
                            }}
                            theme={{ roundness: 10, colors: { accent: '#fff', surface: '#fff', backdrop: '#fff' } }}
                            underlineColor='white'

                        //     onChangeText={text => this.emailChanged(text)}
                        />

                        <TextInput
                            label="Email Address"
                            // value={this.state.email}
                            style={{
                                borderRadius: 10,
                                overflow: 'hidden',
                                marginTop: 20,
                                backgroundColor: '#fff',
                                borderColor: '#999999',
                                borderWidth: 1
                            }}
                            theme={{ roundness: 10, colors: { accent: '#fff', surface: '#fff', backdrop: '#fff' } }}
                            underlineColor='white'

                        //     onChangeText={text => this.emailChanged(text)}
                        />

                        <TextInput
                            label="Choose a password"
                            //  value={this.state.password}
                            style={{
                                borderRadius: 10,
                                overflow: 'hidden',
                                marginTop: 20,
                                backgroundColor: '#fff',
                                borderColor: '#999999',
                                borderWidth: 1
                            }}
                            theme={{ roundness: 10, colors: { accent: '#fff', surface: '#fff', backdrop: '#fff' } }}
                            underlineColor='white'
                            secureTextEntry={true}

                        // onChangeText={text => this.passwordChanged(text)}
                        />
                    </View>



                </View>
            </View>
        )
    } else return (
        <ImageBackground source={{ uri: item.backgroundImage }} style={[{ backgroundColor: item.backgroundColor }, styles.container]}>

            <Video source={{ uri: item.videoUrl }}   // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref
                }}                                      // Store reference
                onBuffer={() => { }}                // Callback when remote video is buffering
                onError={() => { }}
                muted={true}
                repeat={true}
                resizeMode='cover'
                style={styles.backgroundVideo} />

            <View style={[{ backgroundColor: 'rgba(0,0,0,0.6)' }, styles.container]}>

                <Image style={styles.image} source={item.image} />

                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.subtitle}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </ImageBackground>
    )
}


export default WelcomeScreen