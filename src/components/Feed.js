import React, {Component} from 'react';
import {ScrollView, Image, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

class Feed extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1}}>
                    
                    <Image source={require('../../screens/Feed.png')} style={{width: '100%', flex: 1}}>
                    </Image>
            </ScrollView>
        );
    }
}

export default Feed;