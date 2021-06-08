import React from 'react';
import { View, Pressable, ScrollView, Text, Image } from 'react-native'
import styles from './styles'

const Post = (props) => {

    const post = props.post
    return (
        <ScrollView>
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
                <Text style={styles.longDescription}>
                    {post.description}
                </Text>
            </View>
        </ScrollView>
    );
}

export default Post;
