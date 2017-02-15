<?php get_header(); ?>

<div class="l-content l-content--index">

    <?php if (have_posts()) : ?>

        <div class="l-content__article">
            <?php get_template_part('loop'); ?>
        </div>

        <nav class="l-page-nav">
            <?php if (function_exists('wp_pagenavi')) : ?>
                <?php wp_pagenavi(); ?>
            <?php else : ?>
                <?php the_posts_pagination( array(
                    'prev_text'          => '<',
                    'next_text'          => '>',
                    'before_page_number' => '<span class="meta-nav screen-reader-text">Page</span>',
                ) ); ?>
            <?php endif; ?>
        </nav>

    <?php else : ?>

        <?php get_template_part('not_found.php'); ?>

    <?php endif; ?>

</div>

<?php get_footer(); ?>
