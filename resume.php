  <?php include "head.php" ?>
    <script type="javascript/text" src="js/resume.js"></script>
    <style>
      h4 {
          margin-bottom: 0;
      }
      hr {
          margin-top: 0;
          border-color: #333;
          border: 0; 
          height: 1px; 
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
      }
    </style>
  </head>
  <title>Bo Broadway - Resume</title>
  <body>
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
      <h4><strong>OBJECTIVE</strong></h4>
      <hr />
      <p id="objective">To turn a hobby into a career. Beginning with a college degree and an 
      entry-level development position, apply a passion for learning and improvement
      toward becoming an experienced software engineer.</p>
    </div>
    <div class="container">
      <h4><strong>SKILLS</strong></h4>
      <hr />
      <p id="skills">College-level programming experience with Java, HTML5, CSS, 
      JavaScript, PHP, and XML. Including database experience using Access, 
      Oracle SQL, and MySQL. Nearly a decade of customer service experience, and 
      5 years working in the Radio Industry managing projects, working autonomously 
      AND on a team, and consistently meeting project deadlines from week to week.</p>
    </div>
    <div class="container">
      <h4><strong>SCHOOL</strong></h4>
      <hr />
      <div id="school" class="container">
        <table width="90%">
          <tr>
            <td><strong>Madison College</strong></td>
            <td><span class="pull-right"><strong>Jan. 2015 - Present</strong></span></td>
          </tr>
          <tr>
            <td>In Progress: Associate's Degree in Web Software Developoment</td>
            <td class="text-muted"><span class="pull-right">Madison, WI</span></td>
          </tr>
          <tr>
            <td>Expected Graduation: Dec. 2016</td>
          </tr>
          <tr><td><br /></td></tr>
          <tr>
            <td><strong>Madison Media Institute</strong></td>
            <td><span class="pull-right"><strong>2004 - 2007</strong></span></td>
          </tr>
          <tr>
            <td>Associate's Degree in Audio Production</td>
            <td class="text-muted"><span class="pull-right">Madison, WI</span></td>
          </tr>
          <tr><td><br /></td></tr>
          <tr>
            <td><strong>Plymouth High School</strong></td>
            <td><span class="pull-right"><strong>1999 - 2003</strong></span></td>
          </tr>
          <tr>
            <td colspan="2" class="text-muted"><span class="pull-right">Plymouth, WI</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="container">
      <h4><strong>WORK EXPERIENCE</strong></h4>
      <hr />
      <div id="work" class="container">
        <table width="90%">
          <tr>
            <td><strong>iHeartMedia, Inc.</strong></td>
            <td><span class="pull-right"><strong>2009 - 2014</strong></span></td>
          </tr>
          <tr>
            <td>Imaging Director/Producer and Morning Show Producer</td>
            <td class="text-muted"><span class="pull-right">Madison, WI</span></td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Produced all in-house station audio production pieces.</li>
                <li>Assisted multiple morning shows with production, promotion 
                <br />and web presence including social media and blog updates.</li>
                <li>Board Operator for live shows when needed.</li>
              </ul>
            </td>
          </tr>
          <tr><td><br /></td></tr>
          <tr>
            <td><strong>CapTel</strong></td>
            <td><span class="pull-right"><strong>2009 - 2011</strong></span></td>
          </tr>
          <tr>
            <td>Captioning Assistant</td>
            <td class="text-muted"><span class="pull-right">Madison, WI</span></td>
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
            <td><span class="pull-right"><strong>2004 - 2009</strong></span></td>
          </tr>
          <tr>
            <td>Grocery Manager</td>
            <td class="text-muted"><span class="pull-right">Plymouth, WI</span></td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Ordering, Stocking, and Managing Inventory.</li>
                <li>Oversaw employees of the Grocery Department.</li>
                <li>Manager On Duty to assist with any of the store needs <br />
                which required versatile knowledge of the entire store.</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>
