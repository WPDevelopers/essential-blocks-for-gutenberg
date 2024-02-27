<?php
namespace EssentialBlocks\Utils;

use EssentialBlocks\Traits\HasSingletone;

class Enqueue {
    use HasSingletone;

    private $plugin_url;
    private $plugin_path;
    private $plugin_basename;
    private $version;

    private $assets_dir = 'assets/';

    public function __construct( $plugin_url, $plugin_path, $version ) {
        $this->plugin_url      = $plugin_url;
        $this->plugin_path     = $plugin_path;
        $this->version         = $version;
        $this->plugin_basename = basename( $this->plugin_path );
    }

    public function handle( $handle ) {
        return $this->plugin_basename . "-$handle";
    }

    public function enqueue( $handle, $filename, $dependencies = [], $args = null ) {
        $handle = $this->handle( $handle );
        $config = $this->asset_config( $filename, $dependencies, $args );

        $this->call_wp_func( 'wp_enqueue', $handle, $config );
    }

    /**
     * Undocumented function
     *
     * @param string $handle
     * @param string $filename
     * @param array  $dependencies
     * @param mixed  $args
     *
     * @return void
     */
    public function register( $handle, $filename, $dependencies = [], $args = null ) {
        $handle = $this->handle( $handle );
        $config = $this->asset_config( $filename, $dependencies, $args );

        $this->call_wp_func( 'wp_register', $handle, $config );
    }

    public function localize( $handle, $name, $args ) {
        $handle = $this->handle( $handle );
        wp_localize_script( $handle, $name, $args );
    }

    private function call_wp_func( $action, $handle, $config ) {
        call_user_func( $action . '_' . $config['type'], $handle, $config['url'], $config['dependencies'], $config['version'], $config['args'] );

        $this->assets_dir = 'assets/';

        if ( 'script' === $config['type'] && in_array( 'wp-i18n', $config['dependencies'], true ) ) {
            wp_set_script_translations( $handle, 'essential-blocks' );
        }
    }

    public function asset_config( $filename, $dependencies = [], $args = null ) {
        $is_js             = preg_match( '/\.js$/', $filename );
        $basename          = preg_replace( '/\.\w+$/', '', $filename );
        $file_basename     = basename( $filename );
        $url               = $this->asset_url( $filename, $file_basename );
        $version           = $this->version;
        $asset_config_path = $this->dist_path( $basename . '.asset.php' );

        if ( ! empty( $args['is_js'] ) ) {
            $is_js = (bool) $args['is_js'];
            $args  = null;
        }

        if ( file_exists( $asset_config_path ) ) {
            $asset_config = require $asset_config_path;

            if ( $is_js ) {
                $dependencies = array_unique( array_merge( $asset_config['dependencies'], $dependencies ) );
            }
            $version = $asset_config['version'];
        }

        return [
            'url'          => $url,
            'dependencies' => $dependencies,
            'version'      => $version,
            'type'         => $is_js ? 'script' : 'style',
            'args'         => null !== $args ? $args : ( $is_js ? true : 'all' )
        ];
    }

    private function filename( $name ) {
        if ( strpos( $name, '..' ) === 0 ) {
            $name             = str_replace( '../', '', $name );
            $this->assets_dir = '';
        }

        return $name;
    }

    private function get_dir( $name ) {
        $name = $this->filename( $name );
        if ( strpos( $name, $this->plugin_path ) === 0 ) {
            return $name;
        }

        return $this->plugin_path . $this->assets_dir . $name;
    }

    public function asset_url( $filename, $file_basename ) {
        if ( filter_var( $filename, FILTER_VALIDATE_URL ) ) {
            return $filename;
        }

        return plugin_dir_url( $this->get_dir( $filename ) ) . $file_basename;
    }

    public function dist_path( $file ) {
        return $this->get_dir( $file );
    }

    public function icon( $name ) {
        return $this->plugin_url . $this->assets_dir . 'images/' . $name . '?v=' . $this->version;
    }
}
