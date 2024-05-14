import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import RequestHeader from "components/request/RequestHeader";
import HeaderButton from "components/request/HeaderButton";

import Footer from "assets/layout/footer/Footer";

import ListStyle from "../stylesheet/ListStyle";
import { ActivityIndicatorComponent } from "react-native";

const RequestsList = () => {
    
        const navigation = useNavigation();
    
        return (
            <SafeAreaView style={ListStyle.List}>

                <RequestHeader title="Danh sách xin hàng" />

                <HeaderButton />

                <ScrollView style={ListStyle.container}>
                    <View style={ListStyle.search}>
                        <TextInput
                            style={ListStyle.searchInput}
                            placeholder="Nhập tên nơi nhận"
                        />
                        <TouchableOpacity
                            style={ListStyle.searchButton}
                        >
                            <Icon name="search" size={24} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={ListStyle.body}>
                        <View style={ListStyle.top}>
                            <Text style={ListStyle.title}>Mã yêu cầu: <Text style={ListStyle.titleBold}>XH001</Text></Text>
                            <TouchableOpacity>
                                <Icon name="angle-up" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <Text style={ListStyle.text} >Bộ phận: <Text style={ListStyle.textBold} >Barista - Trịnh Thị Huyền (0377912838)</Text></Text>
                        <Text style={ListStyle.text} >Nơi nhận: <Text style={ListStyle.textBold} >449 Nguyễn Duy Trinh - 5Km</Text></Text>
                        <Text style={ListStyle.subText}>155 Nguyễn Duy Trinh, An Phú, Thủ Đức</Text>
                        <View style={ListStyle.line}></View>
                        <View style={ListStyle.productInfo}>
                            <Text style={ListStyle.text}>1. Cà chua bi Đài Loan - <Text style={ListStyle.textItalic}>DVT: Kg</Text></Text>
                            <Text style={ListStyle.count}>7/8</Text>
                        </View>
                        <View style={ListStyle.productInfo}>
                            <Text style={ListStyle.text}>2. Nước lọc tinh khiết Aquafina - <Text style={ListStyle.textItalic}>DVT: Thùng</Text></Text>
                            <Text style={ListStyle.count}>8/8</Text>
                        </View>
                        <View style={ListStyle.bottom}>
                            <View style={ListStyle.status}>
                                <Text style={ListStyle.statusText}>
                                    Nhận 1 phần
                                </Text>
                            </View>
                            <TouchableOpacity 
                                style={ListStyle.button}
                                onPress={() => navigation.navigate("Receive" as never)}
                            >
                                <Text style={ListStyle.buttonText}>Nhận hàng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ListStyle.body}>
                        <View style={ListStyle.top}>
                            <Text style={ListStyle.title}>Mã yêu cầu: <Text style={ListStyle.titleBold}>XH001</Text></Text>
                            <TouchableOpacity>
                                <Icon name="angle-up" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <Text style={ListStyle.text} >Bộ phận: <Text style={ListStyle.textBold} >Barista - Trịnh Thị Huyền (0377912838)</Text></Text>
                        <Text style={ListStyle.text} >Nơi nhận: <Text style={ListStyle.textBold} >449 Nguyễn Duy Trinh - 5Km</Text></Text>
                        <Text style={ListStyle.subText}>155 Nguyễn Duy Trinh, An Phú, Thủ Đức</Text>
                        <View style={ListStyle.bottom}>
                            <View style={ListStyle.status2}>
                                <Text style={ListStyle.statusText2}>
                                    Nhận 1 phần
                                </Text>
                            </View>
                            <TouchableOpacity style={ListStyle.button}>
                                <Text style={ListStyle.buttonText}>Nhận hàng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                <View style={ListStyle.newRequest}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("CreateRequest" as never)}
                        style={ListStyle.newRequestButton}
                    >
                        <Icon style={ListStyle.newRequestText} name="plus" size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                <Footer />

            </SafeAreaView>
        );
};

export default RequestsList;