function performOperation() {
    // Get the user input from fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        //perform the operation
            let result = multiply(num1, num2);

            //display The result
            displayResult(result);
    } else {
            displayResult('please enter valid numbers');
     }
    }

    function multiply(a, b) {
        //Introduction a debugger statement to pause execution
        debugger;

        //Multibly the numbers 
        return a * b;
    }

    function displayResult(result) {
        //Display the result in the paragraph element
        const resultElement = document.getElementById('result');
        resultElement.textContent = `The result is: ${result}`;
    } 