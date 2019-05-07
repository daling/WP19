<?php
/**
 * User: daling
 */

/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Links',
    'items' => Array(
        'Home' => '/WP19/assignment_2/index.php',
        'Links' => '/WP19/assignment_2/links.php',
        'News' => '/WP19/assignment_2/news.php',
        'Future' => '/WP19/assignment_2/future.php'
    )
);
include __DIR__. '/tpl/head.php';

/* Body */
include __DIR__ . '/tpl/body-start.php';
?>
    <div class="col-md-12">
        <h1>Welcome to my links!</h1>
    </div>
<?php
include __DIR__ . '/tpl/body-end.php';
/* Footer */
include __DIR__ . '/tpl/footer.php';?>