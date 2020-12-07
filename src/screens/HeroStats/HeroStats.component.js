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
          <View style={styles.text}>
            <Text> {props.name} </Text>
            <Text>
              {' '}
              {props.attackType}, {props.roles}{' '}
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
            <Text> Stats </Text>
          </View>
          <View style={styles.infoBoxContainer}>
            <InfoBox
              title={props.infoBox[0].title}
              stat={props.infoBox[0].stat}
            />
            <InfoBox
              title={props.infoBox[1].title}
              stat={props.infoBox[1].stat}
            />
            <InfoBox
              title={props.infoBox[2].title}
              stat={props.infoBox[2].stat}
            />
            <InfoBox
              title={props.infoBox[3].title}
              stat={props.infoBox[3].stat}
            />
            <InfoBox
              title={props.infoBox[4].title}
              stat={props.infoBox[4].stat}
            />
            <InfoBox
              title={props.infoBox[5].title}
              stat={props.infoBox[5].stat}
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
