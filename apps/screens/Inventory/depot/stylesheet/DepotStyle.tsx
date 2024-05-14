import { StyleSheet } from "react-native";

const DepotStyle = StyleSheet.create({

    depot: {
        flex: 1,
        backgroundColor: "#EFEBE9",
    },

    depotHeader: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E5D8CF",
        padding: 10,
    },

    depotHeaderButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    depotHeaderTitle: {
        fontSize: 20,
        marginLeft: 10,
    },

    // Body

    body: {
        padding: 10,
    },

    bodyTop: {
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
    },

    TopImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },

    bodyTopImage: {
        width: 30,
        height: 30,
    },

    bodyTopTitle: {
        fontSize: 16,
        color: "#000",
    },

    bodyTopCount: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#1F2937",
    },

    // Search

    bodySearch: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 20,
        marginBottom: 10,
    },

    bodySearchInput: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },

    bodySearchButton: {
        padding: 10,
        marginRight: 10,
    },

    // Product

    bodyProduct: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },

    bodyProductTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    bodyProductName: {
        fontSize: 16,
        color: "#784D3F",
        fontWeight: "bold",
    },

    bodyExpandButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    bodyExpandIcon: {
        fontSize: 15,
    },

    // -- Info

    bodyInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    bodyInfoText: {
        color: "#000",
        fontSize: 14,
        fontWeight: "bold",
    },

    // -- Product Info

    productInfo: {
        marginBottom: 10,
    },

    productInfo2: {
        backgroundColor: "#FCDABD",
        width: "100%",
        borderBottomRightRadius: 10,
    },

    productName: {
        fontSize: 13,
        color: "#000",
    },

    productNameItalic: {
        fontStyle: "italic",
    },

    productCount: {
        flexDirection: "row",
        marginLeft: -70,
        marginTop: 5,
    },

    countNumber: {
        color: "#575E69",
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 80,
    },

    // Line

    line: {
        height: 0.5,
        backgroundColor: "#000",
        marginBottom: 10,
    },

    // note

    note: {
        padding: 10,
        borderRadius: 10,
    },

    noteTitle: {
        fontSize: 14,
        color: "#000",
    },

    noteItems: {
        flexDirection: "row",
        alignItems: "center",
    },

    color: {
        width: 80,
        height: 5,
        backgroundColor: "#FCDABD",
        borderRadius: 5,
        marginRight: 5,
    },

    colorNote: {
        fontSize: 13,
        color: "#000",
    },

});

export default DepotStyle;