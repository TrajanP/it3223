const $ = selector => document.querySelector(selector);
const signup = () => {

    let error_message = "";
    //Form Items
    let form = document.getElementById("formID");
    let fname = document.getElementById("fnameID");
    let lname = document.getElementById("lnameID");
    let number = document.getElementById("numberID");
    let email1 = document.getElementById("emailID");
    let email2 = document.getElementById("email2ID");
    
    console.log(email1.value);
    let isValid = true;

    if(email1.value == "") 
    {
        email1.nextElementSibling.textContent = "This field is required."; //Grabs span element and fills it
        isValid = false; 
    } 
    else 
        email1.nextElementSibling.textContent = ""; //Else don't fill span

    if(email2.value == "")
    {
        email2.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    }
    else
        email2.nextElementSibling.textContent = "";

    if(email1.value != email2.value)
    {
        email2.nextElementSibling.textContent = "Must match first email.";
        isValid = false;
    }
    else
        email2.nextElementSibling.textContent = "";

    if(fname.value == "")
    {
        fname.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    }
    else   
        fname.nextElementSibling.textContent = "";

    if(lname.value == "")
    {
        lname.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    }
    else   
        lname.nextElementSibling.textContent = "";

    if(number.value == "")
    {
        number.nextElementSibling.textContent = "This field is required.";
        isValid = false;
    }
    else
        number.nextElementSibling.textContent = "";

    //Submit iif all items valid
    if (isValid) {
        form.submit();
    }

};

const clearEntries = () => {
    document.getElementById("fnameID").value  = "";
    document.getElementById("fnameID").nextElementSibling.textContent  = "";
    document.getElementById("lnameID").value  = "";
    document.getElementById("lnameID").nextElementSibling.textContent  = "";
    document.getElementById("emailID").value  = "";
    document.getElementById("emailID").nextElementSibling.textContent  = "";
    document.getElementById("email2ID").value  = "";
    document.getElementById("email2ID").nextElementSibling.textContent  = "";
    document.getElementById("fnameID").value  = "";
    document.getElementById("fnameID").nextElementSibling.textContent  = "";
    document.getElementById("numberID").value  = "";
    document.getElementById("numberID").nextElementSibling.textContent  = "";
    document.getElementById("textID").checked = true;
    
}

const submit = document.getElementById("submitID");
submit.addEventListener("click", () => {signup()});

const clear = document.getElementById("clearID");
clear.addEventListener("click", () => {clearEntries()});