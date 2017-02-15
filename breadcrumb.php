<nav class="breadcrumb">
    <ul>
        <li class="breadcrumb__parent" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <a href="<?php bloginfo('url'); ?>" itemprop="url">
                <span itemprop="title"><?php bloginfo('name'); ?></span>
            </a>
        </li>
        <li class="breadcrumb__parent" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
            <a href="<?php $cat = get_the_category(); echo get_category_link($cat[0]->cat_ID); ?>" itemprop="url">
                <span itemprop="title"><?php echo $cat[0]->name; ?></span>
            </a>
        </li>
        <li class="breadcrumb__current">
            <?php the_title(); ?>
        </li>
    </ul>
</nav>
