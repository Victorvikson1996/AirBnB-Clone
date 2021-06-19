import React from 'react';
import { View, Text, Pressable, FlatList } from 'react-native'
import Post from '../../../src/components/Post'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'

// import feed from '../../../src/assets/data/feed'


const SearchResultsSreen = (props) => {
    const { posts } = props;

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
            />
        </View>
    );
}

export default SearchResultsSreen;
