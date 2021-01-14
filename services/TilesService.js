let providers = new Map();

providers.set(-1, new GlacialTilesProvider());
providers.set(0, new TemperateTilesProvider());

function getTile(temperature, noise){
    return providers.get(temperature).getTile(noise);
}