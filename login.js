//login js

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

// email.addEventListner('textInput', email_Verify);
// password.addEventListner('textInput', pass_Verify)




function valid() {
    var pattern = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;

    if (pattern.test(email.value) == false) {
        email.style.border = "1px solid red"
        email_error.style.display = "block"
        email.focus();
        return false;

    }

    if (password.value.length < 4) {
        password.style.border = "1px solid red"
        pass_error.style.display = "block"
        password.focus();
        return false;
    }


}

// function email_Verify() {
//     if (email.value.length >= 8) {
//         email.style.border = "1px solid silver"
//         email_error.style.display = "none"
//         return true;
//     }
// }^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$

// function pass_Verify() {
//     if (password.value.length >= 5) {
//         password.style.border = "1px solid silver"
//         pass_error.style.display = "none"
//         return true;
//     }
// }