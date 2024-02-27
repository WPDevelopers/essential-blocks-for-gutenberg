<?php
	// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

	// Enqueue Welcome Page CSS
	wpdev_essential_blocks()->assets->enqueue( 'eb-welcome', '../assets/css/welcome.css' );
?>
<div class="essential-blocks-welcome-page-wrapper">
	<div class="eb-welcome-header-wrapper" style="background-image: url(
	<?php
	echo esc_url(ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/images/welcome/welcome-banner.png');
	?>
																		)">
		<h2><?php esc_attr_e( 'Welcome To Essential Blocks 4.0.0', 'essential-blocks' ); ?></h2>
		<p><?php esc_attr_e( 'The most useful Gutenberg blocks library, Essential Blocks v4.0.0 brings many advanced changes in design, customization control, and new block series. Let’s take a look', 'essential-blocks' ); ?></p>
	</div>

	<div class="eb-whats-new-wrapper">
		<div class="eb-whats-new-header eb-welcome-section-header">
			<h3><?php esc_attr_e( 'What’s New In', 'essential-blocks' ); ?> <span>v4.0.0:</span><?php esc_attr_e( ' Check From Changelog', 'essential-blocks' ); ?></h3>
			<p><?php esc_attr_e( 'Taking into account our customers’ previous demands and recent requests for new features, Essential Blocks v4.0.0 offers exclusive features, block customization controls, and stunning blocks. Visit our product', 'essential-blocks' ); ?> <a href="https://wordpress.org/plugins/essential-blocks/#developers" target="_blank"><?php esc_attr_e( 'changelog', 'essential-blocks' ); ?></a><?php esc_attr_e( ' to see the latest version updates.', 'essential-blocks' ); ?></p>
		</div>

		<div class="eb-global-controls-wrapper eb-welcome-container">
			<div class="eb-welcome-grid">
				<div class="eb-col-6">
					<h4><?php esc_attr_e( 'Global Controls', 'essential-blocks' ); ?></h4>
					 <p><?php esc_attr_e( 'The most exclusive addition to', 'essential-blocks' ); ?> <a href="https://essential-blocks.com/docs/configure-global-controls/" target="_blank">Essential Blocks v4.0.0</a><?php esc_attr_e( ' is Global control. Any block can now be saved with customized styling so that it can be reused in other pages or posts. It saves time by not having to recreate the same block styling on all pages or posts.', 'essential-blocks' ); ?></p>
				</div>
				<div class="eb-col-6">
					 <img src="<?php echo esc_url_raw( ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/images/welcome/global-control.gif' ); ?>" />
				</div>
			</div>
		</div>

		<div class="eb-new-block-wrapper eb-welcome-container">
			<div class="eb-welcome-flex">
				<div class="eb-col-6">
					<h4><span><?php esc_attr_e( 'New Block:', 'essential-blocks' ); ?></span> Google Maps</h4>
					 <p><?php esc_attr_e( 'Introducing new block:', 'essential-blocks' ); ?> <a href="https://essential-blocks.com/demo/google-maps/" target="_blank">Google Maps.</a><?php esc_attr_e( ' Using this stunning block, you can easily display location, route, add additional labels, customize the labels with images, icons, etc. The Google Maps block comes with 4 ready-to-use presets for easy customization.', 'essential-blocks' ); ?></p>
				</div>
				<div class="eb-col-6">
					 <div class="eb-video-container">
						<iframe class="eb-video"  src="https://www.youtube.com/embed/xerC2h42PJs" title="How To Add Google Maps In WordPress With Essential Blocks?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					</div>
			</div>
		</div>
	</div>

	<div class="eb-option-wrapper">
		<div class="eb-welcome-container">
			<div class="eb-welcome-grid">
				<div class="eb-col-6">
					<img src="<?php echo esc_url_raw( ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/images/welcome/icon.svg' ); ?>" />
					<h4><?php esc_attr_e( 'Assets Generation', 'essential-blocks' ); ?></h4>
					<p><?php esc_attr_e( 'This amazing feature, Assets Generation, will help you keep your website’s loading speed fast and secure against heavy scripts and CSS files.', 'essential-blocks' ); ?></p>
					<a href="https://essential-blocks.com/docs/regenerate-assets/" target="_blank"><?php esc_attr_e( 'Release Note', 'essential-blocks' ); ?></a>
				</div>
				<div class="eb-col-6">
					<img src="<?php echo esc_url_raw( ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/images/welcome/icon2.svg' ); ?>" />
					<h4><?php esc_attr_e( 'Google Fonts', 'essential-blocks' ); ?></h4>
					<p><?php esc_attr_e( 'Essential Blocks is with now Google Fonts compatible. You can choose your preferred font family in one click from thousands of options.', 'essential-blocks' ); ?></p>
					<a href="https://essential-blocks.com/docs/configure-google-fonts/" target="_blank"><?php esc_attr_e( 'Release Note', 'essential-blocks' ); ?></a>
				</div>
			</div>
		</div>
	</div>

	<div class="eb-dashboard-wrapper">
		<div class="eb-dashboard-header eb-welcome-section-header">
			<h3><?php esc_attr_e( 'Introducing New ⚙️ Setting Controls', 'essential-blocks' ); ?> </h3>
			<p><?php esc_attr_e( 'With the new setup of Essential Blocks, configuring API keys, managing blocks as modular controls, and getting the best suitable Gutenberg template have never been easier. Get unlimited customization controls and features for a smoother experience.', 'essential-blocks' ); ?>
			</p>
		</div>

		<div class="eb-welcome-container eb-dashboard-list">
			<div class="eb-welcome-grid">
				<div class="eb-col-6">
					<h4 class="dashboard-title"><?php esc_attr_e( 'Dashboard', 'essential-blocks' ); ?> </h4>
					<img src="<?php echo esc_url_raw( ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/images/welcome/setting-img1.png' ); ?>" />
				</div>
				<div class="eb-col-6">
					<h4 class="dashboard-title"><?php esc_attr_e( 'Gutenberg Templates', 'essential-blocks' ); ?></h4>
					<img src="<?php echo esc_url_raw( ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/images/welcome/setting-img2.png' ); ?>" />
				</div>
				<div class="eb-col-6">
					<h4 class="dashboard-title"><?php esc_attr_e( 'Blocks', 'essential-blocks' ); ?></h4>
					<img src="<?php echo esc_url_raw( ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/images/welcome/setting-img3.png' ); ?>" />
				</div>
				<div class="eb-col-6">
					<h4 class="dashboard-title"><?php esc_attr_e( 'Settings', 'essential-blocks' ); ?></h4>
					<img src="<?php echo esc_url_raw( ESSENTIAL_BLOCKS_ADMIN_URL . 'assets/images/welcome/setting-img4.png' ); ?>" />
				</div>
			</div>
		</div>
		<a href="<?php echo esc_url( admin_url( 'admin.php?page=essential-blocks' ) ); ?>" class="back-dashboard"><?php esc_attr_e( 'Go To Dashboard', 'essential-blocks' ); ?></a>
	</div>
</div>
