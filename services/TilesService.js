import {TemperateTilesProvider} from "../providers/TemperateTilesProvider.js";
import {GlacialTilesProvider} from "../providers/GlacialTilesProvider.js";

let providers = new Map();

providers.set(-1, new GlacialTilesProvider());
providers.set(0, new TemperateTilesProvider());

export function getTile(temperature, noise){
    return providers.get(temperature).getTile(noise);
}