const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000,Specialization: 'JavaScript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000,Specialization: 'Python'},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 ,Specialization: 'Java'},
      //... More employee records can be added here
    ];

    //creating function to display employees detais
    function displayEmployees() {
         // Function to display all employees
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
  }

//creating function to calculate the total salaries
function calculateTotalSalaries() {
    const totalSalaries =employees.reduce((total, employee) => total + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
    //addition to the assigment by displaying the output in the div field
    document.getElementById('employeesDetails').innerHTML= `<p>The Total Salaries Of The Employees Is: $${totalSalaries}`
} 

//function to display hr  employees 
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR')
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age}: $${employee.salary}-${employee.department}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

//function to find an employee from employees by id
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: $${foundEmployee.salary}- ${foundEmployee.age}- ${foundEmployee.department}</p>`;
    }
    else{
        //if the id isn't found in the employees database (empployees array)
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}


//Creating a function to find by JavaScript Specialized Employee
function findEmployeeSpecializedInJavaScript(){
    const EmployeesSpecializedInJavaScript = employees.find( employee => employee.Specialization === 'JavaScript');
    if (EmployeesSpecializedInJavaScript) {
        document.getElementById('employeesDetails').innerHTML = `<p> Id :${EmployeesSpecializedInJavaScript.id}- Name: ${EmployeesSpecializedInJavaScript.name}- Salary: $${EmployeesSpecializedInJavaScript.salary} - Age: ${EmployeesSpecializedInJavaScript.age}- Department: ${EmployeesSpecializedInJavaScript.department} </p>`;
    } else{
        document.getElementById('employeesDetails').innerHTML = `No Specialized JavaScript Developer is Found`;
    }
}