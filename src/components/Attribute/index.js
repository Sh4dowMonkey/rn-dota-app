// @flow

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Attribute = (props) => {
  const colorIndicator = {
    backgroundColor: props.bgColor,
    borderColor: props.color,
    height: 30,
    width: 30,
    borderWidth: 1,
    margin: 7,
    transform: [{rotate: '45deg'}],
  };

  return (
    <View style={styles.attributes}>
      <View style={colorIndicator} />
      <Text style={styles.text}> {props.name} </Text>
      <Text style={styles.text}> {props.attributeStat} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  attributes: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 100,
  },
});

export default Attribute;
