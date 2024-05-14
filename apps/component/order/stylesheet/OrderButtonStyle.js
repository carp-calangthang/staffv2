import { StyleSheet } from "react-native";

const OrderButtonStyle = StyleSheet.create({

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
    },

    button: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        fontSize: 14,
        color: "#000",
    },

    // Modal

    ModalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    Modal: {
        width: "50%",
        height: "50%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    
    ModalButton: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#704232",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },

    ModalButtonText: {
        fontSize: 14,
        color: "#fff",
    },

});

export default OrderButtonStyle;