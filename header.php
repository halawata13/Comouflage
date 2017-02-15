<!DOCTYPE html>
<html lang="ja">
<head>
    <?php get_template_part('head'); ?>
</head>
<body>

<div class="l-wrapper <?php if (wp_is_mobile()):?>is-mobile<?php endif; ?> <?php if (is_single() || is_category()): ?>l-category--<?php the_cat('slug'); ?><?php endif; ?>">
    <header class="l-header">
        <div class="l-header__inner l-inner">
            <h1 class="l-header__title"><a href="<?php bloginfo('url'); ?>"><?php bloginfo('title'); ?></a></h1>
            <?php if (!wp_is_mobile() && !is_single()) : ?>
                <div class="l-header__visual">
                    <div class="l-header__visual__svg" id="world">
                    </div>
                    <div class="l-header__whale-message" id="whale-message" style="display: none;"></div>
                </div>
            <?php endif; ?>
        </div>
    </header>

    <div class="l-main">
        <div class="l-main__inner l-inner">
