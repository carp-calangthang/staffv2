import React from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from "react-native";

import OrderButton from "components/order/OrderButton";
import OrderHeader from "components/order/OrderHeader";
import Footer from "assets/layout/footer/Footer";

import SendStyle from "./stylesheet/SendStyle";

const SendRequest = () => {

    return (
        <SafeAreaView style={SendStyle.receive}>

            <OrderHeader />

            <ScrollView style={SendStyle.container}>

                <View style={SendStyle.header}>
                    <Text style={SendStyle.headerText}><Text style={SendStyle.headerTextBold}>Sói biển - </Text>Số PO/Số PXK: <Text style={SendStyle.headerTextBold}>PO0001</Text></Text>
                    <Text style={SendStyle.headerText}>Dự kiến giao: Từ <Text style={SendStyle.headerTextBold}>08:00 20.04 </Text>đến <Text style={SendStyle.headerTextBold}>08:00 21.04</Text></Text>
                    <Text style={SendStyle.headerText}>Bộ phận: <Text style={SendStyle.headerTextBold}>Bếp - 2 Món</Text></Text>
                    <Text style={SendStyle.headerText}>Người đặt: <Text style={SendStyle.headerTextBold}>Trịnh Thuỷ Trang - 0377912838</Text></Text>
                </View>

                <View style={SendStyle.content}>

                    <View style={SendStyle.contentItem}>
                        <View style={SendStyle.contentTitle}>
                            <Text style={SendStyle.contentItemTitle}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text  style={SendStyle.contentItemTitleItalic}>DVT: Kg</Text></Text>
                            <TouchableOpacity>
                                <Icon name="angle-down" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={SendStyle.Descriptive}>
                                <Text style={SendStyle.DescriptiveText1}>Tồn kho</Text>
                                <Text style={SendStyle.DescriptiveText2}>Số lượng huỷ</Text>
                            </View>
                            <View style={SendStyle.line} />
                            <View style={SendStyle.InfoBody}>
                                <Text style={SendStyle.InfoBodyText}>2</Text>
                                <TextInput style={SendStyle.InfoBodyInput}/>                                    
                            </View>
                        </View>
                        <View style={SendStyle.reason}>
                            <Text  style={SendStyle.contentItemTitle}>Lý do huỷ hàng</Text>
                            <TextInput 
                                style={SendStyle.reasonInput}
                            />
                        </View>
                    </View>

                    <View style={SendStyle.bottom}>
                    <View style={SendStyle.imagesContainer}>
                        <Text style={SendStyle.imagesContainerText}>Hình ảnh cân kí hàng huỷ</Text>
                        <View style={SendStyle.preview}>

                            <Image 
                                source={{
                                    uri: 'https://lawnet.vn/uploads/image/2024/02/06/104845058.png',
                                }}
                                style={SendStyle.imagesContainerPreview} 
                            />

                        </View>
                        <Text style={SendStyle.imagesContainerText}>Hình ảnh tiêu huỷ hàng</Text>
                        <View style={SendStyle.imagesContainerShow}>
                            <View>
                                
                                <TouchableOpacity style={SendStyle.imagesContainerButton}>
                                    <Icon style={SendStyle.imagesContainerIcon} name="camera" size={24} color="#900" />
                                </TouchableOpacity>

                            </View>

                            <View style={SendStyle.preview}>

                                <Image 
                                    source={{
                                        uri: 'https://lawnet.vn/uploads/image/2024/02/06/104845058.png',
                                    }}
                                    style={SendStyle.imagesContainerPreview} 
                                />

                                <Icon style={SendStyle.cancelIcon} name="times-circle" size={24} color="red" />

                            </View>
                    
                        </View>
                    </View>
                </View>

                </View>

                <View style={SendStyle.content}>

                    <View style={SendStyle.contentItem}>
                        <View style={SendStyle.contentTitle}>
                            <Text style={SendStyle.contentItemTitle}>2. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text  style={SendStyle.contentItemTitleItalic}>DVT: Kg</Text></Text>
                            <TouchableOpacity>
                                <Icon name="angle-up" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={SendStyle.bottomSave}>
                    <TouchableOpacity style={SendStyle.saveButton}>
                        <Text style={SendStyle.saveButtonText}>Lưu</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <Footer />

        </SafeAreaView>
    );

};

export default SendRequest;