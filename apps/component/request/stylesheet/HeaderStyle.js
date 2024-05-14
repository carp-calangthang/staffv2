import { StyleSheet } from "react-native";

const HeaderStyle = StyleSheet.create({

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

    titleBase: {
        flex: 1,
        alignItems: "center",
    },

    title: {
        fontSize: 18,
        color: "#000",
        marginLeft: 10,
    },

});

export default HeaderStyle;