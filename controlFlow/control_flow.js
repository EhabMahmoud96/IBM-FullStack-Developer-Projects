let userRole = "admin";
let accessLevel ;
if (userRole === "admin") {
    accessLevel = "full access granted";
} else if (userRole === "manager") {
    accessLevel= "Limited access granted";
} else {
    accessLevel = "no access is granted";
}
console.log("Access level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin";
    } else {
        userMessage = "welcome, User!";
    } 
} else {
        userMessage = "please log in to access the system.";
        }
console.log("User Messege:", userMessage);

let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

//use ternary operator
let isAuthenticated = false;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
//print the answer
console.log("Authentication Status", authenticationStatus);