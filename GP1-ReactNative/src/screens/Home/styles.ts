import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainImage: {
        width: '100%', 
        height: 200, 
        resizeMode: 'cover'
    },
    headerHome: {
        width: '100%',
        backgroundColor: '#161616',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 5,
        height: 60,
        marginBottom: 5,
    },
    headerHomeText: {
        color: '#fff',
        fontWeight: 'black',
        marginTop: 4,
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }

})