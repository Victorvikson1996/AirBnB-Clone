import React from 'react';
import { View, Text, FlatList } from 'react-native'
import Post from '../../components/Post'
import places from '../../assets/data/feed'

const PostScreen = (props) => {
    const post = places[0]
    return (
        <View style={{ backgroundColor: 'white' }}>
            <Post post={post} />
        </View>
    );
}

export default PostScreen;
