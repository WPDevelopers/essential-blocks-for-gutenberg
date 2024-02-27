/**
 * Dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
    Popover,
    Dashicon,
    GradientPicker,
    ColorIndicator,
    PanelRow
} from "@wordpress/components";

const GradientColorPallet = (props) => {
    const {
        title = "",
        colors,
        setColor,
        wrapperClass,
        resetAction,
        deleteAction,
        onDelete
    } = props

    const [clickedGradient, setClickedGradient] = useState('');
    const [gradientPopoverAnchor, setGradientPopoverAnchor] = useState();

    return (
        <>
            {colors && colors.length > 0 && (
                <div className={`eb-color-panel ${wrapperClass}`}>
                    <PanelRow className="eb-gradient-color-label">{title}</PanelRow>
                    <div className="eb-gradient-color-list">
                        {colors.map((color, index) => (
                            <>
                                <div
                                    ref={setGradientPopoverAnchor}
                                    id={`eb-gradient-color-${index}`}
                                    className="eb-custom-color-item"
                                >
                                    <div
                                        className="item-content"
                                        onClick={() => setClickedGradient(clickedGradient === color.slug ? '' : color.slug)}
                                    >
                                        <ColorIndicator colorValue={color?.color} />
                                        {color?.name}
                                    </div>
                                    <div className="actions">
                                        {resetAction && (
                                            <span
                                                title="Reset"
                                                onClick={() => setColor(index, 'linear-gradient(135deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%)')}
                                            ><Dashicon icon={'image-rotate'} /></span>
                                        )}
                                        {deleteAction && (
                                            <span
                                                title="Delete"
                                                onClick={() => onDelete(index)}
                                            ><Dashicon icon={'trash'} /></span>
                                        )}
                                    </div>
                                </div>
                                {clickedGradient === color?.slug && (
                                    <Popover
                                        anchor={gradientPopoverAnchor}
                                        className="eb-gradient-color-popup"
                                        placement="right"
                                        onClose={() => setClickedGradient('')}
                                    >
                                        <div className="eb-gradient-color-popup-content">
                                            <GradientPicker
                                                __nextHasNoMargin
                                                value={color?.color}
                                                onChange={(color) => setColor(index, color)}
                                                asButtons={true}
                                                clearable={true}
                                                gradients={[
                                                    {
                                                        name: color?.name,
                                                        gradient: color?.color,
                                                        slug: color?.slug,
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </Popover>
                                )}

                            </>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default GradientColorPallet
