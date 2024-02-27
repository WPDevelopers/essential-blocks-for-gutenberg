<?php
namespace EssentialBlocks\Core;

use Exception;
use EssentialBlocks\Traits\HasSingletone;

class BlocksPatterns
{
    use HasSingletone;

    /**
     * Patterns category
     *
     * @var string
     */
    private $category = 'essential-blocks';

    /**
     * All patterns
     *
     * @var array
     */
    private $patterns = [  ];
    /**
     * Api url
     *
     * @var string
     */
    private $api_url;

    /**
     * EssentialBlocksPatterns constructor.
     */
    public function __construct()
    {
        if ( ! EB_PATTERN ) {
            return;
        }
        add_action( 'init', [ $this, 'init' ] );
        add_action( 'eb_pattern_update_cron', [ $this, 'update_cache' ] );
    }

    /**
     * init all actions
     *
     * @return void
     */
    public function init()
    {
        if ( current_user_can( 'edit_posts' ) ) {
            $this->set_api_url();
            $this->register_category();
            $this->register_patterns();
        }
        if ( ! wp_next_scheduled( 'eb_pattern_update_cron' ) ) {
            wp_schedule_event( strtotime( gmdate( 'Y-m-d' ) . ' midnight' ), 'daily', 'eb_pattern_update_cron' );
        }
    }

    /**
     * Register category
     *
     * @return void
     */
    public function register_category()
    {
        register_block_pattern_category(
            $this->category,
            [ 'label' => __( 'Essential blocks', 'essential-block' ) ]
        );
    }

    /**
     * Register category
     *
     * @return void
     */
    public function register_patterns()
    {
        $patterns = $this->get_patterns();
        if ( ! empty( $patterns ) ) {
            foreach ( $patterns as $pattern ) {
                if ( ! empty( $pattern->json ) ) {
                    register_block_pattern(
                        $this->category . '/' . $pattern->slug,
                        [
                            'title'       => $pattern->name,
                            'categories'  => [ $this->category ],
                            'description' => $pattern->description,
                            'content'     => $this->get_pattern_content( $pattern->json ),
                            'keywords'    => $pattern->tags
                         ]
                    );
                }
            }
        }
    }

    public function update_cache()
    {
        $patterns = $this->get_from_api();
        if ( ! empty( $patterns ) ) {
            $this->set_to_cache( $patterns );
        }
    }

    /**
     * Set api url for api call
     *
     * @return void
     */
    private function set_api_url()
    {
        if ( defined( 'ESSENTIAL_BLOCKS_PATTERNS_API_URL' ) ) {
            $this->api_url = ESSENTIAL_BLOCKS_PATTERNS_API_URL;
        } else {
            $this->api_url = 'https://app.templately.com/api/v1/gutenberg-patterns';
        }
    }

    /**
     * Get patterns from api for register
     *
     * @return array|bool
     */
    private function get_patterns()
    {
        if ( ! empty( $this->patterns ) ) {
            return $this->patterns;
        }
        $cached = $this->get_from_cache();
        if ( ! empty( $cached ) ) {
            return $cached;
        }
        $data = $this->get_from_api();
        if ( ! empty( $data ) ) {
            $this->patterns = $data;
            $this->set_to_cache( $data );
            return $this->patterns;
        }
        return false;
    }

    /**
     * Get patterns from cache
     *
     * @return array|false
     */
    private function get_from_cache()
    {
        $cache_file_path = wp_upload_dir()[ 'basedir' ] . '/eb-patterns/patterns.json';
        if ( file_exists( $cache_file_path ) ) {
            $file           = file_get_contents( $cache_file_path );
            $this->patterns = json_decode( $file );
            return $this->patterns;
        }
        return false;
    }

    /**
     * Get patterns from Templately api
     *
     * @return mixed
     */
    private function get_from_api()
    {
        $response = wp_remote_get(
            $this->api_url
        );

        if ( is_wp_error( $response ) ) {
            return false;
        }
        if ( is_array( $response ) ) {
            $data = json_decode( $response[ 'body' ] );
            if ( ! empty( $data ) && ! empty( $data->data ) ) {
                return $data->data;
            }
            // Todo: response based on status
            /*
        if(!empty($data->status) && $data->status == 'success'){
        return  $data->data;
        }*/
        }
        return false;
    }

    /**
     * write patterns in cache
     *
     * @return bool
     */

    private function set_to_cache( $data )
    {
        try {
            $cache_file_dir = wp_upload_dir()[ 'basedir' ] . '/eb-patterns';
            if ( ! file_exists( $cache_file_dir ) ) {
                mkdir( $cache_file_dir, 0777, true );
            }
            file_put_contents( $cache_file_dir . '/patterns.json', json_encode( $data ) );
            return true;
        } catch ( Exception $e ) {
            return false;
        }
    }

    /**
     * Get pattern content form pattern object
     *
     * @return string
     */
    private function get_pattern_content( $data )
    {
        $content = json_decode( $data );
        if ( ! empty( $content ) && ! empty( $content->content ) ) {
            return $content->content;
        }
        return '';
    }
}
