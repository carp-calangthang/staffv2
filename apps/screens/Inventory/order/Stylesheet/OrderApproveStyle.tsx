import { Modal, StyleSheet } from "react-native";

const OrderApproveStyle = StyleSheet.create({
    OrderWating: {
        flex: 1,
        backgroundColor: '#EFEBE9',
    },
    container: {
        flex: 1,
        marginBottom: 80,
    },

    // Modal

    Container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
    },

    Modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ModalContainer: {
        width: '80%',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },

    ModalBody: {
        padding: 10,
        borderRadius: 5,
    },

    ModalText: {
        fontSize: 15,
        color: '#000',
    },

    ModalInput: {
        borderWidth: 1,
        borderColor: '#575E69',
        borderRadius: 5,
        padding: 5,
    },

    ModalButtonContainer: {
        justifyContent: 'flex-end',
        marginTop: 10,
    },

    ModalButton: {
        backgroundColor: '#FF5733',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },

    ModalButtonText: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
    },

    Cancel: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        color: 'red',
    },

    // Top
    Top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    TopTitle: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
    },
    TopSubTitle: {
        fontSize: 15,
        color: '#000',
        marginLeft: 5,
    },
    CheckBox: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    Button: {
        flexDirection: 'row',
        marginLeft: 'auto',
    },
    ButtonItems1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#704232',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    ButtonItems2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#704232',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    Icon: {
        marginRight: 5,
    },
    ButtonText1: {
        color: '#fff',
    },
    ButtonText2: {
        color: '#704232',
    },

    // Body
    Body: {
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },

    // -- BodyTop
    BodyTop: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 10,
    },
    BodyTop2: {
        paddingBottom: 10,
    },
    BodyHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    BodyTitle: {
        fontSize: 15,
        color: '#000',
    },
    BodyTitleBold: {
        fontWeight: 'bold',
    },
    BodyExtand: {
        marginLeft: 'auto',
    },
    BodyHeaderCheckbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        marginRight: 5,
    },
    BodySubTitle: {
        fontSize: 15,
        color: '#575E69',
    },
    BodyStatus: {
        backgroundColor: '#CCD4FF',
        padding: 5,
        borderRadius: 5,
        width: 80,
        alignItems: 'center',
    },
    BodyStatusText: {
        fontSize: 15,
        color: '#004A94',
        fontStyle: 'italic',
    },
    BodyStatusWait: {
        backgroundColor: '#F9E0DB',
        padding: 5,
        borderRadius: 5,
        width: 80,
        alignItems: 'center',
    },
    BodyStatusWaitText: {
        fontSize: 15,
        color: '#D82C0D',
        fontStyle: 'italic',
    },
    // -- BodyBottom
    BodyBottom: {
        marginTop: 10,
    },
    BodyDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    BodyDetailTitle: {
        fontSize: 13,
        color: '#000',
        width: '80%',
    },
    BodyDetailQuantity: {
        fontSize: 16,
        color: '#575E69',
        marginRight: 10,
        fontWeight: 'bold',
    },

    // -- BodyButton
    BodyButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    BodyButtonItems: {
        backgroundColor: '#704232',
        padding: 5,
        borderRadius: 5,
        width: '22%',
    },
    BodyButtonItems2: {
        backgroundColor: '#F2E6E6',
        borderWidth: 1,
        borderColor: '#704232',
        padding: 5,
        borderRadius: 5,
        width: '22%',
    },
    BodyButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
    BodyButtonText2: {
        color: '#704232',
        textAlign: 'center',
    },
});

export default OrderApproveStyle;