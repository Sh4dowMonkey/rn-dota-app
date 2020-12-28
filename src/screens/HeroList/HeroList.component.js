import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import InfoBox from '../../components/InfoBox';

const HeroListComponent = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.opendota.com/api/heroStats')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          style={{
            width: '100%',
          }}
          contentContainerStyle={{alignItems: 'center'}}
          data={data}
          numColumns={2}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <InfoBox title={item.localized_name} stat={item.roles.join(', ')} />
          )}
        />
      )}
    </View>
  );
};

export default HeroListComponent;
