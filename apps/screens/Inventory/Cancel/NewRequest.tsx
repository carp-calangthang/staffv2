import React from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from "react-native";

import OrderHeader from "components/request/RequestHeader";
import SearchBar from "components/cancel/Search";
import ButtonBar from "components/cancel/Button";
import Footer from "assets/layout/footer/Footer";

import CreateStyle from "./stylesheet/CreateStyle";

const NewRequest = () => {

    return (
        <SafeAreaView style={CreateStyle.receive}>

            <OrderHeader title="Tạo mới yêu cầu huỷ hàng" />

            <SearchBar />

            <ScrollView style={CreateStyle.container}>

                <View style={CreateStyle.content}>

                    <View style={CreateStyle.contentItem}>
                        <View style={CreateStyle.contentTitle}>
                            <Text style={CreateStyle.contentItemTitle}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text  style={CreateStyle.contentItemTitleItalic}>DVT: Kg</Text></Text>
                            <TouchableOpacity>
                                <Icon name="angle-down" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={CreateStyle.Descriptive}>
                                <Text style={CreateStyle.DescriptiveText1}>Tồn kho</Text>
                                <Text style={CreateStyle.DescriptiveText2}>Số lượng huỷ</Text>
                            </View>
                            <View style={CreateStyle.line} />
                            <View style={CreateStyle.InfoBody}>
                                <Text style={CreateStyle.InfoBodyText}>2</Text>
                                <TextInput style={CreateStyle.InfoBodyInput}/>                                    
                            </View>
                        </View>
                        <View >
                            <Text  style={CreateStyle.contentItemTitle}>Lý do huỷ hàng</Text>
                            <View style={CreateStyle.pickerContainer}>

                                {/* <TextInput 
                                 style={OrderReceiveStyle.reasonInput}
                                /> */}
                                <Picker style={CreateStyle.reasonPicker}>
                                    <Picker.Item label="" value="0" />
                                    <Picker.Item label="Hết hàng" value="1" />
                                    <Picker.Item label="Hỏng" value="2" />
                                </Picker>

                            </View>
                        </View>
                    </View>

                </View>

                <View style={CreateStyle.content}>

                    <View style={CreateStyle.contentItem}>
                        <View style={CreateStyle.contentTitle}>
                            <Text style={CreateStyle.contentItemTitle}>2. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text  style={CreateStyle.contentItemTitleItalic}>DVT: Kg</Text></Text>
                            <TouchableOpacity>
                                <Icon name="angle-up" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={CreateStyle.bottom}>
                    <View style={CreateStyle.imagesContainer}>
                        <Text style={CreateStyle.imagesContainerText}>Hình ảnh chứng từ</Text>
                        <View style={CreateStyle.imagesContainerShow}>
                            <View>
                                
                                <TouchableOpacity style={CreateStyle.imagesContainerButton}>
                                    <Icon style={CreateStyle.imagesContainerIcon} name="camera" size={24} color="#900" />
                                </TouchableOpacity>

                            </View>

                            <View style={CreateStyle.preview}>

                                <Image 
                                    source={{
                                        uri: 'https://lawnet.vn/uploads/image/2024/02/06/104845058.png',
                                    }}
                                    style={CreateStyle.imagesContainerPreview} 
                                />

                                <Icon style={CreateStyle.cancelIcon} name="times-circle" size={24} color="red" />

                            </View>
                    
                        </View>
                    </View>
                </View>

                <View style={CreateStyle.bottomSave}>
                    <TouchableOpacity style={CreateStyle.saveButton}>
                        <Text style={CreateStyle.saveButtonText}>Lưu</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <Footer />

        </SafeAreaView>
    );

};

export default NewRequest;