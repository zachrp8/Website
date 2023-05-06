<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./stylesheets/styles.css">
    <script src="main.js"></script>
    <title>Marywood IMACS</title>
</head>
<body onload="load()">
    <div class="menu-overlay fixed"></div>
        <header class="flex fixed justify-between">
            <div><a href="./index.html" class="active" draggable="false"><img src="images/marywood-logos.png" id="logo" draggable="false"></a> </div>
            <nav id="main-menu" class="none bold">
                <ul class="flex justify-end">
                  <li><a href="./math.html">Math Contest</a></li>
                  <li><a href="./resources.html">Resources</a></li>
                  <li><a href="./team.html">Our Team</a></li>
                  <li><a href="./about.html">About</a></li>
                  <li><a href="./contact.html">Contact</a></li>
                </ul>
            </nav>
            <input type="checkbox" id="hamburger-box" class="menu-shower"></div>
            <label id="hamburger-menu" for="hamburger-box" class="fixed">
                <nav id="sidebar-menu" class="bold">
                    <ul>
                        <li><a href="./math.html">Math Contest</a></li>
                        <li><a href="./resources.html">Resources</a></li>
                        <li><a href="./team.html">Our Team</a></li>
                        <li><a href="./about.html">About</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                    </ul>
                </nav>
            </label>
        </header>
    <main>
        <div id="output" class="text-xl">
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST"){
                $name = $_POST["name"];
                $school = $_POST["school"];
                echo ("Thank you $name from $school in ");
                if ($_POST["grade"]=="ninth") {
                    echo ("ninth grade for");
                } 
                else if ($_POST["grade"]=="tenth") {
                    echo ("tenth grade for");
                }
                else if($_POST["grade"]=="eleventh") {
                    echo ("elevnth grade for");
                }
                else {
                    echo ("twelfth grade for");
                }
               echo(" registering for the Marywood Math Contest. It will take place in April 2024.<br>");
            }
       ?>
        </div>
    </main>
    <footer class="flex pos-rel justify-center align-center">
        <div>
            placeholder for logo
        </div>
        <div>
            icon links to social media
        </div>
        © Marywood University IMACS Club 2023
        <div class="flex">
            <label for="mode">Choose a theme:</label>
            <select name="mode" id="mode" onchange="getStyles()">
                <option value="./stylesheets/styles.css" selected="selected">Light Mode</option>
                <option value="./stylesheets/dark.css">Dark Mode</option>
            </select>
        </div>
        <div class="flex align-center">
            <p>Random Colors: </p>
            <button id="randomizer" onclick="randomcolor()">Rainbow</button>
        </div>
    </footer>
</body> 
</html>