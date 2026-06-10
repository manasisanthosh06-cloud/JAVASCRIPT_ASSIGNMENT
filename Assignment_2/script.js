function validateForm(){
    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let date = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let nationality = document.getElementById("nationality").value;
    let course = document.getElementById("course").value;
    let specialization = document.getElementById("specialization").value;
    let notes = document.getElementById("notes").value;

    if(firstname === ""){
        alert("Firstname is mandatory");
        return false;
    }

    if(lastname === ""){
        alert("Lastname is mandatory");
        return false;
    }

    if(date === "" || month === "" || year === ""){
        alert("Date of Birth is mandatory");
        return false;
    }

    let gender = document.querySelector('input[name="gender"]:checked');

    if(!gender){
        alert("Please select Gender");
        return false;
    }

    if(nationality === ""){
        alert("Please select Nationality");
        return false;
    }

    if(course === ""){
        alert("Please select Course");
        return false;
    }

    if(specialization === ""){
        alert("Please select Specialization");
        return false;
    }

    if(notes.length > 250){
        alert("Notes must be less than 250 characters");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}
