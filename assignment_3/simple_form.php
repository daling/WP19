<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP19/assignment_3/index.php',
        'Add news item' => '/WP19/assignment_3/news_add.php',
        'Leap Year' => '/WP19/assignment_3/leapyear.php',
        'Simple Form' => '/WP19/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>
<div class="row wp-row">
    <div class="col-md-12">
        <h1>
            <?php
            if ($_GET["name"]) {
                echo "Welcome " . $_GET["name"] . "!";
            } else {
                echo "Welcome!";
            }
            ?>
        </h1>
        <p>
            <?php
            if ($_GET["place"] == "Amsterdam") {
                echo "You're from the capital of the Netherlands!";
            } elseif ($_GET["place"]) {
                echo "You're from " . $_GET["place"] . "!";
            }
            ?>
        </p>
        <form method="GET">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Enter name" required>
            </div>
            <div class="form-group">
                <label for="place">Place of residence</label>
                <input type="text" class="form-control" id="place" name="place" placeholder="Enter place of residence"
                       required>
            </div>
            <button class="btn btn-primary mb-2" id="submit-btn">Submit</button>
        </form>
    </div>
</div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>