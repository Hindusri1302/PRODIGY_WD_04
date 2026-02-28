/* ========================
   MOBILE MENU TOGGLE
   ======================== */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

const closeMobileMenu = () => {
    if (navMenu) navMenu.classList.remove('active');
    if (hamburger) hamburger.classList.remove('active');
};

if (hamburger) {
    hamburger.addEventListener('click', () => {
        if (navMenu) navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

/* ========================
   SMOOTH SCROLL EFFECT
   ======================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ========================
   FORM HANDLING
   ======================== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const btn = this.querySelector('button[type="submit"]');
        if (!btn) return;
        const originalText = btn.textContent;
        
        btn.textContent = 'Sending...';
        btn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            btn.textContent = 'Message Sent! ✓';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = '';
            }, 3000);
        }, 1500);
    });
}

/* ========================
   SCROLL ANIMATION
   ======================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -150px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .about-stats .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/* ========================
   ACTIVE NAVIGATION LINK
   ======================== */
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        const isActive = link.getAttribute('href').slice(1) === current;
        link.classList.toggle('active', isActive);
    });
});

/* ========================
   SCROLL REVEAL EFFECT
   ======================== */
function revealOnScroll() {
    const reveals = document.querySelectorAll('.about-text p, .project-link');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.style.opacity = '1';
            reveal.style.transform = 'translateX(0)';
        }
    });
}

document.addEventListener('scroll', revealOnScroll);

/* ========================
   NAVBAR SHADOW ON SCROLL
   ======================== */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
    }
});

/* ========================
   COUNTER ANIMATION
   ======================== */
function startCounter() {
    const stats = document.querySelectorAll('.stat h3');
    
    stats.forEach(stat => {
        const rawText = stat.textContent.trim();
        const isPercentage = rawText.includes('%');
        const target = parseInt(rawText, 10);
        if (Number.isNaN(target)) return;
        let count = 0;
        const increment = target / 50;
        
        const counter = setInterval(() => {
            count += increment;
            if (count >= target) {
                stat.textContent = isPercentage ? `${target}%` : `${target}+`;
                clearInterval(counter);
            } else {
                stat.textContent = isPercentage ? `${Math.floor(count)}%` : `${Math.floor(count)}+`;
            }
        }, 50);
    });
}

// Trigger counter when stats section is visible
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter();
                observer2.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer2.observe(statsSection);
}

/* ========================
   PARALLAX EFFECT
   ======================== */
window.addEventListener('scroll', () => {
    const yOffset = window.scrollY;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${yOffset * 0.2}px)`;
    }
});

/* ========================
   ENHANCED FORM VALIDATION
   ======================== */
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.background = 'rgba(255, 255, 255, 0.2)';
    });
    
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.style.background = 'rgba(255, 255, 255, 0.1)';
        }
    });
});

/* ========================
   LOAD ANIMATION
   ======================== */
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.5s ease';
    revealOnScroll();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    body {
        opacity: 1;
    }
`;
document.head.appendChild(style);

/* ========================
   PROJECT LINK HANDLER
   ======================== */
console.log('Portfolio website loaded successfully! 🎉');
