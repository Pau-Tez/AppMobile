import React, { Component } from 'react';
import { Info } from '../screenNames';
import HeaderComponent from './HeaderComponent';
import ButtonCom from './ButtonCom';

import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
const backgroundColor = 'white';
export default class ButtonComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Button';
        let drawerIcon = () => (
            <Image
                source={require('../icons/cloud-icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
        return { drawerLabel, drawerIcon };
    }
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <HeaderComponent {...this.props} />
            <View style={{
                flex: 1,
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
          <ButtonCom/>
            </View>
        </View>);
    }
}
