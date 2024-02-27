<?php

namespace EssentialBlocks\blocks;

use EssentialBlocks\Core\Block;
use EssentialBlocks\Utils\Helper;

class SocialShare extends Block {
	protected $frontend_scripts = array( 'essential-blocks-social-share-js' );
	protected $frontend_styles  = array( 'essential-blocks-fontawesome', 'essential-blocks-hover-css', 'essential-blocks-frontend-style' );

	/**
	 * Unique name of the block.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'social-share';
	}

	/**
	 * Register all other scripts
	 *
	 * @return void
	 */
	public function register_scripts() {
		$this->assets_manager->register(
			'social-share-js',
			$this->path() . '/frontend/index.js'
		);
	}

	/**
	 * Block render callback.
	 *
	 * @param mixed $attributes
	 * @param mixed $content
	 * @return mixed
	 */
	public function render_callback( $attributes, $content ) {
		ob_start();
		Helper::views(
			'social-share',
			wp_parse_args(
				$attributes,
				array(
					'classHook'          => '',
					'blockId'            => '',
					'profilesOnly'       => array(),
					'iconEffect'         => '',
					'showTitle'          => true,
					'isFloating'         => false,
					'iconShape'          => '',
					'wrapper_attributes' => get_block_wrapper_attributes(),
					'block_object'       => $this,
				)
			)
		);
		return ob_get_clean();
	}

	/**
	 * Get Social Shareable link
	 *
	 * @param int    $id current post/page id
	 * @param string $icon_text icon text to find the icon name
	 */
	public static function eb_social_share_name_link( $id, $icon_text ) {
		if ( empty( $icon_text ) ) {
			return;
		}

		$post_title = get_the_title( $id );
		$post_link  = get_the_permalink( $id );

		if ( preg_match( '/facebook/', $icon_text ) ) {
			return esc_url( 'https://www.facebook.com/sharer/sharer.php?u=' . $post_link );
		} elseif ( preg_match( '/linkedin/', $icon_text ) ) {
			return esc_url( 'https://www.linkedin.com/shareArticle?title=' . $post_title . '&url=' . $post_link . '&mini=true' );
		} elseif ( preg_match( '/twitter/', $icon_text ) ) {
			return esc_url( 'https://twitter.com/share?text=' . $post_title . '&url=' . $post_link );
		} elseif ( preg_match( '/pinterest/', $icon_text ) ) {
			return esc_url( 'https://pinterest.com/pin/create/button/?url=' . $post_link );
		} elseif ( preg_match( '/reddit/', $icon_text ) ) {
			return esc_url( 'https://www.reddit.com/submit?url=' . $post_link . '&title=' . $post_title );
		} elseif ( preg_match( '/tumblr/', $icon_text ) ) {
			return esc_url( 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' . $post_link );
		} elseif ( preg_match( '/whatsapp/', $icon_text ) ) {
			return esc_url( 'https://api.whatsapp.com/send?text=' . $post_title . ' ' . $post_link );
		} elseif ( preg_match( '/telegram/', $icon_text ) ) {
			return esc_url( 'https://telegram.me/share/url?url=' . $post_link . '&text=' . $post_title );
		} elseif ( preg_match( '/pocket/', $icon_text ) ) {
			return esc_url( 'https://getpocket.com/edit?url=' . $post_link );
		} elseif ( preg_match( '/envelope/', $icon_text ) ) {
			return esc_url( 'mailto:?subject=' . $post_title . '&body=' . $post_link );
		} elseif ( preg_match( '/xing/', $icon_text ) ) {
			return esc_url( 'https://www.xing.com/spi/shares/new?url=' . $post_link );
		} elseif ( preg_match( '/vk/', $icon_text ) ) {
			return esc_url( 'https://vk.com/share.php?url=' . $post_link );
		}
	}
}
