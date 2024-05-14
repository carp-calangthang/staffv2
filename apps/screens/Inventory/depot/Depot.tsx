import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from "react-native";
import Footer from "assets/layout/footer/Footer";

import DepotStyle from "./stylesheet/DepotStyle";

const Depot = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={DepotStyle.depot}>

            <View style={DepotStyle.depotHeader}>
                <TouchableOpacity style={DepotStyle.depotHeaderButton}>
                    <Icon name="angle-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={DepotStyle.depotHeaderTitle}>Tồn kho</Text>
            </View>
        
            <ScrollView>
                <View style={DepotStyle.body}>
                    <View style={DepotStyle.bodyTop}>
                        <View style={DepotStyle.TopImageContainer}>
                            <Image style={DepotStyle.bodyTopImage} source={require("../../../../public/images/depot/cube.png")} />
                        </View>
                        <Text style={DepotStyle.bodyTopTitle}>Tổng số lượng: <Text style={DepotStyle.bodyTopCount}>780</Text></Text>
                    </View>
                    <View style={DepotStyle.bodySearch}>
                        <TextInput 
                            style={DepotStyle.bodySearchInput}
                        />
                        <TouchableOpacity style={DepotStyle.bodySearchButton}>
                            <Icon name="search" size={15} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={DepotStyle.bodyProduct}>
                        <View style={DepotStyle.bodyProductTop}>
                            <Text style={DepotStyle.bodyProductName}>GẠO, BỘT, ĐỒ KHÔ CÁC LOẠI</Text>
                            <TouchableOpacity
                                style={DepotStyle.bodyExpandButton}
                            >
                                <Icon style={DepotStyle.bodyExpandIcon} name="angle-up" size={15} color="#000" />
                            </TouchableOpacity>
                        </View>
                        <View style={DepotStyle.bodyInfo}>
                            <Text style={DepotStyle.bodyInfoText}>Tồn kho</Text>
                            <Text style={DepotStyle.bodyInfoText}>Chờ nhận</Text>
                            <Text style={DepotStyle.bodyInfoText}>Mức an toàn min</Text>
                            <Text style={DepotStyle.bodyInfoText}>Mức an toàn max</Text>
                        </View>
                        <View style={DepotStyle.line}></View>
                        <View style={DepotStyle.productInfo}>
                            <Text style={DepotStyle.productName}>1. Cua Thịt Cà Mau Y7 sống size 0.7/0.9kg/con - <Text style={DepotStyle.productNameItalic}>DVT: Kg</Text></Text>
                            <View style={DepotStyle.productCount}>
                                <Text style={DepotStyle.countNumber}>10</Text>
                                <Text style={DepotStyle.countNumber}>2</Text>
                                <Text style={DepotStyle.countNumber}>8</Text>
                                <Text style={DepotStyle.countNumber}>24</Text>
                            </View>
                        </View>
                        <View style={DepotStyle.line}></View>
                        <View style={DepotStyle.productInfo2}>
                            <Text style={DepotStyle.productName}>1. Cua Thịt Cà Mau Y7 sống size 0.7/0.9kg/con - <Text style={DepotStyle.productNameItalic}>DVT: Kg</Text></Text>
                            <View style={DepotStyle.productCount}>
                                <Text style={DepotStyle.countNumber}>10</Text>
                                <Text style={DepotStyle.countNumber}>2</Text>
                                <Text style={DepotStyle.countNumber}>8</Text>
                                <Text style={DepotStyle.countNumber}>24</Text>
                            </View>
                        </View>
                    </View>
                    <View style={DepotStyle.bodyProduct}>
                        <View style={DepotStyle.bodyProductTop}>
                            <Text style={DepotStyle.bodyProductName}>BÁNH KẸO HẠT MỨT</Text>
                            <TouchableOpacity
                                style={DepotStyle.bodyExpandButton}
                            >
                                <Icon style={DepotStyle.bodyExpandIcon} name="angle-up" size={15} color="#000" />
                            </TouchableOpacity>
                        </View>                        
                    </View>
                    <View style={DepotStyle.bodyProduct}>
                        <View style={DepotStyle.bodyProductTop}>
                            <Text style={DepotStyle.bodyProductName}>HÀNG TƯƠI SỐNG CÁC LOẠI</Text>
                            <TouchableOpacity
                                style={DepotStyle.bodyExpandButton}
                            >
                                <Icon style={DepotStyle.bodyExpandIcon} name="angle-up" size={15} color="#000" />
                            </TouchableOpacity>
                        </View>                        
                    </View>
                    <View style={DepotStyle.bodyProduct}>
                        <View style={DepotStyle.bodyProductTop}>
                            <Text style={DepotStyle.bodyProductName}>HÓA MỸ PHẨM</Text>
                            <TouchableOpacity
                                style={DepotStyle.bodyExpandButton}
                            >
                                <Icon style={DepotStyle.bodyExpandIcon} name="angle-up" size={15} color="#000" />
                            </TouchableOpacity>
                        </View>                        
                    </View>
                    <View style={DepotStyle.note}>
                        <Text style={DepotStyle.noteTitle}>Chú thích:</Text>
                        <View style={DepotStyle.noteItems}>
                            <View style={DepotStyle.color}></View>
                            <Text style={DepotStyle.colorNote}>Cận Date</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <Footer />

        </SafeAreaView>
    );
};

export default Depot;