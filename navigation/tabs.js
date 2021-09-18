import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, Platform } from 'react-native'

import HomeScreen from '../screens/home';
import ListScreen from '../screens/list';
import AccountScreen from '../screens/account';
import styles from '../styles/home';

function LogoTitle() {
    return (
        <TouchableOpacity onPress={() => { }}>
            <Image
                style={{ width: 130, height: 25 }}
                source={require("../assets/images/diningbold_mainapplogo.png")}
            />
        </TouchableOpacity>
    );
}

const Tab = createBottomTabNavigator()


const tabStyle = StyleSheet.create({
    bottomTabView: {
        justifyContent: 'center',
        alignItems: 'center',
        top: Platform.OS === 'ios' ? 15 : 0
    },
    tabNav: {
        position: Platform.OS === 'ios' ? 'absolute' : 'relative',

        backgroundColor: 'white',
        borderRadius: Platform.OS === 'ios' ? 10 : 0,

        height: 70,

        bottom: Platform.OS === 'ios' ? 25 : 0,
        left: Platform.OS === 'ios' ? 20 : 0,
        right: Platform.OS === 'ios' ? 20 : 0,
    }
})

const Tabs = (props) => {
    const activeColor = 'blue';
    const inactiveColor = 'rgba(0,0,0,0.8)';

    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: tabStyle.tabNav }}>
            <Tab.Screen options={{
                title: 'My home',
                tabBarShowLabel: false,
                headerTitle: props => <LogoTitle {...props} />,
                headerStyle: {
                    backgroundColor: '#882FF9',
                },
                headerTintColor: '#black',
                tabBarIcon: ({ focused }) => (
                    <View style={tabStyle.bottomTabView}>
                        <Image source={require('../assets/images/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? activeColor : inactiveColor,
                                padding: 2
                            }}
                        />
                        <Text style={{ fontSize: 10, color: focused ? activeColor : inactiveColor, padding: 3 }}>Home</Text>
                    </View>
                )
            }} name="Acasă" component={HomeScreen} />
            <Tab.Screen options={{
                title: 'Recipes',
                tabBarShowLabel: false,
                headerTitle: props => <LogoTitle {...props} />,
                headerStyle: {
                    backgroundColor: '#882FF9',
                },
                headerTintColor: '#black',
                tabBarIcon: ({ focused }) => (
                    <View style={tabStyle.bottomTabView}>
                        <Image source={require('../assets/images/food.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? activeColor : inactiveColor,
                                padding: 2
                            }}
                        />
                        <Text style={{ fontSize: 10, color: focused ? activeColor : inactiveColor, padding: 3 }}>Recipes</Text>
                    </View>
                )
            }} name="Recipes" component={ListScreen} />
            <Tab.Screen options={{
                title: 'Discover',
                tabBarShowLabel: false,
                headerTitle: props => <LogoTitle {...props} />,
                headerStyle: {
                    backgroundColor: '#882FF9',
                },
                headerTintColor: '#black',
                tabBarIcon: ({ focused }) => (
                    <View style={tabStyle.bottomTabView}>
                        <Image source={require('../assets/images/search.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? activeColor : inactiveColor,
                                padding: 2
                            }}
                        />
                        <Text style={{ fontSize: 10, color: focused ? activeColor : inactiveColor, padding: 3 }}>Discover</Text>
                    </View>
                )
            }} name="Discover" component={ListScreen} />
            <Tab.Screen options={{
                title: 'Account',
                tabBarShowLabel: false,
                headerTitle: props => <LogoTitle {...props} />,
                headerStyle: {
                    backgroundColor: '#882FF9',
                },
                tabBarIcon: ({ focused }) => (
                    <View style={tabStyle.bottomTabView}>
                        <Image source={require('../assets/images/account.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? activeColor : inactiveColor,

                            }}
                        />
                        <Text style={{ fontSize: 10, color: focused ? activeColor : inactiveColor, padding: 3 }}>Account</Text>
                    </View>
                )
            }} name="Account" component={AccountScreen} />
        </Tab.Navigator>
    )
}

export default Tabs