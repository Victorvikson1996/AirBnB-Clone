import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, FlatList } from 'react-native'
import Post from '../../../src/components/Post'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'


// import feed from '../../../src/assets/data/feed'


const SearchResultsSreen = (props) => {
    const { guests } = props;

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            maxGuests: {
                                ge: guests
                            }
                        }
                    })
                )
                setPosts(postsResult.data.listPosts.items);
            } catch (e) {
                console.log(e)
            }

        }

        fetchPosts();
    }, [])


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
