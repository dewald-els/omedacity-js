export declare namespace OmedaCity {
    type Heroes = Hero[];
    interface Hero {
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
    interface Ability {
        display_name: string;
        image: string;
        game_description: string;
        menu_description: string;
        cooldown: number[];
        cost: number[];
    }
    interface BaseStats {
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
    type ItemsQueryParams = {
        cursor?: string;
        matches_per_page?: number;
    };
    type Items = Item[];
    interface Item {
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
    interface ItemEffect {
        name: string;
        active: boolean;
        game_description: string;
        menu_description: string;
    }
    interface ItemStats {
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
    type MatchesQueryParams = {
        cursor?: string;
        matches_per_page?: number;
    };
    interface Matches {
        matches: Match[];
        cursor?: string;
    }
    interface Match {
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
    interface MatchPlayer {
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
    interface Flag {
        identifier: string;
        text: string;
        color: string;
    }
    type PlayersQueryParams = {
        page?: string;
        q?: {
            name: string;
        };
    };
    type Players = Player[];
    interface Player {
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
    interface PlayerMatchesOptions {
        playerId: string;
        params?: OmedaCity.PlayerMatchesQueryParams;
    }
    interface PlayerMatchesQueryParams {
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
    interface PlayerStatisticsQueryParams {
        time_frame?: TimeFrame;
    }
    interface PlayerStatisticsOptions {
        playerId: string;
        params?: PlayerStatisticsQueryParams;
    }
    interface PlayerStatistics {
        matches_played: number;
        hours_played: number;
        avg_performance_score: number;
        avg_kda: number[];
        avg_kdar: number;
        favorite_hero: FavoriteHero;
        favorite_role: string;
        win_rate: number;
    }
    interface FavoriteHero {
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
    enum Roles {
        Offlane = "offlane",
        Jungle = "jungle",
        Midlane = "midlane",
        Carry = "carry",
        Support = "support"
    }
    enum TimeFrame {
        All = "ALL",
        ThreeMonths = "3M",
        TwoMonths = "2M",
        OneMonth = "1M",
        OneDay = "1D",
        OneWeek = "1W",
        TwoWeeks = "2W",
        ThreeWeeks = "3W"
    }
}
