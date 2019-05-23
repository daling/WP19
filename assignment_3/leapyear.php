<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap Year',
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
                    echo "Welcome " . $_POST["name"] . "!";
                } else {
                    echo "Welcome!";
                }
                ?>
            </h1>
            <p>
                <?php
                if ($_GET["place"] == "Groningen") {
                    echo "You're from the city of talent!";
                } elseif ($_GET["place"]) {
                    echo "You're from " . $_GET["place"] . "!";
                }
                ?>
            </p>
            <form method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Enter name" required>
                    <div class="valid-feedback">Cute name!</div>
                    <div class="invalid-feedback">Name entered invalid.</div>
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="number" class="form-control" id="age" name="age" placeholder="Enter age" required>
                    <div class="valid-feedback">Lovely age!</div>
                    <div class="invalid-feedback">Age entered invalid.</div>
                </div>
                <div class="form-group">
                    <label for="text">Email address</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Enter email address"
                           required>
                    <div class="valid-feedback">Adorable email address!</div>
                    <div class="invalid-feedback">Email address entered invalid.</div>
                </div>
                <div class="form-group">
                    <label for="text">Place of residence</label>
                    <input type="text" class="form-control" id="place" name="place" placeholder="Enter place of residence"
                           required>
                    <div class="valid-feedback">Superb place of residence!</div>
                    <div class="invalid-feedback">Place of residence entered invalid.</div>
                </div>
                <button class="btn btn-primary mb-2" id="submit-btn">Submit</button>
            </form>
        </div>
    </div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>