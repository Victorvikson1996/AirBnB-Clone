import React from 'react';
import { View, Pressable, Text, Image, useWindowDimensions } from 'react-native';
import styles from './styles'

const Post = (props) => {

    const post = props.post
    const width = useWindowDimensions().width;
    return (
        <View style={styles.container, { width: width - 60 }}>
            <View style={styles.innerContainer}>


                {/* {image} */}
                <Image
                    style={styles.image}
                    source={{ uri: post.image }}
                />
                {/* {bed & bedrom} */}
                <View style={{ marginHorizontal: 10, flex: 1 }}>
                    <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom}</Text>

                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}. {post.title}
                    </Text>
                    {/* {old price} */}


                    <Text style={styles.prices}>
                        <Text style={styles.price}>${post.newPrice} </Text>
                   / night
            </Text>
                </View>

            </View>
        </View>
    );
}

export default Post;
