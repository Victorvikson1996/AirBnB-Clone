import React from 'react';
import { View, Pressable, Text, Image } from 'react-native'
import styles from './styles';

import { useNavigation } from '@react-navigation/native'

const Post = (props) => {


    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate('Post', { postId: post.id })
    }

    const post = props.post
    return (
        <Pressable onPress={goToPostPage} style={styles.container}>
            {/* {image} */}
            <Image
                style={styles.image}
                source={{ uri: post.image }}
            />
            {/* {bed & bedrom} */}

            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom}</Text>

            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>
            {/* {old price} */}


            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.price}>${post.newPrice} </Text>
                   /night
            </Text>

            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

        </Pressable>
    );
}

export default Post;
