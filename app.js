function updateProductNumber(product,price,isIncresing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncresing == true){
        productNumber =parseInt(productNumber) + 1;
    }
    else if(productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    
 productInput.value = productNumber;
// update total

    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price ;
    // calculate total
    calculateTotal();
    
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value);
     return productNumber;
}

function calculateTotal(){
    // const phoneInput = document.getElementById('phone-number')
    // const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal ;
    const tax = subTotal / 10;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total').innerText = subTotal + tax;
}

// phone event
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
  
})

document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
});


document.getElementById('case-puls').addEventListener('click',function(){
    
    // const caseInput = document.getElementById('case-number');
    // const caseNumber =caseInput.value;
    // caseInput.value =parseInt(caseNumber) + 1;
    updateProductNumber('case',59,true)
});
document.getElementById('case-minus').addEventListener('click',function(){
// const caseInput = document.getElementById('case-number');
// const caseNumber = caseInput.value;
// caseInput.value = parseInt(caseNumber) - 1;
updateProductNumber('case',59,false);

})