import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity, View, Text, Modal } from "react-native";

import OrderButtonStyle from "./stylesheet/OrderButtonStyle";
import { set } from "react-hook-form";

const OrderButton = () => {
    const [activeButton, setActiveButton] = useState<string>("Tạo mới");

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleButtonPress = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={OrderButtonStyle.header}>
                <TouchableOpacity
                    style={[
                        OrderButtonStyle.button,
                        activeButton === "Tạo mới" && { backgroundColor: "#704232" },
                    ]}
                    onPress={() => handleButtonPress("Tạo mới")}
                >
                    <Text style={[OrderButtonStyle.buttonText, activeButton === "Tạo mới" && { color: "#fff" }]}>Tạo mới</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        OrderButtonStyle.button,
                        activeButton === "Chờ duyệt" && { backgroundColor: "#704232" },
                    ]}
                    onPress={() => {
                        handleButtonPress("Chờ duyệt")
                        setModalVisible(true)
                    }}
                >
                    <Text style={[OrderButtonStyle.buttonText, activeButton === "Chờ duyệt" && { color: "#fff" }]}>Chờ duyệt (2)</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        OrderButtonStyle.button,
                        activeButton === "Chờ nhận" && { backgroundColor: "#704232" },
                    ]}
                    onPress={() => {
                        handleButtonPress("Chờ nhận")
                        navigation.navigate("OrderDelivery" as never)
                    }}
                >
                    <Text style={[OrderButtonStyle.buttonText, activeButton === "Chờ nhận" && { color: "#fff" }]}>Chờ nhận (2)</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={OrderButtonStyle.ModalContainer}>

                    <View style={OrderButtonStyle.Modal}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("OrderManager" as never);
                            }}
                            style={OrderButtonStyle.ModalButton}
                        >
                            <Text style={OrderButtonStyle.ModalButtonText}>Manager</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("OrderApprove" as never);
                            }}
                            style={OrderButtonStyle.ModalButton}
                        >
                            <Text style={OrderButtonStyle.ModalButtonText}>Staff</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                            style={OrderButtonStyle.ModalButton}
                        >
                            <Text style={OrderButtonStyle.ModalButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>

        </SafeAreaView>
    );
};

export default OrderButton;
