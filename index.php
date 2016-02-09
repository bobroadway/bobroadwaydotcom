    <?php include "head.php"; ?>
    <title>Bo Broadway - Home</title>
  </head>
  <body onLoad="locationGlow('index'); displayDate();">
    <?php 
      $relative = "";
      include "navbar.php"; 
    ?> 
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h1>Greetings!</h1>
        </div>
        <div class="col-sm-6">
          <h5 id="currentdate" class="text-muted text-right text-nowrap"></h5>
        </div>
      </div>
      <hr />
      <p class="text-center">Welcome to www.BoBroadway.com, the host site for my resume and project portfolio!</p>
      <br />
      <p class="text-center">Please take a look!</p>
    </div>
    <div class="container text-center">
      <a class="btn btn-primary btn-lg" href="resume.php">Resume</a>
      <a class="btn btn-primary btn-lg" href="projects.php">Projects</a>
    </div>
  </body>
</html>
