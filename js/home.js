

// step-1:add an event handler to the add money button inside the form

document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();
    // step-2: get money to be added to the account
    let amountInput = document.getElementById('input-amount').value;
    // get the pin number provided
    let inputPin = document.getElementById('input-pin').value;
    // step-3:verify pin number 
    if(inputPin === '1234'){
        // step-4:get the current balance
        let balance= document.getElementById('account-balance').innerText;
        // step-5: add amountInput with balance;
        let amountNumber = parseFloat(amountInput);
        let balanceNumber = parseFloat(balance);
        let newBalance = amountNumber + balanceNumber;
        document.getElementById('account-balance').innerText = newBalance;
       
    }
    else{
        alert('Failed to add money! Please try again');
    }

})