const btn = document.querySelector(".btn");
const input = document.querySelector(".num"); 
const input2 = document.querySelector(".result"); 

btn.addEventListener("click", function() { 
 const numValue = input.value; 
 if (numValue == 82) {
    input2.textContent = "Your degree is 82, then your grade is b."; 
 } else {
       
   input2.textContent = "Please enter 82 for a grade b, or other value for other grade.";
 
    }
});


const btn1 = document.querySelector(".btn1");
const input3 = document.querySelector(".num1"); 
const input4 = document.querySelector(".result1"); 

btn1.addEventListener("click", function() { 
 const num1Value = input3.value; 
 if (num1Value == 82) {
    input4.textContent = "Your degree is 82, then your grade is b."; 
 } else {
       
   input4.textContent = "Please enter 82 for a grade b, or other value for other grade.";
 
    }
});


const btn2 = document.querySelector(".btn2");
const input5 = document.querySelector(".num2"); 
const input6 = document.querySelector(".result2"); 

btn2.addEventListener("click", function() { 
 const num2Value = input5.value; 
 if (num2Value == 200) {
    input6.textContent = "200 Inches = 5.08 Meters"; 
 } else {
       
   input6.textContent = "Please enter 200 ";
 
    }
});
