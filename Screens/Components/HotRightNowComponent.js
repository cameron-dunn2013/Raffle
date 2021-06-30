
import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


import BoxingGloves from '../../Assets/BoxingGloves.jpg'

const HotRightNowComponent = () => {
    const screenWidth = Dimensions.get('screen').width
    return (
        <View style={{ backgroundColor: '#E6E6E6', width: screenWidth - 20, height: 220, alignSelf: 'center', borderRadius: 20, alignItems: 'center' }}>
            <Text style={[styles.headerText, { marginTop: 20 }]}>{'🔥 Hot Right Now 🔥'}</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>

                {/* Image */}
                <Image source={BoxingGloves} style={{ width: 175, height: 100, resizeMode: 'contain', borderRadius: 20, alignSelf: 'center' }} />

                {/* Right side of element */}
                <View>
                    <Text style={{ width: 150, fontFamily: 'Poppins-Bold', fontSize: 18, textAlign: 'center', color: 'black' }}>Autographed Mike Tyson Gloves</Text>

                    {/* View Containing bottom right content (participants, raffle button, time remaining) */}
                    <View style={{ flexDirection: 'row' }}>

                        {/* View Containing time remaining and participants */}
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'black' }}>30:20</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name={'group'} size={18} style={{ color: 'black' }} />
                                <Text style={{ color: 'black' }}>12/100</Text>
                            </View>
                        </View>

                        {/* Raffle Button */}
                        <TouchableOpacity>
                            <View style={{ backgroundColor: '#DD5151', width: 70, height: 37, borderRadius: 10, marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', marginRight: 2 }}>Raffle</Text>
                                <Icon name={'confirmation-number'} size={16} color={'white'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default HotRightNowComponent;

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: 'absolute'
    },
    headerText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: 'black'
    }
})

