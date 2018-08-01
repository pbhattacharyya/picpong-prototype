import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import Feed from "../components/Feed";
import Inbox from "../components/Inbox";
import Home from "../components/Home";
import {AddButton} from "../components/common/AddButton";
import {TouchableOpacity, View} from 'react-native';

const SIZE = 60;

const BaseNavigator = createBottomTabNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-compass-outline"
                    color={tintColor}
                    size={24} 
                />
            )
        })
    },
    Home: {
        screen: Home,
        navigationOptions: () => ({
            tabBarIcon: <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE,
                        height: SIZE,
                        borderRadius: SIZE / 40,
                        backgroundColor: 'rgba(52, 52, 52, 0.0)',
                    }}>
                            <Icon name="ios-add" size={30} color="#F8F8F8"/>
                    </View>
        })
        /* navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-camera-outline"
                    color={tintColor}
                    size={30} 
                />
            )
        }) */
    },
    Inbox: {
        screen: Inbox,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-mail-outline"
                    color={tintColor}
                    size={24} 
                />
            )
        })
    }
}, { initialRouteName: 'Home',
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#3B5AFB',
        inactiveTintColor: '#6CBEFB', 
        style: {
            backgroundColor: '#fff',
            
        },
        tabStyle: {}
    },
},
);

const defaultGetStateForAction = BaseNavigator.router.getStateForAction;

// BaseNavigator.router.getStateForAction = (action, state) => {
//     if (action.type === NavigationActions.NAVIGATE && action.routeName === 'Adding') {
//         return null;
//     }
//
//     return defaultGetStateForAction(action, state);
// };

export {BaseNavigator};


/* Adding: {
    screen: () => null,
    navigationOptions: () => ({
        tabBarIcon: <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: SIZE,
                    height: SIZE,
                    borderRadius: SIZE / 2,
                    backgroundColor: '#48A2F8',
                }}>
                    <TouchableOpacity
                        onPress={this.toggleView}
                        activeOpacity={1}
                    >
                        <Icon name="plus" size={24} color="#F8F8F8"/>
                    </TouchableOpacity>
                </View>
    })
}, */