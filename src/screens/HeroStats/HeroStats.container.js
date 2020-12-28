import React from 'react';

import HeroComponent from './HeroStats.component';

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

const HeroContainer = () => {
  return (
    <HeroComponent
      name={hero.localized_name}
      image={hero.img}
      attackType={hero.attack_type}
      roles={hero.roles}
      attribute={attributes}
      infoBox={infoBox}
    />
  );
};

export default HeroContainer;
