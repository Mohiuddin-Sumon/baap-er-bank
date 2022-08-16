//Step-1: Add event listener into the Deposit Button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Step-2: Get The Deposit Amount From The Deposit Input Field
    // For input field use .value to get input value from the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step-3: Get the current deposite total
    //For non-inut field use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-4: Add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // Set the Deposit total
    depositTotalElement.innerText = currentDepositTotal;


    // Step-5: Get Blance Current Total

    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);

    // Step - 6: Calculet Current Total Blance
    const currentBlanceTotal = previousBlanceTotal + newDepositAmount;
    // Set the Blance Total
    blanceTotalElement.innerText = currentBlanceTotal;


    // Step-7: Clear The Deposite Field
    depositField.value = '';


})