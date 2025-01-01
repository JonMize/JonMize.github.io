<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jonathan Mize</title>
  <style>
    body {
      background-color: #1e1e1e;
      color: #ffffff;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #ff4500;
      color: #000000; 
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    }
    .header-text {
      flex: 1;
      text-align: center;
    }
    .header-text a {
      color: #000000;
      text-decoration: none;
      font-weight: bold;
      display: block;
    }
    .header-text p {
      margin: 5px 0;
    }
    .header-image {
      flex: 0.5;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-image img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #000000;
    }
    main {
      padding: 20px;
    }
    h2 {
      color: #ff4500;
      font-size: 1.8em;
      margin-top: 30px;
      border-bottom: 2px solid #ff4500;
      padding-bottom: 5px;
    }
    p {
      font-size: 1em;
      margin: 5px 0;
    }
    a {
      color: #ff4500;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    ul {
      list-style-type: disc;
      margin-left: 20px;
    }
  </style>
</head>
<body>
  <header>
  <div class="header-image">
      <img src="gsu.png" alt="gsu logo">
    </div>
    <div class="header-text">
      <a href="https://www.linkedin.com/in/jonathan-mize-4212b7302">My LinkedIn</a>
      <a href="https://www.github.com/JonMize">My Github</a>
      <a href="mailto:mizejonathanl@gmail.com">mizejonathanl@gmail.com</a>
      <p>404-884-5613</p>
    </div>
    <div class="header-image">
      <img src="headshot.jpg" alt="headshot">
    </div>
  </header>
  <main>
    <h2>Projects</h2>
    <ul>
      <li><a href="https://github.com/JonMize/BookRec">BookRec:</a> A book recommendation app using Flutter, <a href = "https://platform.openai.com/docs/overview">OpenAI API</a>, <a href = "https://developers.google.com/books">Google Books API</a>, and <a href = "https://firebase.google.com/">Google Firebase</a> (Request APK via email)</li>
      <li><a href="https://github.com/JonMize/FoodTracker">FoodTracker</a> A diet tracking app utilizing Python/Flask for backend and data visualization, MySQL for storage, HTML/CSS, Matplotlib (pyPlot), and <a href = "https://platform.fatsecret.com/platform-api">FatSecret API</a></li>
      <li>Project 3: Description of the third project.</li>
    </ul>
    <h2>Experience</h2>
    <ul>
      <li>Job Title 1: Description of the first role.</li>
      <li>Job Title 2: Description of the second role.</li>
      <li>Job Title 3: Description of the third role.</li>
    </ul>
  </main>
</body>
</html>
