import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    accountRect: {
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    displayNameText: {
        fontSize: 22,
        color: '#333333',
        textAlign: 'center'
    },
    usernameText: {
        fontSize: 15,
        color: '#333333',
        textAlign: 'center'
    },
    accountActionCard: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: 'white',
        margin: 10,
        borderRadius: 10
    },
    cardTitle: {
        color: 'white',
        fontSize: 20,
        padding: 20
    },
    cardBody: {
        backgroundColor: 'white',
        padding: 20
    },
    subscriptionItem: {
        backgroundColor: 'transparent',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.4)'
    },
    subscriptionItemTitle: {
        color: '#333333',
        fontSize: 20,
    },
    subscriptionItemPeriod: {
        color: '#333333',
        marginTop: 5
    },
    manageButtonOverlay: {
        paddingVertical: 5,
    },
    manageButtonText: {
        color: 'dodgerblue',
        fontSize: 15
    }

})

export default styles