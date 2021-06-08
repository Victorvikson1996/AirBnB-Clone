import React, { useState } from 'react';
import { View, Text, Pressable, } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import SearchResults from '../searchResult'

const GuestScreen = (props) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);


    const navigation = useNavigation();









    return (
        <View style={{ justifyContent: 'space-between', height: '100%' }}>
            <View>
                {/* {Row 1 Adults} */}
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Adults</Text>
                        <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            onPress={() => setAdults(Math.max(0, adults - 1))}
                            style={styles.button}

                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>
                        <Pressable
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}

                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>

                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Children</Text>
                        <Text style={{ color: '#8d8d8d' }}>Ages 2-12</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            onPress={() => setChildren(Math.max(0, children - 1))}
                            style={styles.button}

                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{children}</Text>
                        <Pressable
                            onPress={() => setChildren(children + 1)}
                            style={styles.button}

                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>


                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>infant</Text>
                        <Text style={{ color: '#8d8d8d' }}>Under 2</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            onPress={() => setInfant(Math.max(0, infant - 1))}
                            style={styles.button}

                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{infant}</Text>
                        <Pressable
                            onPress={() => setInfant(infant + 1)}
                            style={styles.button}

                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>

                </View>



            </View>

            <Pressable
                onPress={() => navigation.navigate('Home', {
                    screen: 'Explore',
                    params: {
                        screen: 'SearchResults',
                    }
                })}
                style={{
                    marginBottom: 20,
                    backgroundColor: '#f15454',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 10,
                }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Search</Text>
            </Pressable>

        </View>

    );
}




export default GuestScreen;
