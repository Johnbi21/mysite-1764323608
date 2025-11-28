class ShalomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    background: #1f2937;
                    color: #d1d5db;
                }
                .footer-container {
                    background: #1f2937;
                    padding: 3rem 0 1rem;
                }
                .footer-section h3 {
                    color: white;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }
                .footer-link {
                    color: #d1d5db;
                    margin-bottom: 0.5rem;
                    display: block;
                    transition: color 0.3s ease;
                }
                .footer-link:hover {
                    color: white;
                }
                .social-icon {
                    color: #d1d5db;
                    transition: color 0.3s ease;
                }
                .social-icon:hover {
                    color: white;
                }
                .app-store {
                    background: black;
                    color: white;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    display: inline-flex;
                    align-items: center;
                    margin-right: 0.5rem;
                }
                .play-store {
                    background: black;
                    color: white;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    display: inline-flex;
                    align-items: center;
                }
            </style>
            <div class="footer-container">
                <div class="container mx-auto px-4">
                    <!-- Main Footer Content -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div class="footer-section">
                            <h3>ACHETER EN LIGNE</h3>
                            <a href="#" class="footer-link">Téléphones & Tablettes</a>
                            <a href="#" class="footer-link">Électronique</a>
                            <a href="#" class="footer-link">Mode</a>
                            <a href="#" class="footer-link">Santé & Beauté</a>
                            <a href="#" class="footer-link">Maison & Cuisine</a>
                        </div>
                        
                        <div class="footer-section">
                            <h3>INFORMATIONS</h3>
                            <a href="/about" class="footer-link">À propos de Shalom.Net</a>
                            <a href="/contact" class="footer-link">Contactez-nous</a>
                            <a href="/careers" class="footer-link">Carrières</a>
                            <a href="/press" class="footer-link">Presse</a>
                        </div>
                        
                        <div class="footer-section">
                            <h3>SERVICE CLIENT</h3>
                            <a href="/help" class="footer-link">Centre d'aide</a>
                            <a href="/returns" class="footer-link">Comment retourner</a>
                            <a href="/delivery" class="footer-link">Modes de livraison</a>
                            <a href="/payment" class="footer-link">Modes de paiement</a>
                        </div>
                        
                        <div class="footer-section">
                            <h3>TÉLÉCHARGEZ NOTRE APP</h3>
                            <div class="flex flex-col space-y-2">
                                <a href="#" class="app-store">
                                    <i data-feather="download" class="w-4 h-4 mr-2"></i>
                                    App Store
                                </a>
                                <a href="#" class="play-store">
                                    <i data-feather="download" class="w-4 h-4 mr-2"></i>
                                    Google Play
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Social Media & Payment Methods -->
                    <div class="border-t border-gray-600 pt-8">
                        <div class="flex flex-col md:flex-row justify-between items-center">
                            <div class="flex space-x-4 mb-4 md:mb-0">
                            <a href="#" class="social-icon">
                                <i data-feather="facebook" class="w-6 h-6"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i data-feather="twitter" class="w-6 h-6"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i data-feather="instagram" class="w-6 h-6"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i data-feather="youtube" class="w-6 h-6"></i>
                            </a>
                        </div>
                        
                        <div class="flex items-center space-x-4">
                            <span>Paiement sécurisé:</span>
                            <div class="flex space-x-2">
                                <i data-feather="credit-card" class="w-8 h-8 text-gray-400"></i>
                            <i data-feather="shield" class="w-8 h-8 text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Copyright -->
                    <div class="text-center mt-8 pt-4 border-t border-gray-600">
                        <p>&copy; 2024 SHALOM.NET. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('shalom-footer', ShalomFooter);