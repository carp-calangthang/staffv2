import { StyleSheet } from 'react-native';

const OrderReceiveStyle = StyleSheet.create({

    receive: {
        flex: 1,
        backgroundColor: '#EFEBE9',
    },
    container: {
        padding: 10,
        marginBottom: 70,
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
    },

    contentItem: {
        marginBottom: 10,
    },

    contentItemTitle: {
        fontSize: 13,
        color: '#000',
    },

    contentItemTitleItalic: {
        fontStyle: 'italic',
    },

    contentInfo: {
        flexDirection: 'row',
    },

    contentInfoText: {
        fontSize: 13,
        color: '#000',
        marginRight: 10,
    },

    contentInfoTextBold: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#575E69',
    },

    report: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    reportInput: {
        borderWidth: 1,
        borderColor: '#704232',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginLeft: 10,
        marginTop: 10,
        width: "50%",
        fontWeight: 'bold',
    },

    reason: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#575E69',
    },

    pickerContainer: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        height: 40,
        justifyContent: 'center',

    },

    reasonPicker: {
        borderWidth: 1,
        borderColor: '#000',
        color: '#000',
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
        marginTop: 10,
    },

    imagesContainer: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },

    imagesContainerText: {
        fontSize: 13,
        color: '#000',
    },

    imagesContainerShow: {
        flexDirection: 'row',
        marginTop: 10,
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

export default OrderReceiveStyle;