import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

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
    searchContainer: {
        margin: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 8,
        padding: 8,
        fontSize: 16,
        color: '#fff'
    },
    loadingText: {
        textAlign: "center",
        marginVertical: 16,
        fontSize: 16,
        color: "#888",
    },
    noResultsText: {
        textAlign: "center",
        marginVertical: 16,
        fontSize: 18,
        color: "#fff",
    },
    movieTitle: {
        marginTop: 8,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
});
