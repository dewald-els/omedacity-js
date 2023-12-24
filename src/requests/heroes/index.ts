import { Hero, Heroes, SDKResponse } from "../../types";
import { HeroModel } from "../../types/hero";

const get = async (): Promise<SDKResponse<Heroes>> => {
  return {
    data: [],
    error: null,
  };
};

const getByName = async (heroName: string): Promise<SDKResponse<Hero>> => {
  return {
    data: {} as unknown as Hero,
    error: null, 
  }
}

const heroes: HeroModel = {
  get,
  getByName,
}

export default heroes;