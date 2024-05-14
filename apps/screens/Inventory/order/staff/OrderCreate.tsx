import React, {useState} from "react";
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity, View, Text, Image, TextInput, ScrollView } from "react-native";

import Footer from "assets/layout/footer/Footer";
import OrderCreateStyle from "../Stylesheet/OrderCreateStyle";
import OrderButton from "../../../../component/order/OrderButton";
import OrderHeader from "../../../../component/order/OrderHeader";

const OrderCreate = () => {

    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState("default");

    return (
        <SafeAreaView style={OrderCreateStyle.container}>

            <OrderHeader />

            <ScrollView style={OrderCreateStyle.body}>

                <OrderButton />

                <View style={OrderCreateStyle.search}>
                    <TextInput 
                        placeholder="Nhập tên mặt hàng"
                        style={OrderCreateStyle.searchText}
                    />
                    <TouchableOpacity style={OrderCreateStyle.searchButton}>
                        <Icon name="search" size={20} />
                    </TouchableOpacity>
                </View>


                <Text style={{ fontStyle: 'italic', fontSize: 18, marginLeft: 20, color: "#000"}}>Tổng cộng (món): <Text style={{fontWeight: "bold", color: "#000"}}>03</Text> </Text>

                <View style={OrderCreateStyle.createContainer}>
                    <View style={OrderCreateStyle.detailTop}>
                        <View style={OrderCreateStyle.detailTopTitle}>
                            <Text style={OrderCreateStyle.titleText}>Số lượng đặt</Text>
                            <Text style={OrderCreateStyle.titleText}>Đặt thêm</Text>
                        </View>
                        <View style={OrderCreateStyle.detail}>
                            <View>
                                <Text style={OrderCreateStyle.detailTitle}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con</Text>
                                <Text style={OrderCreateStyle.detailSub}>- DVT: Kg</Text>
                                <View style={OrderCreateStyle.detailCount}>
                                    <Text style={OrderCreateStyle.detailSubTitle}>Tồn kho: <Text style={OrderCreateStyle.detailSubQuantity}>20</Text></Text>
                                    <Text style={OrderCreateStyle.detailSubTitle}>Mức an toàn: <Text style={OrderCreateStyle.detailSubQuantity}>40</Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={OrderCreateStyle.detailQuantity}>
                            <TextInput style={OrderCreateStyle.detailInputQuantity}/>
                            <TextInput style={OrderCreateStyle.detailInputQuantity}/>
                        </View>
                        <View style={OrderCreateStyle.detailAlert}>
                            <Text style={OrderCreateStyle.detailAlertText}>Đặt <Text style={OrderCreateStyle.detailAlertQuantity}>10 Kg</Text> nữa để đủ tồn kho an toàn</Text>
                            <Text style={OrderCreateStyle.detailAlertText}>Còn <Text style={OrderCreateStyle.detailAlertQuantity}>2 Kg</Text> chờ nhận hàng</Text>
                        </View>
                        <View style={OrderCreateStyle.detailReason}>
                            <Text style={OrderCreateStyle.detailReasonTitle}>Lý do đặt thêm</Text>
                            <View style={OrderCreateStyle.detailReasonPickerBorder}>
                                <Picker
                                    style={OrderCreateStyle.detailReasonPicker}
                                    selectedValue={selectedValue}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedValue(itemValue)
                                    }>
                                    <Picker.Item label="Lý do 1" value="reason1" />
                                    <Picker.Item label="Lý do 2" value="reason2" />
                                    <Picker.Item label="Lý do 3" value="reason3" />
                                    <Picker.Item label="Lý do 4" value="reason4" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={OrderCreateStyle.detailTop}>
                        <View style={OrderCreateStyle.detail}>
                            <View>
                                <Text style={OrderCreateStyle.detailTitle}>2. Cá diêu hồng sông Đà làm sách đông lạnh size 1-1.5kg/con</Text>
                                <Text style={OrderCreateStyle.detailSub}>- DVT: Kg</Text>
                                <View style={OrderCreateStyle.detailCount}>
                                    <Text style={OrderCreateStyle.detailSubTitle}>Tồn kho: <Text style={OrderCreateStyle.detailSubQuantity}>20</Text></Text>
                                    <Text style={OrderCreateStyle.detailSubTitle}>Mức an toàn: <Text style={OrderCreateStyle.detailSubQuantity}>40</Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={OrderCreateStyle.detailQuantity}>
                            <TextInput style={OrderCreateStyle.detailInputQuantity}/>
                            <TextInput style={OrderCreateStyle.detailInputQuantity}/>
                        </View>
                        <View style={OrderCreateStyle.detailAlert}>
                            <Text style={OrderCreateStyle.detailAlertText}>Số lượng vượt quá <Text style={OrderCreateStyle.detailAlertQuantity}>10 Kg</Text>, quá tồn kho tối đa</Text>
                        
                        </View>
                    </View>

                    <View style={OrderCreateStyle.detailTop}>
                        <View style={OrderCreateStyle.detail}>
                            <View>
                                <Text style={OrderCreateStyle.detailTitle}>3. Phô mai hun khói Solse 100g</Text>
                                <Text style={OrderCreateStyle.detailSub}>- DVT: Bịch</Text>
                                <View style={OrderCreateStyle.detailCount}>
                                    <Text style={OrderCreateStyle.detailSubTitle}>Tồn kho: <Text style={OrderCreateStyle.detailSubQuantity}>20</Text></Text>
                                    <Text style={OrderCreateStyle.detailSubTitle}>Mức an toàn: <Text style={OrderCreateStyle.detailSubQuantity}>40</Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={OrderCreateStyle.detailQuantity}>
                            <TextInput style={OrderCreateStyle.detailInputQuantity}/>
                            <TextInput style={OrderCreateStyle.detailInputQuantity}/>
                        </View>
                    </View>
                </View>

                <View style={OrderCreateStyle.Button}>
                    <TouchableOpacity 
                        onPress={() => {navigation.navigate('OrderCreate2' as never)}}
                        style={OrderCreateStyle.nextButton}
                    >
                        <Text style={OrderCreateStyle.nextButtonText}>Tiếp theo</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <Footer />

        </SafeAreaView>
    );
};

export default OrderCreate;