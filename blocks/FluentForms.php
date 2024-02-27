<?php

namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;
use EssentialBlocks\Utils\Helper;
use FluentForm\App\Helpers\Helper as FluentFormHelper;

class FluentForms extends Block {
    protected $version;

    protected $attributes = [
        'blockId' => [
            'type' => 'string'
        ],
        'formId'  => [
            'type' => 'string'
        ]
    ];

    protected $frontend_styles = [
        'essential-blocks-fluentform-public-default-frontend',
        'essential-blocks-fluent-form-styles'
    ];

    protected $editor_styles = 'essential-blocks-fluentform-public-default';

    public function __construct() {
        $this->version = defined( 'FLUENTFORM_VERSION' ) ? FLUENTFORM_VERSION : ESSENTIAL_BLOCKS_VERSION;
    }

    /**
     * Unique name of the block.
     *
     * @return string
     */
    public function get_name() {
        return 'fluent-forms';
    }

    public function can_enable() {
        return in_array( 'fluentform/fluentform.php', apply_filters( 'active_plugins', get_option( 'active_plugins', [] ) ) );
    }

    /**
     * Register all other scripts
     *
     * @return void
     */
    public function register_scripts() {

        $this->assets_manager->register(
            'fluent-form-styles',
            plugins_url() . '/fluentform/assets/css/fluent-forms-public.css'
        );
        $this->assets_manager->register(
            'fluentform-public-default',
            plugins_url() . '/fluentform/assets/css/fluentform-public-default.css',
            [
                'essential-blocks-fluent-form-styles',
                'essential-blocks-editor-css'
            ]
        );
        $this->assets_manager->register(
            'fluentform-public-default-frontend',
            plugins_url() . '/fluentform/assets/css/fluentform-public-default.css',
            ['essential-blocks-fluent-form-styles']
        );
    }

    /**
     * Get form meta using FluentForm Helpers.
     *
     * @param mixed $id
     *
     * @return mixed
     *
     * @suppress PHP0413
     */
    public static function get_form_meta( $id ) {
        return FluentFormHelper::getFormMeta( $id, 'template_name' );
    }

    /**
     * Get FluentForms List
     *
     * @return array
     */
    public static function form_list() {
        $options = [];

        if ( defined( 'FLUENTFORM' ) ) {
            global $wpdb;
            $options[0]['value'] = '';
            $options[0]['label'] = __( 'Select a form', 'essential-blocks' );
            $result              = $wpdb->get_results( "SELECT * FROM {$wpdb->prefix}fluentform_forms" );
            if ( $result ) {
                foreach ( $result as $key => $form ) {
                    $options[$key + 1]['value'] = $form->id;
                    $options[$key + 1]['label'] = $form->title;
                    $options[$key + 1]['attr']  = self::get_form_meta( $form->id );
                }
            }
        }
        return $options;
    }

    public function render_callback( $attributes, $content ) {
        if ( ! defined( 'FLUENTFORM' ) || is_admin() ) {
            return;
        }

        ob_start();
        Helper::views(
            'forms/fluent-forms',
            wp_parse_args(
                $attributes,
                [
                    'classHook'           => '',
                    'formId'              => '',
                    'customCheckboxStyle' => false,
                    'showLabels'          => true,
                    'showPlaceholder'     => true,
                    'showErrorMessage'    => true,
                    'formAlignment'       => 'none',
                    'wrapper_attributes'  => get_block_wrapper_attributes(),
                    'block_object'        => $this
                ]
            )
        );
        return ob_get_clean();
    }
}
