/**
 * Store Setup
 */
import {
    createReduxStore,
    register,
    select,
    subscribe,
    dispatch,
    combineReducers
} from '@wordpress/data';

import * as actions from "./actions"
import * as selectors from "./selectors"
import * as controls from "./controls"
import * as resolvers from "./resolvers"
import reducer from "./reducer"

/**
 * Create WP Redux Store
 */
const store = createReduxStore(
    'essential-blocks',
    {
        reducer,
        actions,
        selectors,
        controls,
        resolvers
    }
);

register(store);

/**
 * Save Global Values on Save Page/Post
 */

subscribe(() => {
    const isSavingPost = select('core/editor').isSavingPost();
    const isAutosavingPost = select('core/editor').isAutosavingPost();

    const ebIsSaving = select('essential-blocks').getIsSaving()

    if (!ebIsSaving || isAutosavingPost || !isSavingPost) {
        return;
    }

    /**
     * Action
     */
    //Global Colors
    const globalColors = select('essential-blocks').getGlobalColors()
    dispatch('essential-blocks').saveGlobalColors(globalColors)

    //Custom Colors
    const customColors = select('essential-blocks').getCustomColors()
    dispatch('essential-blocks').saveCustomColors(customColors)

    //Gradient Colors
    const gradientColors = select('essential-blocks').getGradientColors()
    dispatch('essential-blocks').saveGradientColors(gradientColors)

    //Custom Gradient Colors
    const gradientCustomColors = select('essential-blocks').getCustomGradientColors()
    dispatch('essential-blocks').saveCustomGradientColors(gradientCustomColors)

    dispatch('essential-blocks').setIsSaving(false)
});
