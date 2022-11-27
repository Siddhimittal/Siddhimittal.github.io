let form = document.querySelector("form");

const handleSubmit = (event) => {
    let name = form.elements.name.value;
    let email = form.elements.email.value;
    let date = form.elements.date.value;
    let message = form.elements.message.value;
    let msgforerror = document.querySelector("#error");
    let msgforclear = document.querySelector("#clear");
    if (
        name == "" &&
        email == "" &&
        date == "" &&
        message == ""
    ){
        msgforerror.style = "display:block";
        msgforclear.style = "display:none";
    } else if (name == "") {
        alert("Please fill name and other missing details")
    } else if (email == "") {
        alert("please fill the email and other missing details")
        msgforerror.style = "display:none";
        msgforclear.style = "display:none";
    } else if (message == "") {
        alert("please fill the message and other missing details")
        msgforerror.style = "display:none";
        msgforclear.style = "display:none";
    } else if (date == "") {
        alert("please fill the date and other missing details")
        msgforerror.style = "display:none";
        msgforclear.style = "display:none";
    } else {
        msgforerror.style.display = "none";
        msgforclear.style = "display:block";
        form.elements.name.value = "";
        form.elements.email.value = "";
        form.elements.message.value = "";
        form.elements.date.value = "";
        form.reset();
    }
};
      
  
  



