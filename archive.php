<?php get_header(); ?>

<div class="l-content l-content--index l-content--archive">

    <?php if (have_posts()) : ?>

        <?php $post = $posts[0]; ?>
        <h1 class="l-content__title">
            <?php /* カテゴリーアーカイブ */
            if (is_category()) : ?>
                Category: <span class="l-content__title__value"><?php printf('%s', single_cat_title('', false)); ?></span>
            <?php /* タグアーカイブ */
            elseif (is_tag()) : ?>
                Tag: <span class="l-content__title__value"><?php printf('%s', single_tag_title('', false)); ?></span>
            <?php /* 日アーカイブ */
            elseif (is_day()) : ?>
                Archive: <span class="l-content__title__value"><?php echo get_the_date('Y/m/d/'); ?></span>
            <?php /* 月アーカイブ */
            elseif (is_month()) : ?>
                Archive: <span class="l-content__title__value"><?php echo get_the_date('Y/m/'); ?></span>
            <?php /* 年アーカイブ */
            elseif (is_year()) : ?>
                Archive: <span class="l-content__title__value"><?php echo get_the_date('Y'); ?></span>
            <?php /* 著作者アーカイブ */
            elseif (is_author()) : ?>
                Author Archive
            <?php /* ページアーカイブ */
            elseif (isset($_GET['paged']) && !empty($_GET['paged'])) : ?>
                Blog Archives
            <?php endif; ?>
        </h1>

        <div class="l-content__article">
            <?php get_template_part('loop'); ?>
        </div>

        <nav class="l-page-nav">
            <?php if (function_exists('wp_pagenavi')) : ?>
                <?php wp_pagenavi(); ?>
            <?php endif; ?>
        </nav>

    <?php else : ?>

        <?php get_template_part('not_found.php'); ?>

    <?php endif; ?>

</div>

<?php get_footer(); ?>
