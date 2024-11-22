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
        paddingLeft: 5,
        height: 75,
        marginBottom: 5,
        gap: 20
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }

})