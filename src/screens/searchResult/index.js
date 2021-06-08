import React from 'react';
import { View, Text, Pressable, FlatList } from 'react-native'
import feed from '../../../src/assets/data/feed'
import Post from '../../../src/components/Post'

const SearchResultsSreen = (props) => {
    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({ item }) => <Post post={item} />}
            />
        </View>
    );
}

export default SearchResultsSreen;
