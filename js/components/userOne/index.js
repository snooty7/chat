import React, {Component} from "react";
import I18n from '../../../i18n/i18n';
import { View, TouchableHighlight } from 'react-native';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';
import { Components } from 'expo';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    H3,
    Button,
    Icon,
    Footer,
    FooterTab,
    Left,
    Right,
    Card,
    Body,
    List,
    CardItem
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";

import styles from "./styles";

class Tv extends Component {

    constructor(props) {
        super(props);
        this.onPressButton = this.onPressButton.bind(this);
    }
    onPressButton(){
        this.vid.presentFullscreenPlayer();
        this.vid.seek(5);
    }

    render() {
        return (
            <WebView source={{uri:'https://randomgames.eu/chat/login.php'}}
                style={{margin: 20}}
                javaScriptEnabled={true}
                scalesPageToFit
                startInLoadingState
                allowsInlineMediaPlayback={true}
            />
        );
    }
}

export default Tv;
