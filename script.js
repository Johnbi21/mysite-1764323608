// Main JavaScript for ShalomNet
document.addEventListener('DOMContentLoaded', function() {
    // Initialize categories
    loadCategories();
    
    // Initialize featured products
    loadFeaturedProducts();
    
    // Initialize flash sales
    loadFlashSales();
    
    // Start flash sales countdown
    startFlashCountdown();
    
    // Initialize search functionality
    initializeSearch();
});

// Mock data for categories
const categories = [
    { id: 1, name: 'Smartphones', icon: 'smartphone', image: 'http://static.photos/technology/200x200/1' },
    { id: 2, name: 'Mode', icon: 'shopping-bag', image: 'http://static.photos/fashion/200x200/1' },
    { id: 3, name: 'Électronique', icon: 'tv', image: 'http://static.photos/electronics/200x200/1' },
    { id: 4, name: 'Maison', icon: 'home', image: 'http://static.photos/home/200x200/1' },
    { id: 5, name: 'Beauté', icon: 'heart', image: 'http://static.photos/beauty/200x200/1' },
    { id: 6, name: 'Supermarché', icon: 'shopping-cart', image: 'http://static.photos/food/200x200/1' },
    { id: 7, name: 'Sport', icon: 'activity', image: 'http://static.photos/sport/200x200/1' },
    { id: 8, name: 'Enfants', icon: 'users', image: 'http://static.photos/kids/200x200/1' },
    { id: 9, name: 'Automobile', icon: 'truck', image: 'http://static.photos/automotive/200x200/1' },
    { id: 10, name: 'Informatique', icon: 'monitor', image: 'http://static.photos/computer/200x200/1' },
    { id: 11, name: 'Livres', icon: 'book', image: 'http://static.photos/books/200x200/1' },
    { id: 12, name: 'Jeux', icon: 'gamepad', image: 'http://static.photos/gaming/200x200/1' }
];

// Mock data for products
const products = [
    { id: 1, name: 'iPhone 14 Pro Max', price: 12999, originalPrice: 14999, discount: 13, image: 'http://static.photos/technology/320x240/1', rating: 4.8 },
    { id: 2, name: 'Samsung Galaxy S23', price: 8999, originalPrice: 10999, discount: 18, image: 'http://static.photos/technology/320x240/2', rating: 4.6 },
    { id: 3, name: 'MacBook Air M2', price: 15999, originalPrice: 17999, discount: 11, image: 'http://static.photos/technology/320x240/3', rating: 4.9 },
    { id: 4, name: 'Nike Air Max', price: 899, originalPrice: 1299, discount: 31, image: 'http://static.photos/sport/320x240/1', rating: 4.4 },
    { id: 5, name: 'Perfume Chanel', price: 1299, originalPrice: 1599, discount: 19, image: 'http://static.photos/beauty/320x240/1', rating: 4.7 },
    { id: 6, name: 'TV Samsung 55"', price: 6999, originalPrice: 8999, discount: 22, image: 'http://static.photos/electronics/320x240/1', rating: 4.5 },
    { id: 7, name: 'PlayStation 5', price: 5999, originalPrice: 7499, discount: 20, image: 'http://static.photos/gaming/320x240/1', rating: 4.8 },
    { id: 8, name: 'Casque Sony WH-1000XM4', price: 2999, originalPrice: 3999, discount: 25, image: 'http://static.photos/electronics/320x240/2', rating: 4.6 },
    { id: 9, name: 'Robot Cuiseur', price: 2499, originalPrice: 3299, discount: 24, image: 'http://static.photos/home/320x240/1', rating: 4.3 },
    { id: 10, name: 'Montre Intelligente', price: 799, originalPrice: 1299, discount: 38, image: 'http://static.photos/technology/320x240/4', rating: 4.2 }
];

function loadCategories() {
    const container = document.getElementById('categories-container');
    if (!container) return;

    container.innerHTML = categories.map(category => `
        <a href="#" class="category-card bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition duration-300">
            <div class="category-icon mb-3">
                <img src="${category.image}" alt="${category.name}" class="w-16 h-16 mx-auto rounded-lg object-cover">
            </div>
            <h3 class="font-semibold text-gray-800 text-sm">${category.name}</h3>
        </a>
    `).join('');
}

function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featuredProducts = products.slice(0, 5);
    container.innerHTML = featuredProducts.map(product => `
        <div class="product-card bg-white rounded-lg overflow-hidden shadow-md">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-semibold text-gray-800 mb-2 text-sm line-clamp-2">${product.name}</h3>
                <div class="flex items-center mb-2">
                    <div class="flex text-yellow-400">
                        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span class="text-gray-500 text-xs ml-2">${product.rating}</span>
                </div>
                <div class="flex items-center justify-between">
                    <div>
                        <span class="text-lg font-bold text-red-600">${product.price} DH</span>
                        <span class="text-sm text-gray-500 line-through ml-2">${product.originalPrice} DH</span>
                    </div>
                    <span class="badge-discount text-xs px-2 py-1 rounded">-${product.discount}%</span>
                </div>
                <button class="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm transition duration-300">
                    Ajouter au panier
                </button>
            </div>
        </div>
    `).join('');
}

function loadFlashSales() {
    const container = document.getElementById('flash-sales');
    if (!container) return;

    const flashProducts = products.slice(5, 11);
    container.innerHTML = flashProducts.map(product => `
        <div class="product-card bg-white rounded-lg overflow-hidden shadow-md">
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover">
                <span class="absolute top-2 left-2 badge-discount text-xs px-2 py-1 rounded">-${product.discount}%</span>
            </div>
            <div class="p-3">
                <h3 class="font-semibold text-gray-800 mb-1 text-xs line-clamp-2">${product.name}</h3>
                <div class="flex items-center justify-between">
                    <span class="text-sm font-bold text-red-600">${product.price} DH</span>
                    <span class="text-xs text-gray-500 line-through">${product.originalPrice} DH</span>
                </div>
                <button class="w-full mt-2 bg-red-600 hover:bg-red-700 text-white py-1 rounded text-xs transition duration-300">
                        Acheter
                    </button>
                </div>
            </div>
        `).join('');
}

function startFlashCountdown() {
    const hoursElement = document.getElementById('flash-hours');
    const minutesElement = document.getElementById('flash-minutes');
    const secondsElement = document.getElementById('flash-seconds');

    if (!hoursElement || !minutesElement || !secondsElement) return;

    let hours = 2;
    let minutes = 45;
    let seconds = 18;

    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            hours = 2;
            minutes = 45;
            seconds = 18;
        }

        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

function initializeSearch() {
    const searchInput = document.querySelector('input[type="search"]');
    const searchButton = document.querySelector('button[type="submit"]');

    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Recherche pour: ${searchTerm}`);
                // In a real implementation, this would redirect to search results page
                // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchButton.click();
            }
        });
    }
}

// Shopping cart functionality
let cart = JSON.parse(localStorage.getItem('shalom-cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('shalom-cart', JSON.stringify(cart));
        updateCartCounter();
        showToast('Produit ajouté au panier!');
    }
}

function updateCartCounter() {
    const cartCounter = document.querySelector('.cart-counter');
    if (cartCounter) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCounter.textContent = totalItems;
        cartCounter.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Wishlist functionality
let wishlist = JSON.parse(localStorage.getItem('shalom-wishlist')) || [];

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product && !wishlist.find(item => item.id === productId)) {
        wishlist.push(product);
        localStorage.setItem('shalom-wishlist', JSON.stringify(wishlist));
        showToast('Produit ajouté aux favoris!');
    }
}

// Initialize cart counter on page load
document.addEventListener('DOMContentLoaded', updateCartCounter);