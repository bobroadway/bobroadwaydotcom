    <?php 
      $relative = "";
      $id = "index";
      include "head.php"; 
    ?>
    <style>
      hr {
            margin-top: 0;
            border-color: #333;
            border: 0; 
            height: 1px; 
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
        }
    </style>
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
      <a onclick="" class="btn btn-primary btn-lg" href="resume.php">Resume</a>
      <a onclick="" class="btn btn-primary btn-lg" href="projects/projectDemo.php">Projects</a>
    </div>
  </body>
</html>
