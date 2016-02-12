    <?php include "head.php"; ?>
    <title>Bo Broadway - Projects</title>
  </head>
  <body onLoad="locationGlow('projects');">
    <?php include_once("analyticsTracking.php") ?>
    <?php
      $relative = ""; 
      include "navbar.php"; 
      include "projectList.php";
    ?>
  </body> 
</html>
