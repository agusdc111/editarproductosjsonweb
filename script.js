let productsData = {};

function fetchProducts() {
    fetch('/products')
        .then(response => response.json())
        .then(data => {
            productsData = data;
            renderCategories();
        });
}

function renderCategories() {
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = '';

    for (const category in productsData) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';

        const categoryTitle = document.createElement('h2');
        categoryTitle.innerText = category;
        categoryDiv.appendChild(categoryTitle);

        const productList = document.createElement('div');

        productsData[category].forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const productNameInput = document.createElement('input');
            productNameInput.value = product[0];
            productNameInput.oninput = (e) => {
                productsData[category][index][0] = e.target.value;
            };

            const productPriceInput = document.createElement('input');
            productPriceInput.type = 'number';
            productPriceInput.value = product[1];
            productPriceInput.oninput = (e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                    productsData[category][index][1] = value;
                }
            };

            const removeButton = document.createElement('button');
            removeButton.innerText = 'Eliminar';
            removeButton.onclick = () => {
                productsData[category].splice(index, 1);
                renderCategories();
            };

            productDiv.appendChild(productNameInput);
            productDiv.appendChild(productPriceInput);
            productDiv.appendChild(removeButton);
            productList.appendChild(productDiv);
        });

        const addProductButton = document.createElement('button');
        addProductButton.innerText = 'Agregar Producto';
        addProductButton.onclick = () => {
            const newProductName = prompt("Nombre del nuevo producto:");
            const newProductPrice = prompt("Precio del nuevo producto:");
            if (newProductName && !isNaN(newProductPrice)) {
                const newProduct = [newProductName, parseFloat(newProductPrice)];
                productsData[category].push(newProduct);
                renderCategories();
            } else {
                alert("Por favor, ingresa un nombre y un precio válidos.");
            }
        };

        categoryDiv.appendChild(productList);
        categoryDiv.appendChild(addProductButton);
        categoriesDiv.appendChild(categoryDiv);
    }
}

function addCategory() {
    const newCategoryInput = document.getElementById('new-category');
    const newCategory = newCategoryInput.value;

    if (newCategory && !productsData[newCategory]) {
        productsData[newCategory] = [];
        newCategoryInput.value = '';
        renderCategories();
    } else {
        alert('La categoría ya existe o está vacía.');
    }
}

function saveProducts() {
    fetch('/products', {
        method: 'POST',
        headers: {
 'Content-Type': 'application/json',
        },
        body: JSON.stringify(productsData),
    }).then(() => {
        alert("Cambios guardados exitosamente.");
    });
}

// Fetch initial products
fetchProducts();
