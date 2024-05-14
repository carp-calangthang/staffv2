import { StyleSheet } from "react-native";

const HeaderButtonStyle = StyleSheet.create({

    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
    },

    button: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
    },

    buttonText: {
        fontSize: 14,
        color: "#000",
    },

});

export default HeaderButtonStyle;