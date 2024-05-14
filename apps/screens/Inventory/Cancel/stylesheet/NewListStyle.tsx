import { StyleSheet } from "react-native";

const NewListStyle = StyleSheet.create({
    
    Background: {
        backgroundColor: "#EFEBE9",
        height: "100%",
    },
    
    container: {
        paddingHorizontal: 20,
    },
    main: {
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 10,
    },

    title: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleText: {
        fontSize: 13,
        color: "#000",
    },
    titleTextBold: {
        fontWeight: "bold",
    },
    expandButton: {
        marginRight: 20,
    },

    request: {},
    requestText: {
        fontSize: 13,
    },
    requestTextBold: {
        fontWeight: "bold",
    },

    action: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,
    },
    status: {
        backgroundColor: "#F9E0DB",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 100,
        height: 30,

    },
    statusText: {
        color: "#D82C0D",
        fontStyle: "italic",
    },
    status1: {
        backgroundColor: "#F5F6FF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 110,
        height: 30,

    },
    statusText1: {
        color: "#004a94",
        fontStyle: "italic",
    },
    buttonBase: {
        flexDirection: "row",
        marginHorizontal: 10,
    },
    buttonBase1: {
        flexDirection: "row",
    },
    button: {
        backgroundColor: "#F2E6E6",
        borderWidth: 1,
        borderColor: "#704232",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
    },
    button1: {
        backgroundColor: "#704232",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
    },
    button2: {
        backgroundColor: "#704232",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        position: "absolute",
        right: 0,
    },
    buttonText: {
        color: "#000",
    },
    buttonText1: {
        color: "#fff",
    },

    line: {
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        marginBottom: 10,
    },

    Product: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    ProductText: {
        fontSize: 13,
        width: "80%",
    },
    ProductItalic: {
        fontStyle: "italic",
    },
    ProductTextBold: {
        fontSize: 16,
        fontWeight: "bold",
    },

    add: {
        position: "absolute",
        bottom: 90,
        right: 20,
        borderRadius: 5,
        backgroundColor: "#704232",
    },
    addButton: {
        color: "#fff",
        padding: 10,
    },

});

export default NewListStyle;