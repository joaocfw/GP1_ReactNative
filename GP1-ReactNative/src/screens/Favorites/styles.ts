import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardsContainer: {
        marginTop: 16,
        flex: 1,
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    // removedContainer: {
    //     alignItems: "center",
    //     marginBottom: 20,
    // },
    cardImage: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    // removedText: {
    //     fontSize: 16,
    //     color: "red",
    //     marginTop: 8,
    // },
    emptyText: {
        fontSize: 16,
        color: "gray",
    },
    removeButton: {
        position: "absolute",
        width: 231,
        height: 45,
        bottom: 16,
        alignSelf:'center',
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 20,
        alignItems: "center",
       justifyContent:'center', 
        
    },
    removeButtonText: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        lineHeight: 22,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: 350,
        height: 350,
        backgroundColor: "#161616",
        borderRadius: 30,
        padding: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    modalText: {
        fontSize: 25,
        marginBottom: 10,
        color: "#fff",
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    modalImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        width: 100
    },
    closeButtonText: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})