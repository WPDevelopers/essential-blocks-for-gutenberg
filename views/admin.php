<?php
	// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="essential-blocks-admin-page-wrapper eb-settings-wrap">
	<div id="eb-settings"></div>
</div>

<?php
do_action( 'eb_admin_page_setting' );
