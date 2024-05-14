import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";

import OrderButton from "../../../../component/order/OrderButton";
import OrderHeader from "../../../../component/order/OrderHeader";
import Footer from "assets/layout/footer/Footer";

import OrderDeliveryStyle from "../Stylesheet/OrderDeliveryStyle";

const OrderDelivery = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={OrderDeliveryStyle.delivery}>

            <OrderHeader />

            <ScrollView style={OrderDeliveryStyle.container}>

                <OrderButton />

                <View style={OrderDeliveryStyle.top}>
                    <View style={OrderDeliveryStyle.topCount}>
                        <Text style={OrderDeliveryStyle.topCountText}>Tổng cộng</Text>
                        <Text style={OrderDeliveryStyle.topQuantity}>02</Text>
                    </View>
                    <View style={OrderDeliveryStyle.topCount}>
                        <Text style={OrderDeliveryStyle.topCountText}>Chờ nhận</Text>
                        <Text style={OrderDeliveryStyle.topQuantity}>01</Text>
                    </View>
                    <View style={OrderDeliveryStyle.topCount}>
                        <Text style={OrderDeliveryStyle.topCountText}>Nhận 1 phần</Text>
                        <Text style={OrderDeliveryStyle.topQuantity}>01</Text>
                    </View>
                </View>

                <View style={OrderDeliveryStyle.search}>
                    <TextInput 
                        style={OrderDeliveryStyle.searchInput}
                        placeholder="Nhập mã Po/ Tên nhà cung cấp"
                    />
                    <TouchableOpacity
                        style={OrderDeliveryStyle.searchButton}
                    >
                        <Icon name="search" size={20} color="#000" />                        
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={OrderDeliveryStyle.codeButton}
                    >
                        <Icon style={OrderDeliveryStyle.codeIcon} name="barcode" size={30} color="#900" />
                    </TouchableOpacity>
                </View>

                <View style={OrderDeliveryStyle.body}>
                    <View style={OrderDeliveryStyle.bodyTop}>
                        <Text style={OrderDeliveryStyle.bodyTitle}><Text style={OrderDeliveryStyle.bodyTitleBold}>Sói biển - </Text>Số PO/Số PXK: <Text style={OrderDeliveryStyle.bodyTitleBold}>PO0001</Text></Text>
                        <TouchableOpacity>
                            <Icon name="angle-up" size={24} color="#900" />
                        </TouchableOpacity>
                    </View>
                    <View style={OrderDeliveryStyle.bodyBottom}>
                        <Text style={OrderDeliveryStyle.bodyTitle}>Dự kiến giao: Từ <Text style={OrderDeliveryStyle.bodyGrayBold}>08:00 20.04 </Text>đến <Text style={OrderDeliveryStyle.bodyGrayBold}>08:00 21.04</Text></Text>
                        <Text style={OrderDeliveryStyle.bodyTitle}>Bộ phận: <Text style={OrderDeliveryStyle.bodyGrayBold}>Bếp - 2 Món</Text></Text>
                        <Text style={OrderDeliveryStyle.bodyTitle}>Người đặt: <Text style={OrderDeliveryStyle.bodyGrayBold}>Trịnh Thuỷ Trang - 0377912838</Text></Text>
                        <View style={OrderDeliveryStyle.bodyStatus}>
                            <Text style={OrderDeliveryStyle.bodyStatusText}>Nhận 1 phần</Text>
                        </View>
                    </View>
                    <View style={OrderDeliveryStyle.bodyContent}>
                        <View style={OrderDeliveryStyle.bodyContentItem}>
                            <Text style={OrderDeliveryStyle.bodyContentName}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text style={OrderDeliveryStyle.bodyContentItalic}>DVT: kg</Text></Text>
                            <Text style={OrderDeliveryStyle.bodyContentQuantity}>2/8</Text>
                        </View>
                        <View style={OrderDeliveryStyle.bodyContentItem}>
                            <Text style={OrderDeliveryStyle.bodyContentName}>2. Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1.5kg/con - <Text style={OrderDeliveryStyle.bodyContentItalic}>DVT: kg</Text></Text>
                            <Text style={OrderDeliveryStyle.bodyContentQuantity}>0/8</Text>
                        </View>
                        <View style={OrderDeliveryStyle.bodyButton}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("OrderReceive" as never);
                                }}
                                style={OrderDeliveryStyle.TakeButton}
                            >
                                <Text style={OrderDeliveryStyle.TakeButtonText}>Nhận hàng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={OrderDeliveryStyle.body}>
                    <View style={OrderDeliveryStyle.bodyTop}>
                        <Text style={OrderDeliveryStyle.bodyTitle}><Text style={OrderDeliveryStyle.bodyTitleBold}>Sói biển - </Text>Số PO/Số PXK: <Text style={OrderDeliveryStyle.bodyTitleBold}>PO0001</Text></Text>
                        <TouchableOpacity>
                            <Icon name="angle-down" size={24} color="#900" />
                        </TouchableOpacity>
                    </View>
                    <View style={OrderDeliveryStyle.bodyBottom}>
                        <Text style={OrderDeliveryStyle.bodyTitle}>Dự kiến giao: Từ <Text style={OrderDeliveryStyle.bodyGrayBold}>08:00 20.04 </Text>đến <Text style={OrderDeliveryStyle.bodyGrayBold}>08:00 21.04</Text></Text>
                        <Text style={OrderDeliveryStyle.bodyTitle}>Bộ phận: <Text style={OrderDeliveryStyle.bodyGrayBold}>Bếp - 2 Món</Text></Text>
                        <Text style={OrderDeliveryStyle.bodyTitle}>Người đặt: <Text style={OrderDeliveryStyle.bodyGrayBold}>Trịnh Thuỷ Trang - 0377912838</Text></Text>
                        <View style={OrderDeliveryStyle.bodyStatus}>
                            <Text style={OrderDeliveryStyle.bodyStatusText}>Chờ nhận</Text>
                        </View>
                        <View style={OrderDeliveryStyle.bodyButton}>
                            <TouchableOpacity
                                style={OrderDeliveryStyle.TakeButton}
                            >
                                <Text style={OrderDeliveryStyle.TakeButtonText}>Nhận hàng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>

            <Footer />

        </SafeAreaView>
    );

};

export default OrderDelivery;