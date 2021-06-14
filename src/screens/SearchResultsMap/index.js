import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import places from '../../assets/data/feed';
import CustomMaker from '../../components/CustomMaker/index'
import PostCarouselItem from '../../components/PostCarouselItem';
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'





const SearchResultsMaps = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    const width = useWindowDimensions().width;


    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            try {

                const postsResult = await API.graphql(
                    graphqlOperation(listPosts)
                )
                setPosts(postsResult.data.listPosts.items);
            } catch (e) {
                console.log(e)
            }

        }

        fetchPosts();
    }, [])


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

        const index = posts.findIndex(place => place.id === selectedPlaceId)
        flatList.current.scrollToIndex({ index });

        const selectedPlace = posts[index];

        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
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
                {posts.map(place => (
                    <CustomMaker
                        coordinate={{ latitude: place.latitude, longitude: place.longitude }}
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
                    data={posts}
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
