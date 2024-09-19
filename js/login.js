// step: 1

document.getElementById('button-login').addEventListener('click', function(event){
    // step:2-pevent default behavior
    event.preventDefault();
    // step:3-get the phone number and pin number 
    let phoneNumber = document.getElementById('phone-num').value;
    let pinNumber = document.getElementById('pin-num').value;
    console.log(phoneNumber, pinNumber);
    // step:4-validate phone and pin
    // this is temporary should do like this.
    if(phoneNumber ==='1234' && pinNumber === '1234'){
        console.log('you are logged in');
        // step:5- allow
        window.location.href = '/Payoo-Web-Page/home.html';
    }
    else{
        alert('wrong phone number or Pin')
    }

})