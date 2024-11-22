import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    descricaoText: {
        color: '#fff',
        paddingHorizontal: 20,
        marginTop: 10,
        textAlign: 'justify',
    },
    averageText: {
        color: '#fff',
        textAlign: 'center',
        marginLeft: 5,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    star: {
        width: 25,
        height: 25,
        marginHorizontal: 2,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    errorText: {
        fontSize: 18,
        color: "red",
    },
    starContainer: {
        flexDirection: 'row',
        marginLeft: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
})