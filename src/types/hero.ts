export interface Hero {
  id: number;
  game_id: number | null;
  name: string;
  display_name: string;
  image: string;
  stats: number[];
  classes: string[];
  roles: string[];
  abilities: HeroAbility[];
  base_stats: HeroBaseStats;
  color: string;
}

export interface HeroAbility {
  display_name: string;
  image: string;
  game_description: string;
  menu_description: string;
  cooldown: number[];
  cost: number[];
}

export interface HeroBaseStats {
  max_health: number[];
  base_health_regeneration: number[];
  max_mana: number[];
  base_mana_regeneration: number[];
  attack_speed: number[];
  physical_armor: number[];
  magical_armor: number[];
  basic_attack_time: number[];
  physical_power: number[];
  base_movement_speed: number[];
  cleave: number[];
  attack_range: number[];
}

export type Heroes = Hero[];
