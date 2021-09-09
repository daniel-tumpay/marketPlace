let carts = document.querySelectorAll('.addToCart');

let products = [
    {
        name: "Paño Absorbente",
        tag: "pañoabsorbente",
        price: 14,
        inCart: 0,
    },
    {
        name: "Esponja Anatómica",
        tag: "esponjaanatómica",
        price: 23,
        inCart: 0,
    },
    {
        name: "Toallitas Desinfectantes",
        tag: "toallitasdesinfectantes",
        price: 9,
        inCart: 0,
    },
    {
        name: "Lejía Clorox Tradicional",
        tag: "lejíacloroxtradicional",
        price: 6,
        inCart: 0,
    },
    {
        name: "Detergente en polvo Ace 4.0Kg",
        tag: "detergenteenpolvoace4.0kg",
        price: 32,
        inCart: 0,
    },
    {
        name: "Detergente en polvo Bolivar 2.6Kg",
        tag: "detergenteenpolvobolivar2.6kg",
        price: 27,
        inCart: 0,
    },
    {
        name: "Bolsa Basura Rollo 50x70 x 10 Unid",
        tag: "bolsabasurarollo50x70x10unid",
        price: 2,
        inCart: 0,
    },
    {
        name: "Limpiador Mr. Músculo 500 ml",
        tag: "limpiadormr.músculo500ml",
        price: 6,
        inCart: 0,
    },
    {
        name: "Lavavajillas Ayudín + Esponja Scotch Brite",
        tag: "lavavajillasayudín+esponjascotchbrite",
        price: 5,
        inCart: 0,
    },
    {
        name: "Limpiador Poett Botella 1.8 Lt",
        tag: "limpiadorpoettbotella1.8lt",
        price: 7,
        inCart: 0,
    },
    {
        name: "Suavizante Downy Frasco 2.8 Lt",
        tag: "suavizantedownyfrasco2.8lt",
        price: 20,
        inCart: 0,
    },
    {
        name: "Toalla Virutex Contenido 35 Unid",
        tag: "toallavirutexcontenido35unid",
        price: 14,
        inCart: 0,
    },
    {
        name: "Jamón de Pavita Suiza x Kg",
        tag: "jamóndepavitasuizaxkg",
        price: 38,
        inCart: 0,
    }
];

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if ( productNumbers ) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    // let productNumbers = localStorage.getItem('cartNumbers');
    // productNumbers = parseFloat(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.tag;
    
        if( cartItems[currentProduct] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        } 
        cartItems[currentProduct].inCart += 1;

    } else {
        product.inCart = 1;
        cartItems = { 
            [product.tag]: product
        };
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product, action) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {
        
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);

    let productContainer = document.querySelector('.products');
    if ( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += `
            <div class="product">
                <i class="fas fa-times-circle"></i>
                <img src="./img/productosDestacados/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">S/${item.price}.00</div>
            <div class="quantity">
                <i class="fas fa-arrow-alt-circle-left"></i>
                <span>${item.inCart}</span>
                <i class="fas fa-arrow-alt-circle-right"></i>
            </div>
            <div class="total">
                S/${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Basket Total</h4>
            <h4 class="basketTotal">S/${cart}.00</h4>
        </div>`
        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.fas.fa-arrow-alt-circle-left');
    let increaseButtons = document.querySelectorAll('.fas.fa-arrow-alt-circle-right');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "fas fa-arrow-alt-circle-left");
                totalCost(cartItems[currentProduct], "fas fa-arrow-alt-circle-left");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product .fas.fa-times-circle');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();

            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

onLoadCartNumbers();
displayCart();