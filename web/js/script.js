
    document.addEventListener('DOMContentLoaded', function() {
      // Get all necessary elements
      const menuToggle = document.getElementById('menuToggle');
      const navContainer = document.getElementById('navContainer');
      const mobileOverlay = document.getElementById('mobileOverlay');
      const storeBuilderDropdown = document.getElementById('storeBuilderDropdown');
      const languageDropdown = document.getElementById('languageDropdown');
      const langBtn = document.getElementById('langBtn');
      
      // Mobile menu toggle
      if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', function() {
          navContainer.classList.toggle('active');
          mobileOverlay.classList.toggle('active');
          
          // Change hamburger icon
          const icon = this.querySelector('i');
          if (navContainer.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
          } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        });
      }
      
      // Close mobile menu when overlay is clicked
      if (mobileOverlay) {
        mobileOverlay.addEventListener('click', function() {
          navContainer.classList.remove('active');
          mobileOverlay.classList.remove('active');
          const icon = menuToggle.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        });
      }
      
      // Store Builder dropdown
      if (storeBuilderDropdown) {
        const dropdownToggle = storeBuilderDropdown.querySelector('.dropdown-toggle');
        dropdownToggle.addEventListener('click', function(e) {
          e.preventDefault();
          storeBuilderDropdown.classList.toggle('active');
        });
      }
      
      // Language dropdown
      if (langBtn && languageDropdown) {
        langBtn.addEventListener('click', function(e) {
          e.preventDefault();
          languageDropdown.classList.toggle('active');
        });
        
        // Handle language selection
        const languageLinks = languageDropdown.querySelectorAll('.dropdown-content a[data-lang]');
        languageLinks.forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const selectedLang = this.getAttribute('data-lang');
            const langSpan = langBtn.querySelector('span');
            
            if (langSpan) {
              switch(selectedLang) {
                case 'en':
                  langSpan.textContent = 'EN';
                  break;
                case 'ar':
                  langSpan.textContent = 'AR';
                  break;
                case 'fr':
                  langSpan.textContent = 'FR';
                  break;
                case 'tr':
                  langSpan.textContent = 'TR';
                  break;
                default:
                  langSpan.textContent = 'EN';
              }
            }
            
            languageDropdown.classList.remove('active');
          });
        });
      }
      
      // Close dropdowns when clicking outside
      document.addEventListener('click', function(event) {
        if (storeBuilderDropdown && !storeBuilderDropdown.contains(event.target)) {
          storeBuilderDropdown.classList.remove('active');
        }
        
        if (languageDropdown && !languageDropdown.contains(event.target)) {
          languageDropdown.classList.remove('active');
        }
        
        // Close mobile menu when clicking outside
        if (navContainer && !navContainer.contains(event.target) && !menuToggle.contains(event.target)) {
          navContainer.classList.remove('active');
          mobileOverlay.classList.remove('active');
          const icon = menuToggle.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
      
      // Close mobile menu when clicking on nav links
      const navLinks = document.querySelectorAll('nav a:not(.dropdown-toggle)');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          if (window.innerWidth <= 992) {
            navContainer.classList.remove('active');
            mobileOverlay.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        });
      });
      
      // Testimonial slider functionality
      const dots = document.querySelectorAll('.dot');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      const testimonials = document.querySelectorAll('.testimonial-card');
      let currentSlide = 0;
      
      // Initialize testimonials
      if (testimonials.length > 0) {
        for (let i = 1; i < testimonials.length; i++) {
          testimonials[i].style.display = 'none';
        }
        
        function showSlide(index) {
          testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
          });
          dots.forEach(dot => {
            dot.classList.remove('active');
          });
          testimonials[index].style.display = 'block';
          dots[index].classList.add('active');
          currentSlide = index;
        }
        
        // Dot navigation
        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
            showSlide(index);
          });
        });
        
        // Previous/Next buttons
        if (prevBtn) {
          prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
            showSlide(currentSlide);
          });
        }
        
        if (nextBtn) {
          nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            showSlide(currentSlide);
          });
        }
      }
      
      // Newsletter form submission
      const newsletterForm = document.querySelector('.newsletter-form');
      if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const email = this.querySelector('.newsletter-input').value;
          if (email) {
            alert('Thank you for subscribing!');
            this.querySelector('.newsletter-input').value = '';
          }
        });
      }
      
      // Social link hover effects
      document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        link.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
        });
      });
      
      // Handle window resize
      window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
          navContainer.classList.remove('active');
          mobileOverlay.classList.remove('active');
          storeBuilderDropdown.classList.remove('active');
          languageDropdown.classList.remove('active');
          
          const icon = menuToggle.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });