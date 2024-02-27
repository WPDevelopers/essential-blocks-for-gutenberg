<?php

    $_parent_wrapper_classes = [
        "eb-parent-$blockId",
        $classHook
    ];
    $_wrapper_classes = [
        $blockId,
        ! empty( $align ) ? 'align' . $align : ''
    ];

    $target = $enableLink && $openInNewTab ? '_blank' : '';

?>
<div class="eb-parent-wrapper<?php echo esc_attr( implode( ' ', $_parent_wrapper_classes ) );?>">
	<div class="eb-instagram-wrapper	                                 <?php echo esc_attr( implode( ' ', $_wrapper_classes ) );?>">
		<div class="eb-instagram__gallery">

			<?php
                foreach ( $images as $key => $image ) {
                    if ( is_object( $image ) ) {
                        $media_type = esc_attr( $image->media_type );
                        $image_url  = ( $media_type === 'VIDEO' ) ? esc_url( $image->thumbnail_url ) : esc_url( $image->media_url );
                        $image_alt  = isset( $image->caption ) ? $image->caption : '';

                        if ( $key < $numberOfImages ) {
                            $helper::views(
                                'insta-partials/single',
                                [
                                    'image_url'       => $image_url,
                                    'image_alt'       => $image_alt,
                                    'timestamp'       => $image->timestamp,
                                    'permalink'       => $image->permalink,
                                    'target'          => $target,
                                    'enableLink'      => $enableLink,
                                    'layout'          => $layout,
                                    'overlayStyle'    => $overlayStyle,
                                    'cardStyle'       => $cardStyle,
                                    'showMeta'        => $showMeta,
                                    'hasEqualImages'  => $hasEqualImages,
                                    'showProfileName' => $showProfileName,
                                    'showProfileImg'  => $showProfileImg,
                                    'profileImg'      => $profileImg,
                                    'profileName'     => $profileName,
                                    'username'        => $image->username,
                                    'caption'         => isset( $image->caption ) ? $image->caption : '',
                                    'showCaptions'    => $showCaptions
                                ]
                            );
                        }
                    }
                }
            ?>
		</div>
	</div>
</div>
