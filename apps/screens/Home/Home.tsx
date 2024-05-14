import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Footer from "apps/assets/layout/footer/Footer";

const HomeScreens = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home</Text>
            <Footer />
        </View>
    )
}

export default HomeScreens;