<?php global $post;?>
	<div
		<?php echo esc_attr( $wrapper_attributes ); ?>>
        <div class="eb-parent-wrapper eb-parent-<?php echo esc_attr( $blockId ); ?><?php echo esc_attr( $classHook ); ?>">
            <div class="<?php echo esc_attr( $blockId ); ?> eb-social-share-wrapper<?php echo $isFloating ? esc_attr( ' eb-social-share-floating' ) : ''; ?><?php echo $isFloating && 'circular' == $iconShape ? esc_attr( ' eb-social-share-circular' ) : ''; ?>">
                <ul class="eb-social-shares">
                    <?php
                        foreach ( $profilesOnly as $profile ) {
                            preg_match( '/fa-([\w\-]+)/', $profile['icon'], $matches );
                            $iconClass = is_array( $matches ) && ! empty( $matches[1] ) ? $matches[1] . '-original' : '';
                        ?>
                        <li>
                            <a class="<?php echo esc_attr( $iconClass ); ?><?php echo ' ' . esc_attr( $iconEffect ); ?>" href=<?php echo esc_url_raw( $block_object::eb_social_share_name_link( $post->ID, $profile['icon'] ) ); ?> target="_blank" rel="nofollow noopener noreferrer">
                                <i class="<?php echo esc_attr( $profile['icon'] ); ?> hvr-icon eb-social-share-icon"></i>
                            <?php
                                if ( ! empty( $showTitle && ! empty( $profile['iconText'] ) ) ) {
                                    ?>
                                    <span class="eb-social-share-text"><?php echo esc_html( $profile['iconText'] ); ?></span>
                                <?php }?>
                            </a>
                        </li>
                    <?php }?>
                </ul>
            </div>
        </div>
	</div>

