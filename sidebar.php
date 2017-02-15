<aside class="l-sidebar">
    <ul>
        <li>
            <section>
                <h1>Recent Posts</h1>
                <ul>
                    <?php recentPosts(); ?>
                </ul>
            </section>
        </li>
        <li>
            <section>
                <h1>Category</h1>
                <ul>
                    <?php wp_list_categories('show_count=1&title_li='); ?>
                </ul>
            </section>
        </li>
        <li>
            <section>
                <h1>Archive</h1>
                <ul>
                    <?php wp_get_archives('type=monthly&show_post_count=1'); ?>
                </ul>
            </section>
        </li>
    </ul>
</aside>
