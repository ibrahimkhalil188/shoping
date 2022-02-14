
function addItem(isAdd) {
    const itemInput = document.getElementById("item-quantity-input");
    const itemInputText = itemInput.value;
    let itemInputNumber = parseInt(itemInputText);

    if (isAdd == true) {
        itemInput.value = itemInputNumber + 1;
    }
    else if (itemInputNumber > 0) {
        itemInput.value = itemInputNumber - 1;
    }
    itemInputNumber = itemInput.value
    const itemPrice = document.getElementById("item-price");
    itemPrice.innerText = 1219 * itemInputNumber
}



document.getElementById("plus-button").addEventListener("click", function () {
    addItem(true)
})

document.getElementById("minus-button").addEventListener("click", function () {
    addItem(false)
})