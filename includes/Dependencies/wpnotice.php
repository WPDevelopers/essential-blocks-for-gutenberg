<?php

if ( ! class_exists( 'PriyoMukul\WPNotice\Utils\Base' ) ) {
    require_once __DIR__ . DIRECTORY_SEPARATOR . 'Notice/Utils/Base.php';
}
if ( ! class_exists( 'PriyoMukul\WPNotice\Utils\CacheBank' ) ) {
    require_once __DIR__ . DIRECTORY_SEPARATOR . 'Notice/Utils/CacheBank.php';
}
if ( ! trait_exists( 'PriyoMukul\WPNotice\Utils\Helper' ) ) {
    require_once __DIR__ . DIRECTORY_SEPARATOR . 'Notice/Utils/Helper.php';
}
if ( ! class_exists( 'PriyoMukul\WPNotice\Utils\NoticeRemover' ) ) {
    require_once __DIR__ . DIRECTORY_SEPARATOR . 'Notice/Utils/NoticeRemover.php';
}
if ( ! class_exists( 'PriyoMukul\WPNotice\Utils\Storage' ) ) {
    require_once __DIR__ . DIRECTORY_SEPARATOR . 'Notice/Utils/Storage.php';
}
if ( ! class_exists( 'PriyoMukul\WPNotice\Dismiss' ) ) {
    require_once __DIR__ . DIRECTORY_SEPARATOR . 'Notice/Dismiss.php';
}
if ( ! class_exists( 'PriyoMukul\WPNotice\Notice' ) ) {
    require_once __DIR__ . DIRECTORY_SEPARATOR . 'Notice/Notice.php';
}
if ( ! class_exists( 'PriyoMukul\WPNotice\Notices' ) ) {
    require_once __DIR__ . DIRECTORY_SEPARATOR . 'Notice/Notices.php';
}