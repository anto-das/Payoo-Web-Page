// step-1:add event-handler
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // :preventdefault use at form
    event.preventDefault();
    // step-2:get money to added to the account
    let inputAmount = document.getElementById('input-amount').value;
    let inputPin = document.getElementById('input-pin').value;
    // step-3:verify pin number
    if(inputPin ==='1234'){
        // step-4:get the current balance
        let balance = document.getElementById('account-balance').innerText;
        // step-5:added amount with account balance
        let newInputAmount = parseFloat(inputAmount);
        let newBalance = parseFloat(balance);
        let newAmount = newInputAmount + newBalance;
        // step-6:display the newAmount
        document.getElementById('account-balance').innerText =newAmount;
    }
    else{
        alert('Failed Add Money! Please Try Again')
    }
    
})
// step-1:cashOut event-handler
document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    // step-2:get cash out money value
    let cashOutBlnc = document.getElementById('input-cashout-amount').value;
    let cashOutPin = document.getElementById('input-cashout-pin').value;
    //step-3: verify the pin
    if(cashOutPin === '1234'){
        //step-4:get current balance
        let currentBlnc = document.getElementById('account-balance').innerText;
        //step-5: added balance with typeof number
        let newCashOutBalance = parseFloat(cashOutBlnc);
        let newCurrentCashoutBlnc = parseFloat(currentBlnc);
        let cashOutAmount = newCurrentCashoutBlnc - newCashOutBalance;
        // step-6:display the cashout balance
        document.getElementById('account-balance').innerText = cashOutAmount;
    }
    else{
        alert('please check your input data')
    }
})