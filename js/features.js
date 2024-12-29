document.getElementById('show-add-money-form')
.addEventListener('click', function(){

console.log('show add money button clicker')
   showSectionByid('add-money-form');
})


document.getElementById('show-cash-out-form').addEventListener('click',function(){


    showSectionByid('cash-out-form');
});


document.getElementById('show-transaction-history').addEventListener('click',function(){
  
    showSectionByid('transaction-section');
})

