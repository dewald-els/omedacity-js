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
}
