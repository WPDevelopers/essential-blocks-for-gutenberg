<?php
	/**
	 * @var string $blockId
	 */

	$_wrapper_classes = array(
		"eb-parent-$blockId",
		$classHook,
	);

	$_form_wrapper_classes = array(
		$blockId,
		'eb-wpforms-wrapper',
	);

	if ( array_key_exists( $formAlignment, $alignment ) ) {
		$_form_wrapper_classes[] = $alignment[ $formAlignment ];
	}

	if ( $customCheckboxStyle ) {
		$_form_wrapper_classes[] = 'eb-wpforms-custom-radio-checkbox';
	}

	if ( ! $showLabels ) {
		$_form_wrapper_classes[] = 'eb-wpforms-hide-labels';
	}

	if ( ! $showPlaceholder ) {
		$_form_wrapper_classes[] = 'eb-wpforms-hide-placeholder';
	}

	if ( ! $showErrorMessage ) {
		$_form_wrapper_classes[] = 'eb-wpforms-hide-errormessage';
	}

	?>

<div
	<?php echo esc_attr( $wrapper_attributes ); ?>>
	<div class="<?php echo esc_attr( implode( ' ', $_wrapper_classes ) ); ?> eb-parent-wrapper">
		<div class="<?php echo esc_attr( implode( ' ', $_form_wrapper_classes ) ); ?>">
			<?php wpforms_display( $formId ); ?>
		</div>
	</div>
</div>
