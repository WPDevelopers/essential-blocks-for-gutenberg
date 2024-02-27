/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	// InspectorControls,
	// MediaUpload,
	useBlockProps,
	// RichText,
	InnerBlocks,
} from "@wordpress/block-editor";

import classnames from "classnames";

import { useEffect, useState, useRef } from "@wordpress/element";
import { select, dispatch } from "@wordpress/data";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	// TextControl,
	Button,
	RangeControl,
	BaseControl,
	ButtonGroup,
	TabPanel,
} from "@wordpress/components";

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } = props;
	const {
		//
		tabId,

		//
		tabParentId,
	} = attributes;

	const blockProps = useBlockProps({
		className: classnames(
			className,
			`eb-guten-block-main-parent-wrapper eb-tab-editor-wrap`
		),
	});

	return (
		<div {...blockProps}>
			<div
				className={`eb-tab-wrapper`}
				data-tab-id={tabId}
				data-tab-parent-id={tabParentId}
			>
				<div className="eb-tab-inner">
					{/* <h5>tabId: {tabId}</h5> */}
					<InnerBlocks
						orientation={"vertical"}
						templateLock={
							// templateLock ? templateLock :
							false
						}
						renderAppender={
							select("core/block-editor").getBlockOrder(clientId).length > 0
								? undefined
								: InnerBlocks.ButtonBlockAppender
						}
					/>
				</div>
			</div>
		</div>
	);
}
