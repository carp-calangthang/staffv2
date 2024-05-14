import React from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from "react-native";

import OrderHeader from "components/request/RequestHeader";
import Footer from "assets/layout/footer/Footer";

import DeliveryStyle from "../stylesheet/ReceiveStyle";

const Delivery = () => {

    return (
        <SafeAreaView style={DeliveryStyle.receive}>

            <OrderHeader title="Giao hàng" />

            <ScrollView style={DeliveryStyle.container}>

                <View style={DeliveryStyle.header}>
                    <Text style={DeliveryStyle.headerText}><Text style={DeliveryStyle.headerTextBold}>Sói biển - </Text>Số PO/Số PXK: <Text style={DeliveryStyle.headerTextBold}>PO0001</Text></Text>
                    <Text style={DeliveryStyle.headerText}>Dự kiến giao: Từ <Text style={DeliveryStyle.headerTextBold}>08:00 20.04 </Text>đến <Text style={DeliveryStyle.headerTextBold}>08:00 21.04</Text></Text>
                    <Text style={DeliveryStyle.headerText}>Bộ phận: <Text style={DeliveryStyle.headerTextBold}>Bếp - 2 Món</Text></Text>
                    <Text style={DeliveryStyle.headerText}>Người đặt: <Text style={DeliveryStyle.headerTextBold}>Trịnh Thuỷ Trang - 0377912838</Text></Text>
                </View>

                <View style={DeliveryStyle.content}>

                    <View style={DeliveryStyle.contentItem}>
                        <Text style={DeliveryStyle.contentItemTitle}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text  style={DeliveryStyle.contentItemTitleItalic}>DVT: Kg</Text></Text>
                        <View style={DeliveryStyle.contentInfo}>
                            <Text style={DeliveryStyle.contentInfoText}>Đặt hàng: <Text style={DeliveryStyle.contentInfoTextBold}>2</Text></Text>
                            <Text style={DeliveryStyle.contentInfoText}>Đã nhận: <Text style={DeliveryStyle.contentInfoTextBold}>0</Text></Text>
                            <Text style={DeliveryStyle.contentInfoText}>Còn lại: <Text style={DeliveryStyle.contentInfoTextBold}>2</Text></Text>
                        </View>
                        <View  style={DeliveryStyle.report}>
                            <Text  style={DeliveryStyle.contentItemTitle}>Thực nhận</Text>
                            <TextInput 
                                 style={DeliveryStyle.reportInput}
                            />
                        </View>
                    </View>

                    <View style={DeliveryStyle.contentItem}>
                        <Text style={DeliveryStyle.contentItemTitle}>2. Cá diêu hồng sông Đà đông lạnh size 1-1.5kg/con - <Text  style={DeliveryStyle.contentItemTitleItalic}>DVT: Kg</Text></Text>
                        <View style={DeliveryStyle.contentInfo}>
                            <Text style={DeliveryStyle.contentInfoText}>Đặt hàng: <Text style={DeliveryStyle.contentInfoTextBold}>2</Text></Text>
                            <Text style={DeliveryStyle.contentInfoText}>Đã nhận: <Text style={DeliveryStyle.contentInfoTextBold}>0</Text></Text>
                            <Text style={DeliveryStyle.contentInfoText}>Còn lại: <Text style={DeliveryStyle.contentInfoTextBold}>2</Text></Text>
                        </View>
                        <View  style={DeliveryStyle.report}>
                            <Text  style={DeliveryStyle.contentItemTitle}>Thực nhận</Text>
                            <TextInput 
                                 style={DeliveryStyle.reportInput}
                            />
                        </View>
                    </View>

                </View>

                <View style={DeliveryStyle.bottom}>
                    <View style={DeliveryStyle.imagesContainer}>
                        <Text style={DeliveryStyle.imagesContainerText}>Hình ảnh chứng từ</Text>
                        <View style={DeliveryStyle.imagesContainerShow}>
                            <View>
                                
                                <TouchableOpacity style={DeliveryStyle.imagesContainerButton}>
                                    <Icon style={DeliveryStyle.imagesContainerIcon} name="camera" size={24} color="#900" />
                                </TouchableOpacity>

                            </View>

                            <View style={DeliveryStyle.preview}>

                                <Image 
                                    source={{
                                        uri: 'https://lawnet.vn/uploads/image/2024/02/06/104845058.png',
                                    }}
                                    style={DeliveryStyle.imagesContainerPreview} 
                                />

                                <Icon style={DeliveryStyle.cancelIcon} name="times-circle" size={24} color="red" />

                            </View>
                    
                        </View>
                    </View>
                </View>

                <View style={DeliveryStyle.bottomSave}>
                    <TouchableOpacity style={DeliveryStyle.saveButton}>
                        <Text style={DeliveryStyle.saveButtonText}>Lưu</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <Footer />

        </SafeAreaView>
    );

};

export default Delivery;