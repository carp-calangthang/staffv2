import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity, View, Text, ScrollView, TextInput } from "react-native";

import OrderButton from "../../../../component/order/OrderButton";
import OrderHeader from "../../../../component/order/OrderHeader";
import Footer from "assets/layout/footer/Footer";

import OrderCreate2Style from "../Stylesheet/OrderCreate2Style";

const OrderCreate2 = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={OrderCreate2Style.container}>

            <OrderHeader />

            <ScrollView style={OrderCreate2Style.body}>

                <OrderButton />

                <View style={OrderCreate2Style.createContainer}>

                    <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>Bộ phận mua hàng</Text>
                    <Text style={{ fontSize: 13, color: "#000" }}>Dự kiến giao: Từ <Text style={{fontWeight: "bold", color: "#000"}}>08:00 20.04</Text> đến <Text style={{fontWeight: "bold", color: "#000"}}>08:00 21.04</Text> </Text>
                    <Text style={{ fontSize: 13, color: "#000" }}>Số món: <Text style={{fontWeight: "bold", color: "#575E69"}}>2</Text> </Text>

                    <View>
                        <View style={OrderCreate2Style.detailTop}>
                            <View style={OrderCreate2Style.detailTopTitle}>
                                <Text style={OrderCreate2Style.titleText}>Số lượng đặt</Text>
                                <Text style={OrderCreate2Style.titleText}>Đặt thêm</Text>
                            </View>
                            <View style={OrderCreate2Style.detail}>
                                <View>
                                    <Text style={OrderCreate2Style.detailTitle}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg</Text>
                                    <View style={OrderCreate2Style.detailCount}>
                                        <Text style={OrderCreate2Style.detailSubQuantity}>8</Text>
                                        <Text style={OrderCreate2Style.detailSubQuantity}>0</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={OrderCreate2Style.detail}>
                                <View>
                                    <Text style={OrderCreate2Style.detailTitle}>2. Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1.5kg/con - DVT: Kg</Text>
                                    <View style={OrderCreate2Style.detailCount}>
                                        <Text style={OrderCreate2Style.detailSubQuantity}>10</Text>
                                        <Text style={OrderCreate2Style.detailSubQuantity}>3</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={OrderCreate2Style.createContainer}>

                    <Text style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>Kho hàng 12 khổng tử</Text>
                    <Text style={{ fontSize: 13, color: "#000" }}>Dự kiến giao: Từ <Text style={{fontWeight: "bold", color: "#000"}}>08:00 20.04</Text> đến <Text style={{fontWeight: "bold", color: "#000"}}>08:00 21.04</Text> </Text>

                    <View>
                        <View style={OrderCreate2Style.detailTop}>
                            <View style={OrderCreate2Style.detailTopTitle}>
                                <Text style={OrderCreate2Style.titleText}>Số lượng đặt</Text>
                                <Text style={OrderCreate2Style.titleText}>Đặt thêm</Text>
                            </View>
                            <View style={OrderCreate2Style.detail}>
                                <View>
                                    <Text style={OrderCreate2Style.detailTitle}>1. Phô mai hun khói Solse 100g - DVT: Bịch</Text>
                                    <Text style={OrderCreate2Style.detailSub}></Text>
                                    <View style={OrderCreate2Style.detailCount}>
                                        <Text style={OrderCreate2Style.detailSubQuantity}>8</Text>
                                        <Text style={OrderCreate2Style.detailSubQuantity}>0</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View>

                <View style={OrderCreate2Style.Button}>
                    <TouchableOpacity 
                        onPress={() => {navigation.navigate('OrderCreate2' as never)}}
                        style={OrderCreate2Style.preButton}
                    >
                        <Text style={OrderCreate2Style.preButtonText}>Quay lại</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {navigation.navigate('OrderWaiting' as never)}}
                        style={OrderCreate2Style.nextButton}
                    >
                        <Text style={OrderCreate2Style.nextButtonText}>Tiếp theo</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <Footer />

        </SafeAreaView>
    );
    
};

export default OrderCreate2;