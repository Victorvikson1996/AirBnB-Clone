import React, { useState } from 'react';
import { View, Text, Pressable, FlatList, TextInput } from 'react-native'
import styles from '../DestinationSearch/styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow'
import { useNavigation } from '@react-navigation/native'




const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Where are you going ?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    navigation.navigate('Guests');
                }}
                fetchDetails
                styles={{
                    textInput: styles.textInput
                }}
                query={{
                    key: 'AIzaSyB1jb5w - yq7NkOSDBmWUAFbd - YnBIsL71E',
                    language: 'en',
                    types: '(cities)',
                }}

                suppressDefaultStyles
                renderRow={(item) =>
                    <SuggestionRow item={item} />
                }
            />
        </View>
    );
}

export default DestinationSearchScreen;
