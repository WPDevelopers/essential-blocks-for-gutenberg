<?php

namespace EssentialBlocks\Utils;

class Settings
{

    private static $instance;

    public static function get_instance()
    {
        if ( null === static::$instance ) {
            static::$instance = new static();
        }
        return static::$instance;
    }

    public static function get( $key, $default = false )
    {
        return get_option( $key, $default );
    }

    public static function save( $key, $value = '' )
    {
        return update_option( $key, $value );
    }

    public static function save_eb_settings( $key, $value = '' )
    {
        $settings   = get_option( 'eb_settings', [  ] );
        $prev_value = null;
        if ( isset( $settings[ $key ] ) ) {
            $prev_value = $settings[ $key ];
        }
        if ( empty( $value ) ) {
            unset( $settings[ $key ] );
        } else {
            $settings[ $key ] = $value;
        }
        /**
         * Fires after save a specific settings key
         *
         * @since 4.5.0
         * @param mixed $value current value of settings
         * @param mixed $prev_value previous value of settings
         */
        do_action( "eb_after_save_{$key}_settings", $value, $prev_value );
        return update_option( 'eb_settings', $settings );
    }

    public static function reset_eb_settings( $key )
    {
        $settings   = get_option( 'eb_settings', [  ] );
        $prev_value = null;
        if ( isset( $settings[ $key ] ) ) {
            $prev_value = $settings[ $key ];
            unset( $settings[ $key ] );
        }
        /**
         * Fires after reset a specific settings key
         *
         * @since 4.5.0
         * @param mixed $value current value of settings
         * @param mixed $prev_value previous value of settings
         */
        do_action( "eb_after_reset_{$key}_settings", $prev_value );
        return update_option( 'eb_settings', $settings );
    }

    public static function set_transient( $key, $value, $expiration = null )
    {
        if ( $expiration === null ) {
            $expiration = HOUR_IN_SECONDS * 6;
        }
        return set_transient( $key, $value, $expiration );
    }

    public static function get_transient( $key )
    {
        return get_transient( $key );
    }

    /**
     * Summary of save_integration
     * @param mixed $type
     * @param mixed $data
     * @return bool
     */
    public static function save_integration( $type, $data = null )
    {
        return false;
    }

    /**
     * Summary of save_blocks_option
     * @param mixed $data
     * @return bool
     */
    public static function save_blocks_option( $data = [  ] )
    {
        /**
         * Sanitize Data
         */
        return update_option( 'essential_all_blocks', $data );
    }
}
