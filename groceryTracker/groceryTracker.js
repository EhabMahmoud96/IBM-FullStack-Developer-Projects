function calculate_total_amount() {
let grocery_item1 = parseFloat(document.getElementById('grocery1').value);
let grocery_item2 = parseFloat(document.getElementById('grocery2').value);
let grocery_item3 = parseFloat(document.getElementById('grocery3').value);

//Calculate total amount
let Total_amount = grocery_item1 + grocery_item2 + grocery_item3 ;

document.getElementById('result').innerText = `The total amount is : $ ${Total_amount} `;
}