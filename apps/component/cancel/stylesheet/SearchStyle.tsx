import { StyleSheet } from "react-native";

const SearchStyle = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal: 10,
    },
    searchInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    searchButton: {
        position: 'absolute',
        right: 20,
    },

});

export default SearchStyle;