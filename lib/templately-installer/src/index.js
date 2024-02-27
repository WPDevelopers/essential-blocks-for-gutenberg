
import { createElement } from "@wordpress/element"
import { Button, PanelRow } from "@wordpress/components"
import { subscribe } from '@wordpress/data'

import "./style.scss"
import PatternLibraryButton from "./PatternLibraryButton"

document.addEventListener('DOMContentLoaded', function () {
    const plugin_file = "templately/templately.php";
    const templately = EssentialBlocksLocalize.get_plugins[plugin_file];
    if (templately && templately.active) {
        return;
    }

    // Create Button
    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('eb-pattern-library-button-wrapper')
    ReactDOM.render(<PatternLibraryButton />, buttonDiv);

    subscribe(() => {
        const toolbar = document.querySelector('.edit-post-header-toolbar')
        if (toolbar) {
            const templately = EssentialBlocksLocalize.get_plugins[plugin_file];
            if (templately && templately.active) {
                if (toolbar.querySelector('.eb-pattern-library-button-wrapper')) {
                    toolbar.removeChild(buttonDiv)
                }
            }
            else if (!toolbar.querySelector('.eb-pattern-library-button-wrapper')) {
                toolbar.appendChild(buttonDiv)
            }
        }
    })
});
