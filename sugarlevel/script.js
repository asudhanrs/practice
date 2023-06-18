var FastingValue = parseInt(prompt("enter a Fasting Value"));
var PostPrandial = parseInt(prompt("enter a Post Prandial"));
var result = '';
var sugarLevel = (PostPrandial - FastingValue);

if(sugarLevel<140){
result = 'Normal';
}else if(140<=sugarLevel&&sugarLevel<=200){
result = 'Early Diabetes';
}else if(200<=sugarLevel){
result = 'Established Diabetes';
}
document.write("Consuming Glucose Level: ");
document.write(sugarLevel);
document.write("<br>");
document.write("You are: ");
document.write(result);