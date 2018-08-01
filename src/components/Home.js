
import React, {Component} from 'react';
import { Button, StyleSheet, Image, ImageBackground, TabBarIOS, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import CameraFrame from '../../components/CameraFrame.js';

class Home extends Component {
    render() {
        return (
          <ImageBackground source={require('../../screens/Landing-page-reply1.png')} style={styles.background}>
                <View style={{ flex: 1.5, paddingLeft: 14, justifyContent: 'flex-end' }}>
                    <Image source={require('../../screens/shapes/top-name-card.png')} /> 
                </View>
                <View style={{ flex: 6, paddingLeft: 17, paddingRight: 17 }}>
                  <CameraFrame />
                </View>
          </ImageBackground> 
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1, 
      width: '100%',
       height: '100%'
    },
    bottombar: {
      flex: 0.8, 
      flexDirection: 'column', 
      justifyContent: 'flex-end'
    },
    icon: {
      marginLeft: 32,
      marginRight: 32,
      marginTop: 27
    },
  });
  

export default Home;