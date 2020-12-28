import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import InfoBox from '../../components/InfoBox';

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
            <InfoBox
              title={item.localized_name}
              stat={item.roles.join(', ')}
              backgroundImage={'https://api.opendota.com' + item.img}
            />
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
  },
  contentContainerStyle: {alignItems: 'center'},
});

export default HeroListComponent;
