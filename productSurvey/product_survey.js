// creating a varible called submit button
const submitButton = document.getElementById('submitBtn');

// Creating a submit function
function submitFeedback() {
    //creating variables for the inbuts typed by the user

    const username = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const job = document.getElementById("job").value;
    const designation = document.getElementById("designation").value;
    const productType = document.getElementById("productType").value;
    const feedback = document.getElementById("feedbackText").value;
    const experience = document.getElementById("experience").value;

    //Assigning the values inserted to be displayed in the fields hidden
    document.getElementById('userName').innerHTML = username ; 
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email ;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType ;
    document.getElementById('userFeedback').innerHTML = feedback ;
    document.getElementById("userExperience").innerHTML = experience
    setTimeout(() => alert('Thank you for your valuable feedback'),0);
    document.getElementById('userInfo').style.display = 'block';
}

// when clicking the submit Btn the submitFeedback function is executed
submitButton.onclick = submitFeedback;


// Making sure that the enter key works as the mouse click on submit button
document.addEventListener('keydown', function(event) {
    if(event.key === "Enter"){
        submitFeedback(); 
    }
});