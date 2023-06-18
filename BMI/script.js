var age = parseInt(prompt("enter a age"));
var weight = parseInt(prompt("enter a weight"));
var height = parseInt(prompt("enter a height"));
var result = '';
var bmi = (weight/(height*height/10000)).toFixed(1);

if(bmi<18.5){
result = 'Underweight';
}else if(18.5<=bmi&&bmi<=24.9){
result = 'Healthy';
}else if(25<=bmi&&bmi<=29.9){
result = 'Overweight';
}else if(30<=bmi&&bmi<=34.9){
result = 'Obese';
}else if(35<=bmi){
result = 'Extremely obese';
}
document.write("BMI Value: ");
document.write(bmi);
document.write("<br>");
document.write("You are: ");
document.write(result);