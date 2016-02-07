    <?php 
      $relative = "";
      $id = "index";
      include "head.php"; 
    ?>
    <title>Bo Broadway - Home</title>
    </head>
  <body onLoad="locationGlow('<?php echo $id ?>'); displayDate();">
    <?php include "navbar.php"; ?> 
    <div class="container">
      <table width="90%">
        <tr>
          <td><h1>Greetings!</h1></td>
          <td><h3 id="currentdate" class="text-muted text-right"></h3></td>
        </tr>
      </table>
      <hr />
      <p class="text-center">Welcome to www.BoBroadway.com, the host site for my resume and project portfolio!</p>
      <br />
      <p class="text-center">Please take a look!</p>
    </div>
    <div class="container text-center">
      <a class="btn btn-primary btn-lg" href="resume.php">Resume</a>
      <a class="btn btn-primary btn-lg" href="projects/projectDemo.php">Projects</a>
    </div>
  </body>
</html>
