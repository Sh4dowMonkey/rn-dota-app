// @flow

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InfoBox = (props) => {
  const text = {
    myStyle: {
      textAlign: 'center',
    },
  };

  return (
    <View style={styles.infoBox}>
      <Text style={text.myStyle}> {props.title} </Text>
      <Text style={text.myStyle}> {props.stat} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'grey',
  },
});

export default InfoBox;
