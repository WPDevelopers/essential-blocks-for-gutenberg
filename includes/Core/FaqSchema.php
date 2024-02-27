<?php
namespace EssentialBlocks\Core;

use EssentialBlocks\Traits\HasSingletone;

class FaqSchema {
	use HasSingletone;

	/**
	 * Google schema to add to head
	 *
	 * @var null
	 */
	public static $faq_schema = null;

	/**
	 * Constructor Class
	 */
	public function __construct() {
		add_action( 'wp_head', array( $this, 'eb_faq_schema' ), 91 );
	}

	/**
	 * Print FAQ Schema in wp_head
	 */
	public function eb_faq_schema() {
		$this->render_accordion_item_faq_schema();

		if ( ! empty( self::$faq_schema ) ) {
			echo wp_kses(
				self::$faq_schema,
				array(
					'script' => array(
						'type'  => array(),
						'class' => array(),
					),
				)
			);
		}
	}

	/**
	 * Load faq schema
	 */
	public function render_accordion_item_faq_schema() {

		if ( function_exists( 'has_blocks' ) && has_blocks( get_the_ID() ) ) {
			global $post;

			if ( ! is_object( $post ) ) {
				return;
			}
			if ( is_archive() || is_home() ) {
				return;
			}

			if ( ! method_exists( $post, 'post_content' ) ) {
				$blocks = $this->eb_parse_blocks( $post->post_content );

				if ( ! is_array( $blocks ) || empty( $blocks ) ) {
					return;
				}
				foreach ( $blocks as $block ) {
					if ( ! is_object( $block ) && is_array( $block ) && isset( $block['blockName'] ) ) {
						if ( 'essential-blocks/accordion' === $block['blockName'] ) {
							if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
								$attributes = $block['attrs'];
								if ( ! empty( $attributes['blockId'] ) ) {
									$unique_id = $attributes['blockId'];
									if ( isset( $attributes['faqSchema'] ) && $attributes['faqSchema'] ) {
										$faq_script_id = 'eb-faq' . esc_attr( $unique_id );
										if ( is_null( self::$faq_schema ) ) {
											self::$faq_schema = '<script type="application/ld+json" class="eb-faq-schema-graph eb-faq-schema-graph--' . $faq_script_id . '">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[]}</script>';
										}
									}
								}
							}
						}
						// check for accordion-item blocks
						if ( 'essential-blocks/accordion-item' === $block['blockName'] ) {
							if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
								if ( isset( $block['attrs']['faqSchema'] ) && $block['attrs']['faqSchema'] ) {
									$this->render_accordion_item_scheme_head( $block );
								}
							}
						}
						if ( isset( $block['innerBlocks'] ) && ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
							$this->recursive_inner_blocks( $block['innerBlocks'] );
						}
					}
				}
			}
		}
	}

	/**
	 * Recursively check inner blocks
	 *
	 * @param array $inner_blocks inner blocks array
	 */
	public function recursive_inner_blocks( $inner_blocks ) {
		foreach ( $inner_blocks as $inner_block ) {
			if ( ! is_object( $inner_block ) && is_array( $inner_block ) && isset( $inner_block['blockName'] ) ) {
				if ( 'essential-blocks/accordion' === $inner_block['blockName'] ) {
					if ( isset( $inner_block['attrs'] ) && is_array( $inner_block['attrs'] ) ) {
						$attributes = $inner_block['attrs'];
						if ( ! empty( $attributes['blockId'] ) ) {
							$unique_id = $attributes['blockId'];
							if ( isset( $attributes['faqSchema'] ) && $attributes['faqSchema'] ) {
								$faq_script_id = 'eb-faq' . esc_attr( $unique_id );
								if ( is_null( self::$faq_schema ) ) {
									self::$faq_schema = '<script type="application/ld+json" class="eb-faq-schema-graph eb-faq-schema-graph--' . $faq_script_id . '">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[]}</script>';
								}
							}
						}
					}
				}
				if ( 'essential-blocks/accordion-item' === $inner_block['blockName'] ) {
					if ( isset( $inner_block['attrs'] ) && is_array( $inner_block['attrs'] ) ) {
						if ( isset( $inner_block['attrs']['faqSchema'] ) && $inner_block['attrs']['faqSchema'] ) {
							$this->render_accordion_item_scheme_head( $inner_block );
						}
					}
				}
				if ( isset( $inner_block['innerBlocks'] ) && ! empty( $inner_block['innerBlocks'] ) && is_array( $inner_block['innerBlocks'] ) ) {
					$this->recursive_inner_blocks( $inner_block['innerBlocks'] );
				}
			}
		}
	}

	/**
	 * Parse blocks of a page/post
	 *
	 * @param string $content content of a page/post
	 *
	 * @suppress PHP0417
	 */
	public function eb_parse_blocks( $content ) {
		$parser_class = apply_filters( 'block_parser_class', 'WP_Block_Parser' );
		if ( class_exists( $parser_class ) ) {
			$parser = new $parser_class();
			return $parser->parse( $content );
		} elseif ( function_exists( 'gutenberg_parse_blocks' ) ) {
			return gutenberg_parse_blocks( $content );
		} else {
			return false;
		}
	}

	/**
	 * build FAQ schema
	 *
	 * @param array @block array of blocks
	 */
	public function render_accordion_item_scheme_head( $block ) {
		if ( ! is_null( self::$faq_schema ) ) {
			if ( is_array( $block['innerBlocks'] ) && ! empty( $block['innerBlocks'] ) ) {
				$answer = '';
				foreach ( $block['innerBlocks'] as $inner_block ) {
					if ( ! empty( $inner_block['innerHTML'] ) ) {
						$inner_html = trim( strip_tags( $inner_block['innerHTML'], '<a><strong><br><h1><h2><h3><h4><h5><h6><ul><li><ol><p>' ) );
						if ( ! empty( $inner_html ) ) {
							$answer .= $inner_html;
						}
					}
					if ( isset( $inner_block['innerBlocks'] ) && is_array( $inner_block['innerBlocks'] ) && ! empty( $inner_block['innerBlocks'] ) ) {
						foreach ( $inner_block['innerBlocks'] as $again_inner_block ) {
							if ( ! empty( $again_inner_block['innerHTML'] ) ) {
								$inner_html = trim( strip_tags( $again_inner_block['innerHTML'], '<a><strong><br><h1><h2><h3><h4><h5><h6><ul><li><ol><p>' ) );
								if ( ! empty( $inner_html ) ) {
									$answer .= $inner_html;
								}
							}
							if ( isset( $again_inner_block['innerBlocks'] ) && is_array( $again_inner_block['innerBlocks'] ) && ! empty( $again_inner_block['innerBlocks'] ) ) {
								foreach ( $again_inner_block['innerBlocks'] as $again_again_inner_block ) {
									if ( ! empty( $again_again_inner_block['innerHTML'] ) ) {
										$inner_html = trim( strip_tags( $again_again_inner_block['innerHTML'], '<a><strong><br><h1><h2><h3><h4><h5><h6><ul><li><ol><p>' ) );
										if ( ! empty( $inner_html ) ) {
											$answer .= $inner_html;
										}
									}
								}
							}
						}
					}
				}

				$block_inner_html = trim( strip_tags( $block['innerHTML'] ) );
				$question         = ! empty( $block_inner_html ) ? $block_inner_html : '';

				if ( strpos( self::$faq_schema, '}]}</script>' ) !== false ) {
					$schema = ',';
				} else {
					$schema = '';
				}
				$schema          .= '{"@type":"Question","name": "' . esc_attr( $question ) . '","acceptedAnswer":{"@type": "Answer","text": "' . str_replace( '"', '&quot;', $answer ) . '"}}';
				$question_schema  = ( ! empty( $question ) && ! empty( $answer ) ? $schema . ']}</script>' : ']}</script>' );
				self::$faq_schema = str_replace( ']}</script>', $question_schema, self::$faq_schema );
			}
		}
	}
}
