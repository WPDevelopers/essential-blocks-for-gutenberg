import { PluginSidebar } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";
import { useState, useEffect, useRef } from "@wordpress/element";
import { PanelBody, Button, Popover, Dashicon, TabPanel, PanelRow } from "@wordpress/components";

import { dispatch, useSelect, withSelect } from "@wordpress/data";
import {
    __experimentalColorGradientControl as ColorGradientControl,
    BlockPreview,
    PanelColorSettings
} from "@wordpress/block-editor";
import { createBlock, store as blocksStore } from "@wordpress/blocks";

import EBIcon from "./assets/icon";
import ColorPalletWrapper from "./components/colorPalletWrapper"
import GradientColorPallet from "./components/GradientColorPallet"
import "./style.scss";

import Accordion from "./block-defaults/accordion";
import AdvancedHeading from "./block-defaults/advanced-heading";
import AdvancedImage from "./block-defaults/advanced-image";
import AdvancedTabs from "./block-defaults/advanced-tabs";
import AdvancedVideo from "./block-defaults/advanced-video";
import AdvancedNavigation from "./block-defaults/advanced-navigation";
import EBButton from "./block-defaults/button";
import CallToAction from "./block-defaults/call-to-action";
import Countdown from "./block-defaults/countdown";
import DualButton from "./block-defaults/dual-button";
import FeatureList from "./block-defaults/feature-list";
import Flipbox from "./block-defaults/flipbox";
import FluentForms from "./block-defaults/fluent-forms";
import ImageComparison from "./block-defaults/image-comparison";
import ImageGallery from "./block-defaults/image-gallery";
import Infobox from "./block-defaults/infobox";
import InstagramFeed from "./block-defaults/instagram-feed";
import InteractivePromo from "./block-defaults/interactive-promo";
import NftGallery from "./block-defaults/nft-gallery";
import Notice from "./block-defaults/notice";
import NumberCounter from "./block-defaults/number-counter";
import Openverse from "./block-defaults/openverse";
import ParallaxSlider from "./block-defaults/parallax-slider";
import Popup from "./block-defaults/popup";
import PostCarousel from "./block-defaults/post-carousel";
import PostGrid from "./block-defaults/post-grid";
import PricingTable from "./block-defaults/pricing-table";
import ProgressBar from "./block-defaults/progress-bar";
import Row from "./block-defaults/row";
import Slider from "./block-defaults/slider";
import Social from "./block-defaults/social";
import SocialShare from "./block-defaults/social-share";
import TableOfContents from "./block-defaults/table-of-contents";
import TeamMember from "./block-defaults/team-member";
import Testimonial from "./block-defaults/testimonial";
import ToggleContent from "./block-defaults/toggle-content";
import TypingText from "./block-defaults/typing-text";
import WooProductGrid from "./block-defaults/woo-product-grid";
import Wpforms from "./block-defaults/wpforms";
import Wrapper from "./block-defaults/wrapper";
import GoogleMap from "./block-defaults/google-map";
import Form from "./block-defaults/form";

/**
 * Global Controls Component
 * @param {*} props
 * @returns {Component}
 */
function EBGlobalControls(props) {
    const {
        getGlobalColors,
        getCustomColors,
        getGradientColors,
        getCustomGradientColors,
        getBlockDefaults
    } = props;

    const localizeColors = EssentialBlocksLocalize.globalColors || []

    const components = applyFilters('eb_block_defaults', {
        advanced_heading: {
            component: AdvancedHeading,
            preview: true,
        },
        accordion: {
            component: Accordion,
            preview: true,
        },
        advanced_image: {
            component: AdvancedImage,
            preview: true,
            previewData: {
                image: {
                    url: EssentialBlocksLocalize?.image_url + "/gallery-images/hongkong.jpg",
                },
                imageCaption: "Style images in Gutenberg with advanced options.",
            },
        },
        advanced_tabs: {
            component: AdvancedTabs,
            preview: true,
        },
        advanced_video: {
            component: AdvancedVideo,
            preview: true,
        },
        advanced_navigation: {
            component: AdvancedNavigation,
            preview: false,
        },
        button: {
            component: EBButton,
            preview: true,
        },
        call_to_action: {
            component: CallToAction,
            preview: true,
        },
        countdown: {
            component: Countdown,
            preview: true,
        },
        dual_button: {
            component: DualButton,
            preview: true,
        },
        feature_list: {
            component: FeatureList,
            preview: true,
        },
        flipbox: {
            component: Flipbox,
            preview: true,
        },
        fluent_forms: {
            component: FluentForms,
            preview: false,
        },
        image_comparison: {
            component: ImageComparison,
            preview: true,
            previewData: {
                leftImageURL: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/white-balloon-bnw.jpeg",
                rightImageURL: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/white-balloon.jpeg",
            },
        },
        image_gallery: {
            component: ImageGallery,
            preview: true,
            previewData: {
                images: [
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/Maldive.jpg",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/Australia.jpg",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/hongkong.jpg",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/iceland.jpg",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/china.jpg",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/CA.jpg",
                    },
                ],

                sources: [
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/Maldive.jpg",
                        caption: "",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/Australia.jpg",
                        caption: "",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/hongkong.jpg",
                        caption: "",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/iceland.jpg",
                        caption: "",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/china.jpg",
                        caption: "",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/CA.jpg",
                        caption: "",
                    },
                ],
            },
        },
        infobox: {
            component: Infobox,
            preview: true,
        },
        instagram_feed: {
            component: InstagramFeed,
            preview: false,
        },
        interactive_promo: {
            component: InteractivePromo,
            preview: true,
            previewData: {
                imageURL: EssentialBlocksLocalize?.image_url + "/gallery-images/china.jpg",
            },
        },
        nft_gallery: {
            component: NftGallery,
            preview: false,
        },
        notice: {
            component: Notice,
            preview: true,
        },
        number_counter: {
            component: NumberCounter,
            preview: true,
        },
        openverse: {
            component: Openverse,
            preview: false,
        },
        parallax_slider: {
            component: ParallaxSlider,
            preview: true,
            previewData: {
                sliderData: [
                    {
                        src: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/Maldive.jpg",
                    },
                    {
                        src: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/Australia.jpg",
                    },
                    {
                        src: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/hongkong.jpg",
                    },
                    {
                        src: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/iceland.jpg",
                    },
                ],
            },
        },
        popup: {
            component: Popup,
            preview: true,
        },
        post_carousel: {
            component: PostCarousel,
            preview: false,
        },
        post_grid: {
            component: PostGrid,
            preview: false,
        },
        pricing_table: {
            component: PricingTable,
            preview: true,
        },
        progress_bar: {
            component: ProgressBar,
            preview: true,
        },
        row: {
            component: Row,
            preview: false,
        },
        slider: {
            component: Slider,
            preview: true,
            previewData: {
                images: [
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/Maldive.jpg",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/Australia.jpg",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/hongkong.jpg",
                    },
                    {
                        url: EssentialBlocksLocalize?.eb_plugins_url + "assets/images/gallery-images/iceland.jpg",
                    },
                ],
            },
        },
        social: {
            component: Social,
            preview: true,
        },
        social_share: {
            component: SocialShare,
            preview: true,
        },
        table_of_contents: {
            component: TableOfContents,
            preview: true,
        },
        team_member: {
            component: TeamMember,
            preview: true,
        },
        testimonial: {
            component: Testimonial,
            preview: true,
        },
        toggle_content: {
            component: ToggleContent,
            preview: true,
        },
        typing_text: {
            component: TypingText,
            preview: true,
        },
        woo_product_grid: {
            component: WooProductGrid,
            preview: false,
        },
        wpforms: {
            component: Wpforms,
            preview: false,
        },
        wrapper: {
            component: Wrapper,
            preview: true,
        },
        google_map: {
            component: GoogleMap,
            preview: false,
        },
        form: {
            component: Form,
            preview: false,
        },
    });

    /**
     * State
     */
    const [globalColors, setGlobalColors] = useState([]);
    const [customColors, setCustomColors] = useState([]);
    const [gradientColors, setGradientColors] = useState([]);
    const [customGradientColors, setCustomGradientColors] = useState([]);
    const [blockDefaults, setBlockDefaults] = useState({});
    const [blockItemDefaults, setBlockItemDefaults] = useState({});
    const [popoverAnchor, setPopoverAnchor] = useState();
    const [clickedBlock, setClickedBlock] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    //Initial UseEffect, Set Defualt color if Store is empty
    useEffect(() => {
        //Set Global Colors
        if (typeof getGlobalColors === "object" && globalColors.length === 0) {
            setGlobalColors(localizeColors);
        }

        //Set Gradient Colors
        if (typeof getGradientColors === "object" && gradientColors.length === 0) {
            setGradientColors(EssentialBlocksLocalize.gradientColors || []);
        }
    }, []);

    //Set globalColors when Store "getGlobalColors" is changed
    useEffect(() => {
        if (JSON.stringify(getGlobalColors) !== JSON.stringify(globalColors)) {
            setGlobalColors(getGlobalColors);
        }
    }, [getGlobalColors]);

    //Set customColors when Store "getCustomColors" is changed
    useEffect(() => {
        if (JSON.stringify(getCustomColors) !== JSON.stringify(customColors)) {
            setCustomColors(getCustomColors);
        }
    }, [getCustomColors]);

    //Set gradientColors when Store "getGradientColors" is changed
    useEffect(() => {
        if (JSON.stringify(getGradientColors) !== JSON.stringify(gradientColors)) {
            setGradientColors(getGradientColors);
        }
    }, [getGradientColors]);

    //Set customGradientColors when Store "getCustomGradientColors" is changed
    useEffect(() => {
        if (JSON.stringify(getCustomGradientColors) !== JSON.stringify(customGradientColors)) {
            setCustomGradientColors(getCustomGradientColors);
        }
    }, [getCustomGradientColors]);

    //Update Store when "globalColors" is changed
    useEffect(() => {
        if (globalColors.length > 0) {
            dispatch("essential-blocks").setGlobalColors(globalColors);
            dispatch('essential-blocks').setIsSaving(true);
        }
        const root = document.documentElement;
        (globalColors.length > 0) && globalColors.map((item) => {
            if (item.var && item.color) {
                root.style.setProperty(item.var, item.color);
            }
        })

    }, [globalColors]);

    //Update Store when "customColors" is changed
    useEffect(() => {
        if (typeof customColors === 'object') {
            dispatch("essential-blocks").setCustomColors(customColors);
            dispatch('essential-blocks').setIsSaving(true);
        }
        const root = document.documentElement;
        (customColors.length > 0) && customColors.map((item) => {
            if (item.var && item.color) {
                root.style.setProperty(item.var, item.color);
            }
        })
    }, [customColors]);

    //Update Store when "gradientColors" is changed
    useEffect(() => {
        if (gradientColors.length > 0) {
            dispatch("essential-blocks").setGradientColors(gradientColors);
            dispatch('essential-blocks').setIsSaving(true);
        }
        const root = document.documentElement;
        (gradientColors.length > 0) && gradientColors.map((item) => {
            if (item.var && item.color) {
                root.style.setProperty(item.var, item.color);
            }
        })
    }, [gradientColors]);

    //Update Store when "customGradientColors" is changed
    useEffect(() => {
        if (typeof customGradientColors === 'object') {
            dispatch("essential-blocks").setCustomGradientColors(customGradientColors);
            dispatch('essential-blocks').setIsSaving(true);
        }
        const root = document.documentElement;
        (customGradientColors.length > 0) && customGradientColors.map((item) => {
            if (item.var && item.color) {
                root.style.setProperty(item.var, item.color);
            }
        })
    }, [customGradientColors]);

    //Update Global Colors
    const setGlobalColor = (index, color) => {
        const colors = [...globalColors];
        colors[index].color = color;
        setGlobalColors([...colors]);
    };
    const setCustomColor = (index, color) => {
        const colors = [...customColors];
        colors[index].color = color;
        setCustomColors([...colors]);
    };
    const setGradientColor = (index, color) => {
        const colors = [...gradientColors];
        colors[index].color = color;
        setGradientColors([...colors]);
    };
    const setCustomGradientColor = (index, color) => {
        const colors = [...customGradientColors];
        colors[index].color = color;
        setCustomGradientColors([...colors]);
    };
    const deleteCustomGradientColor = (index) => {
        const colors = [...customGradientColors];
        colors.splice(index, 1)
        setCustomGradientColors([...colors]);
    };

    //Get Device type from "__experimentalGetPreviewDeviceType" Function
    const deviceType = useSelect((select) => {
        return select("core/edit-post").__experimentalGetPreviewDeviceType();
    });

    /**
     * Handle Popup Visibility
     * @param {*} block
     */
    const toggleVisible = (block) => {
        setClickedBlock(block);
        setIsVisible((state) => !state);
    };

    //Set blockDefaults when Store "getBlockDefaults" is changed
    useEffect(() => {
        if (JSON.stringify(getBlockDefaults) !== JSON.stringify(blockDefaults)) {
            setBlockDefaults(getBlockDefaults);
        }
    }, [getBlockDefaults]);

    useEffect(() => {
        setBlockDefaults({
            ...blockDefaults,
            ...blockItemDefaults,
        });
    }, [blockItemDefaults]);

    /**
     * Handle Save Block Default
     * @param {*} block
     */
    const handleSaveBlockDefault = () => {
        setIsVisible((state) => !state);

        //Save Block Default
        if (Object.keys(blockDefaults).length > 0) {
            dispatch("essential-blocks").setBlockDefault(blockDefaults);
            dispatch("essential-blocks").saveBlockDefault(blockDefaults);
        }
    };

    /**
     * Handle Reset Block Default
     * @param {*} block
     */
    const handleResetBlockDefault = (selected) => {
        if (
            !window.confirm(
                `Are you sure, you want to reset all the changes you made for ${registeredBlocks[clickedBlock]?.label}`
            )
        ) {
            return;
        }
        const defaults = { ...blockDefaults };
        if (defaults[selected]) {
            delete defaults[selected];
        }

        //Save Block Default
        dispatch("essential-blocks").setBlockDefault(defaults);
        dispatch("essential-blocks").saveBlockDefault(defaults);

        //save updated blockDefault object after deleted selected
        setBlockItemDefaults({});
        setBlockDefaults(defaults);

        //Reload popup
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
        }, 1);
    };

    /**
     * Handle Close without save
     * @param {*} selected
     */
    const handleCloseWithoutSave = (selected) => {
        setBlockItemDefaults({});
        setIsVisible(false);
    };

    /**
     * Setup Popup
     */
    useEffect(() => {
        const editor = document.querySelector("#editor");
        setPopoverAnchor(editor);
    }, []);

    const ClickedComponent = components[clickedBlock]?.component;
    const allBlocksKeys = Object.keys(components);
    const registeredBlocks = EssentialBlocksLocalize?.all_blocks_default;
    const activedBlocks = EssentialBlocksLocalize?.all_blocks;

    /**
     * Handle preview data
     * @param {*} selected
     * @returns
     */
    const previewData = (selected) => {
        let data = { ...blockDefaults[selected] };
        if (components[selected].previewData) {
            data = {
                ...data,
                ...components[selected].previewData,
            };
        }
        return data;
    };

    const colorPanelArray = (colors, setColor, defaults = []) => {
        if (typeof colors !== 'object') {
            return []
        }
        const colorArr = []
        colors.map((colorObj, index) => (
            colorArr.push({
                label: colorObj.name || 'Color',
                value: colorObj.color,
                onChange: (newColor) => {
                    setColor(index, newColor || defaults[index]?.color || '#000')
                }
            })
        ))
        return colorArr
    }

    return (
        <>
            <PluginSidebar
                className="eb-global-controls"
                icon={<EBIcon />}
                name="eb-global-controls"
                title={__("EB Global Controls", "essential-blocks")}
            >
                <div className="eb-panel-control">
                    <PanelBody
                        title={__("Color Settings", "essential-blocks")}
                        initialOpen={true}
                    >
                        <TabPanel
                            className="eb-global-color-tab-panel"
                            activeClass="active-tab"
                            tabs={[
                                {
                                    name: "solid",
                                    title: "Solid",
                                    className: "eb-tab solid",
                                },
                                {
                                    name: "gradient",
                                    title: "Gradient",
                                    className: "eb-tab gradient",
                                }
                            ]}
                        >
                            {(tab) => (
                                <div className={"eb-tab-controls" + tab.name}>
                                    {tab.name === "solid" && (
                                        <>
                                            <PanelColorSettings
                                                title={__(
                                                    "Global Colors",
                                                    "essential-blocks"
                                                )}
                                                className={"eb-color-panel eb-global-color-panel"}
                                                initialOpen={true}
                                                disableAlpha={true}
                                                disableCustomGradients={false}
                                                colorSettings={colorPanelArray(globalColors, setGlobalColor, localizeColors)}
                                            />

                                            {customColors && customColors.length > 0 && (
                                                <ColorPalletWrapper
                                                    colorPanelArray={colorPanelArray}
                                                    customColors={customColors}
                                                    setCustomColor={setCustomColor}
                                                    setCustomColors={setCustomColors}
                                                />
                                            )}
                                            <div className="add-custom-color">
                                                <Button
                                                    className="add-custom-color-btn"
                                                    onClick={() => setCustomColors([
                                                        ...customColors,
                                                        {
                                                            color: '#000000',
                                                            name: `Custom Color ${customColors.length + 1}`,
                                                            slug: `custom-color-${customColors.length + 1}`,
                                                            var: `--eb-custom-color-${customColors.length + 1}`
                                                        }
                                                    ])}
                                                >Add Custom Color <Dashicon icon={"plus"} /></Button>
                                            </div>
                                        </>
                                    )}
                                    {tab.name === "gradient" && (
                                        <>
                                            {/* Gradient Color Pallet */}
                                            <GradientColorPallet
                                                title={"Gradient Colors"}
                                                colors={gradientColors}
                                                setColor={setGradientColor}
                                                wrapperClass={"eb-gradient-color-panel"}
                                                resetAction={true}
                                            />

                                            {/* Custom Gradient Color Pallet */}
                                            <GradientColorPallet
                                                title={"Custom Gradient Colors"}
                                                colors={customGradientColors}
                                                setColor={setCustomGradientColor}
                                                wrapperClass={"eb-custom-gradient-color-panel"}
                                                resetAction={true}
                                                deleteAction={true}
                                                onDelete={deleteCustomGradientColor}
                                            />

                                            <div className="add-custom-color">
                                                <Button
                                                    className="add-custom-color-btn"
                                                    onClick={() => setCustomGradientColors([
                                                        ...customGradientColors,
                                                        {
                                                            color: 'linear-gradient(135deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%)',
                                                            name: `Custom Color ${customGradientColors.length + 1}`,
                                                            slug: `custom-gradient-color-${customGradientColors.length + 1}`,
                                                            var: `--eb-custom-gradient-color-${customGradientColors.length + 1}`
                                                        }
                                                    ])}
                                                >Add Custom Color <Dashicon icon={"plus"} /></Button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </TabPanel>
                    </PanelBody>

                    <PanelBody
                        title={__("Block Defaults", "essential-blocks")}
                        initialOpen={true}
                    >
                        <div className="eb-block-list-button">
                            {typeof registeredBlocks === "object" &&
                                Object.keys(components).map((item, index) => (
                                    <div className="eb-block-button" key={index}>
                                        <Button
                                            variant="none"
                                            className="eb-block-default-button"
                                            onClick={() =>
                                                toggleVisible(
                                                    registeredBlocks[item].value
                                                )
                                            }
                                        >
                                            <img
                                                className="eb-global-icon"
                                                src={registeredBlocks[item]?.icon}
                                                alt={registeredBlocks[item]?.label}
                                            />
                                            {registeredBlocks[item]?.label}

                                            {getBlockDefaults[item] && (
                                                <span className="active">
                                                    {" "}
                                                    {__(<Dashicon icon={"edit"} />)}
                                                </span>
                                            )}
                                        </Button>
                                    </div>
                                ))}
                        </div>
                    </PanelBody>
                </div>
            </PluginSidebar>

            {isVisible && (
                <Popover
                    anchor={popoverAnchor}
                    className="eb-block-default-popup"
                >
                    <Button
                        className="btn-block-default btn-block-default-close"
                        onClick={() => handleCloseWithoutSave(clickedBlock)}
                    >
                        {__(<Dashicon icon={"no"} />)}
                    </Button>
                    {allBlocksKeys.includes(clickedBlock) && (
                        <>
                            <div
                                id="eb-preview"
                                className="eb-block-default-preveiw-wrapper"
                            >
                                <div className="eb-block-default-heading">
                                    <span>
                                        {
                                            EssentialBlocksLocalize
                                                .all_blocks_default[
                                                clickedBlock
                                            ].label
                                        }{" "}
                                        Preview
                                    </span>
                                </div>

                                {components[clickedBlock].preview &&
                                    activedBlocks[clickedBlock].visibility ===
                                    "true" && (
                                        <BlockPreview
                                            blocks={createBlock(
                                                `essential-blocks/${registeredBlocks[clickedBlock]?.is_pro ? 'pro-' : ''}${clickedBlock.replace(
                                                    /_/g,
                                                    "-"
                                                )}`,
                                                {
                                                    ...previewData(
                                                        clickedBlock
                                                    ),
                                                }
                                            )}
                                            viewportWidth={1100}
                                        />
                                    )}

                                {activedBlocks[clickedBlock].visibility ===
                                    "false" && (
                                        <p className="preview-not-available">
                                            {registeredBlocks[clickedBlock].label}{" "}
                                            Block isn't Enabled!
                                        </p>
                                    )}

                                {!components[clickedBlock].preview && (
                                    <p className="preview-not-available">
                                        Preview not available
                                    </p>
                                )}

                                <div className="block-default-popup-footer">
                                    <Button
                                        className="btn-block-default-reset"
                                        onClick={() =>
                                            handleResetBlockDefault(
                                                clickedBlock
                                            )
                                        }
                                    >
                                        Reset
                                    </Button>

                                    <Button
                                        className=" btn-block-default-save"
                                        onClick={() => handleSaveBlockDefault()}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                            <div className="eb-block-default">
                                <ClickedComponent
                                    blockDefaults={blockDefaults}
                                    setBlockDefaults={setBlockItemDefaults}
                                    name={clickedBlock}
                                    deviceType={deviceType}
                                />
                            </div>
                        </>
                    )}
                    {!allBlocksKeys.includes(clickedBlock) && (
                        <h3>Block Default Controls not available</h3>
                    )}
                </Popover>
            )}
        </>
    );
}

export default withSelect((select) => {
    return {
        getGlobalColors: select("essential-blocks").getGlobalColors(),
        getCustomColors: select("essential-blocks").getCustomColors(),
        getGradientColors: select("essential-blocks").getGradientColors(),
        getCustomGradientColors: select("essential-blocks").getCustomGradientColors(),
        getBlockDefaults: select("essential-blocks").getBlockDefaults(),
    };
})(EBGlobalControls);
