import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import ShoeSide from '../Assets/Shoes-Side.jpg'
import MapIcon from '../Assets/MapIcon.png'
import CreditCardIcon from '../Assets/CreditCardIcon.png'

const PurchasePage = ({ navigation }) => {
    const screenWidth = Dimensions.get('window').width
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={{ backgroundColor: 'rgba(0,0,0,0)' }} />
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                {/* Header */}
                <View style={{ width: screenWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Icon name='arrow-back' size={30} style={{ marginLeft: 20, width: 40, color: 'black' }} />
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', flex: 2, fontFamily: 'Poppins-Bold', fontSize: 25, color: 'black', textAlignVertical: 'center' }}>Purchase Ticket</Text>
                    <View style={{ width: 40, marginRight: 20 }} />
                </View>


                <ScrollView showsVerticalScrollIndicator={false} >
                    {/* Purchase summary */}

                    <View style={{ backgroundColor: '#C4C4C4', width: screenWidth - 40, height: 250, borderRadius: 20, alignItems: 'center', marginTop: 10 }}>
                        <Image source={ShoeSide} style={{ width: 210, height: 120, resizeMode: 'cover', borderRadius: 20, marginTop: 20 }} />
                        <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Poppins-Bold', height: 26 }}>Nike Air Jordan X 10</Text>
                        <Text style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins-Bold' }}>1x Ticket</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 10, textAlign: 'center', color: 'black' }}>Your purchase enters you in for a<Text style={{ color: 'red' }}> 1% chance</Text>{' to win this item.\n Purchase more tickets for a better chance to win.'}</Text>
                    </View>

                    {/* Price breakdown */}
                    <View style={{ backgroundColor: '#C4C4C4', width: screenWidth - 40, height: 125, borderRadius: 20, alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: 'black', flex: 1, marginLeft: 20 }}>1x Ticket @ $2:</Text>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: 'black', textAlign: 'right', marginRight: 20 }}>$2.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: 'black', flex: 1, marginLeft: 20 }}>Regional Tax:</Text>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: 'black', textAlign: 'right', marginRight: 20 }}>$0.16</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: 'black', flex: 1, marginLeft: 20 }}>Total:</Text>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: 'black', textAlign: 'right', marginRight: 20 }}>$2.16</Text>
                        </View>
                    </View>

                    {/* Delivery Location */}
                    <View style={{ backgroundColor: '#C4C4C4', width: screenWidth - 40, height: 125, borderRadius: 20, alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: 'black', flex: 1, marginLeft: 20, flex: 1 }}>Delivery Location</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={MapIcon} style={{ resizeMode: 'cover', height: 54, width: 54, marginLeft: 20 }} />
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: 'black', flex: 1, marginLeft: 20, flex: 1 }}>{'720 E Market St.\nLouisville, KY\n40220'}</Text>
                        </View>
                    </View>

                    {/* Payment Method */}

                    <View style={{ backgroundColor: '#C4C4C4', width: screenWidth - 40, height: 125, borderRadius: 20, alignItems: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: 'black', flex: 1, marginLeft: 20, flex: 1 }}>Payment Method</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image source={CreditCardIcon} style={{ resizeMode: 'cover', height: 54, width: 54, marginLeft: 20 }} />
                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: 'black', flex: 1, marginLeft: 20, flex: 1 }}>{'Cameron D.\nVisa •6789\n04/20'}</Text>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                    <Text style={{ color: '#00A4EA', fontFamily: 'Poppins-SemiBold' }}>Change</Text>
                                    <Icon name='arrow-back' size={18} style={{ transform: [{ scaleX: -1 }], color: '#00A4EA', marginBottom: 2, marginLeft: 4, marginRight: 8 }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Purchase Ticket button */}

                    <TouchableOpacity style={{ backgroundColor: '#DD5151', height: 60, width: 300, borderRadius: 20, alignSelf: 'center', marginTop: 20, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontFamily: 'Poppins-Bold', fontSize: 24, textAlign: 'center' }}>Purchase Ticket</Text>
                    </TouchableOpacity>

                    <View style={{ height: 100 }} />
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}

export default PurchasePage;

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: 'white'
    }
})