import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from "react-native";

import OrderButton from "../../../../component/order/OrderButton";
import OrderHeader from "../../../../component/order/OrderHeader";
import Footer from "assets/layout/footer/Footer";

import OrderManagerViewStyle from "../Stylesheet/OrderManagerViewStyle";

const OrderManagerView = () => {

    const { control } = useForm();
    
    const defaultValues = {
        input1: "10 Con",
        input2: "10 Con",
        input3: "10 Con",
        input4: "0",
        input5: "10 Con",
        input6: "0",
    };

    return (
        <SafeAreaView style={OrderManagerViewStyle.OrderManagerView}>

            <OrderHeader />

            <ScrollView style={OrderManagerViewStyle.container}>

                <View style={OrderManagerViewStyle.top}>
                    <Text style={OrderManagerViewStyle.topTitle}>Tổng cộng món: <Text style={OrderManagerViewStyle.topTitleBold}>03</Text></Text>
                    <TouchableOpacity style={OrderManagerViewStyle.topButton}>
                        <Icon style={OrderManagerViewStyle.topButtonIcon} name="edit" size={20} color="#900" />
                        <Text style={OrderManagerViewStyle.topButtonText}>Sửa</Text>
                    </TouchableOpacity>
                </View>

                <View style={OrderManagerViewStyle.middle}>

                    <View style={OrderManagerViewStyle.middleHeder}>
                        <Text style={OrderManagerViewStyle.middleHeaderText}>Số lượng đặt</Text>
                        <Text style={OrderManagerViewStyle.middleHeaderText}>Đặt thêm</Text>
                    </View>

                    <View style={OrderManagerViewStyle.middleBodyContainer}>
                        <View style={OrderManagerViewStyle.middleBody}>

                            <View style={OrderManagerViewStyle.middleBodyTop}>
                                <Text style={OrderManagerViewStyle.middleBodyTopTitle}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text style={OrderManagerViewStyle.middleBodyTopText}>DVT: Kg</Text></Text>
                                <TouchableOpacity style={OrderManagerViewStyle.middleBodyTopButton}>
                                    <Icon name="edit" size={24} color="#900" />
                                </TouchableOpacity>
                            </View>

                            <View style={OrderManagerViewStyle.middleBodyQuantity}>
                                <Text style={OrderManagerViewStyle.middleBodyQuantityText}>Tồn kho: <Text style={OrderManagerViewStyle.middleBodyQuantityTextBold}>20</Text></Text>
                                <Text style={OrderManagerViewStyle.middleBodyQuantityText}>Mức an toàn: <Text style={OrderManagerViewStyle.middleBodyQuantityTextBold}>40</Text></Text>
                            </View>

                            <View style={OrderManagerViewStyle.middleBodyInput}>
                                <View style={OrderManagerViewStyle.middleBodyInput}>
                                    <Controller
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                            style={OrderManagerViewStyle.middleBodyInputText}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
                                            value={value}
                                            />
                                        )}
                                        name="input1"
                                        defaultValue={defaultValues.input1} // Default value for input1
                                    />
                                    <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                        style={OrderManagerViewStyle.middleBodyInputText}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        />
                                    )}
                                    name="input2"
                                    defaultValue={defaultValues.input2}
                                    />
                                </View>
                            </View>

                            <View style={OrderManagerViewStyle.middleBodyAlert}>
                                <Text style={OrderManagerViewStyle.middleBodyAlertText}>Đặt <Text style={OrderManagerViewStyle.middleBodyAlertTextBold}>10 Kg</Text> nữa để đủ tồn kho an toàn</Text>
                                <Text style={OrderManagerViewStyle.middleBodyAlertText}>Còn <Text style={OrderManagerViewStyle.middleBodyAlertTextBold}>2 Kg</Text> chờ nhận hàng</Text>
                            </View>

                            <View style={OrderManagerViewStyle.middleBodyReason}>
                                <Text style={OrderManagerViewStyle.middleBodyReasonTitle}>Lý do đặt thêm</Text>
                                <Text style={OrderManagerViewStyle.middleBodyReasonText}></Text>
                            </View>

                        </View>
                    </View>

                    <View style={OrderManagerViewStyle.middleBodyContainer}>
                        <View style={OrderManagerViewStyle.middleBody}>

                            <View style={OrderManagerViewStyle.middleBodyTop}>
                                <Text style={OrderManagerViewStyle.middleBodyTopTitle}>2. Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - <Text style={OrderManagerViewStyle.middleBodyTopText}>DVT: Kg</Text></Text>
                                <TouchableOpacity style={OrderManagerViewStyle.middleBodyTopButton}>
                                    <Icon name="edit" size={24} color="#900" />
                                </TouchableOpacity>
                            </View>

                            <View style={OrderManagerViewStyle.middleBodyQuantity}>
                                <Text style={OrderManagerViewStyle.middleBodyQuantityText}>Tồn kho: <Text style={OrderManagerViewStyle.middleBodyQuantityTextBold}>20</Text></Text>
                                <Text style={OrderManagerViewStyle.middleBodyQuantityText}>Mức an toàn: <Text style={OrderManagerViewStyle.middleBodyQuantityTextBold}>40</Text></Text>
                            </View>

                            <View style={OrderManagerViewStyle.middleBodyInput}>
                                <View style={OrderManagerViewStyle.middleBodyInput}>
                                    <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                        style={OrderManagerViewStyle.middleBodyInputText}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        />
                                    )}
                                    name="input3"
                                    defaultValue={defaultValues.input3} // Default value for input1
                                    />
                                    <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                        style={OrderManagerViewStyle.middleBodyInputText}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        />
                                    )}
                                    name="input4"
                                    defaultValue={defaultValues.input4}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={OrderManagerViewStyle.middleBodyContainer}>
                        <View style={OrderManagerViewStyle.middleBody}>

                            <View style={OrderManagerViewStyle.middleBodyTop}>
                                <Text style={OrderManagerViewStyle.middleBodyTopTitle}>3. Phô mai hun khói Solse 100g - <Text style={OrderManagerViewStyle.middleBodyTopText}>DVT: Bịch</Text></Text>
                                <TouchableOpacity style={OrderManagerViewStyle.middleBodyTopButton}>
                                    <Icon name="edit" size={24} color="#900" />
                                </TouchableOpacity>
                            </View>

                            <View style={OrderManagerViewStyle.middleBodyQuantity}>
                                <Text style={OrderManagerViewStyle.middleBodyQuantityText}>Tồn kho: <Text style={OrderManagerViewStyle.middleBodyQuantityTextBold}>20</Text></Text>
                                <Text style={OrderManagerViewStyle.middleBodyQuantityText}>Mức an toàn: <Text style={OrderManagerViewStyle.middleBodyQuantityTextBold}>40</Text></Text>
                            </View>

                            <View style={OrderManagerViewStyle.middleBodyInput}>
                                <View style={OrderManagerViewStyle.middleBodyInput}>
                                    <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                        style={OrderManagerViewStyle.middleBodyInputText}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        />
                                    )}
                                    name="input5"
                                    defaultValue={defaultValues.input5} // Default value for input1
                                    />
                                    <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                        style={OrderManagerViewStyle.middleBodyInputText}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        />
                                    )}
                                    name="input6"
                                    defaultValue={defaultValues.input6}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>               

                </View>

            </ScrollView>

            <Footer />

        </SafeAreaView>
    );
};

export default OrderManagerView;