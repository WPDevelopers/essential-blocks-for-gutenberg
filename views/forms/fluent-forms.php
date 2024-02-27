<?php
    /**
     * @var string $blockId
     */

    $_wrapper_classes = [
        "eb-parent-$blockId",
        $classHook
    ];

    $_form_wrapper_classes = [
        $blockId,
        'eb-fluent-form-wrapper'
    ];

    if ( $customCheckboxStyle ) {
        $_form_wrapper_classes[] = 'eb-fluent-custom-radio-checkbox';
    }

    if ( ! $showLabels ) {
        $_form_wrapper_classes[] = 'eb-fluentform-hide-labels';
    }

    if ( ! $showPlaceholder ) {
        $_form_wrapper_classes[] = 'eb-fluentform-hide-placeholder';
    }

    if ( ! $showErrorMessage ) {
        $_form_wrapper_classes[] = 'eb-fluentform-hide-errormessage';
    }

    if ( $block_object::get_form_meta( $formId ) === 'inline_subscription' ) {
        $_form_wrapper_classes[] = 'eb-fluentform-default-subscription';
    }

    if ( $formAlignment !== 'none' ) {
        $_form_wrapper_classes[] = 'eb-fluentform-alignment-' . $formAlignment;
    }

?>

<div
	<?php echo wp_kses_data( $wrapper_attributes ); ?>>
	<div class="<?php echo esc_attr( implode( ' ', $_wrapper_classes ) ); ?> eb-parent-wrapper">
		<div class="<?php echo esc_attr( implode( ' ', $_form_wrapper_classes ) ); ?>">
			<?php
                $shortcode = sprintf( '[fluentform id="%s"]', esc_attr( $formId ) );
                echo do_shortcode( shortcode_unautop( wp_kses_post( $shortcode ) ) );
            ?>
		</div>
	</div>
</div>
