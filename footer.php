</div>
</div>

<footer class="l-footer">
    <div class="l-footer__inner l-inner">
        <nav class="l-footer-nav">
            <div class="l-footer-nav__list">
                <section class="l-footer-nav__section">
                    <h1>Recent Posts</h1>
                    <ul>
                        <?php recentPosts(); ?>
                    </ul>
                </section>
                <section class="l-footer-nav__section">
                    <h1>Category</h1>
                    <ul>
                        <?php wp_list_categories('show_count=1&title_li='); ?>
                    </ul>
                </section>
                <section class="l-footer-nav__section">
                    <h1>Archive</h1>
                    <ul>
                        <?php wp_get_archives('type=monthly&show_post_count=1'); ?>
                    </ul>
                </section>
            </div>
        </nav>
        <div class="l-copy">
            <small><?php bloginfo('title'); ?> <?php echo date('Y'); ?> <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by/2.1/jp/"><img alt="クリエイティブ・コモンズ・ライセンス" src="<?php bloginfo('template_directory'); ?>/asset/img/88x31.png" /></a>
            </small>
        </div>
    </div>
</footer>
</div>

<?php wp_footer(); ?>

</body>
</html>
