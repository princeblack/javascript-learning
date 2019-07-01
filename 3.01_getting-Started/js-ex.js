// 1. Declare a variable called name. Assign a string value. Print to screen. 
var name =" mahamadi";
console.log(name);
console.log("==============================================")


// 2. Print to screen that name with a "Schm" in front of it.
console.log("schm" +name);
console.log("==============================================")


// 3. What value does name have now? Comment your answer and then print name to screen to test. 
console.log("name have string type value");
console.log(typeof name);
console.log("==============================================")


// 4. Assign another string value to name. Print to screen. Comment why name has now had two different values.
name = "my soon";
console.log(name);
console.log("name have different value because i changed but the firt value is still there an");
console.log("==============================================")


// 5. Declare a variable called coffee. Assign it a numeric value. 
let coffee = 20 ;
console.log("==============================================")

 
// 6. Print to screen a string that tells us x regularly drinks y cups of coffee per day. 
console.log(`${name} is drinking regularly ${coffee} cups of coffee per day`);
console.log("==============================================")


// 7. Declare a variable called daysBeforeExam. Assign it a numeric value. 
let daysBeforeExam = 10;
console.log("==============================================")


// 8. Print to screen a string that tells us x drinks y cups of coffee with n days before exam.
console.log(`${name} is drinking ${coffee} cups of coffee ${daysBeforeExam} days before going to kita after the holiday`);
console.log("==============================================")


// 9. Making use of `+=` and `-=`, print to screen a string that has x drinking one more cup of coffee, with (n - 1) less days before exam. 
coffee +=1;
console.log(coffee);
daysBeforeExam -=1;
console.log(daysBeforeExam);
console.log(`${name} is drinking ${coffee} cups of coffee ${daysBeforeExam} days before going to kita after the holiday`);
console.log("==============================================")


// 10. What value do coffee and daysBeforeExam currently have? Comment your answer, then print to screen the variables to test. 
console.log("coffee have one more value");
console.log(coffee);
console.log("daysBeforeExam have one more value");
console.log(daysBeforeExam);
console.log("==============================================")


// 12. Declare a variable called schmozzler. Assign it a string value of "Schm". 
var  schmozzler= " is the best";
console.log("==============================================")

// 13. Using the concat() function, print to screen the name variable linked to schmozzler. 
console.log(name.concat(schmozzler));


