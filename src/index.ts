export * from "./types";
//export * from "./requests";
import heroes from "./requests/heroes";
import players from "./requests/players";
import { OmedaCityClient } from "./types/client";

const OmedaCityClient: OmedaCityClient = {
    heroes,
    players,
}


export default OmedaCityClient;
