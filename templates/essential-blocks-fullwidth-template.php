<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use EssentialBlocks\Utils\TemplateHelpers;
/**
 * Template Name: Essential Blocks Fullwidth Template
 * Description: Fullwidth template for Essential Blocks template
 *
 * @link       https://essential-blocks.com
 * @since      3.3.3
 *
 * @package    Essential Blocks
 */

 TemplateHelpers::eb_template_header();

global $post;
?>
	<main class="eb-fullwidth-container" style="width: 100%;">
		<div class="eb-fullwidth-content-wrapper">
			<?php
			/**
			 * Hooks anything before content
			 *
			 * @since 3.3.3
			 */
			do_action( 'eb_before_fullwidth_content' );
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
			do_action( 'eb_after_fullwidth_content' );
			?>
		</div>
	</main>

	<?php
	TemplateHelpers::eb_template_footer();
	?>
