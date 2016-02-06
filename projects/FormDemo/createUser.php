<!DOCTYPE html>
<html>
	<head>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" 
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" 
          crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" 
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" 
          integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r"
          crossorigin="anonymous">
  </head>
  <body><br />
    <div class="container">
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
