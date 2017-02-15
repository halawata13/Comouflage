<meta charset="<?php bloginfo('charset'); ?>" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php bloginfo('rss2_url'); ?>" />
<link rel="alternate" type="text/xml" title="RSS .92" href="<?php bloginfo('rss_url'); ?>" />
<link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="<?php bloginfo('atom_url'); ?>" />
<link rel="shortcut icon" type="image/svg+xml" sizes="any" href="<?php bloginfo('template_directory'); ?>/asset/img/favicon.svg" />
<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/asset/node_modules/ress/dist/ress.min.css" />
<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/asset/dist/css/common.css" />
<?php if (wp_is_mobile()):?>
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/asset/dist/css/mobile.css" />
<?php else: ?>
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/asset/dist/css/pc.css" />
<?php endif; ?>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" />
<?php wp_enqueue_script('jquery'); ?>
<?php wp_head(); ?>
<?php if (!wp_is_mobile() && !is_single()) : ?>
    <script src="<?php bloginfo('template_directory'); ?>/asset/lib/Snap.svg-0.4.1/dist/snap.svg-min.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/asset/dist/js/main.js"></script>
<?php endif; ?>
