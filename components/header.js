class ShalomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    background: white;
                    border-bottom: 1px solid #e5e7eb;
                }
                .header-container {
                    background: white;
                    padding: 0.5rem 0;
                    font-size: 0.875rem;
                }
                .header-link {
                    color: #4b5563;
                    transition: color 0.3s ease;
                }
                .header-link:hover {
                    color: #3b82f6;
                }
                .flag {
                    width: 20px;
                    height: 15px;
                    display: inline-block;
                    margin-right: 0.5rem;
                }
                .maroc-flag {
                    background: linear-gradient(to bottom, #006233 33%, transparent 33%, transparent 66%, #c1272d 66%);
                }
            </style>
            <div class="header-container">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-6">
                            <a href="/help" class="header-link flex items-center">
                                <i data-feather="help-circle" class="w-4 h-4 mr-1"></i>
                                Centre d'aide
                            </a>
                            <a href="/sell" class="header-link flex items-center">
                                <i data-feather="dollar-sign" class="w-4 h-4 mr-1"></i>
                                Vendez sur Shalom.Net
                            </a>
                        </div>
                        <div class="flex items-center space-x-6">
                            <div class="flex items-center">
                                <div class="flag maroc-flag"></div>
                                <span class="header-link">Maroc</span>
                            </div>
                            <div class="flex items-center space-x-4">
                                <a href="/account" class="header-link flex items-center">
                                    <i data-feather="user" class="w-4 h-4 mr-1"></i>
                                    Mon Compte
                                </a>
                                <a href="/orders" class="header-link flex items-center">
                                    <i data-feather="package" class="w-4 h-4 mr-1"></i>
                                    Commandes
                                </a>
                                <a href="/wishlist" class="header-link flex items-center">
                                        <i data-feather="heart" class="w-4 h-4 mr-1"></i>
                                        Favoris
                                    </a>
                                    <a href="/cart" class="header-link flex items-center relative">
                                        <i data-feather="shopping-cart" class="w-4 h-4 mr-1"></i>
                                        Panier
                                        <span class="cart-counter absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center" style="display: none;">0</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('shalom-header', ShalomHeader);