// Initialize count to 0
let count = 0; 

//Creating a function to display the incremented count
function displayCount() {
    document.getElementById("countDisplay").innerText = count;
}

//creating a function to increase the followers count
function increaseCount() {
    count++; //increasing the count by 1
    displayCount(); //Display the count
    checCountValue();//Check count value and display messeges
}

//create check count value 
function checCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! keep it up!");
    }
    }