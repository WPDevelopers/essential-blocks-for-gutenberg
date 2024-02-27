<?php
    namespace EssentialBlocks\Utils;

    // Exit if accessed directly.
    if ( ! defined( 'ABSPATH' ) ) {
        exit;
    }
    class TemplateHelpers {

        /**
         * EB Template: Header Area
         */
        public static function eb_template_header() {
            if ( function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
            ?>
			<!doctype html>
			<html			     			     			     			     			     			     			     			                                                                                                                                                               <?php language_attributes();?>>

			<head>
				<meta charset="<?php bloginfo( 'charset' );?>">
				<?php wp_head();?>
			</head>

			<body			     			     			     			     			     			     			     			                                                                                                                                                               <?php body_class();?>>
			<?php
                wp_body_open();

                            block_header_area();
                        } else {
                            get_header();
                        }
                    }

                    /**
                     * EB Template: Footer Area
                     */
                    public static function eb_template_footer() {
                        if ( function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
                            block_footer_area();

                            wp_footer();

                            echo '</body></html>';
                        } else {
                            get_footer();
                        }
                    }

                    /**
                     * Make request header
                     *
                     * @param array $headers
                     * @return array
                     */
                    public static function makeRequestHeader( $headers = [] ) {
                        return [
                            'headers' => $headers
                        ];
                    }
            }
