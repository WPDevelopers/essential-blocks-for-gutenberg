import {
    DEFAULT_STATE,
    SET_GLOBAL_COLORS,
    SAVE_GLOBAL_COLORS,
    SET_BLOCK_DEFAULTS,
    SAVE_BLOCK_DEFAULTS,
    FETCH_GLOBAL_COLORS,
    SET_CUSTOM_COLORS,
    SAVE_CUSTOM_COLORS,
    FETCH_CUSTOM_COLORS,
    SET_GRADIENT_COLORS,
    SAVE_GRADIENT_COLORS,
    FETCH_GRADIENT_COLORS,
    SET_CUSTOM_GRADIENT_COLORS,
    SAVE_CUSTOM_GRADIENT_COLORS,
    FETCH_CUSTOM_GRADIENT_COLORS,
    SET_IS_SAVING,
    FETCH_IS_SAVING
} from "./constant"

export default function reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SET_GLOBAL_COLORS:
            return {
                ...state,
                globalColors: [
                    ...action.value,
                ],
            };
        case FETCH_GLOBAL_COLORS:
            return state
        case SET_BLOCK_DEFAULTS:
            return {
                ...state,
                blockDefaults: action.value,
            };
        case SAVE_BLOCK_DEFAULTS:
            return state
        case SET_CUSTOM_COLORS:
            return {
                ...state,
                customColors: [
                    ...action.value,
                ],
            };
        case FETCH_CUSTOM_COLORS:
            return state
        case SET_GRADIENT_COLORS:
            return {
                ...state,
                gradientColors: [
                    ...action.value,
                ],
            };
        case FETCH_GRADIENT_COLORS:
            return state
        case SET_CUSTOM_GRADIENT_COLORS:
            return {
                ...state,
                customGradientColors: [
                    ...action.value,
                ],
            };
        case SAVE_GLOBAL_COLORS:
        case SAVE_CUSTOM_COLORS:
        case SAVE_GRADIENT_COLORS:
        case SAVE_CUSTOM_GRADIENT_COLORS:
            return {
                ...state
            }
        case FETCH_CUSTOM_GRADIENT_COLORS:
            return state
        case SET_IS_SAVING:
            return {
                ...state,
                isSaving: action.value,
            };
        case FETCH_IS_SAVING:
            return state
        default:
            return state;
    }
}
