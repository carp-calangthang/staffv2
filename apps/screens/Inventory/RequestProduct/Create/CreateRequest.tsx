import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import RequestHeader from "../../../../component/request/RequestHeader";

import Footer from "assets/layout/footer/Footer";

import CreateStyle from "../stylesheet/CreateStyle";

const CreateRequest = () => {

    const navigation = useNavigation();

    const [color, setColor] = useState('#fff');
    const [textColor, setTextColor] = useState('#000');

    const handleSoftMapButton = () => {
        setColor(color === '#fff' ? '#704232' : '#fff');
        setTextColor(textColor === '#000' ? '#fff' : '#000');
    };

    return (
        <SafeAreaView style={ CreateStyle.create }>

            <RequestHeader title="Tạo mới lệnh xin hàng" />  

            <ScrollView style={ CreateStyle.container }>
                <View style={ CreateStyle.top }>
                    <View style={ CreateStyle.search }>
                        <TextInput 
                            style={ CreateStyle.searchInput }
                            placeholder="Nhập nhóm hàng"
                        />
                        <TouchableOpacity
                            style={ CreateStyle.expandButton }
                        >   
                            <Icon  style={ CreateStyle.expandIcon } name="angle-down" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View  style={ CreateStyle.softMap }>
                        <TouchableOpacity
                            onPress={ handleSoftMapButton }
                            style={[ 
                                CreateStyle.softMapButton, 
                                { backgroundColor: color}
                            ]}
                        >
                            <View style={ CreateStyle.softMapIn }>
                                <Icon style={ CreateStyle.softMapIcon } name="map-marker" size={20} color={textColor} />
                                <Text style={[ 
                                    CreateStyle.softMapText,
                                    { color: textColor }
                                ]} >Gần nhất</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
                <View  style={ CreateStyle.body }>
                    <View  style={ CreateStyle.bodyTitle }>
                        <Text style={ CreateStyle.bodyTitleText1 }>Kho</Text>
                        <Text style={ CreateStyle.bodyTitleText2 }>Tồn kho</Text>
                        <Text style={ CreateStyle.bodyTitleText3 }>SL</Text>
                    </View>
                    <View style={ CreateStyle.line }></View>
                    <View style={ CreateStyle.bodyContent }>
                        <View style={ CreateStyle.name }>
                            <Text style={ CreateStyle.nameText }>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text style={ CreateStyle.nameTextItalic }>DVT: Kg</Text></Text>
                            <TouchableOpacity
                                style={ CreateStyle.expandButton }
                            >
                                <Icon style={ CreateStyle.expandIcon } name="angle-up" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <View style={ CreateStyle.description }>
                            <View style={ CreateStyle.address }>
                                <Text style={ CreateStyle.addressTextBold }>• 12 Khổng Tử - 5Km</Text>
                                <Text style={ CreateStyle.addressText }>12 Khổng Tử, Bình Thọ, Thủ Đức</Text>
                            </View>
                            <Text style={ CreateStyle.quantity }>6</Text>
                            <TextInput
                                style={ CreateStyle.quantityInput }
                            />
                        </View>
                        <View style={ CreateStyle.description }>
                            <View style={ CreateStyle.address }>
                                <Text style={ CreateStyle.addressTextBold }>• Ame Nguyễn Duy Trinh - 6Km</Text>
                                <Text style={ CreateStyle.addressText }>409 Nguyễn Duy Trinh, Bình Trưng Đông, Q2</Text>
                            </View>
                            <Text style={ CreateStyle.quantity }>6</Text>
                            <TextInput
                                placeholder="Nhập SL"
                                style={ CreateStyle.quantityInput }
                            />
                        </View>
                    </View>
                    <View style={ CreateStyle.line }></View>
                    <View style={ CreateStyle.bodyContent }>
                        <View style={ CreateStyle.name }>
                            <Text style={ CreateStyle.nameText }>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text style={ CreateStyle.nameTextItalic }>DVT: Kg</Text></Text>
                            <TouchableOpacity
                                style={ CreateStyle.expandButton }
                            >
                                <Icon style={ CreateStyle.expandIcon } name="angle-up" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <View style={ CreateStyle.description }>
                            <View style={ CreateStyle.address }>
                                <Text style={ CreateStyle.addressTextBold }>• 12 Khổng Tử - 5Km</Text>
                                <Text style={ CreateStyle.addressText }>12 Khổng Tử, Bình Thọ, Thủ Đức</Text>
                            </View>
                            <Text style={ CreateStyle.quantity }>6</Text>
                            <TextInput
                                style={ CreateStyle.quantityInput }
                            />
                        </View>
                        <View style={ CreateStyle.description }>
                            <View style={ CreateStyle.address }>
                                <Text style={ CreateStyle.addressTextBold }>• Ame Nguyễn Duy Trinh - 6Km</Text>
                                <Text style={ CreateStyle.addressText }>409 Nguyễn Duy Trinh, Bình Trưng Đông, Q2</Text>
                            </View>
                            <Text style={ CreateStyle.quantity }>6</Text>
                            <TextInput
                                placeholder="Nhập SL"
                                style={ CreateStyle.quantityInput }
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={CreateStyle.newRequest}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("DoneCreate" as never)}
                    style={CreateStyle.newRequestButton}
                >
                    <Text style={CreateStyle.nextRequest}>Tiếp theo</Text>
                </TouchableOpacity>
            </View>

            <Footer />

        </SafeAreaView>
    );

};

export default CreateRequest;