// question 1

var introduction  = ("My name is: ");
var name = "Dekevion";
alert(introduction + name);

//question 2
var qBalance = parseInt(prompt("What is your balance?"));
var lostMoney = qBalance - Number(10);
var newBalance = alert(" You lost 10$. Your new balance is: " + lostMoney);

// question 3

var numberGrade = parseInt(prompt("Enter your number grade."));
var extraCredit = parseInt(prompt("Enter your extra credit."));
var actualGrade = alert("Your grade is: " + (numberGrade + extraCredit));

//question 4

var balance = parseInt(prompt("What is your balance?"));
var deduction = parseInt(prompt("How much do you want to deduct?"));
var remainingBalance = alert("After deductions, your remaining balance is: " + (balance - deduction));
