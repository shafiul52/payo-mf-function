document.getElementById('btn-cash-out')
.addEventListener('click',function(event){
    event.preventDefault();

    const  cashOut = getInputFieldValueById('input-cash-out');
    const  pinNumber = getInputFieldValueById('input-cash-out-pin');
//    console.log('inside the click handler',cashOut, pinNumber)
if(pinNumber === 1234){
    const balance = getTextFieldValueByid('account-balance');
    const  newBalance = balance -cashOut;
    document.getElementById('account-balance').innerText =newBalance;

}

 else{
    alert( 'no money for  you ...DGM ')
 }
})