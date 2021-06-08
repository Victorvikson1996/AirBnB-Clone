import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/searchResult'
import GuestScreen from '../screens/Guest';
import SearchResultsMaps from '../screens/SearchResultsMap';


const Tab = createMaterialTopTabNavigator()


const SearchResultTabNaviagator = (props) => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen
                name={'list'}
                component={SearchResults}

            />

            <Tab.Screen
                name={'map'}
                component={SearchResultsMaps}

            />
        </Tab.Navigator>
    );
}

export default SearchResultTabNaviagator;
