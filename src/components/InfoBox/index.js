// @flow

import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const InfoBox = (props) => {
  const src = props.backgroundImage;
  return (
    <ImageBackground style={styles.infoBox} source={src}>
      <View style={styles.overlay}>
        <Text style={styles.text}> {props.title} </Text>
        <Text style={styles.text}> {props.stat} </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    height: 150,
    width: 150,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

export default InfoBox;
