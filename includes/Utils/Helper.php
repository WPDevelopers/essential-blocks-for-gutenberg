<?php
    namespace EssentialBlocks\Utils;

    class Helper
    {
        /**
         * Get installed WordPress Plugin List
         *
         * @return array
         */
        public static function get_plugins()
        {
            if ( ! function_exists( 'get_plugins' ) ) {
                require_once ABSPATH . 'wp-admin/includes/plugin.php';
            }
            return get_plugins();
        }

        /**
         * Get Responsive Breakpoints for Localize
         */
        public static function get_responsive_breakpoints()
        {
            $settings     = get_option( 'eb_settings', [  ] );
            $settingsData = [  ];
            if ( array_key_exists( 'responsiveBreakpoints', $settings ) ) {
                $settingsData = $settings[ 'responsiveBreakpoints' ];
                if ( gettype( $settingsData ) === 'string' && strlen( $settingsData ) > 0 ) {
                    $settingsData = (array) json_decode( html_entity_decode( stripslashes( $settingsData ) ) );
                }
            } else {
                $settings[ 'responsiveBreakpoints' ] = json_encode( [
                    'tablet' => 1024,
                    'mobile' => 767
                 ] );

                update_option( 'eb_settings', $settings );

                $settingsData = $settings[ 'responsiveBreakpoints' ];
            }

            return $settingsData;
        }

        /**
         * Get Plugins List for Localize
         */
        public static function get_plugin_list_for_localize()
        {
            $all_plugins = self::get_plugins();

            $active_plugins = get_option( 'active_plugins' );

            if ( is_array( $all_plugins ) ) {
                foreach ( $all_plugins as $key => $plugin ) {
                    $data                 = [  ];
                    $data[ 'TextDomain' ] = $plugin[ 'TextDomain' ];
                    if ( is_array( $active_plugins ) && in_array( $key, $active_plugins ) ) {
                        $data[ 'active' ] = true;
                    } else {
                        $data[ 'active' ] = false;
                    }

                    // Assign
                    $all_plugins[ $key ] = $data;
                }
            }

            return $all_plugins;
        }

        /**
         * Check if json string
         *
         * @param string $context json string.
         *
         * @return boolean
         * @since   4.3.3
         * @access  public
         */
        public static function isJson( $string )
        {
            if ( ! is_string( $string ) ) {
                return false;
            }
            json_decode( $string );
            return json_last_error() === JSON_ERROR_NONE;
        }

        /**
         * Used HTML properties
         *
         * @param array  $tags Allowed HTML tags.
         * @param string $context Context.
         *
         * @return array
         * @since   4.3.0
         * @access  public
         */
        public function eb_allowed_html( $tags, $context )
        {
            if ( 'post' !== $context ) {
                return $tags;
            }

            $global_attributes = [
                'aria-describedby' => true,
                'aria-details'     => true,
                'aria-label'       => true,
                'aria-labelledby'  => true,
                'aria-hidden'      => true,
                'class'            => true,
                'data-*'           => true,
                'dir'              => true,
                'id'               => true,
                'lang'             => true,
                'style'            => true,
                'title'            => true,
                'role'             => true,
                'xml:lang'         => true
             ];

            if ( isset( $tags[ 'div' ] ) ) {
                $tags[ 'div' ][ 'name' ] = true;
            }

            if ( isset( $tags[ 'form' ] ) ) {
                $tags[ 'form' ][ 'class' ] = true;
            } else {
                $tags[ 'form' ] = [
                    'class' => true
                 ];
            }

            if ( ! isset( $tags[ 'svg' ] ) ) {
                $tags[ 'svg' ] = array_merge(
                    [
                        'xmlns'   => true,
                        'width'   => true,
                        'height'  => true,
                        'viewbox' => true
                     ],
                    $global_attributes
                );
            }

            if ( ! isset( $tags[ 'g' ] ) ) {
                $tags[ 'g' ] = [ 'fill' => true ];
            }

            if ( ! isset( $tags[ 'title' ] ) ) {
                $tags[ 'title' ] = [ 'title' => true ];
            }

            if ( ! isset( $tags[ 'path' ] ) ) {
                $tags[ 'path' ] = [
                    'd'    => true,
                    'fill' => true
                 ];
            }

            if ( ! isset( $tags[ 'input' ] ) ) {
                $tags[ 'input' ] = [  ];
            }

            $tags[ 'input' ] = array_merge(
                $tags[ 'input' ],
                [
                    'type'        => true,
                    'name'        => true,
                    'value'       => true,
                    'placeholder' => true,
                    'required'    => true,
                    'checked'     => true
                 ],
                $global_attributes
            );

            if ( ! isset( $tags[ 'textarea' ] ) ) {
                $tags[ 'textarea' ] = [  ];
            }

            $tags[ 'textarea' ] = array_merge(
                $tags[ 'textarea' ],
                [
                    'name'        => true,
                    'required'    => true,
                    'placeholder' => true,
                    'rows'        => true
                 ],
                $global_attributes
            );

            if ( ! isset( $tags[ 'select' ] ) ) {
                $tags[ 'select' ] = [  ];
            }

            $tags[ 'select' ] = array_merge(
                $tags[ 'select' ],
                [
                    'name'        => true,
                    'required'    => true,
                    'placeholder' => true,
                    'value'       => true
                 ],
                $global_attributes
            );

            if ( ! isset( $tags[ 'option' ] ) ) {
                $tags[ 'option' ] = [  ];
            }

            $tags[ 'option' ] = array_merge(
                $tags[ 'option' ],
                [
                    'name'        => true,
                    'required'    => true,
                    'placeholder' => true,
                    'selected'    => true,
                    'value'       => true
                 ],
                $global_attributes
            );

            return $tags;
        }

        /**
         * Define Global Colors
         *
         * @return array
         * @since   4.4.0
         * @access  public
         */
        public static function global_colors()
        {
            return [
                (object) [
                    'color' => '#101828',
                    'name'  => 'Primary Color',
                    'slug'  => 'primary',
                    'var'   => '--eb-global-primary-color'
                 ],
                (object) [
                    'color' => '#475467',
                    'name'  => 'Secondary Color',
                    'slug'  => 'secondary',
                    'var'   => '--eb-global-secondary-color'

                 ],
                (object) [
                    'color' => '#98A2B3',
                    'name'  => 'Tertiary Color',
                    'slug'  => 'tertiary',
                    'var'   => '--eb-global-tertiary-color'

                 ],
                (object) [
                    'color' => '#475467',
                    'name'  => 'Text Color',
                    'slug'  => 'text',
                    'var'   => '--eb-global-text-color'
                 ],
                (object) [
                    'color' => '#1D2939',
                    'name'  => 'Heading Color',
                    'slug'  => 'heading',
                    'var'   => '--eb-global-heading-color'
                 ],
                (object) [
                    'color' => '#444CE7',
                    'name'  => 'Link Color',
                    'slug'  => 'link',
                    'var'   => '--eb-global-link-color'
                 ],
                (object) [
                    'color' => '#F9FAFB',
                    'name'  => 'Background Color',
                    'slug'  => 'background',
                    'var'   => '--eb-global-background-color'
                 ],
                (object) [
                    'color' => '#FFFFFF',
                    'name'  => 'Button Text Color',
                    'slug'  => 'buttonText',
                    'var'   => '--eb-global-button-text-color'
                 ],
                (object) [
                    'color' => '#101828',
                    'name'  => 'Button Background Color',
                    'slug'  => 'buttonBackground',
                    'var'   => '--eb-global-button-background-color'
                 ]
             ];
        }

        /**
         * Define Gradient Colors
         *
         * @return array
         * @since   4.4.0
         * @access  public
         */
        public static function gradient_colors()
        {
            return [
                (object) [
                    'color' => 'linear-gradient(90deg, hsla(259, 84%, 78%, 1) 0%, hsla(206, 67%, 75%, 1) 100%)',
                    'name'  => 'Primary Color',
                    'slug'  => 'gradientPrimary',
                    'var'   => '--eb-gradient-primary-color'
                 ],
                (object) [
                    'color' => 'linear-gradient(90deg, hsla(18, 76%, 85%, 1) 0%, hsla(203, 69%, 84%, 1) 100%)',
                    'name'  => 'Secondary Color',
                    'slug'  => 'gradientSecondary',
                    'var'   => '--eb-gradient-secondary-color'
                 ],
                (object) [
                    'color' => 'linear-gradient(90deg, hsla(248, 21%, 15%, 1) 0%, hsla(250, 14%, 61%, 1) 100%)',
                    'name'  => 'Tertiary Color',
                    'slug'  => 'gradientTertiary',
                    'var'   => '--eb-gradient-tertiary-color'
                 ],
                (object) [
                    'color' => 'linear-gradient(90deg, rgb(250, 250, 250) 0%, rgb(233, 233, 233) 49%, rgb(244, 243, 243) 100%)',
                    'name'  => 'Background Color',
                    'slug'  => 'gradientBackground',
                    'var'   => '--eb-gradient-background-color'
                 ]
             ];
        }

        /**
         * array filter recursive for check if any block exists in block list
         *
         * @param array  $arrayList Array List.
         * @param string $match Array key to match
         *
         * @return boolean
         * @since   4.3.0
         * @access  public
         */
        public static function array_filter_recursive( $arrayList, $match )
        {
            foreach ( $arrayList as $block ) {
                if ( $match === $block[ 'blockName' ] ) {
                    return true;
                }
                if ( isset( $block[ 'innerBlocks' ] ) && count( $block[ 'innerBlocks' ] ) > 0 ) {
                    if ( self::array_filter_recursive( $block[ 'innerBlocks' ], $match ) ) {
                        return true;
                    }
                }
            }

            return false;
        }

        public static function calculate_read_time( $text )
        {
            if ( empty( $text ) ) {
                return 0;
            }

            $text = preg_replace( '/<([a-z][a-z0-9]*)[^>]*?(\/?)>/si', '<$1$2>', $text );
            $text = wp_strip_all_tags( $text );

            $wpm   = 200;
            $words = str_word_count( trim( $text ) );
            $time  = ceil( $words / $wpm );
            return $time;
        }

        /**
         * Remove HTML Tags with Inner Contents
         *
         * @param string $content
         * @param mixed  $tags
         * @return string
         */
        public static function removeHtmlTagWithInnerContents( $contant, $tags )
        {
            if ( is_array( $tags ) ) {
                foreach ( $tags as $tag ) {
                    $contant = preg_replace(
                        sprintf(
                            '/<%1$s\b[^>]*>(.*?)<\/%1$s>/is',
                            $tag
                        ),
                        '',
                        $contant
                    );
                }
            } else {
                $contant = preg_replace( '/<figure\b[^>]*>(.*?)<\/figure>/is', '', $contant );
            }

            return $contant;
        }

        public static function is_isset( $value, $default = '' )
        {
            return isset( $_POST[ $value ] ) ? sanitize_text_field( $_POST[ $value ] ) : $default;
        }

        public static function build_url( $url, $params = [  ] )
        {
            $url_components = wp_parse_url( $url );
            $_build_query   = http_build_query( $params );

            $_build_query .= ! empty( $url_components[ 'query' ] ) ? '&' . $url_components[ 'query' ] : '';
            $_build_query .= ! empty( $url_components[ 'fragment' ] ) ? '#' . $url_components[ 'fragment' ] : '';

            return $url_components[ 'scheme' ] . '://' . $url_components[ 'host' ] . '/' . trim( $url_components[ 'path' ], '/' ) . '?' . $_build_query;
        }

        protected static function get_views_path( $name )
        {
            $file = ESSENTIAL_BLOCKS_DIR_PATH . 'views/' . $name . '.php';

            if ( file_exists( $file ) ) {
                return $file;
            }

            return false;
        }

        /**
         * Get views for front-end display
         *
         * @param string $name  it will be file name only from the view's folder.
         * @param array  $data
         * @return void
         */
        public static function views( $name, $data = [  ] )
        {
            $__file = static::get_views_path( $name );
            $helper = static::class;

            extract( $data, EXTR_SKIP );
            if ( is_readable( $__file ) ) {
                include $__file;
            }
        }

        /**
         * Convert Recursive Array to String
         *
         * @param array   $array
         * @param string  $seperator
         * @param boolean $valueOnly | optional
         * @return string
         */
        public static function recursive_implode( $array, $seperator, $valueOnly = false )
        {
            $result = '';
            if ( isset( $array[ 'value' ] ) && $valueOnly ) {
                $array = $array[ 'value' ];
            }
            if ( is_array( $array ) ) {
                foreach ( $array as $key => $value ) {
                    if ( is_array( $value ) ) {
                        $result .= self::recursive_implode( $value, $seperator, true ) . $seperator;
                    } else {
                        $result .= $value . $seperator;
                    }
                }
            } elseif ( is_string( $array ) ) {
                $result .= $array . $seperator;
            }
            $result = substr( $result, 0, 0 - strlen( $seperator ) );

            return $result;
        }

        public static function recursive_implode_acf( $array, $seperator )
        {
            $result = '';
            if ( is_array( $array ) ) {
                foreach ( $array as $key => $value ) {
                    if ( is_array( $value ) || is_object( $value ) ) {
                        $result .= self::recursive_implode_acf( (array) $value, $seperator );
                    } else {
                        $value = $value ? $value : 'Null';
                        $index = is_numeric( $key ) ? '' : $key . ': ';
                        $result .= $index . $value . $seperator;
                    }
                }
            } elseif ( is_string( $array ) ) {
                $result .= $array . $seperator;
            }

            return $result;
        }

        /**
         * check isset & not empty and return data
         */
        public static function get_data( $arr, $key, $default = null )
        {
            return isset( $arr[ $key ] ) && ! empty( $arr[ $key ] ) ? $arr[ $key ] : $default;
        }

        /**
         * array of object to string
         */
        public static function array_column_from_json( $arr, $handle, $json = true )
        {
            $arr = $json ? json_decode( $arr, true ) : $arr;
            $arr = array_column( $arr, $handle );

            return $arr;
        }

        /**
         * Is Gutenberg Editor
         */
        public static function eb_is_gutenberg_editor( $pagenow, $param )
        {
            if ( $pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php' ) {
                return true;
            }

            if ( $pagenow == 'themes.php' && ! empty( $param ) && str_contains( $param, 'gutenberg-edit-site' ) ) {
                return true;
            }

            return false;
        }

        public static function eb_get_icon_type( $value )
        {
            if ( strpos( $value, 'fa-' ) !== false ) {
                return 'fontawesome';
            }
            return 'dashicon';
        }

        public static function eb_render_icon( $icon_type, $class_name, $icon )
        {
            if ( $icon_type === 'dashicon' ) {
                // Render Dashicon
                return '<span class="dashicon dashicons ' . $icon . ' ' . $class_name . '"></span>';
            } elseif ( $icon_type === 'fontawesome' ) {
                // Render FontAwesome icon
                return '<i class="' . $icon . ' ' . $class_name . '"></i>';
            }

            // Handle other icon types or return an error message
            return esc_html__( "Invalid icon type", "essential-blocks" );
        }

        /**
         * Version Update warning
         *
         * @param mixed $current_version
         * @param mixed $new_version
         * @return void
         */
        public static function version_update_warning( $current_version, $new_version, $upgrade_notice )
        {
            $current_version_minor_part = explode( '.', $current_version )[ 1 ];
            $new_version_minor_part     = explode( '.', $new_version )[ 1 ];

            $notice = '';

            if ( $current_version_minor_part === $new_version_minor_part ) {
                if ( ! $upgrade_notice ) {
                    return;
                }
            }

            if ( $current_version_minor_part !== $new_version_minor_part ) {
                $notice .= 'We highly recommend you to backup your site before upgrading to the new version.';
            }

        ?>
<style>
hr.eb-update-warning__separator {
    margin: 15px -13px;
    border-color: #dba618;
}

.eb-update-warning .dashicons {
    display: inline-block;
    color: #F49B07;
}

.eb-update-warning .eb-update-warning__title {
    display: inline-block;
    font-size: 1.05em;
    color: #444;
    font-weight: 500;
    margin-bottom: 10px;
}

.eb-update-warning__message {
    margin-bottom: 15px;
}

.update-message.notice-warning p:empty {
    display: none;
}
</style>
<hr class="eb-update-warning__separator" />
<div class="eb-update-warning">
    <div>
        <span class="dashicons dashicons-info"></span>
        <div class="eb-update-warning__title">
            <?php echo esc_html__( 'Heads up!', 'essential-blocks' ); ?>
        </div>
        <div class="eb-update-warning__message">
            <?php echo esc_html( $notice ); ?>
        </div>

        <?php
            if ( $upgrade_notice !== false ) {
                    ?>
        <hr class="eb-update-warning__separator" />
        <div class="eb-update-warning__message">
            <span class="dashicons dashicons-info"></span>
            <div class="eb-update-warning__title">
                <?php echo esc_html__( 'What\'s new?', 'essential-blocks' ); ?>
            </div>
            <div class="eb-update-warning__message">
                <?php echo esc_html( $upgrade_notice ); ?>
            </div>
        </div>
        <?php }?>
    </div>
</div>
<?php
    }
}
