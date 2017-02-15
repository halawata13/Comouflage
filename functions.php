<?php

function recentPosts($showposts = 5)
{
    $query = array(
        'post_type' => 'post',
        'showposts' => $showposts,
    );
    $wp_query = new WP_Query($query);

    $str = '';
    if ($wp_query->have_posts()) {
        while ($wp_query->have_posts()) {
            $wp_query->the_post();
            $str .= '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
        }
    }
    echo $str;

    wp_reset_query();
}

function the_cat($prop, $id = false)
{
    $cat = get_the_category($id);
    echo $cat[0]->$prop;
}

function getCategoryColor($category_name)
{
    $hue = hexdec(substr(sha1($category_name), 0, 2));
    return "hsl({$hue}, 100%, 35%)";
}
