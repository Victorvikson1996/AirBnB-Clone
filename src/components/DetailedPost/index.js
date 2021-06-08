import React from 'react';
import { View, Pressable, Text, Image } from 'react-native'
import styles from './styles'

const Post = (props) => {

    const post = props.post
    return (
        <View style={styles.container}>
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

        </View>
    );
}

export default Post;