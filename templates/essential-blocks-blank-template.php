<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Template Name: Essential Blocks Blank Template
 * Description: Blank Template for Essential Blocks template
 *
 * @link       https://essential-blocks.com
 * @since      3.3.3
 *
 * @package    Essential Blocks
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
	<?php if ( ! current_theme_supports( 'title-tag' ) ) : ?>
		<title><?php echo esc_attr( wp_get_document_title() ); ?></title>
	<?php endif; ?>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<main class="eb-blank-container">
	<div class="eb-blank-content-wrapper">
		<?php
		/**
		 * Hooks anything before content
		 *
		 * @since 3.3.3
		 */
		do_action( 'eb_before_blank_content' );
		?>

		<?php if ( have_posts() ) : ?>
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<?php the_content(); ?>
			<?php endwhile; ?>
		<?php endif; ?>

		<?php
		/**
		 * Hooks anything after content
		 *
		 * @since 3.3.3
		 */
		do_action( 'eb_after_blank_content' );
		?>
	</div>
</main>
<?php wp_footer(); ?>
</body>
</html>
