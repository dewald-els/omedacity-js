export declare class HeroesCollection {
    get(): Promise<import("../types").OmedaCity.Heroes>;
    /**
     * Get a hero by name
     * @param {string} name
     * @returns
     */
    getByName(name: string): Promise<any>;
}
