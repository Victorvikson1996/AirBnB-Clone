import React from 'react';
import { View, Text, FlatList } from 'react-native'
import DetailedPost from '../../components/DetailedPost'
import places from '../../assets/data/feed'

const PostScreen = (props) => {
    const post = places[0]
    return (
        <View style={{ backgroundColor: 'white' }}>
            <DetailedPost post={post} />
        </View>
    );
}

export default PostScreen;
