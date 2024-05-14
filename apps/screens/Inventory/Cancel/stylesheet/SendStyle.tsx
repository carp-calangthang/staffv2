import { StyleSheet } from "react-native";

const SendStyle = StyleSheet.create({

    receive: {
        flex: 1,
        backgroundColor: '#EFEBE9',
    },
    container: {
        padding: 10,
        marginBottom: 80,
    },

    // Header

    header: {
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    headerText: {
        fontSize: 13,
        color: '#000',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    // Content

    content: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },

    contentItem: {
        marginBottom: 10,
    },

    contentTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
    },

    contentItemTitle: {
        fontSize: 13,
        color: '#000',
        width: "90%",
    },

    contentItemTitleItalic: {
        fontStyle: 'italic',
    },
    
    Descriptive: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    line: {
        borderBottomWidth: 1,
        borderColor: "#000",
        marginBottom: 10,
    },

    DescriptiveText1: {
        fontSize: 13,
        color: '#000',
        marginRight: 120,
        fontWeight: 'bold',
    },
    DescriptiveText2: {
        fontSize: 13,
        color: '#000',
        marginRight: 10,
        fontWeight: 'bold',
    },

    InfoBody: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    InfoBodyInput: {
        borderWidth: 1,
        borderColor: '#704232',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
        position: 'absolute',
        right: 0,
        width: "50%",
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#704232',
    },

    InfoBodyText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#575E69',
        marginLeft: "20%",
    },
    
    reason: {
        marginTop: 10,
    },

    reasonInput: {
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        width: "100%",
        fontWeight: 'bold',
    },

    alertText: {
        color: '#FF0000',
        fontSize: 13,
    },

    alertTextBold: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    // Bottom

    bottom: {
    },

    imagesContainer: {
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10,
    },

    imagesContainerText: {
        fontSize: 13,
        color: '#000',
        marginBottom: 10,
    },

    imagesContainerShow: {
        flexDirection: 'row',
    },

    imagesContainerButton: {
        borderWidth: 1,
        borderColor: '#704232',
        borderRadius: 5,
        padding: 20,
        marginRight: 10,
    },

    imagesContainerIcon: {
        color: '#704232',
    },

    imagesContainerPreview: {
        width: 65,
        height: 65,
        borderRadius: 5,
    },

    preview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    cancelIcon: {
        marginLeft: -22,
        marginTop: 2,
    },

    bottomSave: {
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    saveButton: {
        backgroundColor: '#704232',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
        width: "80%",
    },

    saveButtonText: {
        color: '#fff',
        fontSize: 16,
    },

});

export default SendStyle;