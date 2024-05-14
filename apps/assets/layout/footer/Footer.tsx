import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";

import Stylesheet from "./stylesheet/Stylesheet";

const Footer = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={Stylesheet.footer}>
            <View style={Stylesheet.container}>
                <View style={Stylesheet.items}>
                    <TouchableOpacity
                        style={Stylesheet.button}>
                        <Icon name="bell" style={Stylesheet.icon} size={24}/>
                        <Text style={Stylesheet.buttonText}>Thông báo </Text>
                    </TouchableOpacity>
                </View>
                <View style={Stylesheet.items}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(`OrderList` as never)}
                        style={Stylesheet.button}>
                        <Icon name="briefcase" style={Stylesheet.icon} size={24} />
                        <Text style={Stylesheet.buttonText}>Công việc </Text>
                    </TouchableOpacity>
                </View>
                <View style={Stylesheet.items}>
                    <TouchableOpacity
                        style={Stylesheet.button}>
                        <Icon name="calendar" style={Stylesheet.icon} size={24} />
                        <Text style={Stylesheet.buttonText}>Ca làm </Text>
                    </TouchableOpacity>
                </View>
                <View style={Stylesheet.items}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("Inventory" as never)}
                        style={Stylesheet.button}>
                        <Icon name="cube" color={"#704232"} size={24} />
                        <Text style={Stylesheet.buttonText}>Hàng hoá </Text>
                    </TouchableOpacity>
                </View>
                <View style={Stylesheet.items}>
                    <TouchableOpacity
                        style={Stylesheet.button}>
                        <Icon name="user" style={Stylesheet.icon} size={24} />
                        <Text style={Stylesheet.buttonText}>Cá nhân </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default Footer;