import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const buttonSize = (width - 60) / 2 - 10; 

const InventoryStylesheet = StyleSheet.create({
    inventory: {
        flex: 1,
        backgroundColor: "#E5D8CF",
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 50,
    },
    name: {
        flexDirection: "column",
        marginRight: 40,
    },
    Title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
    SubText: {
        fontSize: 12,
        color: "#000",
    },
    PowerIcon: {
        width: 26,
        height: 26,
    },

    body: {
        flex: 1,
        padding: 10,
        backgroundColor: "#EFEBE9"
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: 100,
    },
    button: {
        width: 120,
        height: 120,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Change this to your preferred color
        borderRadius: 20, // Optional for rounded corners
      },
    buttonIcon: {
        marginBottom: 5,
        width: 42,
        height: 42,
    },
    buttonText: {
        fontSize: 14,
        color: "#000",
        fontWeight: "bold",
    },
    buttonIcon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
});

export default InventoryStylesheet;