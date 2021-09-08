/* Display Local Storage */
displayLocalStorage = () =>{
    const carts = getCart()
    for(const cart in carts){
        disPlayProducts(name)
    }
}
/* Add to get product name and other's information */
addToCart = () =>{
    const fieldInput = document.getElementById('addCartValue')
    const cartProductName = fieldInput.value
    console.log('Product Name', cartProductName)
    /* Cart Product UI */
    if(cartProductName !== ''){
        disPlayProducts(cartProductName)
        /* Product add to local storage */
        addToProductLocalStorage(cartProductName)
    }else{
        alert('Please type add product name')
    }
    fieldInput.value = ''
}
/* Display Cart UI */
disPlayProducts = name =>{
    const rootDiv = document.getElementById('productsList')
    const createLi = document.createElement('li')
    createLi.classList.add('list-group-item')
    createLi.innerText = name
    rootDiv.appendChild(createLi)
}

/* Get Cart  */
getCart = () =>{
    const cart = localStorage.getItem('cart')
    let objectCart;
    if(cart){
        objectCart = JSON.parse(cart)
    }else{
        objectCart = {}
    }
    return objectCart
}

/* Add Product to cart */

addToProductLocalStorage = name =>{
    const cart = getCart()
    // if(cart[productName]){
    //     cart[productName] = cart[productName]+1
    // }else{
    //     cart[productName] = 1
    // }
    cart[name] = 1
    console.log(cart)
    const cartStringingfied = JSON.stringify(cart)
    localStorage.setItem('Product Cart', cartStringingfied)
}
displayLocalStorage()