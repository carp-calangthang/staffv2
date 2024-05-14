import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, } from 'react-native';

import Footer from "assets/layout/footer/Footer";
import OrderManagerStyle from '../Stylesheet/OrderManagerStyle';
import OrderButton from '../../../../component/order/OrderButton';
import OrderHeader from '../../../../component/order/OrderHeader';

const OrderManager = () => {

    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <SafeAreaView style={OrderManagerStyle.OrderWating}>
            <OrderHeader />

            <ScrollView style={OrderManagerStyle.container}>

                <OrderButton />

                <View style={OrderManagerStyle.Top}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        tintColors={{ true: '#704232', false: '#704232' }}
                        style={OrderManagerStyle.CheckBox}
                    />
                    <Text style={OrderManagerStyle.TopSubTitle}><Text style={OrderManagerStyle.TopTitle}>2</Text> yêu cầu</Text>
                    <View style={OrderManagerStyle.Button}>
                        <TouchableOpacity style={OrderManagerStyle.ButtonItems1}>
                            <Icon style={OrderManagerStyle.Icon} name="check-circle-o" size={15} color="#fff" />
                            <Text style={OrderManagerStyle.ButtonText1}>Duyệt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={OrderManagerStyle.ButtonItems2}>
                            <Icon style={OrderManagerStyle.Icon} name="times-circle-o" size={15} color="#704232" />
                            <Text style={OrderManagerStyle.ButtonText2}>Từ chối</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={OrderManagerStyle.Body}>
                    <View style={OrderManagerStyle.BodyTop}>
                        <View style={OrderManagerStyle.BodyHeader}>
                            <Text style={OrderManagerStyle.BodyTitle}>Mã yêu cầu: <Text style={OrderManagerStyle.BodyTitleBold}>YCMH0001 - 2 Món</Text></Text>
                            <TouchableOpacity style={OrderManagerStyle.BodyExtand}>
                                <Icon name="angle-up" size={15} color="#000" />
                            </TouchableOpacity>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                tintColors={{ true: '#704232', false: '#704232' }}
                                style={OrderManagerStyle.BodyHeaderCheckbox}
                            />
                        </View>
                        <Text style={OrderManagerStyle.BodySubTitle}>Ngày đặt hàng: <Text>08:00 20.04.2024</Text></Text>
                        <Text style={OrderManagerStyle.BodySubTitle}>Bộ phận đặt <Text style={OrderManagerStyle.BodyTitleBold}>Barista</Text></Text>
                        <View style={OrderManagerStyle.BodyStatus}>
                            <Text style={OrderManagerStyle.BodyStatusText}>Mới tạo</Text>
                        </View>
                    </View>
                    <View style={OrderManagerStyle.BodyBottom}>
                        <View style={OrderManagerStyle.BodyDetail}>
                            <Text style={OrderManagerStyle.BodyDetailTitle}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg</Text>
                            <Text style={OrderManagerStyle.BodyDetailQuantity}>8</Text>
                        </View>
                        <View style={OrderManagerStyle.BodyDetail}>
                            <Text style={OrderManagerStyle.BodyDetailTitle}>2. Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1.5kg/con - DVT: Kg</Text>
                            <Text style={OrderManagerStyle.BodyDetailQuantity}>8</Text>
                        </View>
                        <View style={OrderManagerStyle.BodyButton}>
                                <TouchableOpacity 
                                    onPress={() => navigation.navigate('OrderManagerView' as never)}
                                    style={OrderManagerStyle.BodyButtonItems2}
                                >
                                        <Text style={OrderManagerStyle.BodyButtonText2}>Xem</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={OrderManagerStyle.BodyButtonItems2}><Text style={OrderManagerStyle.BodyButtonText2}>Từ chối</Text></TouchableOpacity>
                                <TouchableOpacity style={OrderManagerStyle.BodyButtonItems}><Text style={OrderManagerStyle.BodyButtonText}>Duyệt</Text></TouchableOpacity>                           
                        </View>
                    </View>
                </View>

                <View style={OrderManagerStyle.Body}>
                    <View style={OrderManagerStyle.BodyTop2}>
                        <View style={OrderManagerStyle.BodyHeader}>
                            <Text style={OrderManagerStyle.BodyTitle}>Mã yêu cầu: <Text style={OrderManagerStyle.BodyTitleBold}>YCMH0001 - 2 Món</Text></Text>
                            <TouchableOpacity style={OrderManagerStyle.BodyExtand}>
                                <Icon name="angle-up" size={15} color="#000" />
                            </TouchableOpacity>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                tintColors={{ true: '#704232', false: '#704232' }}
                                style={OrderManagerStyle.BodyHeaderCheckbox}
                            />
                        </View>
                        <Text style={OrderManagerStyle.BodySubTitle}>Ngày đặt hàng: <Text>08:00 20.04.2024</Text></Text>
                        <Text style={OrderManagerStyle.BodySubTitle}>Bộ phận đặt <Text style={OrderManagerStyle.BodyTitleBold}>Barista</Text></Text>
                        <View style={OrderManagerStyle.BodyStatus}>
                            <Text style={OrderManagerStyle.BodyStatusText}>Mới tạo</Text>
                        </View>
                    </View>
                    <View style={OrderManagerStyle.BodyBottom}>
                        <View style={OrderManagerStyle.BodyButton}>
                            <TouchableOpacity style={OrderManagerStyle.BodyButtonItems2}><Text style={OrderManagerStyle.BodyButtonText2}>Xem</Text></TouchableOpacity>
                            <TouchableOpacity style={OrderManagerStyle.BodyButtonItems2}><Text style={OrderManagerStyle.BodyButtonText2}>Từ chối</Text></TouchableOpacity>
                            <TouchableOpacity style={OrderManagerStyle.BodyButtonItems}><Text style={OrderManagerStyle.BodyButtonText}>Duyệt</Text></TouchableOpacity>                           
                        </View>
                    </View>
                </View>

                <View style={OrderManagerStyle.Body}>
                    <View style={OrderManagerStyle.BodyTop2}>
                        <View style={OrderManagerStyle.BodyHeader}>
                            <Text style={OrderManagerStyle.BodyTitle}>Mã yêu cầu: <Text style={OrderManagerStyle.BodyTitleBold}>YCMH0001 - 2 Món</Text></Text>
                            <TouchableOpacity style={OrderManagerStyle.BodyExtand}>
                                <Icon name="angle-up" size={15} color="#000" />
                            </TouchableOpacity>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                tintColors={{ true: '#704232', false: '#704232' }}
                                style={OrderManagerStyle.BodyHeaderCheckbox}
                            />
                        </View>
                        <Text style={OrderManagerStyle.BodySubTitle}>Ngày đặt hàng: <Text>08:00 20.04.2024</Text></Text>
                        <Text style={OrderManagerStyle.BodySubTitle}>Bộ phận đặt <Text style={OrderManagerStyle.BodyTitleBold}>Barista</Text></Text>
                        <View style={OrderManagerStyle.BodyStatusWait}>
                            <Text style={OrderManagerStyle.BodyStatusWaitText}>Chờ duyệt</Text>
                        </View>
                        <View style={OrderManagerStyle.BodyBottom}>
                            <View style={OrderManagerStyle.BodyButton}>
                                <TouchableOpacity style={OrderManagerStyle.BodyButtonItems2}><Text style={OrderManagerStyle.BodyButtonText2}>Xem</Text></TouchableOpacity>
                                <TouchableOpacity style={OrderManagerStyle.BodyButtonItems2}><Text style={OrderManagerStyle.BodyButtonText2}>Từ chối</Text></TouchableOpacity>
                                <TouchableOpacity style={OrderManagerStyle.BodyButtonItems}><Text style={OrderManagerStyle.BodyButtonText}>Duyệt</Text></TouchableOpacity>                           
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>

            <Footer />

        </SafeAreaView>
    );
};

export default OrderManager;