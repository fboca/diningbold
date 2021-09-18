import React, { useState, useEffect } from 'react'
import { Dimensions, ImageBackground, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

//import components
import { View, Text, Button } from 'react-native'
import Carousel from 'react-native-snap-carousel';

//import styles
import styles from '../styles/home'

import auth from '@react-native-firebase/auth'
import CustomFontsProvider, { useCustomFont } from "react-native-custom-fonts";
import PropTypes from "prop-types";


export class HomeCarousel extends React.Component {
    state = {
        activeIndex: 0,
        entries: {
            unauthenticated: [
                {
                    title: "Welcome to Diningbold",
                    button: true,
                    text: "Welcome to the land of good food and fresh drinks. We prepared you fancy dishes that you can create right in your kitchen. From simple to professional you can prepare what you want without having to order food. Do you want to invite your friends to a movie tonight? Cook something tasty and amaze them.",
                    buttonText: "Create a free account",
                    buttonAction: 'createAccount:02',
                    image: "https://firebasestorage.googleapis.com/v0/b/foodapp-2021.appspot.com/o/home_images%2Festudio-bloom-ezqnxsqUZ80-unsplash.jpg?alt=media&token=bd00b601-29e5-4ea1-98fa-e96d5ea976ba", //cutitu n pita
                },
                {
                    title: "Diningbold Strong Breakfast",
                    button: true,
                    text: "Breakfast is often called ‘the most important meal of the day’, and for good reason. As the name suggests, breakfast breaks the overnight fasting period. It replenishes your supply of glucose to boost your energy levels and alertness, while also providing other essential nutrients required for good health.",
                    buttonText: "View recipe pack",
                    buttonAction: 'goTo:free_002',
                    image: "https://firebasestorage.googleapis.com/v0/b/foodapp-2021.appspot.com/o/home_images%2Fstoica-ionela-uagi76qlCdg-unsplash.jpg?alt=media&token=269ddc2b-b72f-4805-b04a-6f9071c88b41", //sunca langa ou
                },
                {
                    title: "Get rewarded!",
                    button: true,
                    text: "Invite your firends to Diningbold and you both will get access to premium recipe packs and special contentent. ",
                    buttonText: "Share to friends",
                    buttonAction: 'share:01',
                    image: "https://firebasestorage.googleapis.com/v0/b/foodapp-2021.appspot.com/o/home_images%2Fstefan-vladimirov-Q_Moi2xjieU-unsplash.jpg?alt=media&token=e50150ad-f72d-4367-859e-4469d5e4f6dd", //dinneru
                }
            ],
            authenticated: [

            ]
        }
    }

    _renderItem = ({ item, index }) => {
        if (item.button) {
            return (
                <ImageBackground source={{ uri: item.image }} style={styles.homescreenContainer}>
                    <View style={styles.homescreenContainerOverlay}>
                        <Text style={styles.homescreenContainerTitle}>{item.title}</Text>
                        <Text style={styles.homescreenContainerText}>{item.text}</Text>

                        <TouchableOpacity style={styles.homeCarouselButtton}>
                            <Text style={styles.HomeCarouselButtonText}>{item.buttonText}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            );
        } else {
            return (
                <ImageBackground source={{ uri: item.image }} style={styles.homescreenContainer}>
                    <View style={styles.homescreenContainerOverlay}>
                        <Text style={styles.homescreenContainerTitle}>{item.title}</Text>
                        <Text style={styles.homescreenContainerText}>{item.text}</Text>
                    </View>
                </ImageBackground>
            );
        }
    }

    render() {
        return (
            <Carousel
                //ref={(c) => { this._carousel = c; }}
                data={this.props.isAuthenticated ? this.state.entries.authenticated : this.state.entries.unauthenticated}
                renderItem={this._renderItem}
                autoplay={false}
                autoplayDelay={1000}
                autoplayInterval={5000}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                onEndReached={() => this.setState({ activeIndex: 0 })}
                onSnapToItem={index => this.setState({ activeIndex: index })}
            />
        );
    }
}

function HomeScreen({ navigation }) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="small" color="#0000ff" />
        </View>
    );

    if (!user) {
        return (
            <View style={styles.root}>

                <HomeCarousel isAuthenticated={false} />
                <View style={styles.categoryPicker}>

                </View>

            </View>
        );
    }

    return (
        <View style={styles.root}>

            <HomeCarousel isAuthenticated={true} user={user} />
            <View style={styles.categoryPicker}>

            </View>

        </View>
    )
}

export default HomeScreen