import React from "react";
import { ThemeProvider, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";

import OrderDetailStyle from "../Stylesheet/OrderDetailStyle";
import Footer from "assets/layout/footer/Footer";

const OrderDetail = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={OrderDetailStyle.container}>

            <View style={OrderDetailStyle.header}>
                <TouchableOpacity>
                    <Icon name="angle-left" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={OrderDetailStyle.title}>Chi tiết yêu cầu</Text>
            </View>

            <View style={OrderDetailStyle.body}>

                <View style={OrderDetailStyle.top}>
                    <Text style={OrderDetailStyle.bodyText}>Mã yêu cầu: <Text style={OrderDetailStyle.bodyTextBoild}>YCMH0001 - 2 Món</Text></Text>
                    <Text style={OrderDetailStyle.bodyText}>Ngày đặt hàng: <Text style={OrderDetailStyle.bodyTextBoild}>08:00 20.04.2024</Text></Text>
                    <Text style={OrderDetailStyle.bodyText}>Bộ phận đặt hàng: <Text style={OrderDetailStyle.bodyTextBoild}>Barista</Text></Text>
                </View>

                <View style={OrderDetailStyle.bottom}>
                    <Text style={OrderDetailStyle.BottomTextBoild}>Bộ phận mua hàng</Text>
                    <Text style={OrderDetailStyle.BottomText}>Mã yêu cầu: <Text style={OrderDetailStyle.bottomCode}>YCMH0001 - 2 Món</Text></Text>
                    <Text style={OrderDetailStyle.BottomText}>Dự kiến giao: Từ <Text style={OrderDetailStyle.bodyTime}>08:00 20.04.2024</Text> đến <Text style={OrderDetailStyle.bodyTime}>08:00 21.04.2024</Text></Text>
                    <View style={OrderDetailStyle.Product}>
                        <Text style={OrderDetailStyle.productText}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9Kg/con - DVT: Kg</Text>
                        <Text style={OrderDetailStyle.bodyQuantity}>8</Text>
                    </View>
                    <View style={OrderDetailStyle.Product}>
                        <Text style={OrderDetailStyle.productText}>2. Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1.5Kg/con - DVT: Kg</Text>
                        <Text style={OrderDetailStyle.bodyQuantity}>8</Text>
                    </View>
                </View>

                <View style={OrderDetailStyle.bottom}>
                    <View style={OrderDetailStyle.bottomTitle} >
                        <Text style={OrderDetailStyle.BottomTextBoild}>Kho tổng - 12 Khổng Tử</Text>
                        <TouchableOpacity>
                            <Icon name="angle-down" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <Text style={OrderDetailStyle.BottomText}>Mã yêu cầu: <Text style={OrderDetailStyle.bottomCode}>YCMH0001 - 2 Món</Text></Text>
                    <Text style={OrderDetailStyle.BottomText}>Dự kiến giao: Từ <Text style={OrderDetailStyle.bodyTime}>08:00 20.04.2024</Text> đến <Text style={OrderDetailStyle.bodyTime}>08:00 21.04.2024</Text></Text>
                </View>

            </View>

            <Footer />

        </SafeAreaView>
    );
};

export default OrderDetail;