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
$weblinks = Array(
    'RUG' => 'http://www.rug.nl/',
    'Nestor' => 'http://www.nestor.rug.nl/',
    'RTVNoord' => 'http://www.rtvnoord.nl'
);
include __DIR__. '/tpl/head.php';

/* Body */
include __DIR__ . '/tpl/body-start.php';
?>
    <div class="col-md-12">
        <h1>Welcome to my links!</h1>
        <ul class="fadeclass">
            <?php foreach($weblinks as $title => $url){ ?>
                <li><a href="<?= $url ?>" target="_blank"><?= $title ?></a></li>
            <?php } ?>
        </ul>
        <button type="button" class="btn btn-primary" id="fade-btn">Fade</button>
        <form>
            <div class="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputName"
                           aria-describedby="nameHelp" placeholder="Enter name of link">
                    <small id="nameHelp" class="form-text text-muted">Name can only contain letters.</small>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputLink" class="col-sm-2 col-form-label">Link</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputLink"
                           aria-describedby="linkHelp" placeholder="Enter link">
                    <small id="linkHelp" class="form-text text-muted">Link must contain ..... </small>
                </div>
            </div>
            <button type="button" class="btn btn-success mb-2" id="add-btn">
                Add link
            </button>
            <button type="button" class="btn btn-danger mb-2" id="delete-btn">
                Delete mode
            </button>
        </form>
    </div>
<?php
include __DIR__ . '/tpl/body-end.php';
/* Footer */
include __DIR__ . '/tpl/footer.php';?>