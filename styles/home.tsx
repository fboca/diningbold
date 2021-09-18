import { StyleSheet } from "react-native";
import { HomeCarousel } from "../screens/home";

const styles = StyleSheet.create({
    text: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    root: {

    },
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    homescreenContainer: {
        width: '100%',
        height: 300,
        backgroundColor: 'rgb(172, 107, 255)',
        resizeMode: 'contain'
    },
    homescreenContainerOverlay: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%'
    },
    homescreenContainerTitle: {
        fontSize: 22,
        color: 'white',
        paddingVertical: 6,
    },
    homescreenContainerText: {
        fontSize: 16,
        color: 'white',
    },
    categoryPicker: {
        width: '100%',
        height: 60,
        backgroundColor: '#E9E9E9'
    },
    homeCarouselButtton: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignSelf: 'baseline',
        borderRadius: 5,
        marginTop: 20
    },
    HomeCarouselButtonText: {
        color: 'white',
        fontSize: 16,
    }

})

export default styles