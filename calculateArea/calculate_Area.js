let length;
let width;

//create a function called calculateArea
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value; 

    // calculate area 
    let area = length * width;
}

//updating the value inside the p tag
document.getElementById('result').innerText = `The area of the ractangle is: $(area)`;
