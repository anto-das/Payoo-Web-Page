

// step-1:add an event handler to the add money button inside the form

document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();
    // step-2: get money to be added to the account
    let amountInput = document.getElementById('input-amount').value;
    console.log(amountInput);
    // get the pin number provided
    let inputPin = document.getElementById('input-pin').value;
    console.log(inputPin);
})