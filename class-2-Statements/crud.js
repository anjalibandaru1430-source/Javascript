//Variable
var eid = 101;
console.log(eid);


//Function
function login() {
    console.log("Login successful");
}
login();

//Class
class Account {

}


//Object
var employee = {
    "id": 101,
    "ename": "John Doe",
    "esal": 50000
};
console.log(employee);




//Identifiers rules
//1.Identifiers can contain and begin with letters, digits, underscores, and dollar signs.
var _employeeId = 101;
var $employeeName = "John Doe";
var employee2 = "Jane Smith";
//2.should not start with a digit
//var 2employeeId = 102; // This will cause an error

//3.should not contain any special  charectors/symbols
//var employee-id = 103; // This will cause an error because of the hyphen

//4.should not use keywords as identifiers
//var var = 10; // This will cause an error because 'var' is a keyword

//5.identifiers are case-sensitive
var employeeName = "John Doe";
var EmployeeName = "Jane Smith";
console.log(employeeName);
console.log(EmployeeName);
