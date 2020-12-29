import {useLinkProps} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {InteractionManager} from 'react-native';

import HeroListComponent from './HeroList.component';

const HeroListContainer = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.opendota.com/api/heroStats')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const onHeroPress = (hero) => {
    InteractionManager.runAfterInteractions(() => {
      props.navigation.navigate('HeroStats', hero);
    });
  };

  return (
    <HeroListComponent
      isLoading={isLoading}
      data={data}
      onHeroPress={onHeroPress}
      // navigation={props.navigation}
    />
  );
};

export default HeroListContainer;
