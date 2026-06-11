function validateForm(){
let fname=document.getElementById("firstname").value.trim();
if(fname==""){
alert("Firstname is mandatory");
return false;
}

let lname=document.getElementById("lastname").value.trim();
if(lname==""){
alert("Lastname is mandatory");
return false;
}

if(document.getElementById("dobDay").value==""
|| document.getElementById("dobMonth").value==""
|| document.getElementById("dobYear").value==""){
alert("Date of Birth is mandatory");
return false;
}

let gender=document.getElementsByName("gender");
let checked=false;

for(let i=0;i<gender.length;i++){
if(gender[i].checked){
checked=true;
}
}

if(!checked){
alert("Select Gender");
return false;
}

if(document.getElementById("nationality").value==""){
alert("Select Nationality");
return false;
}

let email=document.getElementById("email").value.trim();

if(email!=""){
let emailRegex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

if(!emailRegex.test(email)){
alert("Invalid Email");
return false;
}
}

let mobile=document.getElementById("mobile").value.trim();

if(mobile==""){
alert("Mobile Number is mandatory");
return false;
}

let aadhar=document.getElementById("aadhar").value.trim();

if(aadhar==""){
alert("Aadhar Number is mandatory");
return false;
}

if(aadhar.length>16){
alert("Aadhar exceeds 16 characters");
return false;
}

let pan=document.getElementById("pan").value.trim();

if(pan!=""){
let panRegex=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

if(!panRegex.test(pan.toUpperCase())){
alert("Invalid PAN");
return false;
}
}

let passport=document.getElementById("passport").value.trim();

if(passport.length>8){
alert("Passport Number exceeds 8 characters");
return false;
}

for(let i=1;i<=4;i++){

let course=document.getElementById("course"+i);

if(course && course.value.length>20){
alert("Course "+i+" exceeds 20 characters");
return false;
}

let specialization=document.getElementById("specialization"+i);

if(specialization && specialization.value.length>20){
alert("Specialization "+i+" exceeds 20 characters");
return false;
}

let grade=document.getElementById("grade"+i);

if(grade && grade.value.length>20){
alert("Grade "+i+" exceeds 20 characters");
return false;
}
}

for(let i=1;i<=4;i++){

let company=document.getElementById("company"+i);

if(company && company.value.length>30){
alert("Company "+i+" exceeds 30 characters");
return false;
}

let position=document.getElementById("position"+i);

if(position && position.value.length>20){
alert("Position "+i+" exceeds 20 characters");
return false;
}
}

let technical=document.getElementById("technicalResult").value;

if(technical.length>30){
alert("Technical Test Result exceeds 30 characters");
return false;
}

let interviewer=document.getElementById("interviewer").value;

if(interviewer.length>30){
alert("Interviewer exceeds 30 characters");
return false;
}

alert("Form Submitted Successfully");

return true;
}
