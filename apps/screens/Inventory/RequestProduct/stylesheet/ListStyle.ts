import { StyleSheet } from 'react-native';

const ListStyle = StyleSheet.create({
    
    List: {
        backgroundColor: "#EFEBE9",
        height: "100%",
    },

    container: {
        paddingHorizontal: 20,
    },

    // Search

    search: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 20,
        marginBottom: 10,
    },

    searchInput: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },

    searchButton: {
        padding: 5,
        marginRight: 10,
    },

    // Body

    body: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginBottom: 10,
        borderRadius: 20,
    },

    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    title: {
        fontSize: 13,
        color: "#000",
    },

    titleBold: {
        fontWeight: "bold",
    },

    text: {
        fontSize: 13,
        fontWeight: "heavy"
    },

    textBold: {
        fontWeight: "bold",
    },

    textItalic: {
        fontStyle: "italic",
    },

    subText: {
        fontSize: 13,
        fontWeight: "light"
    },

    line: {
        borderBottomWidth: 0.5,
        borderBottomColor: "#000",
        marginVertical: 10,
    },

    productInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
    },

    count: {
        fontSize: 16,
        fontWeight: "bold",
    },

    bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
    },

    status: {
        backgroundColor: "#FBEDD0",
        padding: 5,
        borderRadius: 10,
    },

    statusText: {
        color: "#8E370B",
        fontStyle: "italic",
    },

    status2: {
        backgroundColor: "#F9E0DB",
        padding: 5,
        borderRadius: 10,
    },

    statusText2: {
        color: "#D82C0D",
        fontStyle: "italic",
    },

    button: {
        backgroundColor: "#704232",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
    },

    buttonText: {
        color: "#fff",
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
        width: 40,
        height: 40,
    },

    newRequestText: {
        color: "#fff",
        textAlign: "center",
    },

});

export default ListStyle;