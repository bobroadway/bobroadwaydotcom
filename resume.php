    <?php include "head.php"; ?>
    <!-- For Slide Down Transition Effect
    <style>
    .container {
      display: none;
    }
    </style>
	  <script>
	  $(function () {
      $(".container").slideDown(2000);
    });
	  </script> -->
	  <script type="javascript/text" src="js/resume.js"></script>
  </head>
  <title>Bo Broadway - Resume</title>
  <body onLoad="locationGlow('resume');">
    <?php include_once("analyticsTracking.php") ?>
    <?php 
      $relative = "";
      include "navbar.php"; 
    ?>
    <div class="container">
      <h1><strong>BO</strong> BROADWAY</h1>
      <span class="text-muted">3117 Muir Field Rd, Madison, WI, 53719<br />
      <strong>PHONE</strong> (920) 912-4078<br />
      <strong>EMAIL</strong> broadway.bo@gmail.com</span><br /><br />
    </div>
    <div class="container">
      <h4><button class="btn btn-lg resume-head"
                  onClick="$('#objective').slideToggle();"><strong>OBJECTIVE</strong></button></h4>
      <hr />
      <p id="objective">To turn a hobby into a career. Beginning with a college degree and an 
      entry-level development position, apply a passion for learning and improvement
      toward becoming an experienced software engineer.</p>
    </div>
    <div class="container">
      <h4><button class="btn btn-lg resume-head"
                  onClick="$('#skills').slideToggle();"><strong>SKILLS</strong></button></h4>
      <hr />
      <p id="skills">College-level programming experience with Java, HTML5, CSS, 
      JavaScript, PHP, and XML. Including database experience using Access, 
      Oracle SQL, and MySQL. Nearly a decade of customer service experience, and 
      5 years working in the Radio Industry managing projects, working autonomously 
      AND on a team, and consistently meeting project deadlines from week to week.</p>
    </div>
    <div class="container">
      <h4><button class="btn btn-lg resume-head"
                  onClick="$('#school').slideToggle();"><strong>SCHOOL</strong></button></h4>
      <hr />
      <div id="school">
        <table>
          <tr>
            <td><strong>Madison College</strong></td>
            <td class="text-right text-nowrap"><strong>Jan. 2015 - Present</strong></td>
          </tr>
          <tr>
            <td>In Progress: Associate's Degree in Web Software Developoment</td>
            <td class="text-muted text-right">Madison, WI</td>
          </tr>
          <tr>
            <td>Expected Graduation: Dec. 2016</td>
          </tr>
          <tr><td><br /></td></tr>
          <tr>
            <td><strong>Madison Media Institute</strong></td>
            <td class="text-right"><strong>2004 - 2007</strong></td>
          </tr>
          <tr>
            <td>Associate's Degree in Audio Production</td>
            <td class="text-muted text-right">Madison, WI</td>
          </tr>
          <tr><td><br /></td></tr>
          <tr>
            <td><strong>Plymouth High School</strong></td>
            <td class="text-right"><strong>1999 - 2003</strong></td>
          </tr>
          <tr>
            <td></td>
            <td class="text-muted text-right">Plymouth, WI</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="container">
      <h4><button class="btn  btn-lg resume-head"
                  onClick="$('#work').slideToggle();"><strong>WORK EXPERIENCE</strong></button></h4>
      <hr />
      <div id="work">
        <table>
          <tr>
            <td><strong>iHeartMedia, Inc.</strong></td>
            <td class="text-right"><strong>2009 - 2014</strong></td>
          </tr>
          <tr>
            <td>Imaging Director/Producer and Morning Show Producer</td>
            <td class="text-muted text-right">Madison, WI</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Produced all in-house station audio production pieces.</li>
                <li>Assisted multiple morning shows with production, promotion 
                and web presence including social media and blog updates.</li>
                <li>Board Operator for live shows when needed.</li>
              </ul>
            </td>
          </tr>
          <tr><td><br /></td></tr>
          <tr>
            <td><strong>CapTel</strong></td>
            <td class="text-right"><strong>2009 - 2011</strong></td>
          </tr>
          <tr>
            <td>Captioning Assistant</td>
            <td class="text-muted text-right">Madison, WI</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Caption telephone calls for the deaf or hard of hearing, in
                real-time<br /> using voice recognition technology.</li>
              </ul>
            </td>
          </tr>
          <tr><td><br /></td></tr>
          <tr>
            <td><strong>Copps Food Center</strong></td>
            <td class="text-right"><strong>2004 - 2009</strong></td>
          </tr>
          <tr>
            <td>Grocery Manager</td>
            <td class="text-muted text-right text-nowrap">Madison, WI</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Ordering, Stocking, and Managing Inventory.</li>
                <li>Oversaw employees of the Grocery Department.</li>
                <li>Manager On Duty to assist with any of the store needs
                which required versatile knowledge of the entire store.</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>'
    <br />
  </body>
</html>
