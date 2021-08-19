// console.log('I am in a separate file')
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    // console.log(caseNumber);
    if (isIncreasing == true) {
        // caseInput.value = parseInt(caseNumber) + 1;
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) { // Number 0 hole r kaj krbe na
        // caseInput.value = parseInt(caseNumber) - 1;
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update  total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //calculate total
    calculateTotal();
}
//Total
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

function calculateTotal() {
    const phnTotal = getInputValue('phn') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phnTotal + caseTotal;

    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // console.log(subTotal);
    //update on the total subTotal
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
};

//handling phone increase event 
document.getElementById('phn-plus').addEventListener('click', function () {
    // console.log('clicked phone plus');
    updateProductNumber('phn', 1219, true);
});
//handling phone decrease event 
document.getElementById('phn-minus').addEventListener('click', function () {
    updateProductNumber('phn', 1219, false);
});

//Handling case increase event 
document.getElementById('case-plus').addEventListener('click', function () {
    // console.log("case plus clicked");
    updateProductNumber('case', 59, true);
});
//Handling case  decrease event
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
    // console.log(caseNumber);
});