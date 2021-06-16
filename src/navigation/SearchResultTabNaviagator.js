import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/searchResult'
import GuestScreen from '../screens/Guest';
import SearchResultsMaps from '../screens/SearchResultsMap';
import { useRoute } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator()


const SearchResultTabNaviagator = (props) => {


    const route = useRoute();
    const { guests } = route.params


    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen name={'list'}>
                {() => (
                    <SearchResults guests={guests} />
                )}

            </Tab.Screen>

            <Tab.Screen
                name={'map'}

            >
                {() => (
                    <SearchResultsMaps guests={guests} />
                )}

            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default SearchResultTabNaviagator;
