import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from "react-native";

import OrderButton from "../../../../component/order/OrderButton";
import OrderHeader from "../../../../component/order/OrderHeader";
import Footer from "assets/layout/footer/Footer";

import OrderManagerEditStyle from "../Stylesheet/OrderEditStyle";

const OrderEdit = () => {

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
        <SafeAreaView style={OrderManagerEditStyle.OrderManagerView}>

            <OrderHeader />

            <ScrollView style={OrderManagerEditStyle.container}>

                <View style={OrderManagerEditStyle.top}>
                    <Text style={OrderManagerEditStyle.topTitle}>Tổng cộng món: <Text style={OrderManagerEditStyle.topTitleBold}>03</Text></Text>
                    <TouchableOpacity style={OrderManagerEditStyle.topButton}>
                        <Icon style={OrderManagerEditStyle.topButtonIcon} name="edit" size={20} color="#900" />
                        <Text style={OrderManagerEditStyle.topButtonText}>Sửa</Text>
                    </TouchableOpacity>
                </View>

                <View style={OrderManagerEditStyle.middle}>

                    <View style={OrderManagerEditStyle.middleHeder}>
                        <Text style={OrderManagerEditStyle.middleHeaderText}>Số lượng đặt</Text>
                        <Text style={OrderManagerEditStyle.middleHeaderText}>Đặt thêm</Text>
                    </View>

                    <View style={OrderManagerEditStyle.middleBodyContainer}>
                        <View style={OrderManagerEditStyle.middleBody}>

                            <View style={OrderManagerEditStyle.middleBodyTop}>
                                <Text style={OrderManagerEditStyle.middleBodyTopTitle}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - <Text style={OrderManagerEditStyle.middleBodyTopText}>DVT: Kg</Text></Text>
                                <TouchableOpacity style={OrderManagerEditStyle.middleBodyTopButton}>
                                    <Icon name="edit" size={24} color="#900" />
                                </TouchableOpacity>
                            </View>

                            <View style={OrderManagerEditStyle.middleBodyQuantity}>
                                <Text style={OrderManagerEditStyle.middleBodyQuantityText}>Tồn kho: <Text style={OrderManagerEditStyle.middleBodyQuantityTextBold}>20</Text></Text>
                                <Text style={OrderManagerEditStyle.middleBodyQuantityText}>Mức an toàn: <Text style={OrderManagerEditStyle.middleBodyQuantityTextBold}>40</Text></Text>
                            </View>

                            <View style={OrderManagerEditStyle.middleBodyInput}>
                                <View style={OrderManagerEditStyle.middleBodyInput}>
                                    <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                        style={OrderManagerEditStyle.middleBodyInputText}
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
                                        style={OrderManagerEditStyle.middleBodyInputText}
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

                            <View style={OrderManagerEditStyle.middleBodyAlert}>
                                <Text style={OrderManagerEditStyle.middleBodyAlertText}>Đặt <Text style={OrderManagerEditStyle.middleBodyAlertTextBold}>10 Kg</Text> nữa để đủ tồn kho an toàn</Text>
                                <Text style={OrderManagerEditStyle.middleBodyAlertText}>Còn <Text style={OrderManagerEditStyle.middleBodyAlertTextBold}>2 Kg</Text> chờ nhận hàng</Text>
                            </View>

                            <View style={OrderManagerEditStyle.middleBodyReason}>
                                <Text style={OrderManagerEditStyle.middleBodyReasonTitle}>Lý do đặt thêm</Text>
                                <Text style={OrderManagerEditStyle.middleBodyReasonText}></Text>
                            </View>

                        </View>
                    </View>

                    <View style={OrderManagerEditStyle.middleBodyContainer}>
                        <View style={OrderManagerEditStyle.middleBody}>

                            <View style={OrderManagerEditStyle.middleBodyTop}>
                                <Text style={OrderManagerEditStyle.middleBodyTopTitle}>2. Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - <Text style={OrderManagerEditStyle.middleBodyTopText}>DVT: Kg</Text></Text>
                                <TouchableOpacity style={OrderManagerEditStyle.middleBodyTopButton}>
                                    <Icon name="edit" size={24} color="#900" />
                                </TouchableOpacity>
                            </View>

                            <View style={OrderManagerEditStyle.middleBodyQuantity}>
                                <Text style={OrderManagerEditStyle.middleBodyQuantityText}>Tồn kho: <Text style={OrderManagerEditStyle.middleBodyQuantityTextBold}>20</Text></Text>
                                <Text style={OrderManagerEditStyle.middleBodyQuantityText}>Mức an toàn: <Text style={OrderManagerEditStyle.middleBodyQuantityTextBold}>40</Text></Text>
                            </View>

                            <View style={OrderManagerEditStyle.middleBodyInput}>
                                <View style={OrderManagerEditStyle.middleBodyInput}>
                                    <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                        style={OrderManagerEditStyle.middleBodyInputText}
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
                                        style={OrderManagerEditStyle.middleBodyInputText}
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

                    <View style={OrderManagerEditStyle.middleBodyContainer}>
                        <View style={OrderManagerEditStyle.middleBody}>

                            <View style={OrderManagerEditStyle.middleBodyTop}>
                                <Text style={OrderManagerEditStyle.middleBodyTopTitle}>3. Phô mai hun khói Solse 100g - <Text style={OrderManagerEditStyle.middleBodyTopText}>DVT: Bịch</Text></Text>
                                <View style={OrderManagerEditStyle.middleBodyTopButtonForm}>

                                    <TouchableOpacity style={OrderManagerEditStyle.middleBodyTopButton}>
                                        <Icon name="edit" size={24} color="#900" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name="trash-o" size={24} color="red" />
                                    </TouchableOpacity>

                                </View>
                            </View>

                            <View style={OrderManagerEditStyle.middleBodyQuantity}>
                                <Text style={OrderManagerEditStyle.middleBodyQuantityText}>Tồn kho: <Text style={OrderManagerEditStyle.middleBodyQuantityTextBold}>20</Text></Text>
                                <Text style={OrderManagerEditStyle.middleBodyQuantityText}>Mức an toàn: <Text style={OrderManagerEditStyle.middleBodyQuantityTextBold}>40</Text></Text>
                            </View>

                            <View style={OrderManagerEditStyle.middleBodyInput}>
                                <View style={OrderManagerEditStyle.middleBodyInput}>
                                    <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                        style={OrderManagerEditStyle.middleBodyInputText}
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
                                        style={OrderManagerEditStyle.middleBodyInputText}
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

export default OrderEdit;