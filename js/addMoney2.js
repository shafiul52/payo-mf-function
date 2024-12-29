document.getElementById('btn-add-Money')
 .addEventListener('click',function (event){
    event.preventDefault();


    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number')
    // wrong way to verify .do not try it at your serious website .
    if(pinNumber === 1234){
        const balance = getTextFieldValueByid('account-balance');
        console.log(balance, addMoney);
        const newBalance = balance + addMoney;


        document.getElementById('account-balance').innerText = newBalance;


        // add to transactions history
        const p = document.createElement('p');
        p.innerText =`Added:${addMoney} tk. New Balance: ${newBalance}`;
        console.log(p);


        // should be a common functions 
        document.getElementById('transaction-container').appendChild(p);


    }

    else{
        alert('failed to add the money.')
    }
})