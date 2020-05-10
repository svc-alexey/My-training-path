const regForm = () => {
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let pass = document.getElementById("userPass").value;
    let rePass = document.getElementById("userRePass").value;

    let errorText = "";

    if (name == "" || email == "" || pass == "" || rePass == "") {
        errorText += "Enter all Forms";
    } else {
        if (pass !== rePass) errorText += `<span class="errorPass">Password not match</span>`;
        if (pass.length < 3 || pass.length > 15) errorText += " passsword must be 3 - 15 symbols";
    }
    if (errorText !== "") document.getElementById("textError").innerHTML = errorText;
    else document.getElementById("textError").innerHTML = "You has been register";
}