//Medina, Daryll
//WD 201
var cal = require('./calculation.js');

//Declaring Variable
var rate = 300;
var hours = 4;
var days = 6;
var tax_rate = 0.1;
var sss = 1200;
var pag_ibig = 300;
var phil_health = 400;

//Formulating the data
var gross_pay = cal.mult_three(rate, hours, days);
var tax = cal.multiplication(gross_pay, tax_rate);
var total_deduction = cal.add(tax, sss, pag_ibig, phil_health);

//Output
console.log('The gross income is ' + gross_pay + '.');
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-ibig fund: ' + pag_ibig);
console.log('PhilHealth: ' + phil_health);
console.log('Total deduction: ' + total_deduction);
console.log('The Net Salary is ' + cal.subtract(gross_pay, total_deduction));
