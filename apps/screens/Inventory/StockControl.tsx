import React, { useCallback, useEffect, useState} from "react";
import { SafeAreaView, View, Text, FlatList, ScrollView, TouchableOpacity, Image } from "react-native";

import Footer from "assets/layout/footer/Footer";
import { StackScreenProps } from '@react-navigation/stack';

import InventoryStylesheet from "./stylesheet/Stylesheet";
import { RootStackParamList } from "utils/config/NavigationTypes";

type Props = StackScreenProps<RootStackParamList, 'Inventory'>;

const StockControl: React.FC<Props> = ({ navigation }) => {

    return (
        <SafeAreaView style={InventoryStylesheet.inventory}>
            <View style={InventoryStylesheet.header}>
                <Image source={{ uri: "https://i.pinimg.com/736x/d5/23/08/d5230871816555f7e91dd155c4f32338.jpg" }} style={InventoryStylesheet.avatar} />
                <View style={InventoryStylesheet.name}>
                    <Text style={InventoryStylesheet.Title}>3002 - Nguyễn Thị Thanh Hà</Text>
                    <Text style={InventoryStylesheet.SubText}>Baristar</Text>
                </View>
                <TouchableOpacity style={InventoryStylesheet.PowerIcon}>
                    <Image source={ require("../../../public/images/inventory/18072.png") } style={InventoryStylesheet.avatar} />
                </TouchableOpacity>
            </View>

            <ScrollView style={InventoryStylesheet.body}>

                <View style={InventoryStylesheet.container}>

                    <TouchableOpacity 
                        style={InventoryStylesheet.button}
                        onPress={() => navigation.navigate("OrderCreate" as never)}
                    >
                        <Image style={InventoryStylesheet.buttonIcon} source={ require("assets/images/inventory/1599.png") } />
                        <Text style={InventoryStylesheet.buttonText}>Yêu cầu đặt hàng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={InventoryStylesheet.button}>
                        <Image style={InventoryStylesheet.buttonIcon} source={ require("assets/images/inventory/1605.png") } />
                        <Text style={InventoryStylesheet.buttonText}>Xuất hàng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate("RequestsList" as never)}
                        style={InventoryStylesheet.button}
                    >
                        <Image style={InventoryStylesheet.buttonIcon} source={ require("assets/images/inventory/1604.png") } />
                        <Text style={InventoryStylesheet.buttonText}>Xin hàng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={InventoryStylesheet.button}>
                        <Image style={InventoryStylesheet.buttonIcon} source={ require("assets/images/inventory/1600.png") } />
                        <Text style={InventoryStylesheet.buttonText}>Nhận hàng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate("NewRequestsList" as never)}
                        style={InventoryStylesheet.button}
                    >
                        <Image style={InventoryStylesheet.buttonIcon} source={ require("assets/images/inventory/1594.png") } />
                        <Text style={InventoryStylesheet.buttonText}>Huỷ hàng</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Depot" as never)}
                        style={InventoryStylesheet.button}
                    >
                        <Image style={InventoryStylesheet.buttonIcon} source={ require("assets/images/inventory/1603.png") } />
                        <Text style={InventoryStylesheet.buttonText}>Tồn kho</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={InventoryStylesheet.button}>
                        <Image style={InventoryStylesheet.buttonIcon} source={ require("assets/images/inventory/1602.png") } />
                        <Text style={InventoryStylesheet.buttonText}>Chuyển kho</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={InventoryStylesheet.button}>
                        <Image style={InventoryStylesheet.buttonIcon} source={ require("assets/images/inventory/1601.png") } />
                        <Text style={InventoryStylesheet.buttonText}>Kiểm kho</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={InventoryStylesheet.button}>
                        <Image style={InventoryStylesheet.buttonIcon} source={ require("assets/images/inventory/1606.png") } />
                        <Text style={InventoryStylesheet.buttonText}>Sản xuất</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

            <Footer />
        </SafeAreaView>
    );
};

export default StockControl;