import React from 'react';

import Hero from './Heroes.component';

let hero = {
  id: 1,
  name: 'npc_dota_hero_antimage',
  localized_name: 'Anti-Mage',
  primary_attr: 'agi',
  attack_type: 'Melee',
  roles: ['Carry', 'Escape', 'Nuker'],
  img: '/apps/dota2/images/heroes/antimage_full.png?',
  icon: '/apps/dota2/images/heroes/antimage_icon.png',
  base_health: 200,
  base_health_regen: 0.25,
  base_mana: 75,
  base_mana_regen: 0,
  base_armor: -1,
  base_mr: 25,
  base_attack_min: 29,
  base_attack_max: 33,
  base_str: 23,
  base_agi: 24,
  base_int: 12,
  str_gain: 1.3,
  agi_gain: 2.8,
  int_gain: 1.8,
  attack_range: 150,
  projectile_speed: 0,
  attack_rate: 1.4,
  move_speed: 310,
  turn_rate: 0.5,
  cm_enabled: true,
  legs: 2,
  pro_ban: 587,
  hero_id: 1,
  pro_win: 65,
  pro_pick: 136,
  null_pick: 2419804,
  null_win: 0,
};

function attribute() {
  hero.strFill = false;
  hero.agiFill = false;
  hero.intFill = false;

  if (hero.primary_attr === 'agi') {
    hero.agiFill = true;
  } else if (hero.primary_attr === 'str') {
    hero.strFill = true;
  } else {
    hero.intFill = true;
  }

  if (hero.strFill === true) {
    hero.strBgColor = 'red';
  } else {
    hero.strBgColor = 'transparent';
  }
  if (hero.intFill === true) {
    hero.intBgColor = 'blue';
  } else {
    hero.intBgColor = 'transparent';
  }
  if (hero.agiFill === true) {
    hero.agiBgColor = 'green';
  } else {
    hero.agiBgColor = 'transparent';
  }
}

const x = [
  {
    color: 'red',
    name: 'Strength',
    value: '4',
    fill: hero.primary_attr === 'str',
  },
  {
    color: 'green',
    name: 'Agility',
    value: '5',
    fill: hero.primary_attr === 'agi',
  },
];

const HeroScreen = () => {
  // attribute(hero);
  return (
    <Hero
      name={hero.localized_name}
      image={hero.img}
      attackType={hero.attack_type}
      roles={hero.roles}
      attributeColor={['red', 'blue', 'green']}
      attribute={['Strength', 'Intelligence', 'Agility']}
      attributeStats={[hero.base_str, hero.base_int, hero.base_agi]}
      infoBoxTitles={[
        'Base Armor',
        'Movement Speed',
        'Attack Rate',
        'Attack Range',
        'Base Health',
        'Base Mane',
      ]}
      infoBoxStats={[
        hero.base_armor,
        hero.move_speed,
        hero.attack_rate,
        hero.attack_range,
        hero.base_health,
        hero.base_mana,
      ]}
    />
  );
};

export default HeroScreen;
