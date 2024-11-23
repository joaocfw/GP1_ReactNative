import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#161616',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
        color: 'white',
    },
    semFavoritos: {
        fontSize: 18,
        textAlign: 'center',
        color: 'gray',
    },
    lista: {
        justifyContent: 'space-between',
    },
    filmeContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        height: 200,
    },
    imagemFilme: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        resizeMode: 'contain',
    },
    invalidImageText: {
        color: 'red',
        textAlign: 'center',
    },
    movieTitle: {
        marginTop: 8,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
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
    }
});

export default styles;
