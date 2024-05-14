import { StyleSheet } from "react-native";

const DoneStyle = StyleSheet.create({

    create: {
        backgroundColor: "#EFEBE9",
        height: "100%",
    },

    container: {
        paddingHorizontal: 20,
        marginTop: 10,
    },

    // Body

    body: {
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 20,
    },

    line: {
        borderBottomWidth: 0.5,
        borderColor: "#000",
        marginBottom: 10,
    },

    // Body Content

    bodyContent: {
        marginBottom: 10,
    },

    nameText: {
        fontSize: 13,
        color: "#000",
        width: "80%",
        fontWeight: "bold",
    },

    nameTextItalic : {
        fontStyle: "italic",
        fontWeight: "normal",
    },

    expandButton: {
        marginRight: 10,
    },

    expandIcon: {
        marginRight: 5,
    },

    description: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },

    address: {
        width: "60%",
        fontWeight: "bold",
    },

    addressText: {
        fontSize: 13,
    },

    quantity: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 20,
    },

    // New Request

    newRequest: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },

    preRequestButton: {
        backgroundColor: "#F2E6E6",
        borderWidth: 1,
        borderColor: "#704232",
        padding: 10,
        borderRadius: 10,
        position: "absolute",
        bottom: 90,
        left: 30,
        width: 80,
        height: 40,
    },

    preRequestText: {
        color: "#704232",
        textAlign: "center",
    },

    newRequestButton: {
        backgroundColor: "#704232",
        padding: 10,
        borderRadius: 10,
        position: "absolute",
        bottom: 90,
        right: 30,
        width: 80,
        height: 40,
    },

    newRequestText: {
        color: "#fff",
        textAlign: "center",
    },

    nextRequest: {
        color: "#fff",
    },

});

export default DoneStyle;