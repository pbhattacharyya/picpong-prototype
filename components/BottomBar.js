import React from 'react'
import { View,
          StyleSheet, Image, ImageBackground, TouchableOpacity
        } from 'react-native'
import { createStackNavigator } from 'react-navigation'; 


export default class BottomBar extends React.Component {

    render() {
        return (
                <ImageBackground source={require('../screens/shapes/bottombar.png')} style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Feed')}>
                        <Image style = {styles.icon} source={require('../screens/icons/feed-inactive.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style = {styles.icon} source={require('../screens/icons/inbox-inactive.png')}/>
                    </TouchableOpacity>
                </ImageBackground> 
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        marginLeft: 32,
        marginRight: 32,
        marginTop: 27
      },
})
