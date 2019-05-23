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


/**
 * This function returns an array with the leap years for the next 25 years.
 * It will still work for the next couple of decades, since it uses the built-in leap year
 * checker. If you for example input the year 2097, it skips the year 2100.
 * @return array
 */
function nextLeapYears(){
    $nextLeapYears = [];
    $year = date('Y');
//    $year = 2097;
    for($i=0; $i<25; $i++){
        if(date('L', strtotime("$year-01-01"))){
            array_push($nextLeapYears,$year);
        }
        $year++;
    }
    return $nextLeapYears;
}
?>
    <div class="row wp-row">
        <div class="col-md-12">
            <h1>
                <?php
                if ($_POST["name"]) {
                    echo "Welcome " . $_POST["name"] . "!";
                } else {
                    echo "Welcome!";
                }
                ?>
            </h1>
            <p>
                <?php
                if ($_POST["place"] == "Groningen") {
                    echo "You're from the city of talent!";
                } elseif ($_POST["place"]) {
                    echo "You're from " . $_POST["place"] . "!";
                }
                ?>
            </p>
            <?php
            if (isset($_POST["age"])) { ?>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Year</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php
                    $age = $_POST["age"];
                    $curYear = date('Y');
                    $nextLeapYears = nextLeapYears();
                    for($i=0; $i<5; $i++) {
                        $nextAge = (int) $age - $curYear + $nextLeapYears[$i];
                        echo "<tr><td>" . $nextLeapYears[$i] . "</td><td>" . $nextAge . "</td></tr>";
                    }
                    ?>
                    </tbody>
                </table>
                <?php
                }
            ?>
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