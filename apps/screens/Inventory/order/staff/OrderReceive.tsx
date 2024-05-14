import React from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from "react-native";

import OrderButton from "components/order/OrderButton";
import OrderHeader from "components/order/OrderHeader";
import Footer from "assets/layout/footer/Footer";

import OrderReceiveStyle from "../Stylesheet/OrderReceiveStyle";

const OrderReceive = () => {

    return (
        <SafeAreaView style={OrderReceiveStyle.receive}>

            <OrderHeader />

            <ScrollView style={OrderReceiveStyle.container}>

                <View style={OrderReceiveStyle.header}>
                    <Text style={OrderReceiveStyle.headerText}><Text style={OrderReceiveStyle.headerTextBold}>Sói biển - </Text>Số PO/Số PXK: <Text style={OrderReceiveStyle.headerTextBold}>PO0001</Text></Text>
                    <Text style={OrderReceiveStyle.headerText}>Dự kiến giao: Từ <Text style={OrderReceiveStyle.headerTextBold}>08:00 20.04 </Text>đến <Text style={OrderReceiveStyle.headerTextBold}>08:00 21.04</Text></Text>
                    <Text style={OrderReceiveStyle.headerText}>Bộ phận: <Text style={OrderReceiveStyle.headerTextBold}>Bếp - 2 Món</Text></Text>
                    <Text style={OrderReceiveStyle.headerText}>Người đặt: <Text style={OrderReceiveStyle.headerTextBold}>Trịnh Thuỷ Trang - 0377912838</Text></Text>
                </View>

                <View style={OrderReceiveStyle.content}>

                    <View style={OrderReceiveStyle.contentItem}>
                        <Text style={OrderReceiveStyle.contentItemTitle}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text  style={OrderReceiveStyle.contentItemTitleItalic}>DVT: Kg</Text></Text>
                        <View style={OrderReceiveStyle.contentInfo}>
                            <Text style={OrderReceiveStyle.contentInfoText}>Đặt hàng: <Text style={OrderReceiveStyle.contentInfoTextBold}>2</Text></Text>
                            <Text style={OrderReceiveStyle.contentInfoText}>Đã nhận: <Text style={OrderReceiveStyle.contentInfoTextBold}>0</Text></Text>
                            <Text style={OrderReceiveStyle.contentInfoText}>Còn lại: <Text style={OrderReceiveStyle.contentInfoTextBold}>2</Text></Text>
                        </View>
                        <View  style={OrderReceiveStyle.report}>
                            <Text  style={OrderReceiveStyle.contentItemTitle}>Thực nhận</Text>
                            <TextInput 
                                 style={OrderReceiveStyle.reportInput}
                            />
                        </View>
                        <View  style={OrderReceiveStyle.reason}>
                            <Text  style={OrderReceiveStyle.contentItemTitle}>Lý do thiếu hàng</Text>
                            <View style={OrderReceiveStyle.pickerContainer}>

                                {/* <TextInput 
                                 style={OrderReceiveStyle.reasonInput}
                                /> */}
                                <Picker style={OrderReceiveStyle.reasonPicker}>
                                    <Picker.Item label="" value="0" />
                                    <Picker.Item label="Hết hàng" value="1" />
                                    <Picker.Item label="Hỏng" value="2" />
                                </Picker>

                            </View>
                        </View>
                    </View>

                    <View style={OrderReceiveStyle.contentItem}>
                        <Text style={OrderReceiveStyle.contentItemTitle}>2. Cá diêu hồng sông Đà đông lạnh size 1-1.5kg/con - <Text  style={OrderReceiveStyle.contentItemTitleItalic}>DVT: Kg</Text></Text>
                        <View style={OrderReceiveStyle.contentInfo}>
                            <Text style={OrderReceiveStyle.contentInfoText}>Đặt hàng: <Text style={OrderReceiveStyle.contentInfoTextBold}>2</Text></Text>
                            <Text style={OrderReceiveStyle.contentInfoText}>Đã nhận: <Text style={OrderReceiveStyle.contentInfoTextBold}>0</Text></Text>
                            <Text style={OrderReceiveStyle.contentInfoText}>Còn lại: <Text style={OrderReceiveStyle.contentInfoTextBold}>2</Text></Text>
                        </View>
                        <View  style={OrderReceiveStyle.report}>
                            <Text  style={OrderReceiveStyle.contentItemTitle}>Thực nhận</Text>
                            <TextInput 
                                 style={OrderReceiveStyle.reportInput}
                            />
                        </View>
                        <View>
                            <Text style={OrderReceiveStyle.alertText}>Số lương thực nhận vượt <Text style={OrderReceiveStyle.alertTextBold}>10 cái</Text>, quá số lượng tối đa được nhận</Text>
                        </View>
                    </View>

                </View>

                <View style={OrderReceiveStyle.bottom}>
                    <View style={OrderReceiveStyle.imagesContainer}>
                        <Text style={OrderReceiveStyle.imagesContainerText}>Hình ảnh chứng từ</Text>
                        <View style={OrderReceiveStyle.imagesContainerShow}>
                            <View>
                                
                                <TouchableOpacity style={OrderReceiveStyle.imagesContainerButton}>
                                    <Icon style={OrderReceiveStyle.imagesContainerIcon} name="camera" size={24} color="#900" />
                                </TouchableOpacity>

                            </View>

                            <View style={OrderReceiveStyle.preview}>

                                <Image 
                                    source={{
                                        uri: 'https://lawnet.vn/uploads/image/2024/02/06/104845058.png',
                                    }}
                                    style={OrderReceiveStyle.imagesContainerPreview} 
                                />

                                <Icon style={OrderReceiveStyle.cancelIcon} name="times-circle" size={24} color="red" />

                            </View>
                    
                        </View>
                    </View>
                    <View style={OrderReceiveStyle.imagesContainer}>
                        <Text style={OrderReceiveStyle.imagesContainerText}>File đính kèm (nếu có):</Text>
                        <View style={OrderReceiveStyle.imagesContainerShow}>
                            <View>
                                
                                <TouchableOpacity style={OrderReceiveStyle.imagesContainerButton}>
                                    <Icon style={OrderReceiveStyle.imagesContainerIcon} name="paperclip" size={24} color="#900" />
                                </TouchableOpacity>

                            </View>
                    
                        </View>
                    </View>
                </View>

                <View style={OrderReceiveStyle.bottomSave}>
                    <TouchableOpacity style={OrderReceiveStyle.saveButton}>
                        <Text style={OrderReceiveStyle.saveButtonText}>Lưu</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <Footer />

        </SafeAreaView>
    );

};

export default OrderReceive;