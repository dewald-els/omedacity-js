import { HeroModel } from "./hero";
import { PlayerModel } from "./player";

export interface OmedaCityClient {
    heroes: HeroModel;
    players: PlayerModel;
}

