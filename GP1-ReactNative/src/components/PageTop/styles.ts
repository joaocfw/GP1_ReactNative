import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	pageTopContainer: {
        flexDirection: 'column',
        width: '100%',
        height: 500,
    },
    pageTopImage: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    itensContainer: {
        backgroundColor: 'rgba(22, 22, 22, 0.5)',
        position: 'absolute',
        top: 380,
        width: '100%',
        height: 100,
    },
    pageTopText: {
        position: 'absolute',
        top: 10,
        left: 20,
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    pageTopFavButton: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    pageTopPlayButton: {
        position: 'absolute',
        top: 50,
        left: 90,
    },
})