/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';

import HeroComponent from './HeroStats.component';

const HeroContainer = (props) => {
  const hero = props.route.params;

  useEffect(() => {
    props.navigation.setOptions({title: hero.localized_name});
  }, [hero]);

  const attributes = [
    {
      color: 'red',
      name: 'Strength',
      stat: hero.base_str,
      fill: hero.primary_attr === 'str',
    },
    {
      color: 'blue',
      name: 'Intelligence',
      stat: hero.base_int,
      fill: hero.primary_attr === 'int',
    },
    {
      color: 'green',
      name: 'Agility',
      stat: hero.base_agi,
      fill: hero.primary_attr === 'agi',
    },
  ];

  const infoBox = [
    {title: 'Base Armor', stat: hero.base_armor},
    {title: 'Movement Speed', stat: hero.move_speed},
    {title: 'Attack Rate', stat: hero.attack_rate},
    {title: 'Attack Range', stat: hero.attack_range},
    {title: 'Base Health', stat: hero.base_health},
    {title: 'Base Mana', stat: hero.base_mana},
  ];

  return (
    <HeroComponent
      image={hero.img}
      attackType={hero.attack_type}
      roles={hero.roles}
      attribute={attributes}
      infoBox={infoBox}
    />
  );
};

export default HeroContainer;
