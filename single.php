<?php get_header(); ?>

<div class="l-content l-content--single">

    <?php if (have_posts()) : ?>

        <?php get_template_part('loop'); ?>

        <?php comments_template(); ?>

        <?php get_template_part('nav_post'); ?>

    <?php else : ?>

        <?php get_template_part('not_found'); ?>

    <?php endif; ?>

</div>

<?php get_footer(); ?>
