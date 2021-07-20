import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

//Dummy images
import ShoeImage from '../Assets/ShoeImage.jpg'
import ShoeBottom from '../Assets/Shoes-Bottom.jpg'
import ShoeFront from '../Assets/Shoes-Front.jpg'
import ShoeSide from '../Assets/Shoes-Side.jpg'
import ShoeSplit from '../Assets/Shoes-Split.jpg'
import ProfilePicture from '../Assets/ProfilePicture.jpg'

const ItemDetail = ({ navigation }) => {

    const screenWidth = Dimensions.get('window').width
    const previewImageHeight = 200
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={{ width: screenWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name='arrow-back' size={30} style={{ marginLeft: 20, width: 40, color: 'black' }} />
                <Text style={{ textAlign: 'center', flex: 2, fontFamily: 'Poppins-Bold', fontSize: 25, color: 'black', textAlignVertical: 'center' }}>Nike Air Jordan X 10</Text>
                <View style={{ width: 40, marginRight: 20 }} />
            </View>

            {/* Product Images */}
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', overflow: 'hidden', borderRadius: 20, width: screenWidth - 20, alignSelf: 'center' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={screenWidth - 20} decelerationRate={0} snapToAlignment={'center'} style={{ height: previewImageHeight, borderRadius: 20 }}>
                    <Image source={ShoeImage} style={{ width: screenWidth - 20, resizeMode: 'cover', height: previewImageHeight }} />
                    <Image source={ShoeBottom} style={{ width: screenWidth - 20, resizeMode: 'cover', height: previewImageHeight }} />
                    <Image source={ShoeFront} style={{ width: screenWidth - 20, resizeMode: 'cover', height: previewImageHeight }} />
                    <Image source={ShoeSide} style={{ width: screenWidth - 20, resizeMode: 'cover', height: previewImageHeight }} />
                    <Image source={ShoeSplit} style={{ width: screenWidth - 20, resizeMode: 'cover', height: previewImageHeight }} />
                </ScrollView>
            </View>
            {/* End of Product Images */}

            {/* Owner info */}
            <View style={{ width: screenWidth - 20, marginTop: 20, borderRadius: 20, height: 175, backgroundColor: '#B4B4B4' }}>
                <Text style={{ fontSize: 24, fontFamily: 'Poppins-Bold', color: 'black', marginTop: 8, marginLeft: 16 }}>Owner Info</Text>
                <View style={{ flexDirection: 'row' }}>
                    {/* Profile Picture of user */}
                    <Image source={ProfilePicture} style={{ height: 75, width: 75, borderRadius: 37.5, resizeMode: 'cover', marginLeft: 10 }} />
                    <View style={{ flexDirection: 'row' }}>
                        {/* View Containing overview of user */}
                        <View style={{ marginLeft: 16 }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: 'black', height: 24 }}>Cdunn95</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: 'black', height: 18 }}>1.5 years on Raffle</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold', color: 'black', height: 18 }}>70 Ratings</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='star' size={20} color={'#FFD130'} />
                                <Icon name='star' size={20} color={'#FFD130'} />
                                <Icon name='star' size={20} color={'#FFD130'} />
                                <Icon name='star' size={20} color={'#FFD130'} />
                                <Icon name='star-half' size={20} color={'#FFD130'} />
                            </View>
                        </View>
                        {/* View Containing Visit Profile Button */}
                        <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 8 }}>
                            <View style={{ width: 100, height: 41, backgroundColor: '#DD5151', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white', fontSize: 14 }}>Visit Profile</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* End of Owner Info */}


            {/* Raffle information */}
            <View style={{ height: 200, width: screenWidth - 20, backgroundColor: '#B4B4B4', borderRadius: 20, marginTop: 20 }}>
                {/* Top portion of view containing participants and pricing */}
                <View style={{ flexDirection: 'row' }}>
                    {/* Participants */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 10 }}>
                        <Icon name='person' size={40} style={{ color: 'black' }} />
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: 'black', height: 24 }}>12/100</Text>
                    </View>

                    {/* Pricing */}
                    <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', marginTop: 10, alignItems: 'center', marginRight: 20 }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Bold', color: 'black', height: 24 }}>$2/Ticket</Text>
                    </View>

                </View>
                {/* End top portion */}

                {/* Middle portion containing remaining time and purchase ticket button */}
                <View style={{ backgroundColor: 'white', width: 225, height: 125, alignSelf: 'center', borderRadius: 20, marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, fontFamily: 'Poppins-SemiBold', color: 'black', height: 30 }}>10:09</Text>
                    <Text style={{ fontSize: 24, fontFamily: 'Poppins-SemiBold', color: 'black' }}>remaining</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('PurchasePage')}>
                        <View style={{ backgroundColor: '#DD5151', width: 180, height: 40, borderRadius: 15, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: 'white', fontFamily: 'Poppins-SemiBold', fontSize: 14 }}>Purchase Ticket</Text>
                            <Icon size={20} name='confirmation-number' style={{ color: 'white', marginLeft: 10, marginBottom: 4 }} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    );
}

export default ItemDetail;

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: 'white',
        alignItems: 'center'
    }
})