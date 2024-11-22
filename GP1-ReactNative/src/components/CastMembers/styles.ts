import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    castListContainer: {
        width: '100%',
        paddingLeft: 10,
        alignItems: 'center',  
        paddingVertical: 10,   
        marginBottom: 10,
    },
    castCard: {
        marginRight: 14,
        paddingVertical: 10,
        alignItems: 'center', 
        justifyContent: 'center', 
        width: 100, 
    },
    castCardBorder: {
        padding: 3,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 50,  
        overflow: 'hidden', 
        shadowColor: "#000", 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5, 
    },
    castCardImage: {
        width: 64,  
        height: 64, 
        borderRadius: 50, 
    },
    castCardText: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,  
        fontSize: 12,  
    },
});
