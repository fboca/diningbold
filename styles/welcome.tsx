import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 25,
        paddingBottom: 20
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
    }, subTitle: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingBottom: 15
    },
    image: {
        position: 'absolute',
        top: Platform.OS == 'ios' ? 80 : 40,
        height: 40,
        width: 200,
        alignSelf: 'center',
    }, backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    signupPage: {
        backgroundColor: 'rgba(250,250,250,0.1)',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 5,
        elevation: 10
    },
    input: {
        width: '100%',
        borderWidth: 1,
        padding: 10,
        fontSize: 19,
        borderColor: 'white',
        color: 'white',
        margin: 5,
        borderRadius: 3
    },
    button: {
        width: '100%',
        borderWidth: 1,
        padding: 10,
        borderColor: 'white',

        margin: 5,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        color: 'white',
        fontSize: 19,
    }
});

export default styles