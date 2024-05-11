let id = 0;

document.getElementById('buy').addEventListener('click', function () {
    const productElement = document.getElementById('product');
    const quantityElement = document.getElementById('quantity');
    const product = productElement.value;
    const quantity = quantityElement.value;

    const items = {
        id: ++id,
        productName: product.trim(),
        quantity: parseInt(quantity)
    };

    updateLocalStorage(items);

    productElement.value = ' ';
    quantityElement.value = ' ';
})

const updateLocalStorage = item => {
    const cart = JSON.parse(localStorage.getItem('shopping-cart')) || [];
    const existingItem = cart.find(cartItem => cartItem.productName === item.productName);

    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }

    localStorage.setItem('shopping-cart', JSON.stringify(cart));
    updateCartUI();
}

const updateCartUI = () => {
    const cartItems = JSON.parse(localStorage.getItem('shopping-cart'));
    const ul = document.getElementById('cart-item');

    ul.innerHTML = ' ';

    if (cartItems.length === 0) {
        ul.textContent = 'Cart is empty';
    } else {
        cartItems.forEach(item => {
            const li = `<li>${item.productName}, ${item.quantity}</li>`
            ul.insertAdjacentHTML('beforeend', li);
        });
    }
}


updateCartUI();