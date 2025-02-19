let length;
let width;

//create a function called calculateArea
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    // calculate area 
    let area = length * width;
    document.getElementById('result').innerText = `The area of the ractangle is: ${area}`;
}
