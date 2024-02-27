<?php
use EssentialBlocks\blocks\Row;
use EssentialBlocks\blocks\Form;
use EssentialBlocks\blocks\Icon;
use EssentialBlocks\blocks\PopUp;
use EssentialBlocks\blocks\Button;
use EssentialBlocks\blocks\Notice;
use EssentialBlocks\blocks\Slider;
use EssentialBlocks\blocks\Social;
use EssentialBlocks\blocks\FlipBox;
use EssentialBlocks\blocks\InfoBox;
use EssentialBlocks\blocks\WPForms;
use EssentialBlocks\blocks\Wrapper;
use EssentialBlocks\blocks\PostGrid;
use EssentialBlocks\blocks\Accordion;
use EssentialBlocks\blocks\CountDown;
use EssentialBlocks\blocks\GoogleMap;
use EssentialBlocks\blocks\Openverse;
use EssentialBlocks\blocks\DualButton;
use EssentialBlocks\blocks\NftGallery;
use EssentialBlocks\blocks\TeamMember;
use EssentialBlocks\blocks\TypingText;
use EssentialBlocks\blocks\FeatureList;
use EssentialBlocks\blocks\FluentForms;
use EssentialBlocks\blocks\ProgressBar;
use EssentialBlocks\blocks\SocialShare;
use EssentialBlocks\blocks\Testimonial;
use EssentialBlocks\blocks\AdvancedTabs;
use EssentialBlocks\blocks\CallToAction;
use EssentialBlocks\blocks\ImageGallery;
use EssentialBlocks\blocks\PostCarousel;
use EssentialBlocks\blocks\PricingTable;
use EssentialBlocks\blocks\ShapeDivider;
use EssentialBlocks\blocks\AdvancedImage;
use EssentialBlocks\blocks\AdvancedVideo;
use EssentialBlocks\blocks\InstagramFeed;
use EssentialBlocks\blocks\NumberCounter;
use EssentialBlocks\blocks\ToggleContent;
use EssentialBlocks\blocks\ParallaxSlider;
use EssentialBlocks\blocks\WooProductGrid;
use EssentialBlocks\blocks\AdvancedHeading;
use EssentialBlocks\blocks\ImageComparison;
use EssentialBlocks\blocks\TableOfContents;
use EssentialBlocks\blocks\InteractivePromo;
use EssentialBlocks\blocks\AdvancedNavigation;

return [
    'accordion'                 => [
        'label'      => __( 'Accordion', 'essential-blocks' ),
        'value'      => 'accordion',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'content',
        'object'     => Accordion::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/accordion/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/accordion/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/accordion.svg'
    ],
    'button'                    => [
        'label'      => __( 'Button', 'essential-blocks' ),
        'value'      => 'button',
        'visibility' => 'true',
        'category'   => 'content',
        'object'     => Button::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/button/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/button/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/button.svg'
    ],
    'call_to_action'            => [
        'label'      => __( 'Call To Action', 'essential-blocks' ),
        'value'      => 'call_to_action',
        'visibility' => 'true',
        'category'   => 'marketing',
        'object'     => CallToAction::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/call-to-action/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/call-to-action/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/call-to-action.svg'
    ],
    'countdown'                 => [
        'label'      => __( 'Countdown', 'essential-blocks' ),
        'value'      => 'countdown',
        'visibility' => 'true',
        'category'   => 'creative',
        'object'     => CountDown::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/countdown/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/countdown/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/countdown.svg'
    ],
    'dual_button'               => [
        'label'      => __( 'Dual Button', 'essential-blocks' ),
        'value'      => 'dual_button',
        'visibility' => 'true',
        'category'   => 'content',
        'object'     => DualButton::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/dual-button/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/dual-button/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/dual-button.svg'
    ],
    'flipbox'                   => [
        'label'      => __( 'Flipbox', 'essential-blocks' ),
        'value'      => 'flipbox',
        'visibility' => 'true',
        'category'   => 'content',
        'object'     => FlipBox::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/flipbox/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/flipbox/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/flipbox.svg'
    ],
    'advanced_heading'          => [
        'label'      => __( 'Advanced Heading', 'essential-blocks' ),
        'value'      => 'advanced_heading',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'content',
        'object'     => AdvancedHeading::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/advanced-heading/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/heading/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/advanced-heading.svg'
    ],
    'image_comparison'          => [
        'label'      => __( 'Image Comparison', 'essential-blocks' ),
        'value'      => 'image_comparison',
        'visibility' => 'true',
        'category'   => 'creative',
        'object'     => ImageComparison::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/image-comparison/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/image-comparison/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/image-comparison.svg'
    ],
    'image_gallery'             => [
        'label'      => __( 'Image Gallery', 'essential-blocks' ),
        'value'      => 'image_gallery',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'creative',
        'object'     => ImageGallery::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/image-gallery/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-image-gallery/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/image-gallery.svg'
    ],
    'infobox'                   => [
        'label'      => __( 'Infobox', 'essential-blocks' ),
        'value'      => 'infobox',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'content',
        'object'     => InfoBox::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/infobox/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/infobox/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/infobox.svg'
    ],
    'instagram_feed'            => [
        'label'      => __( 'Instagram Feed', 'essential-blocks' ),
        'value'      => 'instagram_feed',
        'visibility' => 'true',
        'category'   => 'social',
        'object'     => InstagramFeed::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/instagram-feed/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/instagram-feed/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/instagram-feed.svg'
    ],
    'interactive_promo'         => [
        'label'      => __( 'Interactive Promo', 'essential-blocks' ),
        'value'      => 'interactive_promo',
        'visibility' => 'true',
        'category'   => 'creative',
        'object'     => InteractivePromo::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/interactive-promo/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/interactive-promo/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/interactive-promo.svg'
    ],
    'notice'                    => [
        'label'      => __( 'Notice', 'essential-blocks' ),
        'value'      => 'notice',
        'visibility' => 'true',
        'category'   => 'marketing',
        'object'     => Notice::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/notice/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/notice/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/notice.svg'
    ],
    'parallax_slider'           => [
        'label'      => __( 'Parallax Slider', 'essential-blocks' ),
        'value'      => 'parallax_slider',
        'visibility' => 'true',
        'category'   => 'content',
        'object'     => ParallaxSlider::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/parallax-slider/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/parallax-slider/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/parallax-slider.svg'
    ],
    'pricing_table'             => [
        'label'      => __( 'Pricing Table', 'essential-blocks' ),
        'value'      => 'pricing_table',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'marketing',
        'object'     => PricingTable::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/pricing-table/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/pricing-table/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/pricing-table.svg'
    ],
    'progress_bar'              => [
        'label'      => __( 'Progress Bar', 'essential-blocks' ),
        'value'      => 'progress_bar',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'creative',
        'object'     => ProgressBar::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/progress-bar/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/progress-bar/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/progress-bar.svg'

    ],
    'slider'                    => [
        'label'      => __( 'Slider', 'essential-blocks' ),
        'value'      => 'slider',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'content',
        'object'     => Slider::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/slider/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/slider/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/slider.svg'
    ],
    'social'                    => [
        'label'      => __( 'Social Icons', 'essential-blocks' ),
        'value'      => 'social',
        'visibility' => 'true',
        'category'   => 'social',
        'object'     => Social::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/social/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/social/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/social.svg'
    ],
    'social_share'              => [
        'label'      => __( 'Social Share', 'essential-blocks' ),
        'value'      => 'social_share',
        'visibility' => 'true',
        'category'   => 'social',
        'object'     => SocialShare::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/social-share/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-social-share/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/social-share.svg'
    ],
    'team_member'               => [
        'label'      => __( 'Team Member', 'essential-blocks' ),
        'value'      => 'team_member',
        'visibility' => 'true',
        'category'   => 'content',
        'object'     => TeamMember::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/team-member/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/team-member/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/team-member.svg'
    ],
    'testimonial'               => [
        'label'      => __( 'Testimonial', 'essential-blocks' ),
        'value'      => 'testimonial',
        'visibility' => 'true',
        'category'   => 'content',
        'object'     => Testimonial::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/testimonial/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/testimonial/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/testimonial.svg'
    ],
    'toggle_content'            => [
        'label'      => __( 'Toggle Content', 'essential-blocks' ),
        'value'      => 'toggle_content',
        'visibility' => 'true',
        'category'   => 'content',
        'object'     => ToggleContent::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/toggle-content/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-toggle-content/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/toggle-content.svg'
    ],
    'typing_text'               => [
        'label'      => __( 'Typing Text', 'essential-blocks' ),
        'value'      => 'typing_text',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'creative',
        'object'     => TypingText::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/typing-text/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/typing-text/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/typing-text.svg'
    ],
    'wrapper'                   => [
        'label'      => __( 'Wrapper', 'essential-blocks' ),
        'value'      => 'wrapper',
        'visibility' => 'true',
        'category'   => 'layout',
        'object'     => Wrapper::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/wrapper/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/block-wrapper/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/wrapper.svg'
    ],
    'number_counter'            => [
        'label'      => __( 'Number Counter', 'essential-blocks' ),
        'value'      => 'number_counter',
        'visibility' => 'true',
        'category'   => 'creative',
        'object'     => NumberCounter::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/number-counter/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-number-counter/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/number-counter.svg'
    ],
    'post_grid'                 => [
        'label'      => __( 'Post Grid', 'essential-blocks' ),
        'value'      => 'post_grid',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'dynamic',
        'object'     => PostGrid::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/post-grid/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-post-grid/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/post-grid.svg'
    ],
    'feature_list'              => [
        'label'      => __( 'Feature List', 'essential-blocks' ),
        'value'      => 'feature_list',
        'visibility' => 'true',
        'category'   => 'content',
        'object'     => FeatureList::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/feature-list/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-feature-list/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/feature-list.svg'
    ],
    'row'                       => [
        'label'      => __( 'Row', 'essential-blocks' ),
        'value'      => 'row',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'layout',
        'object'     => Row::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/row/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-row/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/row.svg'
    ],
    'table_of_contents'         => [
        'label'      => __( 'Table Of Contents', 'essential-blocks' ),
        'value'      => 'table_of_contents',
        'visibility' => 'true',
        'status'     => 'updated',
        'category'   => 'content',
        'object'     => TableOfContents::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/table-of-contents/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-table-of-contents/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/table-of-content.svg'
    ],
    'fluent_forms'              => [
        'label'      => __( 'Fluent Forms', 'essential-blocks' ),
        'value'      => 'fluent_forms',
        'visibility' => 'true',
        'category'   => 'form',
        'object'     => FluentForms::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/fluent-forms-2/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-fluent-forms/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/fluent-forms.svg'
    ],
    'advanced_tabs'             => [
        'label'      => __( 'Advanced Tabs', 'essential-blocks' ),
        'value'      => 'advanced_tabs',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'content',
        'object'     => AdvancedTabs::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/advanced-tab/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-advanced-tabs/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/advanced-tabs.svg'
    ],
    'advanced_navigation'       => [
        'label'      => __( 'Advanced Navigation', 'essential-blocks' ),
        'value'      => 'advanced_navigation',
        'visibility' => 'true',
        'category'   => 'creative',
        'object'     => AdvancedNavigation::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/advanced-navigation/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-advanced-navigation/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/advanced-navigation.svg'
    ],
    'woo_product_grid'          => [
        'label'      => __( 'Woo Product Grid', 'essential-blocks' ),
        'value'      => 'woo_product_grid',
        'visibility' => 'true',
        'status'     => 'popular',
        'category'   => 'woocommerce',
        'object'     => WooProductGrid::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/woo-product-grid/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/woo-product-grid/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/woo-product-grid.svg'
    ],
    'advanced_image'            => [
        'label'      => __( 'Advanced Image', 'essential-blocks' ),
        'value'      => 'advanced_image',
        'visibility' => 'true',
        'category'   => 'creative',
        'object'     => AdvancedImage::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/advanced-image/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-advanced-image/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/advanced-image.svg'
    ],
    'wpforms'                   => [
        'label'      => __( 'WPForms', 'essential-blocks' ),
        'value'      => 'wpforms',
        'visibility' => 'true',
        'category'   => 'form',
        'object'     => WPForms::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/wpforms/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-wpforms/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/wpforms.svg'
    ],
    'post_carousel'             => [
        'label'      => __( 'Post Carousel', 'essential-blocks' ),
        'value'      => 'post_carousel',
        'visibility' => 'true',
        'category'   => 'dynamic',
        'object'     => PostCarousel::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/post-carousel/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-post-carousel/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/post-carousel.svg'
    ],
    'advanced_video'            => [
        'label'      => __( 'Advanced Video', 'essential-blocks' ),
        'value'      => 'advanced_video',
        'visibility' => 'true',
        'category'   => 'creative',
        'object'     => AdvancedVideo::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/advanced-video/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-advanced-video/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/advanced-video.svg'
    ],
    'popup'                     => [
        'label'      => __( 'Popup', 'essential-blocks' ),
        'value'      => 'popup',
        'visibility' => 'true',
        'category'   => 'marketing',
        'object'     => PopUp::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/popup/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-popup/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/popup.svg'
    ],
    'openverse'                 => [
        'label'      => __( 'Openverse', 'essential-blocks' ),
        'value'      => 'openverse',
        'visibility' => 'true',
        'category'   => 'dynamic',
        'object'     => Openverse::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/openverse/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/openverse/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/openverse.svg'
    ],
    'nft_gallery'               => [
        'label'      => __( 'NFT Gallery', 'essential-blocks' ),
        'value'      => 'nft_gallery',
        'visibility' => 'true',
        'category'   => 'dynamic',
        'object'     => NftGallery::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/nft-gallery/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-nft-gallery/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/nft-gallery.svg'
    ],
    'google_map'                => [
        'label'      => __( 'Google Maps', 'essential-blocks' ),
        'value'      => 'google_map',
        'visibility' => 'true',
        'status'     => 'updated',
        'category'   => 'dynamic',
        'object'     => GoogleMap::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/google-maps/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-google-maps/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/google-map.svg'
    ],
    'shape_divider'             => [
        'label'      => __( 'Shape Divider', 'essential-blocks' ),
        'value'      => 'shape_divider',
        'visibility' => 'true',
        'category'   => 'creative',
        'object'     => ShapeDivider::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/shape-divider/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-shape-divider',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/shape-divider.svg'
    ],
    'form'                      => [
        'label'      => __( 'Form', 'essential-blocks' ),
        'value'      => 'form',
        'visibility' => 'true',
        'status'     => 'new',
        'category'   => 'form',
        'object'     => Form::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/form-block/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-form-block',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/form.svg'
    ],
    'icon'                      => [
        'label'      => __( 'Icon Picker', 'essential-blocks' ),
        'value'      => 'icon',
        'visibility' => 'true',
        'status'     => 'new',
        'category'   => 'creative',
        'object'     => Icon::get_instance(),
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/icon-picker/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-icon-picker',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/icon-picker.svg'
    ],
    'advanced_search'           => [
        'label'      => __( 'Advanced Search', 'essential-blocks' ),
        'value'      => 'advanced_search',
        'visibility' => 'true',
        'status'     => 'new',
        'is_pro'     => true,
        'category'   => 'content',
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/advanced-search',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-advanced-search',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/adv-search.svg'
    ],
    'data_table'                => [
        'label'      => __( 'Data Table', 'essential-blocks' ),
        'value'      => 'data_table',
        'visibility' => 'true',
        'status'     => 'updated',
        'category'   => 'dynamic',
        'is_pro'     => true,
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/data-table/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-data-table',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/data-table.svg'
    ],
    'timeline_slider'           => [
        'label'      => __( 'Timeline Slider', 'essential-blocks' ),
        'value'      => 'timeline_slider',
        'visibility' => 'true',
        'category'   => 'dynamic',
        'is_pro'     => true,
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/timeline-slider',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-timeline-slider',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/timeline-slider.svg'
    ],
    'news_ticker'               => [
        'label'      => __( 'News Ticker', 'essential-blocks' ),
        'value'      => 'news_ticker',
        'visibility' => 'true',
        'category'   => 'dynamic',
        'is_pro'     => true,
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/news-ticker',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-news-ticker',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/news-ticker.svg'
    ],
    'woo_product_carousel'      => [
        'label'      => __( 'Woo Product Carousel', 'essential-blocks' ),
        'value'      => 'woo_product_carousel',
        'visibility' => 'true',
        'status'     => 'new',
        'category'   => 'woocommerce',
        'is_pro'     => true,
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/woo-product-carousel/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-woo-product-carousel',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/product-carousel.svg'
    ],
    'multicolumn_pricing_table' => [
        'label'      => __( 'Multicolumn Pricing Table', 'essential-blocks' ),
        'value'      => 'multicolumn_pricing_table',
        'visibility' => 'true',
        'status'     => 'new',
        'category'   => 'marketing',
        'is_pro'     => true,
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/multicolumn-pricing-table',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-multicolumn-pricing-table',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/multicolumn-pricing-table.svg'
    ],
    'fancy_chart'               => [
        'label'      => __( 'Fancy Chart', 'essential-blocks' ),
        'value'      => 'fancy_chart',
        'visibility' => 'true',
        'status'     => 'new',
        'category'   => 'dynamic',
        'is_pro'     => true,
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/fancy-chart',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-fancy-chart',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/fancy-chart.svg'
    ],
    'stacked_cards'             => [
        'label'      => __( 'Stacked Cards', 'essential-blocks' ),
        'value'      => 'stacked_cards',
        'visibility' => 'true',
        'status'     => 'new',
        'category'   => 'creative',
        'is_pro'     => true,
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/stacked-cards',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-stacked-cards',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/stacked-cards.svg'
    ],
    'testimonial_slider'        => [
        'label'      => __( 'Testimonial Slider', 'essential-blocks' ),
        'value'      => 'testimonial_slider',
        'visibility' => 'true',
        'status'     => 'new',
        'category'   => 'content',
        'is_pro'     => true,
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/testimonial-slider/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-testimonial-slider',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/testimonial-slider.svg'
    ],
    'off_canvas'             => [
        'label'      => __( 'Offcanvas', 'essential-blocks' ),
        'value'      => 'off_canvas',
        'visibility' => 'true',
        'status'     => 'new',
        'category'   => 'content',
        'is_pro'     => true,
        'demo'       => ESSENTIAL_BLOCKS_SITE_URL . 'demo/offcanvas/',
        'doc'        => ESSENTIAL_BLOCKS_SITE_URL . 'docs/eb-offcanvas/',
        'icon'       => ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/blocks-icon/offcanvas.svg'
    ],
];
