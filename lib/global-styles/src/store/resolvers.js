import * as actions from "./actions";

/**
 * getGlobalColors resolver
 * @returns
 */
export function* getGlobalColors() {
    let globalColors = yield actions.fetchGlobalColor();
    return actions.setGlobalColors(globalColors)
}

/**
 * getCustomColors resolver
 * @returns
 */
export function* getCustomColors() {
    let customColors = yield actions.fetchCustomColor();
    return actions.setCustomColors(customColors)
}

/**
 * getGradientColors resolver
 * @returns
 */
export function* getGradientColors() {
    let gradientColors = yield actions.fetchGradientColor();
    return actions.setGradientColors(gradientColors)
}

/**
 * getCustomGradientColors resolver
 * @returns
 */
export function* getCustomGradientColors() {
    let customGradientColors = yield actions.fetchCustomGradientColor();
    return actions.setCustomGradientColors(customGradientColors)
}

/**
 * getBlockDefaults resolver
 * @returns
 */
export function* getBlockDefaults() {
    let value = yield actions.fetchBlockDefaults();
    return actions.setBlockDefault(value)
}


// /**
//  * getBlockDefaults resolver
//  * @returns
//  */
// export function* getIsSaving() {
//     let value = yield actions.fetchIsSaving();

//     console.log('fetch', value)

//     return actions.setIsSaving(value)
// }
