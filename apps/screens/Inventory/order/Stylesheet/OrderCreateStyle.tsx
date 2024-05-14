import { Button, StyleSheet } from "react-native";

const OrderCreateStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#E5D8CF",
    },

    // Body

    body: {
        flex: 1,
        backgroundColor: "#EFEBE9",
        borderRadius: 10,
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
        margin: 20,
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
        color: "#000",
    },
    detailSub: {
        fontSize: 14,
        color: "#000",
        fontStyle: "italic",
        marginLeft: 10,
    },
    detailCount: {
        flexDirection: "row",
    },
    detailSubTitle: {
        fontSize: 14,
        color: "#000",
        fontStyle: "italic",
        marginRight: 50,
    },
    detailSubQuantity: {
        fontSize: 18,
        color: "gray",
        fontWeight: "bold",
    },

    // -- Detail Quantity Input
    detailQuantity: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    detailInputQuantity: {
        borderRadius: 10,
        marginHorizontal: 10,
        width: "40%",
        borderWidth: 1,
        borderColor: "rgba(112, 66, 50, 1)",
        textAlign: "center",
        color: "rgba(112, 66, 50, 1)",
        fontSize: 18,
        fontWeight: "bold",
    }, 
    // -- Detail Alert
    detailAlert: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    detailAlertText: {
        fontSize: 14,
        color: "rgba(216, 44, 13, 1)",
        fontStyle: "italic",
        marginLeft: 10,
    },
    detailAlertQuantity: {
        fontSize: 14,
        color: "rgba(216, 44, 13, 1)",
        fontWeight: "bold",
        fontStyle: "italic",
    },
    // -- Detail Reason
    detailReason: {
        marginBottom: 10,
    },
    detailReasonTitle: {
        fontSize: 14,
        color: "#000",
        marginBottom: 10,
        marginLeft: 5,
    },
    detailReasonPickerBorder: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
    },
    detailReasonPicker: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        color: "#000",
    },

    // Button
    Button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
        marginTop: 30,
        marginBottom: 100,
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

});

export default OrderCreateStyle;