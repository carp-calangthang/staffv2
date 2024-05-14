import { StyleSheet } from "react-native";

const OrderDetailStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#EFEBE9",
    },  

    header: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#E5D8CF",
    },
    backIcon: {
        width: 24,
        height: 24,
        transform: [{ rotate: '270deg' }],
        marginTop: 2,
    },
    title: {
        fontSize: 18,
        color: "#000",
        marginLeft: 10,
    },

    // body
    body: {
        marginHorizontal: 10,
        marginTop: 10,
    },

    // -- top

    top: {
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    bodyText: {
        fontSize: 13,
        color: "#000",
        marginBottom: 5,
    },
    bodyTextBoild: {
        fontWeight: "bold",
    },

    bottom: {
        marginBottom: 20,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },

    bottomTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
    },

    BottomTextBoild: {
        fontSize: 13,
        color: "#000",
        fontWeight: "bold",
    },
    BottomText: {
        fontSize: 13,
        color: "#000",
    },

    bottomCode: {
        color: "#575E69",
        fontWeight: "bold",
    },

    bodyTime: {
        color: "#575E69",
        fontWeight: "bold",
    },
    Product:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#E5D8CF',
        marginTop: 10,
    },
    productText: {
        fontSize: 13,
        color: '#000',
        width: '80%',
    },
    bodyQuantity: {
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default OrderDetailStyle;