/**
 * Import Helper Functions
*/
const {
    ebJsonStringCheck
} = window.EBControls;

/**
 * Import Constants
 */
import {
    globalColorKey,
    customColorKey,
    gradientColorKey,
    customGradientColorKey,
    globalTypoKey,
    blockDefaultsKey,
} from "./constant";

/**
 * Import Fetch Functions
 */
import {
    updateGlobalStyle,
    getGlobalSettings,
    updateBlockDefaults,
    getBlockDefaults
} from '../fetch';

/**
 * Fetch Global Color from Database using AJAX
 * @returns {Object || false}
 */
export function FETCH_GLOBAL_COLORS() {
    return getGlobalSettings().then(response => {
        if (response && typeof response === 'object') {
            if (response[globalColorKey] && ebJsonStringCheck(response[globalColorKey]) && typeof JSON.parse(response[globalColorKey]) === 'object') {
                return JSON.parse(response[globalColorKey])
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    });
}

/**
 * Fetch Custom Color from Database using AJAX
 * @returns {Object || false}
 */
export function FETCH_CUSTOM_COLORS() {
    return getGlobalSettings().then(response => {
        if (response && typeof response === 'object') {
            if (response[customColorKey] && ebJsonStringCheck(response[customColorKey]) && typeof JSON.parse(response[customColorKey]) === 'object') {
                return JSON.parse(response[customColorKey])
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    });
}

/**
 * Fetch Gradient Color from Database using AJAX
 * @returns {Object || false}
 */
export function FETCH_GRADIENT_COLORS() {
    return getGlobalSettings().then(response => {
        if (response && typeof response === 'object') {
            if (response[gradientColorKey] && ebJsonStringCheck(response[gradientColorKey]) && typeof JSON.parse(response[gradientColorKey]) === 'object') {
                return JSON.parse(response[gradientColorKey])
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    });
}

/**
 * Fetch Custom Gradient Color from Database using AJAX
 * @returns {Object || false}
 */
export function FETCH_CUSTOM_GRADIENT_COLORS() {
    return getGlobalSettings().then(response => {
        if (response && typeof response === 'object') {
            if (response[customGradientColorKey] && ebJsonStringCheck(response[customGradientColorKey]) && typeof JSON.parse(response[customGradientColorKey]) === 'object') {
                return JSON.parse(response[customGradientColorKey])
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    });
}

/**
 * Fetch Block Defaults from Database using AJAX
 * @returns {Object || false}
 */
export function FETCH_BLOCK_DEFAULTS() {
    return getBlockDefaults().then(response => {
        if (response && ebJsonStringCheck(response) && typeof JSON.parse(response) === 'object') {
            return JSON.parse(response)
        }
        else {
            return false
        }
    });
}
