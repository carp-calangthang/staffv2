import { StyleSheet } from "react-native";

const OrderCreate2Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5D8CF",
    },

    // Body

    body: {
        flex: 1,
        backgroundColor: "#EFEBE9",
        borderRadius: 10,
        marginBottom: 50,
    },

    search: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: 15,
    },
    searchText: {
        backgroundColor: "#fff",
        borderRadius: 20,
        margin: 10,
        padding: 10,
        paddingLeft: 20,
        width: "90%",
    },
    searchButton: {
        right: 50,
        position: "absolute",
    },

    /// Detail

    createContainer: {
        backgroundColor: "#fff", 
        marginHorizontal: 20,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,   
    },
    // -- Detail Top
    detailTop: {
        flexDirection: "column",
        borderBottomColor: "rgba(229, 231, 235, 1)",
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    detailTopTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        width: "100%",
        borderBottomColor: "#000",
    },
    titleText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        marginHorizontal: 40,
        marginBottom: 10,
    },
    // -- Detail Middle 
    detail: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    detailTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "gray",
    },
    detailSub: {
        fontSize: 14,
        color: "#000",
        fontStyle: "italic",
        marginLeft: 10,
    },
    detailCount: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    detailSubQuantity: {
        fontSize: 18,
        color: "#000",
        marginHorizontal: 50,
        fontWeight: "bold",
    },

    // Button
    Button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 50,
    },
    nextButton: {
        backgroundColor: "rgba(112, 66, 50, 1)",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        flex: 1,
        position: "absolute",
        right: 20,

    },
    nextButtonText: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
    },
    preButton: {
        borderWidth: 1,
        borderColor: "rgba(112, 66, 50, 1)",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        flex: 1,
        position: "absolute",
        left: 20,

    },
    preButtonText: {
        color: "rgba(112, 66, 50, 1)",
        fontSize: 18,
        textAlign: "center",
    },

});

export default OrderCreate2Style;