import { StyleSheet } from "react-native";

const CreateStyle = StyleSheet.create({

    create: {
        backgroundColor: "#EFEBE9",
        height: "100%",
    },

    container: {
        paddingHorizontal: 20,
    },

    // Top

    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10,
    },

    search: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 20,
        width: "70%",
    },

    searchInput: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },

    expandButton: {
        padding: 5,
        marginRight: 10,
    },

    // Soft Map

    softMap: {
        alignItems: "flex-end",
        width: "30%",
    },

    softMapButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: "#fff",
        alignItems: "center",

    },

    softMapIn: {
        flexDirection: "row",
        alignItems: "center",
    },

    softMapIcon: {
        marginRight: 5,
    },

    softMapText: {
        fontSize: 13,
        color: "#000",
    },

    // Body

    body: {
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 20,
    },

    bodyTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },

    bodyTitleText1: {
        fontSize: 13,
        color: "#000",
        fontWeight: "bold",
        marginLeft: 50,
    },
    bodyTitleText2: {
        fontSize: 13,
        color: "#000",
        fontWeight: "bold",
    },
    bodyTitleText3: {
        fontSize: 13,
        color: "#000",
        fontWeight: "bold",
        marginRight: 30,
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

    name: {
        flexDirection: "row",
        justifyContent: "space-between",
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

    addressTextBold: {
        fontSize: 13,
        fontWeight: "bold",
    },

    addressText: {
        fontSize: 13,
        fontWeight: "normal",
        marginLeft: 10,
    },

    quantity: {
        fontSize: 16,
        fontWeight: "bold",
    },

    quantityInput: {
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#704232",
        borderRadius: 10,
        width: 80,
        height: 40,
    },

    newRequest: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },

    newRequestButton: {
        backgroundColor: "#704232",
        padding: 10,
        borderRadius: 10,
        position: "absolute",
        bottom: 90,
        right: 30,
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

export default CreateStyle;