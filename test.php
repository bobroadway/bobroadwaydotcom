    <?php include "head.php"; ?>
    <title>Bo Broadway - Home</title>
  </head>
  <body onLoad="locationGlow('index');">
    <?php include_once("analyticsTracking.php") ?>
    <?php 
      $relative = "";
      include "navbar.php"; 
    ?> 
    <script>
    var width = $( window ).width();
    var div = document.createElement("div");
    document.body.appendChild(div);
    if (width < 768) {   
        div.innerHTML = "<h1>Your Window Is Too Small</h1>";
    } else {
        div.innerHTML = "<h1>Your Window is GREAT!</h1>";
    }
    </script>
  </body>
</html>
