import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text, FlatList, Image } from "react-native";

import OrderButton from "../../../../component/order/OrderButton";

const OrderEmpty = () => {
    return (
        <SafeAreaView>
            <OrderButton />
            <View>
                <Image source={require("../../../../../public/images/order/nope.png")} />
                <Text>Vui lòng kiểm tra hàng tồn trước khi đặt hàng</Text>
                <TouchableOpacity>
                    <Text> Vui lòng di chuyển tới kiểm tồn</Text>
                    <Image 
                        source={require("../../../../../public/images/order/arrow.png")}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default OrderEmpty;