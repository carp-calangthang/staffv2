import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, SafeAreaView, TouchableOpacity, View, Text, FlatList, Image } from "react-native";

import OrderHeaderStyle from "./stylesheet/OrderHeaderStyle";

const OrderHeader = () => {
    return (
        <SafeAreaView>
            <View style={OrderHeaderStyle.header}>
                <TouchableOpacity>
                    <Image 
                        source={require("../../../public/images/order/arrow.png")}
                        style={OrderHeaderStyle.backIcon}
                    />
                </TouchableOpacity>
                <Text style={OrderHeaderStyle.title}>Danh sách yêu cầu mua hàng</Text>
            </View>
        </SafeAreaView>
    );
};

export default OrderHeader;