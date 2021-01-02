import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';
import InfoBox from '../../components/InfoBox';
import colors from '../../config/colors';

const HeroListComponent = (props) => {
  return (
    <View style={styles.page}>
      {props.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          style={styles.flatlist}
          contentContainerStyle={styles.contentContainerStyle}
          data={props.data}
          numColumns={2}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                props.onHeroPress(item);
              }}>
              <InfoBox
                title={item.localized_name}
                stat={item.roles.join(', ')}
                backgroundImage={{uri: 'https://api.opendota.com' + item.img}}
                highlight={true}
              />
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
  },
  flatlist: {
    width: '100%',
    backgroundColor: colors.background,
  },
  contentContainerStyle: {alignItems: 'center', paddingVertical: 30},
});

export default HeroListComponent;
