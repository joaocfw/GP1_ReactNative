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
    noResultsText: {
        textAlign: "center",
        marginVertical: 16,
        fontSize: 18,
        color: "#fff",
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
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 5,
        height: 60,
        marginBottom: 5,
    },
    
});

export default styles;
