import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import HeaderStyle from "./stylesheet/HeaderStyle";

interface RequestHeaderProps {
    title: string;
}

const RequestHeader: React.FC<RequestHeaderProps> = ({ title }) => {
    
        const navigation = useNavigation();

        const headerTitle = title;
    
        return (
            <View style={HeaderStyle.header}>
                <TouchableOpacity>
                    <Icon name="angle-left" size={30} color="#000" />
                </TouchableOpacity>
                <View style={HeaderStyle.titleBase}>
                    <Text style={HeaderStyle.title}>{headerTitle}</Text>
                </View>
            </View>
        );
};

export default RequestHeader;