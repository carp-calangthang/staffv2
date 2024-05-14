import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { RootStackParamList } from 'utils/config/NavigationTypes';
import { StackScreenProps } from '@react-navigation/stack';

import ButtonBar from 'components/cancel/Button';
import SearchBar from 'components/cancel/Search';
import Header from 'components/Header';
import NewListStyle from './stylesheet/NewListStyle'
import Footer from 'assets/layout/footer/Footer';

const WaitingList = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={NewListStyle.Background}>  

            <Header title="Huỷ hàng" />
            <ButtonBar newCount={2} waitingCount={2} />
            <SearchBar />

            <ScrollView style={NewListStyle.container}>

            <View style={NewListStyle.main}>
                    <View style={NewListStyle.title}>
                        <Text style={NewListStyle.titleText}>
                            Mã yêu cầu huỷ:
                            <Text style={NewListStyle.titleTextBold}> YCHH0001 - 2 Món</Text>
                        </Text>
                        <TouchableOpacity style={NewListStyle.expandButton}>
                            <Icon name="angle-up" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={NewListStyle.request}>
                        <Text style={NewListStyle.requestText}>
                            Bộ phận yêu cầu: 
                            <Text style={NewListStyle.requestTextBold}> Barista</Text>
                        </Text>
                        <Text style={NewListStyle.requestText}>
                            Người yêu cầu: 
                            <Text style={NewListStyle.requestTextBold}> Trịnh Thị Thuỷ - 0377912838</Text>
                        </Text>
                    </View>
                    <View style={NewListStyle.action}>
                        <View style={NewListStyle.status1}>
                            <Text style={NewListStyle.statusText1}>
                                Đang tiêu huỷ
                            </Text>
                        </View>
                        <View style={NewListStyle.buttonBase1}>
                            <TouchableOpacity
                                style={NewListStyle.button1}
                                onPress={() => navigation.navigate("DetailRequest" as never)}
                            >
                                <Text style={NewListStyle.buttonText1}>Xem</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={NewListStyle.button}
                            >
                                <Text style={NewListStyle.buttonText}>Duyệt</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={NewListStyle.line} />
                    <View style={NewListStyle.Product}>
                        <Text style={NewListStyle.ProductText}>
                        Tương ớt chua ngọt Cholimex pet 270 g - 
                            <Text style={NewListStyle.ProductItalic}> DVT: Ml</Text>
                        </Text>
                        <Text style={NewListStyle.ProductTextBold}>6</Text>
                    </View>
                </View>

                <View style={NewListStyle.main}>
                    <View style={NewListStyle.title}>
                        <Text style={NewListStyle.titleText}>
                            Mã yêu cầu huỷ:
                            <Text style={NewListStyle.titleTextBold}> YCHH0001 - 2 Món</Text>
                        </Text>
                        <TouchableOpacity style={NewListStyle.expandButton}>
                            <Icon name="angle-down" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <View style={NewListStyle.request}>
                        <Text style={NewListStyle.requestText}>
                            Bộ phận yêu cầu: 
                            <Text style={NewListStyle.requestTextBold}> Barista</Text>
                        </Text>
                        <Text style={NewListStyle.requestText}>
                            Người yêu cầu: 
                            <Text style={NewListStyle.requestTextBold}> Trịnh Thị Thuỷ - 0377912838</Text>
                        </Text>
                    </View>
                    <View style={NewListStyle.action}>
                        <View style={NewListStyle.status}>
                            <Text style={NewListStyle.statusText}>
                                Chờ tiêu huỷ
                            </Text>
                        </View>
                        <View style={NewListStyle.buttonBase}>
                            <TouchableOpacity
                                style={NewListStyle.button1}
                            >
                                <Text style={NewListStyle.buttonText1}>Xem</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={NewListStyle.button}
                            >
                                <Text style={NewListStyle.buttonText}>Duyệt</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>

            <Footer />

        </SafeAreaView>
    );
};

export default WaitingList;