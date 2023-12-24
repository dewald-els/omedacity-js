import { SDKResponse } from "./sdk-response";

export interface Player {
    id: string;
}

export type Players = Player[];

export interface PlayerModel {
    get: () => Promise<SDKResponse<Players>>
    getByName: (playerName: string) => Promise<SDKResponse<Player>>
}