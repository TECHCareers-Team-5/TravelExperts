var removeCartItemButtons = document.getElementsByClassName('button-remove')
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    var cartPackageContainer = document.getElementsByClassName('cart-package-total')[0]
    var cartRows=cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i <cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = carRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow. getElementsByClassName('input-box')[0]
    }
}