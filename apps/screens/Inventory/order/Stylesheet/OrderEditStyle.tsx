import { StyleSheet } from "react-native";

const OrderManagerEditStyle = StyleSheet.create({

    OrderManagerView: {
        flex: 1,
        backgroundColor: "#EFEBE9",
    },

    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 80,
    },

    // Top
    top: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    topTitle: {
        fontSize: 18,
        color: "#000",
        fontStyle: "italic",
    },

    topTitleBold: {
        fontWeight: "bold",
        fontStyle: "italic",
    },

    topButton: {
        flexDirection: "row",
        marginLeft: "auto",
        borderWidth: 1,
        borderColor: "#704232",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        backgroundColor: "#F2E6E6",
    },

    topButtonIcon: {
        marginRight: 5,
    },

    topButtonText: {
        color: "#704232",
        fontSize: 13,
    },

    // Middle

    middle: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
    },

    // -- Middle Header

    middleHeder: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        width: "100%",
    },

    middleHeaderText: {
        fontSize: 13,
        color: "#000",
        fontWeight: "bold",
        marginHorizontal: 50,
        marginBottom: 5,
    },

    // -- Middle Body

    middleBodyContainer: {
        borderBottomWidth: 0.5,
        borderBottomColor: "#575E69",
        marginBottom: 5,
    },

    middleBody: {
        marginBottom: 5,
    },

    // -- -- Middle Body Top

    middleBodyTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    middleBodyTopTitle: {
        fontSize: 13,
        color: "#000",
        fontWeight: "bold",
        width: "80%",
    },

    middleBodyTopText: {
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "italic",
    },

    middleBodyTopButton: {
        paddingHorizontal: 10,
    },

    middleBodyTopButtonForm: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
    },

    // -- -- Middle Body Quantity

    middleBodyQuantity: {
        marginBottom: 10,
        flexDirection: "row",
    },

    middleBodyQuantityText: {
        fontSize: 13,
        color: "#575E69",
        marginRight: 50,
    },

    middleBodyQuantityTextBold: {
        fontSize: 15,   
        fontWeight: "bold",
    },

    // -- -- Middle Body Input
    
    middleBodyInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },

    middleBodyInputText: {
        backgroundColor: "#F5F5F7",
        borderRadius: 5,
        width: "48%",
        padding: 5,
        textAlign: "center",
        color: "#575E69",
        fontWeight: "bold",
        fontSize: 15,
    },

    // -- -- Middle Body Alert

    middleBodyAlert: {
        marginBottom: 10,
    },

    middleBodyAlertText: {
        fontSize: 13,
        color: "#D82C0D",
    },

    middleBodyAlertTextBold: {
        fontWeight: "bold",
        fontStyle: "italic",
    },

    // -- -- Middle Body Reason

    middleBodyReason: {
        marginBottom: 10,
    },

    middleBodyReasonTitle: {
        fontSize: 13,
    },

    middleBodyReasonText: {
        marginTop: 5,
        fontSize: 13,
        backgroundColor: "#F5F5F7",
        borderRadius: 5,
        padding: 10,
    },
    
});

export default OrderManagerEditStyle;