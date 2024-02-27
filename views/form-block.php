
<?php
    $_parent_classes = [
        'eb-parent-wrapper',
        'eb-parent-' . $blockId,
        $classHook
    ];
    $_form_classes = [
        'eb-form',
        'form-layout-' . $formLayout,
        $formStyle
    ];
?>
<div class="<?php echo esc_attr( implode( ' ', $_parent_classes ) );?>">
    <div id="<?php echo esc_attr( $blockId );?>" class="<?php echo esc_attr( $blockId );?> eb-form-wrapper">
        <form id="<?php echo esc_attr( $formId );?>" class="<?php echo esc_attr( implode( ' ', $_form_classes ) );?>" action="">
            <div class="eb-form-fields">
                <?php echo wp_kses($content, 'post'); ?>
            </div>
            <input class="form-nonce" type="hidden" name="form-nonce" value="<?php echo esc_attr( $nonce );?>" />
            <div class="eb-form-submit">
                <?php echo wp_kses_post( $submit_button_html ); ?>
            </div>
        </form>
        <?php echo wp_kses_post($confirmation_div_html); ?>
    </div>
</div>
