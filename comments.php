<div class="comment comment--<?php the_cat('slug'); ?>">

    <?php if (have_comments()) : ?>
        <section class="comment__list">
            <ol>
                <?php wp_list_comments(); ?>
            </ol>
        </section>
    <?php endif; ?>

    <?php if (comments_open()) : ?>

        <section class="comment__form">
            <form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post">
                <fieldset>

                    <div class="comment__form__item">
                        <label>
                            <span class="comment__item__name comment__item__name--required">
                                お名前
                            </span>
                            <input type="text" name="author" id="author" value="<?php echo esc_attr($comment_author); ?>" tabindex="1" required="required" aria-required="true" />
                        </label>
                    </div>

                    <div class="comment__form__item">
                        <label>
                            <span class="comment__item__name comment__item__name--required">
                                メールアドレス（※公開されません）
                            </span>
                            <input type="text" name="email" id="email" value="<?php echo esc_attr($comment_author_email); ?>" tabindex="2" required="required" aria-required="true" />
                        </label>
                    </div>

                    <div class="comment__form__item">
                        <label>
                            <span class="comment__item__name comment__item__name--required">
                                コメント
                            </span>
                            <textarea name="comment" id="comment" tabindex="3" required="required"></textarea>
                        </label>
                    </div>

                    <div class="comment__form__item">
                        <label>
                            <span class="comment__item__name comment__item__name--required">
                            </span>
                            <input name="submit" type="submit" tabindex="4" title="コメントを送信する" value="Send" />
                            <?php comment_id_fields(); ?>
                        </label>
                    </div>

                    <?php do_action('comment_form', $post->ID); ?>
                </fieldset>
            </form>

        </section>

    <?php endif; ?>

</div>
