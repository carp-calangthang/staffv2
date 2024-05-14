import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Text } from "react-native";

import ButtonStyle from "./stylesheet/ButtonStyle";

interface RequestHeaderProps {
    newCount: number;
    waitingCount: number;
}

const ButtonBar: React.FC<RequestHeaderProps> = ({ newCount, waitingCount }) => {

    const [activeButton, setActiveButton] = useState<string>("Mới tạo");
    const handleButtonPress = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const navigation: undefined = useNavigation();

    return (
        <View style={ ButtonStyle.container }>
            <TouchableOpacity 
                style={[
                    ButtonStyle.Button,
                    activeButton === "Mới tạo" && { backgroundColor: "#704232" },
                ]}
                onPress={() => [
                    handleButtonPress("Mới tạo"),
                    (navigation as any).navigate("NewRequestsList" as never)
                ]}
            >
                {newCount < 1 ? (
                    <Text style={[ ButtonStyle.ButtonText, activeButton === "Mới tạo" && { color: "#fff" }, ]}>Mới tạo</Text>
                ) : (
                    <Text style={[ ButtonStyle.ButtonText, activeButton === "Mới tạo" && { color: "#fff" }, ]}>Mới tạo ({newCount})</Text>
                )}
            </TouchableOpacity>
            <TouchableOpacity 
                style={[
                    ButtonStyle.Button,
                    activeButton === "Chờ duyệt" && { backgroundColor: "#704232" },
                ]}
                onPress={() => [
                    handleButtonPress("Chờ duyệt"),
                    (navigation as any).navigate("WaitingList" as never)
                ]}
            >
                {waitingCount < 1 ? (
                    <Text style={[ ButtonStyle.ButtonText, activeButton === "Chờ duyệt" && { color: "#fff" }, ]}>Chờ duyệt</Text>
                ) : (
                    <Text style={[ ButtonStyle.ButtonText, activeButton === "Chờ duyệt" && { color: "#fff" }, ]}>Chờ duyệt ({waitingCount})</Text>
                )}
            </TouchableOpacity>
        </View>
    )
};

export default ButtonBar;