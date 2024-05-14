import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity, View, Text, Modal } from "react-native";

import HeaderButtonStyle from "./stylesheet/ButtonStyle";

import { set } from "react-hook-form";

const HeaderButton = () => {
    const [activeButton, setActiveButton] = useState<string>("Chờ nhận");

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleButtonPress = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={HeaderButtonStyle.header}>
                <TouchableOpacity
                    style={[
                        HeaderButtonStyle.button,
                        activeButton === "Chờ nhận" && { backgroundColor: "#704232" },
                    ]}
                    onPress={() => handleButtonPress("Chờ nhận")}
                >
                    <Text style={[HeaderButtonStyle.buttonText, activeButton === "Chờ nhận" && { color: "#fff" }]}>Chờ nhận</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        HeaderButtonStyle.button,
                        activeButton === "Chờ giao" && { backgroundColor: "#704232" },
                    ]}
                    onPress={() => {
                        handleButtonPress("Chờ giao")
                        setModalVisible(true)
                        navigation.navigate("DeliveryList" as never)
                    }}
                >
                    <Text style={[HeaderButtonStyle.buttonText, activeButton === "Chờ giao" && { color: "#fff" }]}>Chờ giao (2)</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default HeaderButton;
