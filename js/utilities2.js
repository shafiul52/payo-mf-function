function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    console.log(id,inputValue, inputNumber);
   
    return inputNumber;
}

function getTextFieldValueByid(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showSectionByid(id){
    
}