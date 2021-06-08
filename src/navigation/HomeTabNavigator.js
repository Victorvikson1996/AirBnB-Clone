import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from '../navigation/ExploreNavigator'
import SearchResultsMaps from '../screens/SearchResultsMap';
import Post from '../components/PostCarouselItem';
import PostScreen from '../screens/PostScreen';





const Tab = createBottomTabNavigator();



const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#f15454"
            }}
        >
            <Tab.Screen
                name={"Explore"}
                // component={ExploreNavigator}
                component={PostScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Fontisto name="search" size={25} color={color} />
                        )
                    }
                }}


            />
            <Tab.Screen
                name={"Saved"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <FontAwesome name="heart-o" size={25} color={color} />
                        )
                    }
                }}


            />

            <Tab.Screen
                name={"AirBnB"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <FontAwesome5 name="airbnb" size={25} color={color} />

                        )

                    }
                }}


            />

            <Tab.Screen
                name={"Message"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Feather name="message-square" size={25} color={color} />

                        )

                    }
                }}

            />

            <Tab.Screen
                name={"Profile"}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <EvilIcons name="user" size={25} color={color} />

                        )

                    }
                }}


            />


        </Tab.Navigator>
    )
}


export default HomeTabNavigator;

