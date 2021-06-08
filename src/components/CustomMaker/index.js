import React from 'react';
import { View, Text } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import places from '../../assets/data/feed';


const CustomMaker = (props) => {
    const { coordinate, price, onPress, isSelected } = props;
    return (
        <Marker coordinate={coordinate} onPress={onPress}>
            <View style={{
                backgroundColor: isSelected ? "black" : 'white',
                padding: 5,
                borderRadius: 20,
                borderColor: 'grey',
                borderWidth: 1,
            }}>
                <Text style={{ color: isSelected ? "white" : "black", fontWeight: 'bold', }}>${price}</Text>
            </View>
        </Marker>
    );
}

export default CustomMaker;
