import {TemperateTilesProvider} from "../providers/TemperateTilesProvider.js";
import {GlacialTilesProvider} from "../providers/GlacialTilesProvider.js";
import {TropicalTilesProvider} from "../providers/TropicalTilesProvider.js";
import {SavannahTilesProvider} from "../providers/SavannahTilesProvider.js";
import {DesertTilesProvider} from "../providers/DesertTilesProvider.js";

let providers = new Map();

providers.set(-1, new GlacialTilesProvider());
providers.set(0, new TemperateTilesProvider());
providers.set(1, new TropicalTilesProvider());
providers.set(2, new SavannahTilesProvider());
providers.set(3, new DesertTilesProvider());

export function getTile(temperature, noise){
    return providers.get(temperature).getTile(noise);
}

export function getCities(temperature){
    return providers.get(temperature).getCities();
}
