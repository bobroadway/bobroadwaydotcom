<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
    <link rel="stylesheet" href="../../style/bobroadway.css">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../../js/head.js"></script>
  </head>
  <body>
    <?php 
      $relative = "../../";
      include "{$relative}navbar.php"; 
    ?>
    <div class="container" width="60%">
      <?php
          if(isset($_REQUEST["flowCheck"]) && $_REQUEST["flowCheck"] == "valid") {

              $email = $_POST["email"];
              $password = $_POST["password"];
              $city = $_POST["city"];
              $state = $_POST["state"];
              $zipcode = $_POST["zip"];
              $offers = $_POST["offers"];
              if(isset($_POST["termsAndConditions"])) {
                  $agree = "I agree.";
              } else {
                  $agree = "I do not agree.";
              }
      ?>  
      <fieldset>
        <legend>Results</legend>
          <blockquote class="blockquote">
            <ol>
              <li>Email: <?php echo $email; ?></li>
              <li>Password: <?php echo $password; ?></li>
              <li>City: <?php echo $city; ?></li>
              <li>State: <?php echo $state; ?></li>
              <li>Zip Code: <?php echo $zipcode; ?></li>
              <li><?php echo $offers . " email."; ?></li>
              <li><?php echo $agree; ?></li>
            </ol>
          </blockquote>
      <fieldset>
      <?php 
          } else {
              header("Location: newUser.php");
          }
      ?>
    </div>
    <div class="container">
      <p><small>*This is just a demo, no information is stored.</small></p>
    </div>
  </body>
</html>
