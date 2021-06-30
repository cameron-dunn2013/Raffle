import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'




import HotRightNow from './Components/HotRightNowComponent'

export default class HomeScreen extends React.Component {
    render() {
        const screenWidth = Dimensions.get('screen').width
        return (
            <SafeAreaView style={styles.container}>

                {/* Header */}
                <View style={{ width: screenWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name='menu' size={30} style={{ marginLeft: 20, width: 40, color: 'black' }} />
                    <Text style={{ textAlign: 'center', flex: 2, fontFamily: 'Poppins-Bold', fontSize: 36, color: 'black', height: 40 }}>Raffle</Text>
                    <View style={{ width: 40, marginRight: 20 }} />
                </View>


                {/* Body */}
                <View style={{ marginTop: 40 }}>


                    {/* Last Chance Items */}
                    <View>
                        <Text style={[styles.headerText, { marginLeft: 20 }]}>Last Chance Items</Text>
                    </View>

                    {/* Hot Right Now */}
                    <HotRightNow />

                    {/* Categories */}
                    <Text style={[styles.headerText, { marginLeft: 20, marginTop: 20 }]}>Categories</Text>
                    {/* Category buttons */}
                    <View style={{ flexDirection: 'row' }}>
                        <ScrollView style={{ marginTop: 10 }} horizontal showsHorizontalScrollIndicator={false}>
                            <Text style={[styles.categoryText, { color: '#DD5151' }]}>Apparel</Text>
                            <Text style={styles.categoryText}>Entertainment</Text>
                            <Text style={styles.categoryText}>Events</Text>
                            <Text style={styles.categoryText}>More</Text>
                            <View style={{ width: 20 }} />
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white'
    },
    headerText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: 'black'
    },
    categoryText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: 'black',
        marginLeft: 20
    }
})