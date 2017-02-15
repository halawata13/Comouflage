<?php get_header(); ?>

<div class="l-content l-content--page <?php if (is_page('Work')): ?>l-content--work<?php endif; ?>">

    <?php if (have_posts()) : ?>

        <?php if (is_page('Work')): ?>
            <?php get_template_part('page_index'); ?>
        <?php else : ?>
            <?php get_template_part('page_loop'); ?>
        <?php endif; ?>

    <?php else : ?>

        <?php get_template_part('not_found.php'); ?>

    <?php endif; ?>

</div>

<?php get_footer(); ?>
