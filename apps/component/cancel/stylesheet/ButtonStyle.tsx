import { StyleSheet } from "react-native";

const ButtonStyle = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal: 10,
    },
    Button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 10,
    },
    ButtonText: {
        color: '#000',
        fontSize: 13,
    },

});

export default ButtonStyle;