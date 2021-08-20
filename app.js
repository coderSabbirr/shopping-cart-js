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

    const caseTotal = document.getElementById(product + '-total')
    caseTotal.innerText = productNumber * price ;
    
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