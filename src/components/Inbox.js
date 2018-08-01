import React, {Component} from 'react';
import {Image, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

class Inbox extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1}}>
                    
                    <Image source={require('../../screens/Inbox.png')} style={{width: '100%', flex: 1}}>
                    </Image>
            </ScrollView>
        );
    }
}

export default Inbox;