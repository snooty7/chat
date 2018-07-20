import { TabNavigator } from 'react-navigation';
import {Alert, BackHandler, RefreshControl, ScrollView} from "react-native";
import React, {Component} from "react";
import {
    Text,
    Content,
    Button,
    Card,
    CardItem,
    Body,
    List,
    ListItem,
    Right
} from "native-base";

import { View, Image} from "react-native";
import ScaledImage from "../../../common/scaledimage";

import styles from './styles';

import {Grid, Row, Col} from "react-native-easy-grid";
import I18n from "../../../i18n/i18n";
import Api from "../../../Api";
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class Profile extends React.Component {

    render() {
        return (
            <WebView source={{uri:'https://randomgames.eu/chat/login.php'}}
            style={{margin: 20}}
            javaScriptEnabled={true}
            scalesPageToFit
            startInLoadingState
            allowsInlineMediaPlayback={true}
        />
        )
    }
}
export default Profile;