// When declaring variables / Identifiers
// 1st Rule = Name has to be unique
// 2nd Rule = Cannot use restricted words such as VAR, LET, CONST , FUNCTION
// 3rd Rule = First letter has to be a LETTER , "_" OR "$"
// let is the preferred method of declaring variables

var VariableName = "Variables Test";

var Var1 = 2;
var Var2 = 8;

//Prints the string stored in the variable
console.log(VariableName);

//Prints the result of the operation Var1 + Var2
console.log (Var1 + Var2);

// let is the preferred way to define Variables NOW
let Var3 = 4;
let Var4 = 5;

console.log(Var3 * Var4);

// Here we are re-assigning the Value of Var3
Var3 = 5;

console.log(Var3 * Var4);

// We can define Variables that have fixed values throughout the script - value cannot be reassigned
const Var5 = 500;

console.log(Var5 * Var1);

// This will throw an error - because Var5 was defined a Const - value cannot be reassigned
Var5 = 250;



