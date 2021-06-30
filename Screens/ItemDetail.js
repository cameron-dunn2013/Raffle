import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ItemDetail = () => {

    const screenWidth = Dimensions.get('window').width
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={{ width: screenWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name='arrow-back' size={30} style={{ marginLeft: 20, width: 40, color: 'black' }} />
                <Text style={{ textAlign: 'center', flex: 2, fontFamily: 'Poppins-Bold', fontSize: 25, color: 'black', textAlignVertical: 'center' }}>Nike Air Jordan X 10</Text>
                <View style={{ width: 40, marginRight: 20 }} />
            </View>

            {/* Product Images */}

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
        backgroundColor: 'white'
    }
})