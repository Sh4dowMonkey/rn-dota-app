import React from 'react';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
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

const Hero = (props) => {
  console.log('https://api.opendota.com' + props.image);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: 'https://api.opendota.com' + props.image}}
            />
          </View>
          {/* <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          /> */}
          <View style={styles.text}>
            <Text> {props.name} </Text>
            <Text>
              {' '}
              {props.attackType}, {props.roles}{' '}
            </Text>
          </View>
          <Attribute
            color={props.attributeColor[0]}
            bgColor={props.strBgColor}
            name={props.attribute[0]}
            attributeStat={props.attributeStats[0]}
          />
          <Attribute
            color={props.attributeColor[1]}
            bgColor={props.intBgColor}
            name={props.attribute[1]}
            attributeStat={props.attributeStats[1]}
          />
          <Attribute
            color={props.attributeColor[2]}
            bgColor={props.agiBgColor}
            name={props.attribute[2]}
            attributeStat={props.attributeStats[2]}
          />
          <View style={styles.container}>
            <Text> Stats </Text>
          </View>
          <View style={styles.infoBoxContainer}>
            <InfoBox
              title={props.infoBoxTitles[0]}
              stat={props.infoBoxStats[0]}
            />
            <InfoBox
              title={props.infoBoxTitles[1]}
              stat={props.infoBoxStats[1]}
            />
            <InfoBox
              title={props.infoBoxTitles[2]}
              stat={props.infoBoxStats[2]}
            />
            <InfoBox
              title={props.infoBoxTitles[3]}
              stat={props.infoBoxStats[3]}
            />
            <InfoBox
              title={props.infoBoxTitles[4]}
              stat={props.infoBoxStats[4]}
            />
            <InfoBox
              title={props.infoBoxTitles[5]}
              stat={props.infoBoxStats[5]}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  // infoBox: {
  //   flexWrap: 'wrap',
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 400,
  // },
  image: {
    width: 200,
    height: 100,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  infoBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default Hero;
