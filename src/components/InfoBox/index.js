// @flow

import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const normal = {
  overlay: styles.overlayNormal,
  text: styles.textNormal,
  subtitle: styles.textNormal,
};

const highlight = {
  overlay: styles.overlayHighlight,
  text: styles.textHighlight,
  subtitle: styles.subtitle,
};

const InfoBox = (props) => {
  const src = props.backgroundImage;
  const style = props.highlight ? highlight : normal;
  return (
    <ImageBackground style={styles.infoBox} source={src}>
      <View style={style.overlay}>
        <Text style={style.text}>{props.title}</Text>
        <Text style={style.subtitle}>{props.stat}</Text>
      </View>
    </ImageBackground>
  );
};

export default InfoBox;
