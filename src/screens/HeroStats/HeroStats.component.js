import React from 'react';

import colors from '../../config/colors';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Attribute from '../../components/Attribute';
import InfoBox from '../../components/InfoBox';

// type Attribute = (props) => {
//   text: props.attribute,
//   color: props.color,
//   fill: props.fill
// };

// type InfoBox = {
//   title: props.title,
//   stat: props.stat,
// }

const armorBG = {
  uri:
    'https://previews.123rf.com/images/andreykuzmin/andreykuzmin1512/andreykuzmin151200001/49591664-grunge-metal-scales-armor-background.jpg',
};
const movementSpeedBG = {
  uri:
    'https://www.epicpath.org/images/thumb/3/3b/Feet_Slot_1.jpg/450px-Feet_Slot_1.jpg',
};
const attackSpeedBG = {
  uri:
    'https://www.skinwallet.com/dota-2/wp-content/uploads/sites/4/2020/01/Cosmetic_icon_Crimson_Edge_of_the_Lost_Order-1.png',
};
const attackRangeBG = {
  uri:
    'https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/570d0779-1b07-4af7-baad-3cda71f67122',
};
const baseHealthBG = {
  uri:
    'https://i.pinimg.com/564x/7f/65/5d/7f655de1f84a5cf7f4cfbab6b999d979.jpg',
};
const baseManaBG = require('../../images/baseManaBG.jpg');

const HeroComponent = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            <ImageBackground
              style={styles.image}
              source={{uri: 'https://api.opendota.com' + props.image}}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {' '}
              {props.attackType}, {props.roles.join(', ')}{' '}
            </Text>
          </View>
          <Attribute
            color={props.attribute[0].color}
            name={props.attribute[0].name}
            attributeStat={props.attribute[0].stat}
            fill={props.attribute[0].fill}
          />
          <Attribute
            color={props.attribute[1].color}
            name={props.attribute[1].name}
            attributeStat={props.attribute[1].stat}
            fill={props.attribute[1].fill}
          />
          <Attribute
            color={props.attribute[2].color}
            name={props.attribute[2].name}
            attributeStat={props.attribute[2].stat}
            fill={props.attribute[2].fill}
          />
          <View style={styles.container}>
            <Text style={styles.text}> Stats </Text>
          </View>
          <View style={styles.infoBoxContainer}>
            <InfoBox
              title={props.infoBox[0].title}
              stat={props.infoBox[0].stat}
              backgroundImage={armorBG}
            />
            <InfoBox
              title={props.infoBox[1].title}
              stat={props.infoBox[1].stat}
              backgroundImage={movementSpeedBG}
            />
            <InfoBox
              title={props.infoBox[2].title}
              stat={props.infoBox[2].stat}
              backgroundImage={attackSpeedBG}
            />
            <InfoBox
              title={props.infoBox[3].title}
              stat={props.infoBox[3].stat}
              backgroundImage={attackRangeBG}
            />
            <InfoBox
              title={props.infoBox[4].title}
              stat={props.infoBox[4].stat}
              backgroundImage={baseHealthBG}
            />
            <InfoBox
              title={props.infoBox[5].title}
              stat={props.infoBox[5].stat}
              backgroundImage={baseManaBG}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.background,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  infoBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  text: {
    color: colors.text,
  },
});

export default HeroComponent;
