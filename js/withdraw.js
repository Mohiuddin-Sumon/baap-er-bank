// Step - 1: Add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Step-2: Get the withdraw amout from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    //Convert the input into a number by useing parseFloat
    const newWithdrawFieldAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawFieldAmountString);

    // step-7: Clear The Input Field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide a Valid Number');
        return;
    }

    // Step-3: Get Previous Withdraw Total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    //Step-5: Get The Previous Blance Total
    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);



    if (newWithdrawAmount > previousBlanceTotal) {
        alert('Baap er Bank a Eto Tk Nay');
        return;
    }

    // Step-4 : Calculate total withdraw Amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    //Set total withdraw Amount
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // Step-6: Calculet New Blance Total
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
    //Set The New Blance Total
    blanceTotalElement.innerText = newBlanceTotal;




})