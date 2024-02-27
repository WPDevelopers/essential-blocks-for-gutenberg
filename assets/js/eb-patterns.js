/**
 * CSS
 */
var styles = `
	.eb-more-patterns-btn{
		margin: 10px 20px;
		padding: 12px 15px;
		display: inline-block;
		cursor: pointer;
		background: #5d4fff;
		cursor: pointer;
		border: 0;
		border-radius: 4px;
		font-size: 14px;
		color: #fff !important;
		text-align: center;
		text-decoration: none !important;
	}
	.eb-more-patterns-btn:hover{
		background: #493bed;
	}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('body').addEventListener("change", function (e) {
		var el = document.querySelector('.block-editor-inserter__tabs .block-editor-inserter__panel-header .components-select-control__input');
		if (el && el.value.trim().toLowerCase() === 'essential-blocks') {
			var btn = document.createElement('a');
			btn.classList.add('eb-more-patterns-btn');
			btn.href = '#';
			var styleSheet = document.createElement("style")
			styleSheet.innerText = styles
			document.head.appendChild(styleSheet)

			const isInstalled = EssentialBlocksLocalize?.get_plugins['templately/templately.php']
			const isActive = EssentialBlocksLocalize?.get_plugins['templately/templately.php']?.active
			if (isActive) {
				btn.innerHTML = 'See more in <strong>Templately</strong>';
				btn.classList.add('templately-active');
			}
			if (!isActive && isInstalled) {
				btn.innerHTML = 'Active <strong>Templately</strong> to get more';
				btn.href = EssentialBlocksLocalize.eb_admin_url + 'plugins.php';
				btn.target = "_blank";
			}
			if (!isActive && !isInstalled) {
				btn.innerHTML = 'Install <strong>Templately</strong> to get more';
				btn.href = EssentialBlocksLocalize.eb_admin_url + 'plugin-install.php?s=templately&tab=search&type=term';
				btn.target = "_blank";
			}
			el.closest('.components-tab-panel__tab-content').append(btn);
		} else {
			btn = document.querySelector('.eb-more-patterns-btn');
			if (btn) {
				btn.remove();
			}
		}
		var templatelyBtn = document.querySelector('.eb-more-patterns-btn.templately-active');
		if (templatelyBtn) {
			templatelyBtn.addEventListener('click', function (e) {
				document.querySelector('.gutenberg-add-templately-button').click();
				// document.querySelector('#templately-gutenberg-button').click();
			});
		}
	});
});