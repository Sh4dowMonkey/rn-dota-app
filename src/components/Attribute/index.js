// @flow

import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Attribute = (props) => {
  const colorIndicator = {
    backgroundColor: props.fill ? props.color : 'transparent',
    borderColor: props.color,
  };

  return (
    <View style={styles.attributes}>
      <View style={[styles.colorIndicator, colorIndicator]} />
      <Text style={styles.text}> {props.name} </Text>
      <Text style={styles.text}> {props.attributeStat} </Text>
    </View>
  );
};

export default Attribute;
