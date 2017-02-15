<div class="search">
    <form action="<?php bloginfo('url'); ?>" method="get">
        <fieldset>
            <input class="search__text" type="text" name="s" value="" onfocus="this.value=(this.value=='') ? '' : this.value;" onblur="this.value=(this.value=='') ? '' : this.value;" /><input class="search__btn submit" type="image" src="<?php bloginfo('template_directory'); ?>/images/search_btn.png" alt="検索" />
        </fieldset>
    </form>
</div>
