import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import places from '../../assets/data/feed';
import CustomMaker from '../../components/CustomMaker/index'
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMaps = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    const width = useWindowDimensions().width;

    const flatList = useRef();
    const map = useRef();

    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 })

    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })

    useEffect(() => {
        if (!selectedPlaceId || !flatList) {
            return;
        }

        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatList.current.scrollToIndex({ index });

        const selectedPlace = places[index];

        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region);
    }, [selectedPlaceId])


    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
                ref={map}
                provider={PROVIDER_GOOGLE}
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}

            >
                {places.map(place => (
                    <CustomMaker
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => {
                            setSelectedPlaceId(place.id);
                        }}
                    />
                ))}

            </MapView>
            <View style={{ position: 'absolute', bottom: 10 }}>
                <FlatList
                    ref={flatList}
                    data={places}
                    renderItem={({ item }) => (
                        <PostCarouselItem post={item} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}

                />

            </View>
        </View>
    );
}

export default SearchResultsMaps;
