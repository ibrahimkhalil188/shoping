
function addItem(product, price, isAdd) {
    const itemInput = document.getElementById(product + "-quantity-input");
    const itemInputText = itemInput.value;
    let itemInputNumber = parseInt(itemInputText);

    if (isAdd == true) {
        itemInput.value = itemInputNumber + 1;
    }
    else if (itemInputNumber > 0) {
        itemInput.value = itemInputNumber - 1;
    }
    itemInputNumber = itemInput.value
    const itemPrice = document.getElementById(product + "-price");
    itemPrice.innerText = price * itemInputNumber;

    document.getElementById("subtotal").innerText = calculation()

    document.getElementById("tex").innerText = (calculation() * 0.1).toFixed(2)

    document.getElementById("grand-total").innerText = calculation() + parseFloat((calculation() * 0.1).toFixed(2));


}

function calculation() {
    const PhonePrice = document.getElementById("phone-price").innerText;
    const casePrice = document.getElementById("case-price").innerText;
    const subtotal = parseFloat(PhonePrice) + parseFloat(casePrice);
    return subtotal;
}

// phone section 

document.getElementById("phone-plus").addEventListener("click", function () {
    addItem("phone", 1219, true)
})

document.getElementById("phone-minus").addEventListener("click", function () {
    addItem("phone", 1219, false)

})

//case section
document.getElementById("case-plus").addEventListener("click", function () {
    addItem("case", 59, true)
})
document.getElementById("case-minus").addEventListener("click", function () {
    addItem("case", 59, false)
})
