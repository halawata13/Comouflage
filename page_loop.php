<?php while (have_posts()) : the_post(); ?>

    <div class="page page--<?php get_post_custom_values('page-category', get_the_ID()); ?>" id="page-<?php the_ID(); ?>">

        <div class="page__content">
            <?php the_content(__('続きを読む')); ?>
        </div>

    </div>

<?php endwhile; ?>
