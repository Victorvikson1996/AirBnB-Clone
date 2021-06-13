import React from 'react';
import { View, Text, Pressable } from 'react-native'
import { Auth } from 'aws-amplify';

const ProfileScreen = (props) => {

    const logout = () => {
        Auth.signOut()
        // .then(data => console.log(data))
        // .catch(err => console.log(err));

    }
    return (
        <View style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Pressable
                onPress={logout}
                style={{
                    width: '100%',
                    height: 40,
                    backgroundColor: '#c3c3c3',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Text>Log  out</Text>
            </Pressable>
        </View>
    );
}

export default ProfileScreen;
