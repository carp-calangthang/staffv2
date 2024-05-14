import React from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from "react-native";

import OrderHeader from "components/request/RequestHeader";
import Footer from "assets/layout/footer/Footer";

import ReceiveStyle from "../stylesheet/ReceiveStyle";

const Receive = () => {

    return (
        <SafeAreaView style={ReceiveStyle.receive}>

            <OrderHeader title="Nhận hàng" />

            <ScrollView style={ReceiveStyle.container}>

                <View style={ReceiveStyle.header}>
                    <Text style={ReceiveStyle.headerText}><Text style={ReceiveStyle.headerTextBold}>Sói biển - </Text>Số PO/Số PXK: <Text style={ReceiveStyle.headerTextBold}>PO0001</Text></Text>
                    <Text style={ReceiveStyle.headerText}>Dự kiến giao: Từ <Text style={ReceiveStyle.headerTextBold}>08:00 20.04 </Text>đến <Text style={ReceiveStyle.headerTextBold}>08:00 21.04</Text></Text>
                    <Text style={ReceiveStyle.headerText}>Bộ phận: <Text style={ReceiveStyle.headerTextBold}>Bếp - 2 Món</Text></Text>
                    <Text style={ReceiveStyle.headerText}>Người đặt: <Text style={ReceiveStyle.headerTextBold}>Trịnh Thuỷ Trang - 0377912838</Text></Text>
                </View>

                <View style={ReceiveStyle.content}>

                    <View style={ReceiveStyle.contentItem}>
                        <Text style={ReceiveStyle.contentItemTitle}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text  style={ReceiveStyle.contentItemTitleItalic}>DVT: Kg</Text></Text>
                        <View style={ReceiveStyle.contentInfo}>
                            <Text style={ReceiveStyle.contentInfoText}>Đặt hàng: <Text style={ReceiveStyle.contentInfoTextBold}>2</Text></Text>
                            <Text style={ReceiveStyle.contentInfoText}>Đã nhận: <Text style={ReceiveStyle.contentInfoTextBold}>0</Text></Text>
                            <Text style={ReceiveStyle.contentInfoText}>Còn lại: <Text style={ReceiveStyle.contentInfoTextBold}>2</Text></Text>
                        </View>
                        <View  style={ReceiveStyle.report}>
                            <Text  style={ReceiveStyle.contentItemTitle}>Thực nhận</Text>
                            <TextInput 
                                 style={ReceiveStyle.reportInput}
                            />
                        </View>
                    </View>

                    <View style={ReceiveStyle.contentItem}>
                        <Text style={ReceiveStyle.contentItemTitle}>2. Cá diêu hồng sông Đà đông lạnh size 1-1.5kg/con - <Text  style={ReceiveStyle.contentItemTitleItalic}>DVT: Kg</Text></Text>
                        <View style={ReceiveStyle.contentInfo}>
                            <Text style={ReceiveStyle.contentInfoText}>Đặt hàng: <Text style={ReceiveStyle.contentInfoTextBold}>2</Text></Text>
                            <Text style={ReceiveStyle.contentInfoText}>Đã nhận: <Text style={ReceiveStyle.contentInfoTextBold}>0</Text></Text>
                            <Text style={ReceiveStyle.contentInfoText}>Còn lại: <Text style={ReceiveStyle.contentInfoTextBold}>2</Text></Text>
                        </View>
                        <View  style={ReceiveStyle.report}>
                            <Text  style={ReceiveStyle.contentItemTitle}>Thực nhận</Text>
                            <TextInput 
                                 style={ReceiveStyle.reportInput}
                            />
                        </View>
                    </View>

                </View>

                <View style={ReceiveStyle.bottom}>
                    <View style={ReceiveStyle.imagesContainer}>
                        <Text style={ReceiveStyle.imagesContainerText}>Hình ảnh chứng từ</Text>
                        <View style={ReceiveStyle.imagesContainerShow}>
                            <View>
                                
                                <TouchableOpacity style={ReceiveStyle.imagesContainerButton}>
                                    <Icon style={ReceiveStyle.imagesContainerIcon} name="camera" size={24} color="#900" />
                                </TouchableOpacity>

                            </View>

                            <View style={ReceiveStyle.preview}>

                                <Image 
                                    source={{
                                        uri: 'https://lawnet.vn/uploads/image/2024/02/06/104845058.png',
                                    }}
                                    style={ReceiveStyle.imagesContainerPreview} 
                                />

                                <Icon style={ReceiveStyle.cancelIcon} name="times-circle" size={24} color="red" />

                            </View>
                    
                        </View>
                    </View>
                </View>

                <View style={ReceiveStyle.bottomSave}>
                    <TouchableOpacity style={ReceiveStyle.saveButton}>
                        <Text style={ReceiveStyle.saveButtonText}>Lưu</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <Footer />

        </SafeAreaView>
    );

};

export default Receive;