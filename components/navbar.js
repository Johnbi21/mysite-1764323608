class ShalomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    background: white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                .navbar-container {
                    background: white;
                    padding: 1rem 0;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #3b82f6;
                }
                .search-container {
                    flex: 1;
                    max-width: 600px;
                    margin: 0 2rem;
                }
                .search-input {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border: 2px solid #3b82f6;
                    border-radius: 0.5rem 0 0 0.5rem;
                    outline: none;
                }
                .search-button {
                    background: #3b82f6;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border: 2px solid #3b82f6;
                    border-radius: 0 0.5rem 0.5rem 0;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .search-button:hover {
                    background: #2563eb;
                }
                .nav-link {
                    color: #4b5563;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                .nav-link:hover {
                    color: #3b82f6;
                }
                .menu-button {
                    display: none;
                }
                .mobile-menu {
                    display: none;
                }
                @media (max-width: 768px) {
                    .search-container {
                        margin: 1rem 0;
                        order: 3;
                        width: 100%;
                    }
                    .menu-button {
                        display: block;
                    }
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu.active {
                        display: block;
                    }
                }
            </style>
            <div class="navbar-container">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div class="flex items-center justify-between">
                            <a href="/" class="logo flex items-center">
                                <i data-feather="shopping-bag" class="w-6 h-6 mr-2"></i>
                                SHALOM.NET
                            </a>
                            <button class="menu-button md:hidden">
                                <i data-feather="menu"></i>
                            </button>
                        </div>
                        
                        <div class="search-container">
                            <form class="flex">
                                <input type="search" placeholder="Rechercher un produit, une marque ou une catégorie..." class="search-input">
                                <button type="submit" class="search-button flex items-center">
                                    <i data-feather="search" class="w-4 h-4"></i>
                                </button>
                            </form>
                        </div>
                        
                        <div class="nav-links flex items-center space-x-6">
                            <a href="/deals" class="nav-link">Promotions</a>
                            <a href="/new" class="nav-link">Nouveautés</a>
                            <a href="/categories" class="nav-link">Catégories</a>
                        </div>
                    </div>
                    
                    <!-- Mobile Menu -->
                    <div class="mobile-menu mt-4 md:hidden">
                        <div class="flex flex-col space-y-4">
                            <a href="/deals" class="nav-link">Promotions</a>
                            <a href="/new" class="nav-link">Nouveautés</a>
                            <a href="/categories" class="nav-link">Catégories</a>
                            <a href="/account" class="nav-link">Mon Compte</a>
                            <a href="/orders" class="nav-link">Commandes</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <script>
                // Mobile menu functionality
                const menuButton = this.shadowRoot.querySelector('.menu-button');
                const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
                
                if (menuButton && mobileMenu) {
                    menuButton.addEventListener('click', function() {
                        mobileMenu.classList.toggle('active');
                    });
                }
            </script>
        `;
    }
}

customElements.define('shalom-navbar', ShalomNavbar);