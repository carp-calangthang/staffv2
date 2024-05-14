import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import RequestHeader from "components/request/RequestHeader";
import HeaderButton from "components/request/HeaderButton";

import Footer from "assets/layout/footer/Footer";

import DeliveryListStyle from "../stylesheet/DeliveryListStyle";

const DeliveryList = () => {
    
        const navigation = useNavigation();
    
        return (
            <SafeAreaView style={DeliveryListStyle.List}>

                <RequestHeader title="Danh sách xin hàng" />

                <HeaderButton />

                <ScrollView style={DeliveryListStyle.container}>
                    <View style={DeliveryListStyle.search}>
                        <TextInput
                            style={DeliveryListStyle.searchInput}
                            placeholder="Nhập tên nơi nhận"
                        />
                        <TouchableOpacity
                            style={DeliveryListStyle.searchButton}
                        >
                            <Icon name="search" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={DeliveryListStyle.body}>
                        <View style={DeliveryListStyle.top}>
                            <Text style={DeliveryListStyle.title}>Mã yêu cầu: <Text style={DeliveryListStyle.titleBold}>XH001</Text></Text>
                            <TouchableOpacity>
                                <Icon name="angle-up" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <Text style={DeliveryListStyle.text} >Bộ phận: <Text style={DeliveryListStyle.textBold} >Barista - Trịnh Thị Huyền (0377912838)</Text></Text>
                        <Text style={DeliveryListStyle.text} >Nơi nhận: <Text style={DeliveryListStyle.textBold} >449 Nguyễn Duy Trinh - 5Km</Text></Text>
                        <Text style={DeliveryListStyle.subText}>155 Nguyễn Duy Trinh, An Phú, Thủ Đức</Text>
                        <View style={DeliveryListStyle.line}></View>
                        <View style={DeliveryListStyle.productInfo}>
                            <Text style={DeliveryListStyle.text}>1. Cà chua bi Đài Loan - <Text style={DeliveryListStyle.textItalic}>DVT: Kg</Text></Text>
                            <Text style={DeliveryListStyle.count}>7/8</Text>
                        </View>
                        <View style={DeliveryListStyle.productInfo}>
                            <Text style={DeliveryListStyle.text}>2. Nước lọc tinh khiết Aquafina - <Text style={DeliveryListStyle.textItalic}>DVT: Thùng</Text></Text>
                            <Text style={DeliveryListStyle.count}>8/8</Text>
                        </View>
                        <View style={DeliveryListStyle.bottom}>
                            <View style={DeliveryListStyle.status}>
                                <Text style={DeliveryListStyle.statusText}>
                                    Giao 1 phần
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Delivery" as never)}
                                style={DeliveryListStyle.button}
                            >
                                <Text style={DeliveryListStyle.buttonText}>Giao hàng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={DeliveryListStyle.body}>
                        <View style={DeliveryListStyle.top}>
                            <Text style={DeliveryListStyle.title}>Mã yêu cầu: <Text style={DeliveryListStyle.titleBold}>XH001</Text></Text>
                            <TouchableOpacity>
                                <Icon name="angle-up" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <Text style={DeliveryListStyle.text} >Bộ phận: <Text style={DeliveryListStyle.textBold} >Barista - Trịnh Thị Huyền (0377912838)</Text></Text>
                        <Text style={DeliveryListStyle.text} >Nơi nhận: <Text style={DeliveryListStyle.textBold} >449 Nguyễn Duy Trinh - 5Km</Text></Text>
                        <Text style={DeliveryListStyle.subText}>155 Nguyễn Duy Trinh, An Phú, Thủ Đức</Text>
                        <View style={DeliveryListStyle.bottom}>
                            <View style={DeliveryListStyle.status2}>
                                <Text style={DeliveryListStyle.statusText2}>
                                    Chờ giao
                                </Text>
                            </View>
                            <TouchableOpacity style={DeliveryListStyle.button}>
                                <Text style={DeliveryListStyle.buttonText}>Giao hàng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={DeliveryListStyle.body}>
                        <View style={DeliveryListStyle.top}>
                            <Text style={DeliveryListStyle.title}>Mã yêu cầu: <Text style={DeliveryListStyle.titleBold}>XH001</Text></Text>
                            <TouchableOpacity>
                                <Icon name="angle-up" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <Text style={DeliveryListStyle.text} >Bộ phận: <Text style={DeliveryListStyle.textBold} >Barista - Trịnh Thị Huyền (0377912838)</Text></Text>
                        <Text style={DeliveryListStyle.text} >Nơi nhận: <Text style={DeliveryListStyle.textBold} >449 Nguyễn Duy Trinh - 5Km</Text></Text>
                        <Text style={DeliveryListStyle.subText}>155 Nguyễn Duy Trinh, An Phú, Thủ Đức</Text>
                        <View style={DeliveryListStyle.bottom}>
                            <View style={DeliveryListStyle.status2}>
                                <Text style={DeliveryListStyle.statusText2}>
                                    Chờ giao
                                </Text>
                            </View>
                            <TouchableOpacity style={DeliveryListStyle.button}>
                                <Text style={DeliveryListStyle.buttonText}>Huỷ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={DeliveryListStyle.newRequest}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("CreateRequest" as never)}
                            style={DeliveryListStyle.newRequestButton}
                        >
                            <Icon style={DeliveryListStyle.newRequestText} name="plus" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <Footer />

            </SafeAreaView>
        );
};

export default DeliveryList;