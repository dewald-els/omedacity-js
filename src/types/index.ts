export namespace OmedaCity {
  export type Heroes = Hero[];

  export interface Hero {
    id: number;
    game_id?: number;
    name: string;
    display_name: string;
    image: string;
    stats: number[];
    classes: string[];
    roles: string[];
    abilities: Ability[];
    base_stats: BaseStats;
  }

  export interface Ability {
    display_name: string;
    image: string;
    game_description: string;
    menu_description: string;
    cooldown: number[];
    cost: number[];
  }

  export interface BaseStats {
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

  export type ItemsQueryParams = {
    cursor?: string;
    matches_per_page?: number;
  };

  export type Items = Item[];

  export interface Item {
    id: number;
    game_id: number;
    name: string;
    display_name: string;
    image: string;
    price?: number;
    total_price: number;
    slot_type?: string;
    rarity?: string;
    aggression_type?: string;
    hero_class?: string;
    required_level?: number;
    effects: ItemEffect[];
    requirements: string[];
    build_paths: string[];
    stats?: ItemStats;
  }

  export interface ItemEffect {
    name: string;
    active: boolean;
    game_description: string;
    menu_description: string;
  }

  export interface ItemStats {
    magical_power?: number;
    physical_power?: number;
    critical_chance?: number;
    attack_speed?: number;
    omnivamp?: number;
    ability_haste?: number;
    max_health?: number;
    tenacity?: number;
    magical_armor?: number;
    magical_lifesteal?: number;
    max_mana?: number;
    mana_regeneration?: number;
    physical_penetration?: number;
    lifesteal?: number;
    physical_armor?: number;
    movement_speed?: number;
    magical_penetration?: number;
    health_regeneration?: number;
    heal_shield_increase?: number;
    gold_per_second?: number;
  }

  export type MatchesQueryParams = {
    cursor?: string;
    matches_per_page?: number;
  };

  export interface Matches {
    matches: Match[];
    cursor?: string;
  }

  export interface Match {
    id: string;
    start_time: string;
    end_time: string;
    game_duration: number;
    game_region: any;
    region: string;
    winning_team: string;
    game_mode: string;
    players: MatchPlayer[];
  }

  export interface MatchPlayer {
    id: string;
    display_name: string;
    is_ranked: boolean;
    mmr: number;
    mmr_change: number;
    rank: string;
    rank_image: string;
    flags: Flag[];
    team: string;
    hero_id: number;
    role: any;
    minions_killed: number;
    lane_minions_killed: number;
    neutral_minions_killed: number;
    neutral_minions_team_jungle: number;
    neutral_minions_enemy_jungle: number;
    kills: number;
    deaths: number;
    assists: number;
    largest_killing_spree: number;
    largest_multi_kill: number;
    total_damage_dealt: number;
    physical_damage_dealt: number;
    magical_damage_dealt: number;
    true_damage_dealt: number;
    largest_critical_strike: any;
    total_damage_dealt_to_heroes: number;
    physical_damage_dealt_to_heroes: number;
    magical_damage_dealt_to_heroes: number;
    true_damage_dealt_to_heroes: number;
    total_damage_dealt_to_structures: number;
    total_damage_dealt_to_objectives: number;
    total_damage_taken: number;
    physical_damage_taken: number;
    magical_damage_taken: number;
    true_damage_taken: number;
    total_damage_taken_from_heroes: number;
    physical_damage_taken_from_heroes: number;
    magical_damage_taken_from_heroes: number;
    true_damage_taken_from_heroes: number;
    total_damage_mitigated: number;
    total_healing_done: number;
    item_healing_done: any;
    crest_healing_done: any;
    utility_healing_done: any;
    total_shielding_received: any;
    wards_placed: number;
    wards_destroyed: number;
    gold_earned: number;
    gold_spent: number;
    inventory_data: any;
    performance_score: number;
    performance_title: string;
    level: number;
  }

  export interface Flag {
    identifier: string;
    text: string;
    color: string;
  }

  export type PlayersQueryParams = {
    page?: string;
    q?: {
      name: string;
    };
  };

  export type Players = Player[];

  export interface Player {
    id: string;
    display_name: string;
    region: string;
    rank: number;
    rank_active: number;
    is_active: boolean;
    rank_title: string;
    rank_image: string;
    is_ranked: boolean;
    mmr: number;
    flags: Flag[];
  }

  export interface PlayerMatchesOptions {
    playerId: string;
    params?: OmedaCity.PlayerMatchesQueryParams;
  }

  export interface PlayerMatchesQueryParams {
    time_frame?: TimeFrame;
    page?: number;
    matches_per_page?: number;
    match_filter?: {
      hero_id?: string;
      role?: Roles;
      occuring_hero_id?: string;
      player_name?: string;
    };
  }

  export interface PlayerStatisticsQueryParams {
    time_frame?: TimeFrame;
  }

  export interface PlayerStatisticsOptions {
    playerId: string;
    params?: PlayerStatisticsQueryParams;
  }

  export interface PlayerStatistics {
    matches_played: number;
    hours_played: number;
    avg_performance_score: number;
    avg_kda: number[];
    avg_kdar: number;
    favorite_hero: FavoriteHero;
    favorite_role: string;
    win_rate: number;
  }

  export interface FavoriteHero {
    id: number;
    game_id: number;
    name: string;
    display_name: string;
    image: string;
    stats: number[];
    classes: string[];
    roles: string[];
    visible: boolean;
    enabled: boolean;
    created_at: string;
    updated_at: string;
  }

  export interface PlayerHeroStatisticsOptions {
    playerId: string;
    params?: PlayerHeroStatisticsQueryParams;
  }

  export interface PlayerHeroStatisticsQueryParams {
    hero_ids: string[];
  }

  export interface PlayerHeroStatistics {
    hero_statistics: PlayerHeroStatistic[];
  }

  export interface PlayerHeroStatistic {
    hero_id: number;
    display_name: string;
    match_count: number;
    win_rate: number;
    cs_min: number;
    gold_min: number;
    largest_killing_spree: number;
    largest_multi_kill: number;
    largest_critical_strike: number;
    total_performance_score: number;
    avg_performance_score: number;
    max_performance_score: number;
    kills: number;
    avg_kills: number;
    max_kills: number;
    deaths: number;
    avg_deaths: number;
    max_deaths: number;
    assists: number;
    avg_assists: number;
    max_assists: number;
    avg_kdar: number;
    max_kdar: number;
    minions_killed: number;
    avg_minions_killed: number;
    max_minions_killed: number;
    gold_earned: number;
    avg_gold_earned: number;
    max_gold_earned: number;
    total_healing_done: number;
    avg_healing_done: number;
    max_healing_done: number;
    total_damage_mitigated: number;
    avg_damage_mitigated: number;
    max_damage_mitigated: number;
    total_damage_dealt_to_heroes: number;
    avg_damage_dealt_to_heroes: number;
    max_damage_dealt_to_heroes: number;
    total_damage_taken_from_heroes: number;
    avg_damage_taken_from_heroes: number;
    max_damage_taken_from_heroes: number;
    total_damage_dealt_to_structures: number;
    avg_damage_dealt_to_structures: number;
    max_damage_dealt_to_structures: number;
    total_damage_dealt_to_objectives: number;
    avg_damage_dealt_to_objectives: number;
    max_damage_dealt_to_objectives: number;
    wards_placed: number;
    avg_wards_placed: number;
    max_wards_placed: number;
    wards_destroyed: number;
    avg_wards_destroyed: number;
    max_wards_destroyed: number;
  }

  export enum Roles {
    Offlane = "offlane",
    Jungle = "jungle",
    Midlane = "midlane",
    Carry = "carry",
    Support = "support",
  }

  export enum TimeFrame {
    All = "ALL",
    ThreeMonths = "3M",
    TwoMonths = "2M",
    OneMonth = "1M",
    OneDay = "1D",
    OneWeek = "1W",
    TwoWeeks = "2W",
    ThreeWeeks = "3W",
  }
}
