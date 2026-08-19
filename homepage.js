let ProfileImage = document.getElementById('ProfileImage')
console.log(ProfileImage)

let storedData = JSON.parse(localStorage.getItem('userDetails'))
console.log(storedData)

let image = storedData.imageUrl
console.log(image)
ProfileImage.src = `${image}`


let allProducts = [
    {
        id: 1,
        productName: "I Phone 17",
        productPrice: 69000,
        productImage: "https://www.bigcmobiles.com/media/catalog/product/cache/e19e56cdd4cf1b4ec073d4305f5db95a/i/p/iphone_17-lavander-3_6.png",
        category: "mobile"
    },
    {
        id: 2,
        productName: "G Shock",
        productPrice: 16500,
        productImage: "https://www.swisstimehouse.com/152781-home_default/casio-g1371-gm-2100bb-1adr-g-shock-mens-watch.jpg",
        category: "watch"
    },
    {
        id: 3,
        productName: "Samsung S25",
        productPrice: 830000,
        productImage: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/i/s/g/-original-imahgfmzraymrnrg.jpeg?q=90",
        category: "mobile"
    },
    {
        id: 4,
        productName: "Apple Watch",
        productPrice: 66000,
        productImage: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-se-202603_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=dFQyNjEycitpbFBFNXA5RHpaQjc1a2YwVXZvYWdoa2NXQndKNFdmSlMzdWZaQno4VzdyOTRhQU93VEhhWjgvSHg4ZHpEbm5XWGdaM3BiNVRDaG55Uk9OM1JTVGtKUFFWc0NQZFFxTkdlYUJBU25Ob2N5dVQyQmxkN0IyWWVHdW0",
        category: "watch"
    },
    {
        id: 5,
        productName: "HP laptop",
        productPrice: 45000,
        productImage: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275777_0_19Kz84BwT.png?updatedAt=1762868566073?tr=w-400",
        category: "laptop"
    },
    {
        id: 6,
        productName: "DELL Laptop",
        productPrice: 43000,
        productImage: "https://m.media-amazon.com/images/I/71Vum7DnVBL._AC_UF1000,1000_QL80_.jpg",
        category: "laptop"
    },
    {
        id: 7,
        productName: "Nothing 3a Pro",
        productPrice: 36000,
        productImage: "https://www.cayroshop.com/_next/image?url=https%3A%2F%2Fd38zpow4716gp5.cloudfront.net%2Fcayroshop%2Fimages%2F1744877153113_1744877153095.webp&w=1080&q=75",
        category: "mobile"
    },
    {
        id: 8,
        productName: "Rolex Watch",
        productPrice: 25500,
        productImage: "https://cdn.shopify.com/s/files/1/0475/6206/4034/files/Rolex_Seadweller.webp?v=1727207533",
        category: "watch"
    },
    {
        id: 9,
        productName: "Vivo V30e",
        productPrice: 38000,
        productImage: "https://m.media-amazon.com/images/I/61vxwwIEnXL._AC_UF1000,1000_QL80_.jpg",
        category: "mobile"
    },
    {
        id: 10,
        productName: "Fastrack Watch",
        productPrice: 6000,
        productImage: "https://backend.paiinternational.in/media/images/1_3RIw8WQ.jpg",
        category: "watch"
    },
    {
        id: 11,
        productName: "LENOVA Laptop",
        productPrice: 38000,
        productImage: "https://m.media-amazon.com/images/I/513bplmZ3VL.jpg",
        category: "laptop"
    },
    {
        id: 12,
        productName: "ASUS Laptop",
        productPrice: 46000,
        productImage: "https://rukminim2.flixcart.com/image/480/640/xif0q/computer/u/6/q/-original-imahg5fugjtn9hb7.jpeg?q=90",
        category: "laptop"
    }
]
console.log(allProducts)


function displayProducts(listOfProducts) {
    let productContainer = document.getElementById('product-container')
    console.log(productContainer)

    if (listOfProducts.length === 0) {
        productContainer.innerHTML = `<h2>No products found</h2>`
    }
    productContainer.innerHTML = listOfProducts.map((prodoct) => `
    <div class="product-card">
            <img src="${prodoct.productImage}" alt="">
            <h2>${prodoct.productName}</h2>
            <p>₹ ${prodoct.productPrice}</p>
            <button onclick="addToCart(${prodoct.id})">Add to Cart🛒</button>

            <button>Add to Wishlist❤️</button>
        </div>
    `).join('')
}
displayProducts(allProducts)


function searchFilter() {
    let text = document.getElementById('search').value.toLowerCase()
    console.log(text)

    let filterData = allProducts.filter((p) => p.productName.toLowerCase().includes(text))
    displayProducts(filterData)
}

function searchCategory(cat) {
    if (cat === "all") {
        displayProducts(allProducts)
    } else {
        let filterData = allProducts.filter((p) => p.category === cat)
        displayProducts(filterData)
    }
}

function addToCart(id){
    let cart=JSON.parse(localStorage.getItem('cart'))||[];
    let product=allProducts.find((p)=>p.id===id)
    cart.push(product)

    localStorage.setItem('cart',JSON.stringify(cart))

    alert(`${product.productName} added to cart`)
}