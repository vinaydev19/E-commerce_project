// narbar js code

const OpenBtn = document.querySelector("#OpenBtn");
const Mobilebar = document.querySelector("#Mobilebar");

function openMenu() {
  Mobilebar.classList.toggle("show_menu");
}

OpenBtn.addEventListener("click", () => {
  openMenu();
});

// add to cart js code
const AddtoCart = document.getElementById("AddtoCart");
const openAddtoCart = document.getElementById("openAddtoCart");
const OpenCloesAddtocart = document.getElementById("OpenCloesAddtocart");
const MobileopenAddtoCart = document.getElementById("MobileopenAddtoCart");

MobileopenAddtoCart.addEventListener("click", () => {
  AddtoCart.classList.add("show_Cart");
});

openAddtoCart.addEventListener("click", () => {
  AddtoCart.classList.add("show_Cart");
});
OpenCloesAddtocart.addEventListener("click", () => {
  AddtoCart.classList.remove("show_Cart");
});

// Product Filter and Search js code

let Product = {
  data: [
    // product category mobiles and laptop
    {
      ProductName: "HP Laptop",
      ProductBrand: "HP",
      ProductCategory: "Mobiles&laptop",
      ProductPrice: "39,990",
      ProductImage: "/file/Mobiles & Laptops/product-4.1.jpg",
      ProductId: 1,
    },
    {
      ProductName: "Lenovo V15",
      ProductBrand: "Lenovo",
      ProductCategory: "Mobilesandlaptop",
      ProductPrice: "23,490",
      ProductImage: "/file/Mobiles & Laptops/product-5.1.jpg",
      ProductId: 2,
    },
    // product category TV & Home Entertainment
    {
      ProductName: "Samsung 4K Ultra HD TV",
      ProductBrand: "Samsung",
      ProductCategory: "TVandHomeEntertainment",
      ProductPrice: "31,490",
      ProductImage: "/file/TV & Home Entertainment/product-1.1.jpg",
      ProductId: 6,
    },
    {
      ProductName: "Sony Bravia",
      ProductBrand: "Sony",
      ProductCategory: "TVandHomeEntertainment",
      ProductPrice: "72,990",
      ProductImage: "/file/TV & Home Entertainment/product-2.1.jpg",
      ProductId: 7,
    },
    // Product category Men's Fashion
    {
      ProductName: "Polo Shirt",
      ProductBrand: "Arrow",
      ProductCategory: "MensFashion",
      ProductPrice: "934",
      ProductImage: "/file/MensFashion/product-1-1.jpg",
      ProductId: 11,
    },
    {
      ProductName: "Men's Kurtas",
      ProductBrand: "",
      ProductCategory: "MensFashion",
      ProductPrice: "Jompers",
      ProductImage: "/file/MensFashion/product-2.1.jpg",
      ProductId: 12,
    },

    // product category Books
    {
      ProductName: "Rich Dad Poor Dad",
      ProductBrand: "Robert T. Kiyosaki (Author)",
      ProductCategory: "Books",
      ProductPrice: "200",
      ProductImage: "/file/Books/product-1.1.jpg",
      ProductId: 16,
    },
    {
      ProductName: "THE 48 LAWS OF POWER",
      ProductBrand: "Robert Greene (Author)",
      ProductCategory: "Books",
      ProductPrice: "500",
      ProductImage: "/file/Books/product-2.1.jpg",
      ProductId: 17,
    },
  ],
};

// console.log(Product.data);

for (const i of Product.data) {
  let cart = document.createElement("div");
  cart.dataset.id = i.ProductId;
  cart.classList.add("product-items");

  let image = document.createElement("img");
  image.classList.add("product-img");
  image.src = i.ProductImage;

  cart.appendChild(image);

  let brandSpan = document.createElement("span");
  brandSpan.classList.add("product-categ");
  brandSpan.innerHTML = i.ProductBrand;

  cart.appendChild(brandSpan);

  let prodname = document.createElement("p");
  prodname.classList.add("product-name");
  prodname.innerHTML = i.ProductName;

  cart.appendChild(prodname);

  let starsDiv = document.createElement("div");
  starsDiv.classList.add("stars");

  starsDiv.innerHTML = `        
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-regular fa-star"></i>`;

  cart.appendChild(starsDiv);

  let priceElem = document.createElement("p");
  priceElem.classList.add("product-price");
  priceElem.innerHTML = `₹ ${i.ProductPrice}`;

  cart.appendChild(priceElem);

  let AddtoCart = document.createElement("button");
  AddtoCart.classList.add("ProductView");
  AddtoCart.innerHTML = `Add to Card`;

  cart.appendChild(AddtoCart);

  let ProductList = document.getElementById("product-list");
  ProductList.appendChild(cart);

  // console.log(cart);
  // console.log(ProductList);
}

// add to cart js code
const AddtoCartBtn = document.querySelectorAll(".ProductView");

AddtoCartBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonIndex = Array.from(AddtoCartBtn).indexOf(event.currentTarget);

    const productId = Product.data[buttonIndex].ProductId;
    let cart = document.createElement("div");
    cart.classList.add("AddtoCartList");

    let image = document.createElement("img");
    image.src = Product.data[buttonIndex].ProductImage;

    cart.appendChild(image);

    let ProdName = document.createElement("p");
    ProdName.innerHTML = Product.data[buttonIndex].ProductName;

    cart.appendChild(ProdName);

    let ProductPrice = document.createElement("p");
    ProductPrice.innerHTML = Product.data[buttonIndex].ProductPrice;

    cart.appendChild(ProductPrice);

    let productTreas = document.createElement("i");
    productTreas.innerHTML = ` <i class="fa-solid fa-trash"></i>`;

    cart.appendChild(productTreas);

    console.log(cart);

    document.getElementById("AddtoCartList").appendChild(cart);
  });
});
