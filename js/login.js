//Step-1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //Step-2: Get the email address from the email input field
    //Note: Always remember to use .value to get input field text
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //Setp-3: Get Password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //DANGER: Do not verify user and password in the client side
    //Setp-4: Verify Email and Password
    if (email === 'login@gmail.com' && password === 'login') {
        window.location.href = 'bank.html';
    } else {
        alert('Twi Password Vule Gasos!!! Toke Ami Tejjio Sontan Ghosona Korlam');
    }

})