// ============================================
// NAVBAR FUNCTIONALITY
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Close menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// FORM MODAL FUNCTIONALITY
// ============================================

const formModal = document.getElementById('formModal');
const successModal = document.getElementById('successModal');
const openFormBtn = document.getElementById('openFormBtn');
const heroCtaBtn = document.getElementById('heroCtaBtn');
const footerFormBtn = document.getElementById('footerFormBtn');
const closeModal = document.getElementById('closeModal');
const closeSuccessModal = document.getElementById('closeSuccessModal');
const eventForm = document.getElementById('eventForm');
const submitBtn = document.getElementById('submitBtn');
const tipoEventoSelect = document.getElementById('tipoEvento');

// Open form modal
function openFormModal(eventType = '') {
    if (eventType) {
        tipoEventoSelect.value = eventType;
    }
    formModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close form modal
function closeFormModal() {
    formModal.classList.remove('active');
    document.body.style.overflow = '';
    eventForm.reset();
    clearErrors();
}

// Open success modal
function openSuccessModal() {
    formModal.classList.remove('active');
    successModal.style.display = 'flex';
    successModal.classList.add('active');
}

// Close success modal
function closeSuccessModalFunc() {
    successModal.classList.remove('active');
    setTimeout(() => {
        successModal.style.display = 'none';
    }, 300);
    document.body.style.overflow = '';
}

// Event listeners
if (openFormBtn) openFormBtn.addEventListener('click', () => openFormModal());
if (heroCtaBtn) heroCtaBtn.addEventListener('click', () => openFormModal());
if (footerFormBtn) footerFormBtn.addEventListener('click', () => openFormModal());
if (closeModal) closeModal.addEventListener('click', closeFormModal);
if (closeSuccessModal) closeSuccessModal.addEventListener('click', closeSuccessModalFunc);

// Close modal on overlay click
formModal.addEventListener('click', (e) => {
    if (e.target === formModal) {
        closeFormModal();
    }
});

successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeSuccessModalFunc();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (formModal.classList.contains('active')) {
            closeFormModal();
        }
        if (successModal.classList.contains('active')) {
            closeSuccessModalFunc();
        }
    }
});

// Event cards - open form with pre-selected event type
document.querySelectorAll('.btn-event').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const eventType = btn.getAttribute('data-event-type');
        openFormModal(eventType);
    });
});

// ============================================
// FORM VALIDATION
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\+\-\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    input.classList.add('error');
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

function clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    input.classList.remove('error');
    errorMessage.classList.remove('show');
    errorMessage.textContent = '';
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(input => {
        clearError(input);
    });
}

// Real-time validation
const formInputs = eventForm.querySelectorAll('input, select, textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    });
    
    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateField(input);
        }
    });
});

function validateField(input) {
    const value = input.value.trim();
    
    if (input.hasAttribute('required') && !value) {
        showError(input, 'Este campo es obligatorio');
        return false;
    }
    
    if (input.type === 'email' && value && !validateEmail(value)) {
        showError(input, 'Ingresa un email válido');
        return false;
    }
    
    if (input.type === 'tel' && value && !validatePhone(value)) {
        showError(input, 'Ingresa un teléfono válido');
        return false;
    }
    
    clearError(input);
    return true;
}

// ============================================
// FORM SUBMISSION
// ============================================

eventForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    formInputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        return;
    }
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').style.display = 'none';
    submitBtn.querySelector('.btn-loader').style.display = 'inline-block';
    
    // Collect form data
    const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        tipoEvento: document.getElementById('tipoEvento').value,
        personas: document.getElementById('personas').value,
        fecha: document.getElementById('fecha').value,
        notas: document.getElementById('notas').value,
        timestamp: new Date().toISOString()
    };
    
    try {
        // Initialize EmailJS (will be initialized on page load)
        if (typeof emailjs === 'undefined') {
            throw new Error('EmailJS no está cargado');
        }
        
        // Prepare email template parameters
        const templateParams = {
            from_name: formData.nombre,
            from_email: formData.email,
            phone: formData.telefono,
            event_type: formData.tipoEvento,
            people: formData.personas,
            date: formData.fecha,
            message: formData.notas || 'Sin notas adicionales',
            to_email: 'ebanopereiramiradorrestaurante@gmail.com'
        };
        
        // Send email using EmailJS
        await emailjs.send(
            'service_ldilgbs',      // Service ID - Configurado
            'template_gp3o3tk',     // Template ID - Configurado
            templateParams
        );
        
        // Success
        closeFormModal();
        setTimeout(() => {
            openSuccessModal();
        }, 300);
        
    } catch (error) {
        console.error('Error completo:', error);
        console.error('Detalles:', {
            status: error.status,
            text: error.text,
            message: error.message
        });
        
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').style.display = 'inline';
        submitBtn.querySelector('.btn-loader').style.display = 'none';
        
        // Show user-friendly error message
        let errorMessage = 'Hubo un error al enviar tu solicitud. ';
        
        if (error.text && error.text.includes('Invalid grant')) {
            errorMessage = '⚠️ La conexión con Gmail expiró. Por favor, reconecta tu cuenta de Gmail en EmailJS. ';
            errorMessage += 'Mientras tanto, puedes contactarnos directamente por WhatsApp al 310 482 7580.';
        } else if (error.text) {
            errorMessage += `Error: ${error.text}. `;
        } else if (error.message) {
            errorMessage += `Error: ${error.message}. `;
        }
        
        errorMessage += 'Por favor, intenta nuevamente o contáctanos directamente por WhatsApp al 310 482 7580.';
        
        // Show error in modal instead of alert
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error-message';
        errorDiv.style.cssText = 'background: #fee; border: 2px solid #fcc; color: #c33; padding: 16px; border-radius: 8px; margin-bottom: 20px; text-align: center; font-weight: 500;';
        errorDiv.textContent = errorMessage;
        
        const form = document.getElementById('eventForm');
        const existingError = form.querySelector('.form-error-message');
        if (existingError) {
            existingError.remove();
        }
        form.insertBefore(errorDiv, form.firstChild);
        
        // Scroll to error
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remove error after 15 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 15000);
        
        return;
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').style.display = 'inline';
        submitBtn.querySelector('.btn-loader').style.display = 'none';
    }
});

// ============================================
// EMAILJS INITIALIZATION
// ============================================

// EmailJS está inicializado en el HTML con Public Key: 2HXw__rvQyUIqX4FF
// Service ID: service_ldilgbs
// Template ID: template_gp3o3tk

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.why-card, .event-card, .testimonial-card, .instagram-cta-content').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    scrollObserver.observe(el);
});

// Scroll indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

// ============================================
// HERO PARALLAX (Desktop only)
// ============================================

if (window.innerWidth >= 1024) {
    const heroImage = document.querySelector('.hero-image');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight && heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// ============================================
// INITIALIZE ON LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }
});

// ============================================
// PERFORMANCE: Preload critical images
// ============================================

const criticalImages = [
    'images/hero-atardecer.jpg',
    'images/why-section-vista.jpg',
    'images/why-section-espacios.jpg',
    'images/why-section-experiencia.jpg'
];

criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
});

// ============================================
// STATS ANIMATION
// ============================================

function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateStat = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateStat);
            } else {
                stat.textContent = target + (target === 360 ? '°' : target === 1500 ? '' : '+');
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateStat();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
}

// ============================================
// FOOD CAROUSEL
// ============================================

function initFoodCarousel() {
    const carousel = document.getElementById('foodCarousel');
    const prevBtn = document.getElementById('foodPrev');
    const nextBtn = document.getElementById('foodNext');
    
    if (!carousel) return;
    
    // Food images (load dynamically from folder)
    const foodImages = [];
    const foodFolder = 'images/food/';
    const foodFiles = [
        'Gemini_Generated_Image_8eefhc8eefhc8eef.png',
        'Gemini_Generated_Image_8ygk0n8ygk0n8ygk.png',
        'Gemini_Generated_Image_b2wrp3b2wrp3b2wr.png',
        'Gemini_Generated_Image_dwbbx0dwbbx0dwbb.png',
        'Gemini_Generated_Image_k4ok3pk4ok3pk4ok.png',
        'Gemini_Generated_Image_v6w8kav6w8kav6w8.png',
        'Gemini_Generated_Image_w94k70w94k70w94k.png',
        'Generated Image November 29, 2025 - 5_29PM (1).png'
    ];
    
    foodFiles.forEach(file => {
        foodImages.push(foodFolder + file);
    });
    
    // Create carousel items
    foodImages.forEach((src, index) => {
        const item = document.createElement('div');
        item.className = 'food-carousel-item';
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Plato ${index + 1} de Ébano Mirador`;
        img.loading = 'lazy';
        item.appendChild(img);
        carousel.appendChild(item);
    });
    
    // Carousel navigation
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -250, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 250, behavior: 'smooth' });
        });
    }
    
    // Auto-scroll (optional)
    let autoScrollInterval;
    const startAutoScroll = () => {
        autoScrollInterval = setInterval(() => {
            if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: 250, behavior: 'smooth' });
            }
        }, 4000);
    };
    
    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        if (autoScrollInterval) clearInterval(autoScrollInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        startAutoScroll();
    });
    
    startAutoScroll();
}

// ============================================
// FAQ FUNCTIONALITY
// ============================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ============================================
// URGENCY BANNER
// ============================================

function initUrgencyBanner() {
    const banner = document.getElementById('urgencyBanner');
    const closeBtn = document.getElementById('urgencyClose');
    
    if (!banner) return;
    
    // Show banner after 2 seconds
    setTimeout(() => {
        if (!localStorage.getItem('urgencyBannerClosed')) {
            banner.classList.add('show');
            document.body.classList.add('urgency-visible');
        }
    }, 2000);
    
    // Close banner
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            banner.classList.remove('show');
            document.body.classList.remove('urgency-visible');
            localStorage.setItem('urgencyBannerClosed', 'true');
        });
    }
}

// ============================================
// INITIALIZE ALL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }
    
    // Initialize new features
    animateStats();
    initFoodCarousel();
    initFAQ();
    initUrgencyBanner();
});

