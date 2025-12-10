// ============================================
// MAIN INITIALIZATION - Todo el código dentro de DOMContentLoaded
// VERSIÓN: verify-emailjs-2025 - Verificación de conexión EmailJS
// ============================================

(function() {
    'use strict';
    
    // Limpiar cualquier caché de funciones anteriores
    if (window.formInitialized) {
        console.log('⚠️ Limpiando versión anterior...');
        delete window.formInitialized;
    }
    
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM ya está cargado
        init();
    }
    
    function init() {
        console.log('🚀 Inicializando aplicación - VERSIÓN verify-emailjs-2025');
        console.log('🔄 Verificación de conexión EmailJS + Logs mejorados');
        
        // Verificar EmailJS después de un breve delay
        setTimeout(() => {
            verifyEmailJSConnection();
        }, 1000);
        
        // Inicializar todas las funcionalidades
        initNavbar();
        initSmoothScroll();
        initFormModal();
        initFormValidation();
        initScrollAnimations();
        initHeroParallax();
        initStats();
        initFoodCarousel();
        initFAQ();
        initUrgencyBanner();
        initDateField();
        
        console.log('✅ Aplicación inicializada correctamente');
    }
    
    // ============================================
    // EMAILJS CONNECTION VERIFICATION
    // ============================================
    
    function verifyEmailJSConnection() {
        console.log('🔍 Verificando conexión con EmailJS...');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        
        // Verificar que EmailJS está cargado
        if (typeof emailjs === 'undefined') {
            console.error('❌ EmailJS SDK no está cargado');
            console.warn('⚠️ El formulario usará WhatsApp como alternativa');
            return false;
        }
        console.log('✅ EmailJS SDK está cargado');
        
        // Verificar que está inicializado
        if (!window.emailjsReady) {
            console.warn('⚠️ EmailJS no está inicializado aún');
            console.log('💡 Esperando inicialización...');
            // Intentar de nuevo después de un delay
            setTimeout(() => {
                if (window.emailjsReady) {
                    verifyEmailJSConnection();
                } else {
                    console.error('❌ EmailJS no se inicializó después del tiempo de espera');
                }
            }, 2000);
            return false;
        }
        console.log('✅ EmailJS está inicializado');
        
        // Verificar que tiene el método send
        if (typeof emailjs.send !== 'function') {
            console.error('❌ EmailJS no tiene el método send disponible');
            return false;
        }
        console.log('✅ Método emailjs.send() está disponible');
        
        // Verificar configuración
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('✅ EmailJS está correctamente configurado:');
        console.log('   📋 Service ID: service_ldilgbs');
        console.log('   📋 Template ID: template_gp3o3tk');
        console.log('   📋 Public Key: 2HXw__rvQyUIqX4FF');
        console.log('   📧 Email destino: ebanopereiramiradorrestaurante@gmail.com');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('✅ Estado: LISTO para enviar emails');
        console.log('💡 Si Gmail fue reconectado en EmailJS, el formulario debería funcionar correctamente');
        console.log('💡 Si aún hay errores, verifica en dashboard.emailjs.com que Gmail esté conectado');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        
        return true;
    }
    
    // ============================================
    // NAVBAR FUNCTIONALITY
    // ============================================
    
    function initNavbar() {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');
        const navbar = document.getElementById('navbar');
        
        if (!menuToggle || !navMenu) return;
        
        // Toggle mobile menu
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Navbar scroll effect
        if (navbar) {
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                if (currentScroll > 100) {
                    navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
                } else {
                    navbar.style.boxShadow = 'none';
                }
            });
        }
    }
    
    // ============================================
    // SMOOTH SCROLL
    // ============================================
    
    function initSmoothScroll() {
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
    }
    
    // ============================================
    // FORM MODAL FUNCTIONALITY
    // ============================================
    
    let formModal, successModal, eventForm, submitBtn, tipoEventoSelect;
    
    function initFormModal() {
        formModal = document.getElementById('formModal');
        successModal = document.getElementById('successModal');
        eventForm = document.getElementById('eventForm');
        submitBtn = document.getElementById('submitBtn');
        tipoEventoSelect = document.getElementById('tipoEvento');
        
        const openFormBtn = document.getElementById('openFormBtn');
        const heroCtaBtn = document.getElementById('heroCtaBtn');
        const footerFormBtn = document.getElementById('footerFormBtn');
        const closeModal = document.getElementById('closeModal');
        const closeSuccessModal = document.getElementById('closeSuccessModal');
        
        if (!formModal || !successModal || !eventForm) {
            console.warn('⚠️ Elementos del formulario no encontrados');
            return;
        }
        
        // Open form modal
        function openFormModal(eventType = '') {
            if (eventType && tipoEventoSelect) {
                tipoEventoSelect.value = eventType;
            }
            if (formModal) {
                formModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
        
        // Close form modal
        function closeFormModal() {
            if (formModal) {
                formModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (eventForm) {
                eventForm.reset();
                clearErrors();
            }
        }
        
        // Open success modal
        function openSuccessModal() {
            if (formModal) formModal.classList.remove('active');
            if (successModal) {
                successModal.style.display = 'flex';
                successModal.classList.add('active');
            }
        }
        
        // Close success modal
        function closeSuccessModalFunc() {
            if (successModal) {
                successModal.classList.remove('active');
                setTimeout(() => {
                    if (successModal) {
                        successModal.style.display = 'none';
                    }
                }, 300);
            }
            document.body.style.overflow = '';
        }
        
        // Event listeners
        if (openFormBtn) openFormBtn.addEventListener('click', () => openFormModal());
        if (heroCtaBtn) heroCtaBtn.addEventListener('click', () => openFormModal());
        if (footerFormBtn) footerFormBtn.addEventListener('click', () => openFormModal());
        if (closeModal) closeModal.addEventListener('click', closeFormModal);
        if (closeSuccessModal) closeSuccessModal.addEventListener('click', closeSuccessModalFunc);
        
        // Close modal on overlay click
        if (formModal) {
            formModal.addEventListener('click', (e) => {
                if (e.target === formModal) {
                    closeFormModal();
                }
            });
        }
        
        if (successModal) {
            successModal.addEventListener('click', (e) => {
                if (e.target === successModal) {
                    closeSuccessModalFunc();
                }
            });
        }
        
        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (formModal && formModal.classList.contains('active')) {
                    closeFormModal();
                }
                if (successModal && successModal.classList.contains('active')) {
                    closeSuccessModalFunc();
                }
            }
        });
        
        // Event cards - Si EmailJS funciona, abre formulario. Si no, redirige a WhatsApp
        document.querySelectorAll('.btn-event').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const eventType = btn.getAttribute('data-event-type');
                
                // Verificar si EmailJS está disponible
                if (typeof emailjs === 'undefined' || !window.emailjsReady || window.emailjsFailed) {
                    // EmailJS no funciona - Redirigir directamente a WhatsApp
                    console.log('⚠️ EmailJS no disponible - Redirigiendo a WhatsApp para:', eventType);
                    const whatsappMessage = encodeURIComponent(
                        `Hola Ébano Mirador 👋\n\n` +
                        `Me interesa información sobre: *${eventType}*\n\n` +
                        `¿Podrían ayudarme con más detalles?`
                    );
                    window.open(`https://wa.me/573104827580?text=${whatsappMessage}`, '_blank');
                } else {
                    // EmailJS funciona - Abrir formulario
                    openFormModal(eventType);
                }
            });
        });
        
        // Guardar funciones globalmente para uso en otras funciones
        window.openFormModal = openFormModal;
        window.closeFormModal = closeFormModal;
        window.openSuccessModal = openSuccessModal;
    }
    
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
        // Validación estricta - nunca acceder a propiedades sin verificar
        if (!input) return;
        if (typeof input !== 'object') return;
        if (!message) return;
        
        try {
            // Verificar que input tenga el método closest
            if (typeof input.closest !== 'function') return;
            
            const formGroup = input.closest('.form-group');
            if (!formGroup) return;
            
            // Verificar que formGroup tenga querySelector
            if (typeof formGroup.querySelector !== 'function') return;
            
            const errorMessage = formGroup.querySelector('.error-message');
            
            // Validación estricta antes de acceder a propiedades
            if (errorMessage && typeof errorMessage === 'object') {
                if (typeof errorMessage.textContent !== 'undefined') {
                    errorMessage.textContent = message;
                }
                
                if (errorMessage.classList && 
                    typeof errorMessage.classList === 'object' &&
                    typeof errorMessage.classList.add === 'function') {
                    errorMessage.classList.add('show');
                }
            }
            
            // Validación estricta antes de acceder a classList del input
            if (input.classList && 
                typeof input.classList === 'object' &&
                typeof input.classList.add === 'function') {
                input.classList.add('error');
            }
        } catch (err) {
            // Silenciar errores para no llenar la consola
            if (console && typeof console.warn === 'function') {
                console.warn('Error al mostrar error (manejado):', err.message || err);
            }
        }
    }
    
    function clearError(input) {
        // Validación estricta - nunca acceder a propiedades sin verificar
        if (!input) return;
        if (typeof input !== 'object') return;
        
        try {
            // Verificar que input tenga el método closest
            if (typeof input.closest !== 'function') return;
            
            const formGroup = input.closest('.form-group');
            if (!formGroup) return;
            
            // Verificar que formGroup tenga querySelector
            if (typeof formGroup.querySelector !== 'function') return;
            
            const errorMessage = formGroup.querySelector('.error-message');
            
            // Validación estricta antes de acceder a classList
            if (errorMessage && 
                typeof errorMessage === 'object' && 
                errorMessage.classList && 
                typeof errorMessage.classList === 'object' &&
                typeof errorMessage.classList.remove === 'function') {
                errorMessage.classList.remove('show');
                if (typeof errorMessage.textContent !== 'undefined') {
                    errorMessage.textContent = '';
                }
            }
            
            // Validación estricta antes de acceder a classList del input
            if (input.classList && 
                typeof input.classList === 'object' &&
                typeof input.classList.remove === 'function') {
                input.classList.remove('error');
            }
        } catch (err) {
            // Silenciar errores para no llenar la consola, pero loggear en desarrollo
            if (console && typeof console.warn === 'function') {
                console.warn('Error al limpiar error (manejado):', err.message || err);
            }
        }
    }
    
    function clearErrors() {
        try {
            const errorInputs = document.querySelectorAll('.error');
            if (errorInputs && errorInputs.length > 0) {
                errorInputs.forEach(input => {
                    if (input && input.closest('.form-group')) {
                        clearError(input);
                    }
                });
            }
        } catch (err) {
            console.warn('Error al limpiar errores:', err);
        }
    }
    
    function validateField(input) {
        if (!input) return true;
        
        const value = input.value ? input.value.trim() : '';
        
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
        
        // Clear error if valid - con validación estricta
        try {
            if (input && 
                typeof input === 'object' &&
                typeof input.closest === 'function') {
                const formGroup = input.closest('.form-group');
                if (formGroup) {
                    clearError(input);
                }
            }
        } catch (err) {
            // Error manejado silenciosamente
            if (console && typeof console.warn === 'function') {
                console.warn('Error al limpiar error del campo (manejado):', err.message || err);
            }
        }
        
        return true;
    }
    
    function initFormValidation() {
        if (!eventForm) {
            console.warn('⚠️ Formulario no encontrado para validación');
            return;
        }
        
        const formInputs = eventForm.querySelectorAll('input, select, textarea');
        
        if (!formInputs || formInputs.length === 0) {
            console.warn('⚠️ No se encontraron campos del formulario');
            return;
        }
        
        // Real-time validation - con validaciones estrictas
        formInputs.forEach(input => {
            if (!input) return;
            if (typeof input !== 'object') return;
            if (typeof input.addEventListener !== 'function') return;
            
            // Validación en blur
            try {
                input.addEventListener('blur', () => {
                    if (input && typeof input === 'object') {
                        validateField(input);
                    }
                });
            } catch (err) {
                console.warn('Error al agregar listener blur:', err);
            }
            
            // Validación en input (solo si ya tiene error)
            try {
                input.addEventListener('input', () => {
                    if (input && 
                        typeof input === 'object' &&
                        input.classList && 
                        typeof input.classList === 'object' &&
                        typeof input.classList.contains === 'function' &&
                        input.classList.contains('error')) {
                        validateField(input);
                    }
                });
            } catch (err) {
                console.warn('Error al agregar listener input:', err);
            }
        });
        
        // Form submission
        eventForm.addEventListener('submit', handleFormSubmit);
    }
    
    async function handleFormSubmit(e) {
        e.preventDefault();
        
        if (!eventForm || !submitBtn) return;
        
        // Get form inputs dynamically
        const formInputs = eventForm.querySelectorAll('input, select, textarea');
        
        // Validate all fields
        let isValid = true;
        formInputs.forEach(input => {
            if (input && !validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            return;
        }
        
        // Disable submit button
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        
        if (btnText) btnText.style.display = 'none';
        if (btnLoader) btnLoader.style.display = 'inline-block';
        submitBtn.disabled = true;
        
        // Collect form data
        const formData = {
            nombre: document.getElementById('nombre')?.value || '',
            email: document.getElementById('email')?.value || '',
            telefono: document.getElementById('telefono')?.value || '',
            tipoEvento: document.getElementById('tipoEvento')?.value || '',
            personas: document.getElementById('personas')?.value || '',
            fecha: document.getElementById('fecha')?.value || '',
            notas: document.getElementById('notas')?.value || '',
            timestamp: new Date().toISOString()
        };
        
        try {
            console.log('📋 Iniciando envío del formulario...');
            console.log('📋 Datos del formulario:', formData);
            
            // Verificar EmailJS
            let attempts = 0;
            const maxAttempts = 100;
            
            while ((typeof emailjs === 'undefined' || !window.emailjsReady) && attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 100));
                attempts++;
            }
            
            // Si EmailJS no está disponible, redirigir a WhatsApp
            if (typeof emailjs === 'undefined' || !window.emailjsReady || window.emailjsFailed) {
                console.warn('⚠️ EmailJS no disponible - Redirigiendo a WhatsApp');
                const whatsappMessage = encodeURIComponent(
                    `Hola Ébano Mirador 👋\n\n` +
                    `Quiero información sobre mi evento:\n\n` +
                    `*Tipo de Evento:* ${formData.tipoEvento}\n` +
                    `*Número de Personas:* ${formData.personas}\n` +
                    `*Fecha Tentativa:* ${formData.fecha}\n` +
                    `*Nombre:* ${formData.nombre}\n` +
                    `*Email:* ${formData.email}\n` +
                    `*Teléfono:* ${formData.telefono}\n` +
                    (formData.notas ? `*Notas:* ${formData.notas}` : '')
                );
                window.open(`https://wa.me/573104827580?text=${whatsappMessage}`, '_blank');
                
                // Cerrar modal
                if (window.closeFormModal) window.closeFormModal();
                return;
            }
            
            // Verificar que EmailJS tiene el método send
            if (typeof emailjs.send !== 'function') {
                throw new Error('EmailJS no está completamente inicializado');
            }
            
            // Preparar parámetros para EmailJS
            const templateParams = {
                from_name: formData.nombre.trim(),
                from_email: formData.email.trim(),
                phone: formData.telefono.trim(),
                event_type: formData.tipoEvento,
                people: formData.personas,
                date: formData.fecha,
                message: (formData.notas || '').trim() || 'Sin notas adicionales',
                to_email: 'ebanopereiramiradorrestaurante@gmail.com'
            };
            
            console.log('📤 Enviando email con EmailJS...');
            console.log('📋 Configuración EmailJS:');
            console.log('   - Service ID: service_ldilgbs');
            console.log('   - Template ID: template_gp3o3tk');
            console.log('   - Parámetros:', templateParams);
            
            // Enviar con EmailJS
            let response;
            try {
                response = await emailjs.send(
                    'service_ldilgbs',
                    'template_gp3o3tk',
                    templateParams
                );
                
                console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                console.log('✅ RESPUESTA DE EMAILJS:');
                console.log('   Status:', response.status);
                console.log('   Text:', response.text);
                console.log('   Email ID:', response.text || 'N/A');
                console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                
                // Verificar que el envío fue exitoso
                if (response.status === 200) {
                    console.log('🎉 ¡EMAIL ENVIADO EXITOSAMENTE!');
                    console.log('📧 El correo debería llegar a: ebanopereiramiradorrestaurante@gmail.com');
                    console.log('✅ Revisa la bandeja de entrada (y spam) del email destino');
                    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                    
                    // Success - Cerrar modal del formulario
                    if (window.closeFormModal) window.closeFormModal();
                    
                    // Mostrar modal de éxito después de un breve delay
                    setTimeout(() => {
                        if (window.openSuccessModal) {
                            window.openSuccessModal();
                            console.log('✅ Modal de éxito mostrado');
                        }
                    }, 300);
                } else {
                    throw new Error(`EmailJS respondió con status ${response.status}`);
                }
            } catch (sendError) {
                console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                console.error('❌ ERROR AL ENVIAR CON EMAILJS:');
                console.error('   Error completo:', sendError);
                console.error('   Status:', sendError.status);
                console.error('   Text:', sendError.text);
                console.error('   Message:', sendError.message);
                console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                
                // Si es error 412, dar instrucciones específicas
                if (sendError.status === 412 || (sendError.text && sendError.text.includes('Invalid grant'))) {
                    console.error('💡 SOLUCIÓN: Ve a dashboard.emailjs.com y reconecta tu cuenta de Gmail');
                    console.error('💡 Mientras tanto, el formulario redirigirá automáticamente a WhatsApp');
                }
                
                // Re-lanzar el error para que se maneje en el catch principal
                throw sendError;
            }
            
        } catch (error) {
            console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.error('❌ ERROR GENERAL AL ENVIAR FORMULARIO:');
            console.error('   Error completo:', error);
            console.error('   Status:', error.status);
            console.error('   Text:', error.text);
            console.error('   Message:', error.message);
            console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            
            // Detectar si es el error 412 de Gmail (conexión expirada)
            const isGmailConnectionError = 
                error.status === 412 || 
                (error.text && (error.text.includes('Invalid grant') || error.text.includes('Gmail_API'))) ||
                (error.message && (error.message.includes('Invalid grant') || error.message.includes('Gmail_API')));
            
            // Show error message
            let errorMessage = '';
            let shouldAutoRedirect = false;
            
            // Mensajes de error específicos
            if (isGmailConnectionError) {
                errorMessage = '⚠️ La conexión con Gmail ha expirado. El administrador debe reconectar la cuenta de Gmail en EmailJS. ';
                shouldAutoRedirect = true; // Auto-redirigir a WhatsApp para este error
            } else if (error.status === 412) {
                errorMessage = '⚠️ La conexión con el servicio de email expiró. ';
                shouldAutoRedirect = true;
            } else if (error.status) {
                errorMessage = `⚠️ Error ${error.status}: No se pudo enviar el mensaje. `;
            } else if (error.message) {
                errorMessage = `⚠️ Error: ${error.message}. `;
            } else {
                errorMessage = '⚠️ Hubo un error al enviar tu solicitud. ';
            }
            
            errorMessage += 'Por favor, contáctanos directamente por WhatsApp para recibir atención inmediata.';
            
            // Función auxiliar para obtener datos del formulario y redirigir a WhatsApp
            const redirectToWhatsApp = () => {
                const formData = {
                    nombre: document.getElementById('nombre')?.value || '',
                    email: document.getElementById('email')?.value || '',
                    telefono: document.getElementById('telefono')?.value || '',
                    tipoEvento: document.getElementById('tipoEvento')?.value || '',
                    personas: document.getElementById('personas')?.value || '',
                    fecha: document.getElementById('fecha')?.value || '',
                    notas: document.getElementById('notas')?.value || ''
                };
                
                const whatsappMessage = encodeURIComponent(
                    `Hola Ébano Mirador 👋\n\n` +
                    `Quiero información sobre mi evento:\n\n` +
                    `*Tipo de Evento:* ${formData.tipoEvento}\n` +
                    `*Número de Personas:* ${formData.personas}\n` +
                    `*Fecha Tentativa:* ${formData.fecha}\n` +
                    `*Nombre:* ${formData.nombre}\n` +
                    `*Email:* ${formData.email}\n` +
                    `*Teléfono:* ${formData.telefono}\n` +
                    (formData.notas ? `*Notas:* ${formData.notas}` : '')
                );
                window.open(`https://wa.me/573104827580?text=${whatsappMessage}`, '_blank');
                
                // Cerrar modal después de abrir WhatsApp
                if (window.closeFormModal) {
                    setTimeout(() => {
                        window.closeFormModal();
                    }, 500);
                }
            };
            
            // Si es error de Gmail, auto-redirigir a WhatsApp después de mostrar el mensaje
            if (shouldAutoRedirect) {
                console.log('⚠️ Error de conexión Gmail detectado - Redirigiendo automáticamente a WhatsApp en 2 segundos...');
                setTimeout(() => {
                    redirectToWhatsApp();
                }, 2000);
            }
            
            // Mostrar error y ofrecer WhatsApp como alternativa
            const errorDiv = document.createElement('div');
            errorDiv.className = 'form-error-message';
            errorDiv.style.cssText = 'background: #fee; border: 2px solid #fcc; color: #c33; padding: 16px; border-radius: 8px; margin-bottom: 20px; text-align: center; font-weight: 500;';
            
            const errorText = document.createElement('div');
            errorText.textContent = errorMessage;
            if (shouldAutoRedirect) {
                const autoRedirectText = document.createElement('div');
                autoRedirectText.textContent = 'Te redirigiremos a WhatsApp automáticamente en unos segundos...';
                autoRedirectText.style.cssText = 'margin-top: 10px; font-size: 0.9em; font-style: italic;';
                errorText.appendChild(autoRedirectText);
            }
            errorDiv.appendChild(errorText);
            
            // Botón para redirigir a WhatsApp manualmente
            const whatsappBtn = document.createElement('button');
            whatsappBtn.textContent = shouldAutoRedirect ? '📱 Ir a WhatsApp Ahora' : '📱 Contactar por WhatsApp';
            whatsappBtn.style.cssText = 'margin-top: 15px; padding: 12px 24px; background: #25D366; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 16px; transition: all 0.3s ease;';
            whatsappBtn.addEventListener('mouseenter', () => {
                whatsappBtn.style.background = '#20BA5A';
                whatsappBtn.style.transform = 'scale(1.05)';
            });
            whatsappBtn.addEventListener('mouseleave', () => {
                whatsappBtn.style.background = '#25D366';
                whatsappBtn.style.transform = 'scale(1)';
            });
            whatsappBtn.addEventListener('click', redirectToWhatsApp);
            errorDiv.appendChild(whatsappBtn);
            
            const form = document.getElementById('eventForm');
            if (form) {
                const existingError = form.querySelector('.form-error-message');
                if (existingError) existingError.remove();
                form.insertBefore(errorDiv, form.firstChild);
                errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } finally {
            // Re-enable submit button
            if (submitBtn) {
                submitBtn.disabled = false;
                const btnText = submitBtn.querySelector('.btn-text');
                const btnLoader = submitBtn.querySelector('.btn-loader');
                if (btnText) btnText.style.display = 'inline';
                if (btnLoader) btnLoader.style.display = 'none';
            }
        }
    }
    
    // ============================================
    // DATE FIELD INITIALIZATION
    // ============================================
    
    function initDateField() {
        const fechaInput = document.getElementById('fecha');
        if (!fechaInput) {
            console.warn('⚠️ Campo de fecha no encontrado');
            return;
        }
        
        // Calcular fecha mínima (hoy) dinámicamente
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const minDate = `${year}-${month}-${day}`;
        
        // FORZAR que el campo sea tipo date (algunos navegadores lo cambian)
        fechaInput.type = 'date';
        fechaInput.setAttribute('type', 'date');
        
        // Establecer fecha mínima
        fechaInput.min = minDate;
        fechaInput.setAttribute('min', minDate);
        
        // Asegurar que el campo muestre el selector completo
        fechaInput.setAttribute('inputmode', 'none');
        
        // En móviles, forzar el date picker nativo
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            fechaInput.setAttribute('readonly', 'readonly');
            fechaInput.addEventListener('focus', function() {
                this.removeAttribute('readonly');
                this.showPicker && this.showPicker();
            });
        }
        
        // Verificar selección de fecha
        fechaInput.addEventListener('change', function() {
            if (this.value) {
                const selectedDate = new Date(this.value + 'T00:00:00');
                const dia = selectedDate.getDate();
                const mes = selectedDate.getMonth() + 1;
                const año = selectedDate.getFullYear();
                
                console.log('✅ Fecha seleccionada:', {
                    fechaCompleta: this.value,
                    dia: dia,
                    mes: mes,
                    año: año,
                    formato: `${dia}/${mes}/${año}`
                });
            }
        });
        
        // Log de configuración
        console.log('✅ Campo de fecha configurado - permite seleccionar día, mes y año');
        console.log('   Tipo:', fechaInput.type);
        console.log('   Fecha mínima:', minDate);
    }
    
    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    
    function initScrollAnimations() {
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
        
        // Hero content fade-in
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            setTimeout(() => {
                heroContent.style.opacity = '1';
            }, 100);
        }
    }
    
    // ============================================
    // HERO PARALLAX (Desktop only)
    // ============================================
    
    function initHeroParallax() {
        if (window.innerWidth >= 1024) {
            const heroImage = document.querySelector('.hero-image');
            
            if (heroImage) {
                window.addEventListener('scroll', () => {
                    const scrolled = window.pageYOffset;
                    const hero = document.querySelector('.hero');
                    if (hero) {
                        const heroHeight = hero.offsetHeight;
                        if (scrolled < heroHeight) {
                            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
                        }
                    }
                });
            }
        }
    }
    
    // ============================================
    // STATS ANIMATION
    // ============================================
    
    function initStats() {
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
        
        const foodImages = [
            'images/food/Gemini_Generated_Image_8eefhc8eefhc8eef.png',
            'images/food/Gemini_Generated_Image_8ygk0n8ygk0n8ygk.png',
            'images/food/Gemini_Generated_Image_b2wrp3b2wrp3b2wr.png',
            'images/food/Gemini_Generated_Image_dwbbx0dwbbx0dwbb.png',
            'images/food/Gemini_Generated_Image_k4ok3pk4ok3pk4ok.png',
            'images/food/Gemini_Generated_Image_v6w8kav6w8kav6w8.png',
            'images/food/Gemini_Generated_Image_w94k70w94k70w94k.png',
            'images/food/Generated Image November 29, 2025 - 5_29PM (1).png'
        ];
        
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
        
        // Auto-scroll
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
            if (!question) return;
            
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
            closeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                banner.classList.remove('show');
                document.body.classList.remove('urgency-visible');
                localStorage.setItem('urgencyBannerClosed', 'true');
            });
        }
        
        // Close on banner click (outside content)
        banner.addEventListener('click', (e) => {
            if (e.target === banner) {
                banner.classList.remove('show');
                document.body.classList.remove('urgency-visible');
                localStorage.setItem('urgencyBannerClosed', 'true');
            }
        });
    }
    
})();
