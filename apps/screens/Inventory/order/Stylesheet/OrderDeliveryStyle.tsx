import { StyleSheet } from "react-native";

const OrderDeliveryStyle = StyleSheet.create({

    delivery: {
        flex: 1,
    },
    
    container: {
        padding: 10,
        backgroundColor: "#EFEBE9",
        marginBottom: 75,
    },

    // top

    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
    },

    topCount: {
    },

    topCountText: {
        color: "#000",
    },

    topQuantity: {
        color: "#704232",
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
    },

    // search

    search: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        marginBottom: 10,
    },

    searchInput: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
    },

    searchButton: {
        position: "absolute",
        right: 50,
    },

    codeButton: {
        right: "auto",
    },

    codeIcon: {
        marginLeft: 10,
    },

    // body

    body: {
        marginHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
    },

    bodyTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingTop: 5,
    },

    bodyTitle: {
        fontSize: 13,
        color: "#000",
    },

    bodyTitleBold: {
        fontWeight: "bold",
    },

    bodyGrayBold: {
        color: "#575E69",
        fontSize: 13,
        fontWeight: "bold",
    },

    bodyBottom: {
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#575E69",
    },

    bodyStatus: {
        backgroundColor: "#FBEDE0",
        padding: 5,
        borderRadius: 20,
        width: 100,
        alignItems: "center",
        marginTop: 5,
        marginBottom: 10,
    },

    bodyStatusText: {
        color: "#9B4D24",
        fontSize: 13,
        fontStyle: "italic",
    },

    // content

    bodyContent: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    bodyContentItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
    },

    bodyContentName: {
        width: "80%",
        fontSize: 13,
        color: "#000",
    },

    bodyContentItalic: {
        fontStyle: "italic",
    },

    bodyContentQuantity: {
        fontSize: 16,
        color: "#575E69",
        fontWeight: "bold",
        marginRight: 20,
    },

    // -- button

    bodyButton: {
        alignItems: "center",
        marginTop: 10,
    },

    TakeButton: {
        backgroundColor: "#704232",
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 10,
        width: 100,
    },

    TakeButtonText: {
        color: "#fff",
        fontSize: 13,
    },

});

export default OrderDeliveryStyle;