/**
 * WordPress dependencies
 */
import { useState, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { Button, Popover } from "@wordpress/components";


import { LoadAssets } from '../../../src/components/LoadAssets';

const { installPlugin } = window.EBControls;
const plugin_file = "templately/templately.php";

const PatternLibraryButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    const templateButton = () => {
        setLoading(true)
        installPlugin("templately", plugin_file).then((data) => {
            const res = JSON.parse(data);
            if (res.success) {
                const templatelyDiv = document.createElement("div")
                templatelyDiv.setAttribute("id", "templately-gutenberg");
                document.querySelector('body').appendChild(templatelyDiv)
                //Reload Page Assets to get Templatey button
                LoadAssets().then(() => {
                    setLoading(false)
                    setIsVisible(false)

                    //Open Templately Modal
                    window.TemplatelyAppManager.open(null, 'templately-gutenberg', 'gutenberg');

                    //Update Localize
                    EssentialBlocksLocalize.get_plugins = {
                        ...EssentialBlocksLocalize.get_plugins,
                        [plugin_file]: {
                            ...EssentialBlocksLocalize.get_plugins[plugin_file],
                            active: true
                        }
                    }
                });
            } else {
                setError(true)
                setTimeout(() => {
                    setIsVisible(false)
                }, 2000)
            }
        });
    }

    return (
        <>
            <Button
                onClick={() => handleClick()}
                className={"eb-pattern-library-button"}
            >
                <img
                    src={`${EssentialBlocksLocalize?.eb_plugins_url}assets/images/eb-logo.svg`}
                    alt={"Essential Blocks Icon"}
                />{" "}
                {__("Pattern Library", "essential-blocks")}
            </Button>
            {isVisible && (
                <Popover className={"eb-pattern-library-popover"}>
                    <div className="eb-pattern-library-popover-content">
                        <div className="pattern-content">
                            <h2 className="eb-pattern-library-heading">
                                Access To Thousands Of Ready Gutenberg Templates
                            </h2>
                            <p>
                                Design unique websites using ready Gutenberg
                                templates from Templately with absolute ease and
                                instantly grab attention.
                            </p>

                            <Button
                                className={`eb-button ${error ? 'eb-button-error' : ''}`}
                                onClick={() => templateButton()}
                            >
                                {!error && (
                                    <>
                                        {__("I want access to FREE Templates", "essential-blocks")}
                                        {loading && (
                                            <img
                                                className="eb-install-loader"
                                                src={`${EssentialBlocksLocalize.eb_plugins_url}/assets/images/loading.svg`}
                                            />
                                        )}
                                    </>
                                )}
                                {error && (
                                    <>{__("Something went wrong!", "essential-blocks")}</>
                                )}

                            </Button>
                        </div>
                        <div className="pattern-img">
                            <img src={`${EssentialBlocksLocalize.image_url}//patternLibrary.jpg`} alt="Pattern Library" />
                        </div>
                    </div>
                    <a
                        className="eb-pattern-library-close-btn"
                        href="#"
                        onClick={() => handleClick()}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_435_1560)">
                                <path
                                    d="M15 4.75L5 14.75"
                                    stroke="#667085"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M5 4.75L15 14.75"
                                    stroke="#667085"
                                    stroke-width="1.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_435_1560">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </Popover>
            )}
        </>
    );
};

export default PatternLibraryButton;
