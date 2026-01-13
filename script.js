// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Feedback Carousel
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const nextBtn = document.querySelector('.carousel-next');
    const prevBtn = document.querySelector('.carousel-prev');

    if (!track || !cards.length) return;

    let currentIndex = 0;
    let cardWidth = cards[0].offsetWidth;
    let cardsPerView = getCardsPerView();
    let gap = 32; // 2rem gap from CSS

    // Update measurements on resize
    window.addEventListener('resize', () => {
        cardWidth = cards[0].offsetWidth;
        cardsPerView = getCardsPerView();
        updateCarousel();
    });

    function getCardsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function updateCarousel() {
        const amountToMove = (cardWidth + gap) * currentIndex;
        track.style.transform = `translateX(-${amountToMove}px)`;

        // Update button states
        prevBtn.disabled = currentIndex === 0;
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';

        const maxIndex = cards.length - cardsPerView;
        nextBtn.disabled = currentIndex >= maxIndex;
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }

    nextBtn.addEventListener('click', () => {
        const maxIndex = cards.length - cardsPerView;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Initialize
    updateCarousel();
});

// ===== Mobile Drawer Toggle =====
const mobileMenuBtn = document.getElementById('mobile-menu');
const mobileDrawer = document.getElementById('mobile-drawer');
const navOverlay = document.getElementById('nav-overlay');
const drawerCloseBtn = document.getElementById('drawer-close');
const drawerLinks = document.querySelectorAll('.mobile-drawer a');

function toggleDrawer() {
    mobileDrawer.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = mobileDrawer.classList.contains('active') ? 'hidden' : '';
}

function closeDrawer() {
    mobileDrawer.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleDrawer);
}

if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
}

if (navOverlay) {
    navOverlay.addEventListener('click', closeDrawer);
}

// Close drawer when clicking a link
drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1} s`;
    observer.observe(card);
});

// ===== Form Submission Handler =====
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Show success message (you can replace this with actual form submission logic)
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');

    // Reset form
    contactForm.reset();
});

// ===== Notification System =====
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification - ${type} `;
    notification.textContent = message;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: type === 'success' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: 'white',
        borderRadius: '0.75rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: '9999',
        animation: 'slideInRight 0.3s ease-out',
        fontWeight: '500'
    });

    // Add to DOM
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
@keyframes slideInRight {
        from {
        transform: translateX(400px);
        opacity: 0;
    }
        to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
        from {
        transform: translateX(0);
        opacity: 1;
    }
        to {
        transform: translateX(400px);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

// ===== Parallax Effect for Hero Background =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== Button Click Effects =====
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
@keyframes ripple {
        to {
        transform: scale(4);
        opacity: 0;
    }
}
`;
document.head.appendChild(rippleStyle);

// ===== Console Welcome Message =====
console.log('%c Welcome to Redland! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px 20px; border-radius: 5px;');
console.log('%c Built with ❤️ using HTML, CSS, and JavaScript ', 'color: #94a3b8; font-size: 12px;');
