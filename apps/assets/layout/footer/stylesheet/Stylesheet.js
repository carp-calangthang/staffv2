import { StyleSheet } from "react-native";

const Stylesheet = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 70,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#f5f5f5",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#fff"
    },

    items: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        borderRadius: 10,
        marginRight: 10
    },
    icon: {
        color: "#D3D1D8"
    },
    buttonText: {
        fontSize: 13,
        color: "#000"
    }
});

export default Stylesheet;