<?php

$_item_wrapper_classes = array(
	( $layout === 'card' ) ? 'instagram__gallery__item--' . $cardStyle : 'instagram__gallery__item--' . $overlayStyle,
	isset( $hasEqualImages ) ? 'has__equal__height' : '',
);

?>

<div class="instagram__gallery__col">
	<div class="instagram__gallery__item <?php echo esc_attr( implode( ' ', $_item_wrapper_classes ) ); ?>">
		<?php
		if ( 'card' === $layout && ( $showProfileName || $showProfileImg ) ) {
			$helper::views(
				'insta-partials/author',
				array(
					'showProfileName' => $showProfileName,
					'showProfileImg'  => $showProfileImg,
					'profileImg'      => $profileImg,
					'profileName'     => $profileName,
					'username'        => $username,
				)
			);
		}
		?>

		<?php if ( $enableLink ) : ?>
			<a href="<?php echo esc_attr( esc_url( $permalink ) ); ?>" target="<?php echo esc_attr( $target ); ?>">
		<?php endif; ?>
			<div class="instagram__gallery__thumb">
				<div class="thumb__wrap">
					<img src="<?php echo esc_attr( esc_url( $image_url ) ); ?>" alt="<?php echo esc_attr( $image_alt ); ?>" />
				</div>
				<?php
				if ( $showCaptions && ! empty( $caption ) ) {
					$helper::views(
						'insta-partials/caption',
						array(
							'caption' => $caption,
						)
					);
				}
				?>
			</div>
		<?php if ( $enableLink ) : ?>
			</a>
		<?php endif; ?>

		<?php
		if ( $showMeta ) {
			$helper::views(
				'insta-partials/meta',
				array(
					'timestamp' => $timestamp,
				)
			);
		}
		?>
	</div>
</div>
