import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import pages
import LoginScreen from '../auth/login';
import SignupScreen from '../auth/signup';

//firebase
import auth, { firebase } from '@react-native-firebase/auth';

import { View, Text, ImageBackground, TouchableHighlight, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../auth/styles/account';

const Stack = createNativeStackNavigator();

function Account({ navigation }) {
    return (
        <ScrollView style={{ height: '100%' }}>
            <View style={styles.accountRect}>
                <View style={{ padding: 10 }}>
                    <Image style={{ width: 100, height: 100, borderRadius: 100 }} source={{ uri: 'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }} />
                </View>
                <View style={{}}>
                    <Text style={styles.displayNameText}>Trevor Daniel</Text>
                    <Text style={styles.usernameText}>@daniel</Text>
                </View>
            </View>

            <View style={styles.accountActionCard}>
                <Text style={styles.cardTitle}>Account actions</Text>
                <View style={styles.cardBody}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity style={styles.manageButtonOverlay} onPress={() => { }}>
                                <Text style={{ padding: 5, color: 'dodgerblue' }}>View your public profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity style={styles.manageButtonOverlay} onPress={() => { firebase.auth().signOut() }}>
                                <Text style={{ padding: 5, color: 'red' }}>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.accountActionCard}>
                <Text style={styles.cardTitle}>Subscriptions and billing</Text>
                <View style={styles.cardBody}>

                    <View style={styles.subscriptionItem}>
                        <Text style={styles.subscriptionItemTitle}>Diningbold Premium</Text>
                        <Text style={styles.subscriptionItemPeriod}>Since July 2020</Text>

                        <TouchableOpacity style={styles.manageButtonOverlay} onPress={() => { }}>
                            <Text style={styles.manageButtonText}>Manage Subscription</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subscriptionItem}>
                        <Text style={styles.subscriptionItemTitle}>Diningbold VIP</Text>
                        <Text style={styles.subscriptionItemPeriod}>Since July 2020</Text>

                        <TouchableOpacity style={styles.manageButtonOverlay} onPress={() => { }}>
                            <Text style={styles.manageButtonText}>Manage Subscription</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 30 }}>
                        <Image source={require('../assets/images/food_001.png')} style={{ width: '60%', height: 150, tintColor: '#333333' }} />
                        <Text style={{ fontSize: 18, marginTop: 15 }}>Do you have a Diningbold Gift Code?</Text>
                        <TouchableOpacity style={styles.manageButtonOverlay} onPress={() => { }}>
                            <Text style={{ padding: 5, color: 'dodgerblue' }}>Redeem it here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



        </ScrollView>
    )
}

class AccountScreen extends React.Component {
    state = {
        isAuthenticated: false,
        currentScreen: '',
        user: '',
        isSignout: true
    }

    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            this.setState({ user: user })
        })
    }

    componentWillUnmount() {
        //TODO: cancel subscriptions
    }

    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {this.state.user == null ? (
                    // No token found, user isn't signed in
                    <Stack.Screen
                        name="SignIn"
                        component={LoginScreen}
                        options={{
                            title: 'Sign in',
                            // When logging out, a pop animation feels intuitive
                            // You can remove this if you want the default 'push' animation
                            animationTypeForReplace: this.state.isSignout ? 'pop' : 'push',
                        }}
                    />
                ) : (
                    // User is signed in
                    <Stack.Screen name="default" component={Account} />
                )}
            </Stack.Navigator>
        )
    }
}

export default AccountScreen