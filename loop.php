<?php while (have_posts()) : the_post(); ?>

    <article itemscope itemtype="http://schema.org/BlogPosting" class="article article--<?php the_cat('slug'); ?> article--<?php echo get_page_uri(get_the_ID());?>" id="article-<?php the_ID(); ?>" style="border-left-color: <?php echo getCategoryColor(get_page_uri(get_the_ID())) ?>;">
        <div class="article__inner">
            <header class="article__header">
                <?php if (!is_single()) : ?>
                    <div class="article__thumbs">
                        <?php if (has_post_thumbnail()) : ?>
                            <?php the_post_thumbnail(); ?>
                        <?php else : ?>
                            <img alt="No Image" src="<?php bloginfo('template_directory'); ?>/asset/img/no-image.svg" />
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
                <h1 itemprop="name" class="article__title"><a href="<?php the_permalink(); ?>" rel="bookmark" itemprop="url"><?php the_title(); ?></a></h1>
                <?php if (is_single()) : ?>
                    <div class="article__info">
                        <time class="article__date" itemprop="datePublished" datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y.m.d'); ?></time>
                        <span class="article__category article__category--<?php the_cat('slug'); ?>" itemprop="keywords"><?php the_cat('name'); ?></span>
                    </div>
                <?php endif; ?>
                <?php if (!wp_is_mobile() && !is_single()) : ?>
                    <div class="article__excerpt"><?php the_excerpt(); ?></div>
                <?php endif; ?>
            </header>

            <div class="article__content">
                <?php if (is_single()) : ?>
                    <div class="article__body" itemprop="articleBody"><?php the_content(); ?></div>
                <?php endif; ?>
            </div>

            <footer class="article__footer">
                <?php if (!is_single()) : ?>
                    <div class="article__info">
                        <time class="article__date" itemprop="datePublished" datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y.m.d'); ?></time>
                        <span class="article__category article__category--<?php the_cat('slug'); ?>" itemprop="keywords" style="color: <?php echo getCategoryColor(get_page_uri(get_the_ID())) ?>;"><?php the_cat('name'); ?></span>
                    </div>
                <?php endif; ?>

                <?php if (is_single()) : ?>
                    <?php get_template_part('breadcrumb'); ?>

                    <div class="article__social-ctn">
                        <?php if (function_exists("wp_social_bookmarking_light_output_e")) {
                            wp_social_bookmarking_light_output_e();
                        } ?>
                    </div>
                <?php endif; ?>

            </footer>
        </div>
    </article>

<?php endwhile; ?>
