import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import RequestHeader from "../../../../component/request/RequestHeader";

import Footer from "assets/layout/footer/Footer";

import DoneStyle from "../stylesheet/DoneStyle";

const DoneRequest = () => {

    const navigation = useNavigation();

    const [color, setColor] = useState('#fff');
    const [textColor, setTextColor] = useState('#000');

    const handleSoftMapButton = () => {
        setColor(color === '#fff' ? '#704232' : '#fff');
        setTextColor(textColor === '#000' ? '#fff' : '#000');
    };

    return (
        <SafeAreaView style={ DoneStyle.create }>

            <RequestHeader title="Tạo mới lệnh xin hàng" />  

            <ScrollView style={ DoneStyle.container }>
                <View  style={ DoneStyle.body }>
                    <View style={ DoneStyle.bodyContent }>
                        <View>
                            <Text style={ DoneStyle.nameText }>12 Khổng Tử - 5Km<Text style={ DoneStyle.nameTextItalic }></Text></Text>
                            <Text>12 Khổng Tử, Bình Thọ, Thủ Đức<Text style={ DoneStyle.nameTextItalic }></Text></Text>
                        </View>
                        <View style={ DoneStyle.line }></View>
                        <View style={ DoneStyle.description }>
                            <View style={ DoneStyle.address }>
                                <Text style={ DoneStyle.addressText }>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text style={ DoneStyle.nameTextItalic }>DVT: Kg</Text></Text>
                            </View>
                            <Text style={ DoneStyle.quantity }>6</Text>
                        </View>
                        <View style={ DoneStyle.description }>
                            <View style={ DoneStyle.address }>
                                <Text style={ DoneStyle.addressText }>2. Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - <Text style={ DoneStyle.nameTextItalic }>DVT: Kg</Text></Text>
                            </View>
                            <Text style={ DoneStyle.quantity }>6</Text>
                        </View>
                    </View>
                </View>
                <View  style={ DoneStyle.body }>
                    <View style={ DoneStyle.bodyContent }>
                        <View>
                            <Text style={ DoneStyle.nameText }>12 Khổng Tử - 5Km<Text style={ DoneStyle.nameTextItalic }></Text></Text>
                            <Text>12 Khổng Tử, Bình Thọ, Thủ Đức<Text style={ DoneStyle.nameTextItalic }></Text></Text>
                        </View>
                        <View style={ DoneStyle.line }></View>
                        <View style={ DoneStyle.description }>
                            <View style={ DoneStyle.address }>
                                <Text style={ DoneStyle.addressText }>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text style={ DoneStyle.nameTextItalic }>DVT: Kg</Text></Text>
                            </View>
                            <Text style={ DoneStyle.quantity }>6</Text>
                        </View>
                        <View style={ DoneStyle.description }>
                            <View style={ DoneStyle.address }>
                                <Text style={ DoneStyle.addressText }>2. Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - <Text style={ DoneStyle.nameTextItalic }>DVT: Kg</Text></Text>
                            </View>
                            <Text style={ DoneStyle.quantity }>6</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={DoneStyle.newRequest}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CreateRequest" as never)}
                    style={DoneStyle.preRequestButton}
                >
                    <Text style={DoneStyle.preRequestText}>Quay lại</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("CreateRequest" as never)}
                    style={DoneStyle.newRequestButton}
                >
                    <Text style={DoneStyle.nextRequest}>Tiếp theo</Text>
                </TouchableOpacity>
            </View>

            <Footer />

        </SafeAreaView>
    );

};

export default DoneRequest;