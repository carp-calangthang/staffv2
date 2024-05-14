
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useForm, Controller } from "react-hook-form";
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList, SafeAreaView, View, Text, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';

import Footer from "assets/layout/footer/Footer";
import OrderWaitingStyle from '../Stylesheet/OrderApproveStyle';
import OrderButton from 'components/order/OrderButton';
import OrderHeader from 'components/order/OrderHeader';

import OrderApproveStyle from '../Stylesheet/OrderApproveStyle';

import { useGetProductsByPage, useGetPostById }  from 'utils/hooks/GetProducts'

const OrderApprove = () => {

    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false)

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const { control, handleSubmit, formState: { errors } } = useForm();

    const queryClient = useQueryClient();
    const page = 10;

    const { data, isLoading, isError, error } = useGetProductsByPage(page);

    const [postId, setPostId] = useState<number | null>(null); // postId = null
    const [post, setPost] = useState<any>(null); // post = null
    const { data: postData, isLoading: postIsLoading, isError: postIsError, error: postError } = useGetPostById(postId || 0); // postId = 0

    useEffect(() => {
        // if not loading, not error and postData is not null then set post = postData
        if (!postIsLoading && !postIsError && postData) { 
            setPost(postData);
        }
    }, [postIsLoading, postIsError, postData]);

    const handleButtonClick = (id: number) => {
        setPostId(id);
        console.log('id', id);
    };

    return (
        <SafeAreaView style={OrderWaitingStyle.OrderWating}>
            <OrderHeader />

                <OrderButton />

                <Modal
                    style={OrderApproveStyle.Modal}
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={OrderApproveStyle.Container}></View>
                </Modal>

                {isLoading ? (
                <Text>Loading...</Text>
                ) : isError ? (
                    <Text>Error: :D</Text>
                ) : (

                <FlatList
                    style={OrderWaitingStyle.container}
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={OrderWaitingStyle.Body}>
                            <View style={OrderWaitingStyle.BodyTop}>
                                <View style={OrderWaitingStyle.BodyHeader}>
                                    <Text style={OrderWaitingStyle.BodyTitle}>Mã yêu cầu: <Text style={OrderWaitingStyle.BodyTitleBold}>{item.id}</Text></Text>
                                    <TouchableOpacity 
                                        style={OrderWaitingStyle.BodyExtand}
                                    >
                                        <Icon name="angle-up" size={15} color="#000" />
                                    </TouchableOpacity>
                                    <CheckBox
                                        disabled={false}
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                        tintColors={{ true: '#704232', false: '#704232' }}
                                        style={OrderWaitingStyle.BodyHeaderCheckbox}
                                    />
                                </View>
                                <Text style={OrderWaitingStyle.BodySubTitle}>Ngày đặt hàng: <Text>08:00 20.04.2024</Text></Text>
                                <Text style={OrderWaitingStyle.BodySubTitle}>Bộ phận đặt <Text style={OrderWaitingStyle.BodyTitleBold}>{item.title}</Text></Text>
                                <View style={OrderWaitingStyle.BodyStatus}>
                                    <Text style={OrderWaitingStyle.BodyStatusText}>Mới tạo</Text>
                                </View>
                            </View>
                            <View style={OrderWaitingStyle.BodyBottom}>
                                <View style={OrderWaitingStyle.BodyDetail}>
                                    <Text style={OrderWaitingStyle.BodyDetailTitle}>{item.id}. {item.body}</Text>
                                    <Text style={OrderWaitingStyle.BodyDetailQuantity}>8</Text>
                                </View>
                                <View style={OrderWaitingStyle.BodyButton}>
                                    <TouchableOpacity
                                        onPress={() => handleButtonClick(item.id) }
                                        style={OrderWaitingStyle.BodyButtonItems2}
                                    >
                                        <Text style={OrderWaitingStyle.BodyButtonText2}>Xem</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('OrderManagerEdit' as never)}
                                        style={OrderWaitingStyle.BodyButtonItems2}
                                    >
                                        <Text style={OrderWaitingStyle.BodyButtonText2}>Sửa</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={OrderWaitingStyle.BodyButtonItems}><Text style={OrderWaitingStyle.BodyButtonText}>Gửi</Text></TouchableOpacity>
                                    <TouchableOpacity style={OrderWaitingStyle.BodyButtonItems2}><Text style={OrderWaitingStyle.BodyButtonText2}>Huỷ</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />

            )}

                {/* <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={OrderWaitingStyle.Container}>
                        <View style={OrderWaitingStyle.Modal}>
                            <View style={OrderWaitingStyle.ModalContainer}>
                                <View style={OrderWaitingStyle.ModalBody}>
                                    <Text style={OrderWaitingStyle.ModalText}>Sửa tên:</Text>
                                    <TextInput
                                        style={OrderWaitingStyle.ModalInput}
                                    />
                                </View>
                                <View style={OrderWaitingStyle.ModalBody}>
                                    <Text style={OrderWaitingStyle.ModalText}>Sửa nội dung:</Text>
                                    <TextInput
                                        style={OrderWaitingStyle.ModalInput}
                                    />
                                </View>
                            </View>
                            
                            <View style={OrderWaitingStyle.ModalButtonContainer}>
                                <TouchableOpacity
                                    style={OrderWaitingStyle.ModalButton}
                                    // onPress={() => handleUpdateProduct()}
                                >
                                    <Text style={OrderWaitingStyle.ModalButtonText}>Update</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={OrderWaitingStyle.Cancel}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>        
                </Modal> */}

                {/* <View style={OrderWaitingStyle.Top}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        tintColors={{ true: '#704232', false: '#704232' }}
                        style={OrderWaitingStyle.CheckBox}
                    />
                    <Text style={OrderWaitingStyle.TopSubTitle}><Text style={OrderWaitingStyle.TopTitle}>2</Text> yêu cầu</Text>
                    <View style={OrderWaitingStyle.Button}>
                        <TouchableOpacity style={OrderWaitingStyle.ButtonItems1}>
                            <Icon style={OrderWaitingStyle.Icon} name="send" size={15} color="#fff" />
                            <Text style={OrderWaitingStyle.ButtonText1}>Gửi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={OrderWaitingStyle.ButtonItems2}>
                            <Icon style={OrderWaitingStyle.Icon} name="trash" size={15} color="#704232" />
                            <Text style={OrderWaitingStyle.ButtonText2}>Huỷ</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={OrderWaitingStyle.Body}>
                    <View style={OrderWaitingStyle.BodyTop}>
                        <View style={OrderWaitingStyle.BodyHeader}>
                            <Text style={OrderWaitingStyle.BodyTitle}>Mã yêu cầu: <Text style={OrderWaitingStyle.BodyTitleBold}>YCMH0001 - 2 Món</Text></Text>
                            <TouchableOpacity style={OrderWaitingStyle.BodyExtand}>
                                <Icon name="angle-up" size={15} color="#000" />
                            </TouchableOpacity>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                tintColors={{ true: '#704232', false: '#704232' }}
                                style={OrderWaitingStyle.BodyHeaderCheckbox}
                            />
                        </View>
                        <Text style={OrderWaitingStyle.BodySubTitle}>Ngày đặt hàng: <Text>08:00 20.04.2024</Text></Text>
                        <Text style={OrderWaitingStyle.BodySubTitle}>Bộ phận đặt <Text style={OrderWaitingStyle.BodyTitleBold}>Barista</Text></Text>
                        <View style={OrderWaitingStyle.BodyStatus}>
                            <Text style={OrderWaitingStyle.BodyStatusText}>Mới tạo</Text>
                        </View>
                    </View>
                    <View style={OrderWaitingStyle.BodyBottom}>
                        <View style={OrderWaitingStyle.BodyDetail}>
                            <Text style={OrderWaitingStyle.BodyDetailTitle}>1. Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg</Text>
                            <Text style={OrderWaitingStyle.BodyDetailQuantity}>8</Text>
                        </View>
                        <View style={OrderWaitingStyle.BodyDetail}>
                            <Text style={OrderWaitingStyle.BodyDetailTitle}>2. Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1.5kg/con - DVT: Kg</Text>
                            <Text style={OrderWaitingStyle.BodyDetailQuantity}>8</Text>
                        </View>
                        <View style={OrderWaitingStyle.BodyButton}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('OrderDetail')}
                                style={OrderWaitingStyle.BodyButtonItems2}
                            >
                                <Text style={OrderWaitingStyle.BodyButtonText2}>Xem</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('OrderManagerEdit')}
                                style={OrderWaitingStyle.BodyButtonItems2}
                            >
                                <Text style={OrderWaitingStyle.BodyButtonText2}>Sửa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={OrderWaitingStyle.BodyButtonItems}><Text style={OrderWaitingStyle.BodyButtonText}>Gửi</Text></TouchableOpacity>
                            <TouchableOpacity style={OrderWaitingStyle.BodyButtonItems2}><Text style={OrderWaitingStyle.BodyButtonText2}>Huỷ</Text></TouchableOpacity>                            
                        </View>
                    </View>
                </View>

                <View style={OrderWaitingStyle.Body}>
                    <View style={OrderWaitingStyle.BodyTop2}>
                        <View style={OrderWaitingStyle.BodyHeader}>
                            <Text style={OrderWaitingStyle.BodyTitle}>Mã yêu cầu: <Text style={OrderWaitingStyle.BodyTitleBold}>YCMH0001 - 2 Món</Text></Text>
                            <TouchableOpacity style={OrderWaitingStyle.BodyExtand}>
                                <Icon name="angle-up" size={15} color="#000" />
                            </TouchableOpacity>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                tintColors={{ true: '#704232', false: '#704232' }}
                                style={OrderWaitingStyle.BodyHeaderCheckbox}
                            />
                        </View>
                        <Text style={OrderWaitingStyle.BodySubTitle}>Ngày đặt hàng: <Text>08:00 20.04.2024</Text></Text>
                        <Text style={OrderWaitingStyle.BodySubTitle}>Bộ phận đặt <Text style={OrderWaitingStyle.BodyTitleBold}>Barista</Text></Text>
                        <View style={OrderWaitingStyle.BodyStatus}>
                            <Text style={OrderWaitingStyle.BodyStatusText}>Mới tạo</Text>
                        </View>
                    </View>
                    <View style={OrderWaitingStyle.BodyBottom}>
                        <View style={OrderWaitingStyle.BodyButton}>
                            <TouchableOpacity 
                                style={OrderWaitingStyle.BodyButtonItems2}
                                onPress={() => navigation.navigate('OrderDetail')}
                            >
                                <Text style={OrderWaitingStyle.BodyButtonText2}>Xem</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('OrderManagerEdit')}
                                style={OrderWaitingStyle.BodyButtonItems2}
                            >
                                <Text style={OrderWaitingStyle.BodyButtonText2}>Sửa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={OrderWaitingStyle.BodyButtonItems}><Text style={OrderWaitingStyle.BodyButtonText}>Gửi</Text></TouchableOpacity>
                            <TouchableOpacity style={OrderWaitingStyle.BodyButtonItems2}><Text style={OrderWaitingStyle.BodyButtonText2}>Huỷ</Text></TouchableOpacity>                            
                        </View>
                    </View>
                </View>

                <View style={OrderWaitingStyle.Body}>
                    <View style={OrderWaitingStyle.BodyTop2}>
                        <View style={OrderWaitingStyle.BodyHeader}>
                            <Text style={OrderWaitingStyle.BodyTitle}>Mã yêu cầu: <Text style={OrderWaitingStyle.BodyTitleBold}>YCMH0001 - 2 Món</Text></Text>
                            <TouchableOpacity style={OrderWaitingStyle.BodyExtand}>
                                <Icon name="angle-up" size={15} color="#000" />
                            </TouchableOpacity>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                tintColors={{ true: '#704232', false: '#704232' }}
                                style={OrderWaitingStyle.BodyHeaderCheckbox}
                            />
                        </View>
                        <Text style={OrderWaitingStyle.BodySubTitle}>Ngày đặt hàng: <Text>08:00 20.04.2024</Text></Text>
                        <Text style={OrderWaitingStyle.BodySubTitle}>Bộ phận đặt <Text style={OrderWaitingStyle.BodyTitleBold}>Barista</Text></Text>
                        <View style={OrderWaitingStyle.BodyStatusWait}>
                            <Text style={OrderWaitingStyle.BodyStatusWaitText}>Chờ duyệt</Text>
                        </View>
                    </View>
                </View> */}
                

                {/* <View>
                    { isLoading ? (
                        <Text>Loading...</Text>
                    ) : data ? (
                        data.map((products, key) => {
                            return (
                                <View>
                                    <Text>Title:{products.title}</Text>
                                    <Text>Body:{products.body}</Text>
                                </View>
                            )
                        })
                    ) : (
                        <Text>Opps!</Text>
                    )}
                </View> */}

            <Footer />

        </SafeAreaView>
    );
};

export default OrderApprove;