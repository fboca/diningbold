import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',

    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        paddingHorizontal: 25,
        justifyContent: 'center'
    },
    logo: {

    },
    title: {
        fontSize: 25,
        paddingTop: 30,
        color: 'white'
    },
    text: {
        color: 'white',
        marginTop: 5,
        width: '90%'
    },
    highlight: {
        marginTop: 5,
        fontSize: 19,
    },
    textInput: {
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 20,
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: 'rgba(0,250,0,0.5)',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        elevation: 5,
        borderRadius: 5,
        marginTop: 30,
        alignSelf: 'flex-end'
    },
    buttonNotReady: {
        backgroundColor: 'rgba(250,250,250,0.4)',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        elevation: 5,
        borderRadius: 5,
        marginTop: 30,
        alignSelf: 'flex-end'
    },
    buttonText: {
        color: "white",
        fontSize: 19
    }
})

export default styles