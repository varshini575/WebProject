let ProfileImage = document.getElementById('ProfileImage')
console.log(ProfileImage)

let storedData = JSON.parse(localStorage.getItem('userDetails'))
console.log(storedData)

let image = storedData.imageUrl
console.log(image)
ProfileImage.src = `${image}`


function displayCartItems(){
    let productContainer = document.getElementById('product-container')
    console.log(productContainer)

    let cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart)

    let total = 0;

    productContainer.innerHTML = cart.map((item, index) =>{
        total += item.productPrice
        return `
        <div class="product-card">
            <img src="${item.productImage}" alt="">
            <h2>${item.productName}</h2>
            <p>₹ ${item.productPrice}</p>
            
            <button onclick="removeItem(${index})">Remove Item</button>


        </div>
        `
    })

         document.getElementById('total').innerText = ` ₹ ${total}/-`
         }
         displayCartItems()

         function removeItem(id) {
            let cart = JSON.parse(localStorage.getItem('cart'))
            cart.splice(id, 1)
            localStorage.setItem('cart', JSON.stringify(cart))
            displayCartItems()
         }