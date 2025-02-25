//Variables
let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

//functions
function startTest() {
    //Setting the test text
    document.getElementById('inputText').value = testText;

    //Reset results and Timer
    document.getElementById('output').innerHTML = "";
    startTime = new Date().getTime();

    //Changing button text and functionality
    var button = document.getElementById('btn');
    button.innerHTML = "End Text";
    button.onclick = endTest;
}

//End test function
function endTest() {
    endTime = new Date().getTime();

    //Disapling the user input
    document.getElementById('userInput').readOnly = true;

    //calculate time elapsed and words per minute (wpm)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById('userInput').value;

    //split the text using regex to count words correctly
    var typedWords =userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

var wpm = 0; //Default value

if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
}

//Display the results 
var outputDiv = document.getElementById('output');
outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
"<p>Words Typed: " + typedWords + "</p>" +
"<p>Time Elapsed: " + timeElapsed.toFixed(2) + "seconds</p>" +
"<p>Words PEr Minute (WPM): " + wpm + "</p>";

//Reset the button
var button = document.getElementById("btn");
button.innerHTML = "Start Test";
button.onclick = startTest;
}


