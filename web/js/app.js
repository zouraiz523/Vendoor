document.addEventListener('DOMContentLoaded', () => {
    // Store State
    let storeData = {
        name: "",
        slug: "",
        description: "",
        industry: "",
        logo: null,
        cover: null,
        heroImage: null,
        aboutImage: null,
        email: "",
        phone: "",
        address: "",
        currency: "USD",
        language: "en",
        heroTitle: "Serenity Awaits You",
        heroDescription: "Discover premium spa products for your ultimate relaxation experience",
        aboutTitle: "Our Philosophy",
        aboutContent: "",
        showPrices: true,
        showRatings: true,
        showCategories: true,
        showContact: true,
        showSocial: true,
        showQuickLinks: true,
        showNewsletter: true,
        productsPerRow: 4,
        footerCopyright: "",
        navItems: [
            { text: "Home", icon: "home" },
            { text: "Products", icon: "box" }
        ],
        navBackgroundColor: "#ffffff",
        ctaButton: {
            text: "Shop Now",
            bgColor: "#d32b84",
            textColor: "#ffffff",
            size: "medium"
        },
        aboutFormatting: {
            textAlign: "left",
            fontFamily: "Arial, sans-serif",
            textColor: "#333333"
        },
        socialLinks: {
            facebook: "",
            instagram: "",
            gmail: "",
            tiktok: "",
            telegram: "",
            youtube: ""
        },
        quickLinks: [],
        products: []
    };

    // DOM Elements
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const userBtn = document.querySelector('.user-btn');
    const userDropdown = document.querySelector('.user-dropdown');
    const collapseBtn = document.getElementById('collapseBtn');
    const sidebar = document.querySelector('.sidebar');
    const previewStoreBtn = document.getElementById('previewStoreBtn');
    const storeNameInput = document.getElementById('storeName');
    const storeSlugInput = document.getElementById('storeSlug');
    const storeNameDisplay = document.getElementById('storeNameDisplay');
    const saveStoreBtn = document.getElementById('saveStoreBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const toolItems = document.querySelectorAll('.tool-item');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const desktopPreview = document.getElementById('desktopPreview');
    const mobilePreview = document.getElementById('mobilePreview');
    const refreshPreview = document.getElementById('refreshPreview');
    const setupSteps = document.querySelectorAll('.setup-step');
    const mobileNavPreviewBtn = document.getElementById('mobileNavPreviewBtn');
    const mobileNavPreview = document.querySelector('.mobile-nav-preview');
    const navItemsManager = document.getElementById('navItemsManager');
    const addNavItemBtn = document.getElementById('addNavItemBtn');
    const navBgColor = document.getElementById('navBgColor');
    const navBgColorValue = document.getElementById('navBgColorValue');
    const addProductBtn = document.getElementById('addProductBtn');
    const productsManager = document.getElementById('productsManager');
    const addQuickLinkBtn = document.getElementById('addQuickLinkBtn');
    const quickLinksManager = document.getElementById('quickLinksManager');
    const productModal = document.getElementById('productModal');
    const closeProductModal = document.getElementById('closeProductModal');
    const saveProductBtn = document.getElementById('saveProductBtn');
    const cancelProductBtn = document.getElementById('cancelProductBtn');

    // Initialize
    initNavItems();
    initProducts();
    initQuickLinks();
    updatePreview();

    // Mobile navigation preview toggle
    if (mobileNavPreviewBtn) {
        mobileNavPreviewBtn.addEventListener('click', () => {
            if (mobileNavPreview) {
                mobileNavPreview.style.display = mobileNavPreview.style.display === 'none' ? 'flex' : 'none';
            }
        });
    }

    // Theme Toggle
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
        themeToggle.innerHTML = mode === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', mode);
        showToast(`${mode.charAt(0).toUpperCase() + mode.slice(1)} mode activated`);
    });

    // Language Dropdown
    langBtn.addEventListener('click', e => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', e => {
        if (!langDropdown.contains(e.target)) langDropdown.classList.remove('active');
    });

    // User Dropdown
    userBtn.addEventListener('click', e => {
        e.stopPropagation();
        userDropdown.classList.toggle('active');
    });

    document.addEventListener('click', e => {
        if (!userDropdown.contains(e.target)) userDropdown.classList.remove('active');
    });

    // Sidebar Collapse
    collapseBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        collapseBtn.innerHTML = sidebar.classList.contains('collapsed')
            ? '<i class="fas fa-chevron-right"></i>'
            : '<i class="fas fa-chevron-left"></i>';
        showToast(`Sidebar ${sidebar.classList.contains('collapsed') ? 'collapsed' : 'expanded'}`);
    });

    // Preview Store
    previewStoreBtn.addEventListener('click', () => {
        if (!storeData.slug || storeData.slug.trim() === "") {
            showToast('Please enter your store name first', 'error');
            return;
        }
        const storeUrl = `https://vendoora.com/stores/${storeData.slug}`;
        window.open(storeUrl, '_blank');
        showToast('Opening your store preview...');
    });

    // Auto Slug Generator
    storeNameInput.addEventListener('input', function() {
        const slug = this.value.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
        storeSlugInput.value = slug;
        storeData.name = this.value;
        storeData.slug = slug;
        storeNameDisplay.textContent = this.value || 'My Store';
        updatePreview();
    });

    // Input Field Handlers
    const inputFields = [
        'storeSlug', 'storeDesc', 'storeIndustry', 'storeEmail', 'storePhone', 'storeAddress',
        'storeFacebook', 'storeInstagram', 'storeTiktok', 'storeCurrency', 'storeLanguage',
        'storeTerms', 'storePrivacy', 'storeRefund',
        'heroTitle', 'heroDescription', 'aboutTitle', 'aboutContent', 'footerCopyright',
        'facebookUrl', 'instagramUrl', 'gmailUrl', 'tiktokUrl', 'telegramUrl', 'youtubeUrl',
        'ctaText', 'textAlign', 'fontFamily'
    ];

    inputFields.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', function() {
                const key = id.replace('store', '').replace(/^[A-Z]/, c => c.toLowerCase());
                storeData[key] = this.value;
                updatePreview();
            });
        }
    });

    // File Upload Handler
    function handleFileUpload(inputId, property) {
        const fileInput = document.querySelector(`#${inputId} input[type="file"]`);
        const preview = document.getElementById(`${inputId}Preview`);
        
        if (fileInput) {
            fileInput.addEventListener('change', function() {
                if (this.files.length === 0) return;
                
                const file = this.files[0];
                const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];
                
                if (!validTypes.includes(file.type)) {
                    showToast('Invalid file type. Please upload JPG, PNG, SVG or WebP', 'error');
                    this.value = '';
                    return;
                }
                
                if (file.size > 2 * 1024 * 1024) {
                    showToast('File size too large. Max 2MB allowed', 'error');
                    this.value = '';
                    return;
                }
                
                // Add visual feedback
                const container = this.closest('.file-upload');
                container.classList.add('has-file');
                
                const reader = new FileReader();
                reader.onload = e => {
                    storeData[property] = e.target.result;
                    
                    // Show preview
                    preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
                    preview.style.display = 'block';
                    
                    showToast(`${property.replace(/([A-Z])/g, ' $1').toLowerCase()} uploaded`);
                    updatePreview();
                };
                reader.readAsDataURL(file);
            });
        }
    }

    // Initialize file upload handlers
    handleFileUpload('logoUpload', 'logo');
    handleFileUpload('coverUpload', 'cover');
    handleFileUpload('heroImageUpload', 'heroImage');
    handleFileUpload('aboutImageUpload', 'aboutImage');

    // Navigation Bar Functions
    function initNavItems() {
        // Clear existing items
        navItemsManager.innerHTML = '';
        
        // Add items from storeData
        storeData.navItems.forEach((item, index) => {
            addNavItemElement(item, index);
        });
        
        // Update preview
        updateNavPreview();
    }
    
    function addNavItemElement(item, index) {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.draggable = true;
        navItem.dataset.index = index;
        navItem.innerHTML = `
            <span class="nav-item-handle"><i class="fas fa-bars"></i></span>
            <div class="nav-item-content">
                <div class="nav-item-icon"><i class="fas fa-${item.icon}"></i></div>
                <input type="text" class="form-control nav-item-text" value="${item.text}" placeholder="Menu Item">
            </div>
            <div class="nav-item-actions">
                <button class="remove-nav-item"><i class="fas fa-trash"></i></button>
            </div>
        `;
        navItemsManager.appendChild(navItem);
        
        // Add event listeners
        const textInput = navItem.querySelector('.nav-item-text');
        textInput.addEventListener('input', function() {
            storeData.navItems[index].text = this.value;
            updateNavPreview();
        });
        
        const removeBtn = navItem.querySelector('.remove-nav-item');
        removeBtn.addEventListener('click', function() {
            storeData.navItems.splice(index, 1);
            initNavItems();
        });
        
        // Drag and drop handlers
        navItem.addEventListener('dragstart', handleDragStart);
        navItem.addEventListener('dragover', handleDragOver);
        navItem.addEventListener('drop', handleDrop);
        navItem.addEventListener('dragend', handleDragEnd);
    }
    
    function updateNavPreview() {
        const previewNavItems = document.getElementById('previewNavItems');
        previewNavItems.innerHTML = '';
        
        storeData.navItems.forEach(item => {
            const navItem = document.createElement('a');
            navItem.className = 'preview-nav-item';
            navItem.innerHTML = `
                <i class="fas fa-${item.icon}"></i>
                <span>${item.text}</span>
            `;
            previewNavItems.appendChild(navItem);
        });
        
        // Apply background color
        const previewNavbar = document.querySelector('.preview-navbar');
        if (previewNavbar) {
            previewNavbar.style.backgroundColor = storeData.navBackgroundColor;
        }
    }
    
    // Drag and drop variables
    let dragStartIndex;
    
    function handleDragStart(e) {
        dragStartIndex = +this.closest('.nav-item').dataset.index;
        this.classList.add('dragging');
    }
    
    function handleDragOver(e) {
        e.preventDefault();
    }
    
    function handleDrop(e) {
        e.preventDefault();
        const dragEndIndex = +this.dataset.index;
        swapNavItems(dragStartIndex, dragEndIndex);
    }
    
    function handleDragEnd() {
        this.classList.remove('dragging');
    }
    
    function swapNavItems(fromIndex, toIndex) {
        const item = storeData.navItems.splice(fromIndex, 1)[0];
        storeData.navItems.splice(toIndex, 0, item);
        initNavItems();
    }

    // Add new nav item
    addNavItemBtn.addEventListener('click', function() {
        storeData.navItems.push({ text: 'New Item', icon: 'link' });
        initNavItems();
    });

    // Navigation background color
    navBgColor.addEventListener('input', function() {
        storeData.navBackgroundColor = this.value;
        navBgColorValue.textContent = this.value.toUpperCase();
        updateNavPreview();
    });

    // CTA Button Settings
    document.getElementById('ctaBgColor').addEventListener('input', function() {
        storeData.ctaButton.bgColor = this.value;
        updatePreview();
    });
    
    document.getElementById('ctaTextColor').addEventListener('input', function() {
        storeData.ctaButton.textColor = this.value;
        updatePreview();
    });
    
    document.getElementById('ctaSize').addEventListener('change', function() {
        storeData.ctaButton.size = this.value;
        updatePreview();
    });

    // About Section Formatting
    document.getElementById('textColor').addEventListener('input', function() {
        storeData.aboutFormatting.textColor = this.value;
        updatePreview();
    });

    // Product Management
    function initProducts() {
        productsManager.innerHTML = '';
        
        if (storeData.products.length === 0) {
            productsManager.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-box-open"></i>
                    <p>No products added yet</p>
                </div>
            `;
            return;
        }
        
        storeData.products.forEach((product, index) => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <div class="product-image-thumb">
                    ${product.image ? `<img src="${product.image}" alt="${product.name}">` : '<i class="fas fa-box"></i>'}
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${storeData.currency} ${product.price.toFixed(2)}</div>
                </div>
                <div class="product-actions">
                    <button class="edit-product" data-index="${index}"><i class="fas fa-edit"></i></button>
                    <button class="remove-product" data-index="${index}"><i class="fas fa-trash"></i></button>
                </div>
            `;
            productsManager.appendChild(productItem);
        });
        
        // Add event listeners
        document.querySelectorAll('.remove-product').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = this.dataset.index;
                storeData.products.splice(index, 1);
                initProducts();
                updatePreview();
            });
        });
        
        document.querySelectorAll('.edit-product').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = this.dataset.index;
                openProductModal(storeData.products[index], index);
            });
        });
    }
    
    // Add product button
    addProductBtn.addEventListener('click', function() {
        openProductModal(null, -1);
    });
    
    function openProductModal(product, index) {
        if (product) {
            document.getElementById('productName').value = product.name;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('productDescription').value = product.description || '';
            document.getElementById('productCategory').value = product.category || '';
            if (product.image) {
                document.getElementById('productImagePreview').innerHTML = `<img src="${product.image}" alt="Preview">`;
                document.getElementById('productImagePreview').style.display = 'block';
                document.getElementById('productImageUpload').classList.add('has-file');
            }
        } else {
            // Reset form for new product
            document.getElementById('productName').value = '';
            document.getElementById('productPrice').value = '';
            document.getElementById('productDescription').value = '';
            document.getElementById('productCategory').value = '';
            document.getElementById('productImagePreview').innerHTML = '';
            document.getElementById('productImagePreview').style.display = 'none';
            document.getElementById('productImageUpload').classList.remove('has-file');
        }
        
        // Store current index for saving
        productModal.dataset.editIndex = index;
        productModal.style.display = 'block';
    }
    
    // Close modal
    closeProductModal.addEventListener('click', function() {
        productModal.style.display = 'none';
    });
    
    cancelProductBtn.addEventListener('click', function() {
        productModal.style.display = 'none';
    });
    
    // Save product
    saveProductBtn.addEventListener('click', function() {
        const name = document.getElementById('productName').value;
        const price = parseFloat(document.getElementById('productPrice').value);
        const description = document.getElementById('productDescription').value;
        const category = document.getElementById('productCategory').value;
        const image = document.getElementById('productImagePreview').querySelector('img')?.src || null;
        
        if (!name || isNaN(price)) {
            showToast('Please fill all required fields', 'error');
            return;
        }
        
        const product = {
            name,
            price,
            description,
            category,
            image
        };
        
        const index = parseInt(productModal.dataset.editIndex);
        if (index >= 0) {
            // Update existing product
            storeData.products[index] = product;
        } else {
            // Add new product
            storeData.products.push(product);
        }
        
        productModal.style.display = 'none';
        initProducts();
        updatePreview();
        showToast(`Product ${index >= 0 ? 'updated' : 'added'} successfully`);
    });
    
    // Handle product image upload
    document.getElementById('productImageUpload').addEventListener('change', function(e) {
        if (e.target.type === 'file' && e.target.files.length > 0) {
            const file = e.target.files[0];
            const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];
            
            if (!validTypes.includes(file.type)) {
                showToast('Invalid file type. Please upload JPG, PNG, SVG or WebP', 'error');
                e.target.value = '';
                return;
            }
            
            if (file.size > 2 * 1024 * 1024) {
                showToast('File size too large. Max 2MB allowed', 'error');
                e.target.value = '';
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(event) {
                const preview = document.getElementById('productImagePreview');
                preview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
                preview.style.display = 'block';
                this.classList.add('has-file');
            };
            reader.readAsDataURL(file);
        }
    });

    // Quick Links Management
    function initQuickLinks() {
        quickLinksManager.innerHTML = '';
        
        storeData.quickLinks.forEach((link, index) => {
            addQuickLinkElement(link, index);
        });
    }
    
    function addQuickLinkElement(link, index) {
        const linkItem = document.createElement('div');
        linkItem.className = 'quick-link-item';
        linkItem.innerHTML = `
            <input type="text" class="form-control" placeholder="Link Text" value="${link.text || ''}">
            <input type="url" class="form-control" placeholder="URL" value="${link.url || ''}">
            <button class="btn remove-quick-link" data-index="${index}"><i class="fas fa-trash"></i></button>
        `;
        quickLinksManager.appendChild(linkItem);
        
        // Add event listeners
        const textInput = linkItem.querySelector('input[type="text"]');
        const urlInput = linkItem.querySelector('input[type="url"]');
        
        textInput.addEventListener('input', function() {
            storeData.quickLinks[index].text = this.value;
            updatePreview();
        });
        
        urlInput.addEventListener('input', function() {
            storeData.quickLinks[index].url = this.value;
            updatePreview();
        });
        
        const removeBtn = linkItem.querySelector('.remove-quick-link');
        removeBtn.addEventListener('click', function() {
            storeData.quickLinks.splice(index, 1);
            initQuickLinks();
            updatePreview();
        });
    }
    
    // Add new quick link
    addQuickLinkBtn.addEventListener('click', function() {
        storeData.quickLinks.push({ text: '', url: '' });
        initQuickLinks();
    });

    // Preview Mode Controls
    desktopPreview.addEventListener('click', function() {
        desktopPreview.classList.add('active');
        mobilePreview.classList.remove('active');
        document.getElementById('previewContent').classList.remove('mobile-preview');
        showToast('Desktop preview mode activated');
    });

    mobilePreview.addEventListener('click', function() {
        mobilePreview.classList.add('active');
        desktopPreview.classList.remove('active');
        document.getElementById('previewContent').classList.add('mobile-preview');
        showToast('Mobile preview mode activated');
    });

    refreshPreview.addEventListener('click', function() {
        updatePreview();
        showToast('Preview refreshed');
    });

    // Setup Step Toggles
    setupSteps.forEach(step => {
        const header = step.querySelector('.setup-step-header');
        header.addEventListener('click', function() {
            step.classList.toggle('active');
        });
    });

    // Save Store Data
    saveStoreBtn.addEventListener('click', function() {
        if (!storeData.name || !storeData.slug) {
            showToast('Please fill all required fields', 'error');
            return;
        }
        
        const btn = this;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Store Saved!';
            showToast('Store saved and published successfully');
            
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.disabled = false;
            }, 2000);
        }, 1500);
    });

    // Update Preview Function
    function updatePreview() {
        const previewContainer = document.getElementById('storePreview');
        previewContainer.innerHTML = '';
        
        // Show loading state
        const previewLoading = document.getElementById('previewLoading');
        previewLoading.classList.add('active');
        
        setTimeout(() => {
            // Generate preview HTML
            let previewHTML = `
                <div class="preview-section">
                    <header class="store-header">
                        <div class="logo">${storeData.name || 'My Store'}</div>
                    </header>
                    
                    <section class="preview-hero" style="${storeData.heroImage ? `background-image: url(${storeData.heroImage})` : 'background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)'}">
                        <div class="preview-hero-content">
                            <h1>${storeData.heroTitle || 'Welcome to Our Store'}</h1>
                            <p>${storeData.heroDescription || 'Discover our premium collection'}</p>
                            <div class="cta-button-preview" style="
                                background-color: ${storeData.ctaButton.bgColor};
                                color: ${storeData.ctaButton.textColor};
                                padding: ${storeData.ctaButton.size === 'small' ? '0.4rem 1rem' : storeData.ctaButton.size === 'large' ? '0.8rem 2rem' : '0.6rem 1.5rem'};
                                font-size: ${storeData.ctaButton.size === 'small' ? '0.9rem' : storeData.ctaButton.size === 'large' ? '1.2rem' : '1rem'};
                            ">
                                ${storeData.ctaButton.text}
                            </div>
                        </div>
                    </section>
                </div>
            `;
            
            // Products section
            if (storeData.products.length > 0) {
                previewHTML += `
                    <div class="preview-section">
                        <h2 class="section-title">Our Products</h2>
                        <div class="preview-products-grid">
                `;
                
                storeData.products.forEach(product => {
                    previewHTML += `
                        <div class="preview-product-card">
                            <div class="preview-product-image">
                                ${product.image ? `<img src="${product.image}" alt="${product.name}">` : '<i class="fas fa-box"></i>'}
                            </div>
                            <div class="preview-product-info">
                                <h3>${product.name}</h3>
                                ${storeData.showPrices ? `<div class="product-price">${storeData.currency} ${product.price.toFixed(2)}</div>` : ''}
                            </div>
                        </div>
                    `;
                });
                
                previewHTML += `
                        </div>
                    </div>
                `;
            }
            
            // About section
            previewHTML += `
                <div class="preview-section">
                    <h2>${storeData.aboutTitle || 'About Us'}</h2>
                    <div class="format-preview" style="
                        text-align: ${storeData.aboutFormatting.textAlign};
                        font-family: ${storeData.aboutFormatting.fontFamily};
                        color: ${storeData.aboutFormatting.textColor};
                    ">
                        ${storeData.aboutContent || 'Tell your story here...'}
                    </div>
                    ${storeData.aboutImage ? `<div class="about-image"><img src="${storeData.aboutImage}" alt="About Us"></div>` : ''}
                </div>
            `;
            
            // Footer
            previewHTML += `
                <div class="preview-footer">
                    <div class="footer-copyright">${storeData.footerCopyright || '© 2023 My Store'}</div>
                    
                    ${storeData.showSocial ? `
                    <div class="social-icons">
                        ${storeData.socialLinks.facebook ? `<a href="${storeData.socialLinks.facebook}" class="social-icon"><i class="fab fa-facebook-f"></i></a>` : ''}
                        ${storeData.socialLinks.instagram ? `<a href="${storeData.socialLinks.instagram}" class="social-icon"><i class="fab fa-instagram"></i></a>` : ''}
                        ${storeData.socialLinks.gmail ? `<a href="mailto:${storeData.socialLinks.gmail}" class="social-icon"><i class="fas fa-envelope"></i></a>` : ''}
                        ${storeData.socialLinks.tiktok ? `<a href="${storeData.socialLinks.tiktok}" class="social-icon"><i class="fab fa-tiktok"></i></a>` : ''}
                        ${storeData.socialLinks.telegram ? `<a href="${storeData.socialLinks.telegram}" class="social-icon"><i class="fab fa-telegram"></i></a>` : ''}
                        ${storeData.socialLinks.youtube ? `<a href="${storeData.socialLinks.youtube}" class="social-icon"><i class="fab fa-youtube"></i></a>` : ''}
                    </div>
                    ` : ''}
                    
                    ${storeData.showQuickLinks && storeData.quickLinks.length > 0 ? `
                    <div class="quick-links">
                        <h4>Quick Links</h4>
                        ${storeData.quickLinks.map(link => 
                            `<a href="${link.url}">${link.text}</a>`
                        ).join('')}
                    </div>
                    ` : ''}
                </div>
            `;
            
            previewContainer.innerHTML = previewHTML;
            previewLoading.classList.remove('active');
        }, 500);
    }

    // Toast notification
    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = 'toast show';
        toast.style.backgroundColor = type === 'error' ? 'var(--secondary)' : 'var(--primary)';
        
        setTimeout(() => {
            toast.className = 'toast';
        }, 3000);
    }

    // Initialize
    updateNavPreview();
    updatePreview();
});