<section class="content wrap-narrow clearfix">
	<h2 class="title"><?php echo html($page->title()) ?></h2>
	<?php snippet('submenu'); ?>

	<article>
		<?php echo kirbytext($page->text()) ?>
	</article>

	<?php snippet('prevnext'); ?>

</section>