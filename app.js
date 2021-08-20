function updateCase(isIncresing){
    const caseInput = document.getElementById('case-number');
    const caseNumber =caseInput.value;
    if(isIncresing == true){
        caseInput.value =parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0) {
        caseInput.value = parseInt(caseNumber) - 1;
    }
}



document.getElementById('case-puls').addEventListener('click',function(){
    
    // const caseInput = document.getElementById('case-number');
    // const caseNumber =caseInput.value;
    // caseInput.value =parseInt(caseNumber) + 1;
    updateCase(true)

});
document.getElementById('case-minus').addEventListener('click',function(){
// const caseInput = document.getElementById('case-number');
// const caseNumber = caseInput.value;
// caseInput.value = parseInt(caseNumber) - 1;
updateCase(false);

})