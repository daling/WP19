<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'News',
    'items' => Array(
        'News' => 'index.php',
        'Add news item' => 'news_add.php',
        'Leap Year' => 'leapyear.php',
        'Simple Form' => 'simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';


?>
    <script type="application/javascript" src="scripts/main.js"></script>

    <div class="pd-40"></div>
    <div class="row">
        <div class="col-md-12">
            <div id="news_container"></div>
        </div>
    </div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>