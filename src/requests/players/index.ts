import { SDKResponse } from "../../types";
import { Player, Players, PlayerModel } from "../../types/player";

const get = async (): Promise<SDKResponse<Players>> => {
  return {
    data: [],
    error: null,
  };
};

const getByName = async (playerName: string): Promise<SDKResponse<Player>> => {
  return {
    data: {} as unknown as Player,
    error: null, 
  }
}

const heroes: PlayerModel = {
  get,
  getByName,
}

export default heroes;