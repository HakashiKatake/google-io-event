// Header scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const modal = document.getElementById('rsvpModal');
    const registerBtn = document.getElementById('registerBtn');
    const heroRegisterBtn = document.getElementById('heroRegisterBtn');
    const closeModal = document.querySelector('.close-modal');
    const rsvpForm = document.getElementById('rsvpForm');
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.classList.remove('scrolled');
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    });

    // RSVP Modal functionality
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Event listeners for opening and closing modal
    if (registerBtn) {
        registerBtn.addEventListener('click', openModal);
    }

    if (heroRegisterBtn) {
        heroRegisterBtn.addEventListener('click', openModal);
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModalFunc();
        }
    });

    // Handle form submission
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(rsvpForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                if (key === 'interests') {
                    if (!formDataObj[key]) {
                        formDataObj[key] = [];
                    }
                    formDataObj[key].push(value);
                } else {
                    formDataObj[key] = value;
                }
            });
            
            // In a real application, you would send this data to a server
            console.log('Form submitted with data:', formDataObj);
            
            // Show success message
            alert('Thank you for registering! We look forward to seeing you at Google I/O 2025.');
            
            // Close modal and reset form
            closeModalFunc();
            rsvpForm.reset();
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            alert('Mobile menu would open here');
            // In a real implementation, you would toggle a mobile menu here
        });
    }

    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            
            const icon = this.querySelector('.icon-3d-placeholder');
            if (icon) {
                icon.style.transform = 'rotate(12deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            
            const icon = this.querySelector('.icon-3d-placeholder');
            if (icon) {
                icon.style.transform = 'rotate(0)';
            }
        });
    });

    // Add hover effects to 3D cards
    const cards3d = document.querySelectorAll('.card-3d');
    cards3d.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotateX(5deg) rotateY(5deg)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add hover effects to timeline cards
    const timelineCards = document.querySelectorAll('.timeline-card');
    timelineCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'translateY(-3px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'translateY(0)';
        });
    });

    // Add hover effects to 3D icons
    const icons3d = document.querySelectorAll('.icon-3d');
    icons3d.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotateY(15deg) rotateX(10deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateY(0) rotateX(0)';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('btn-white')) {
                this.style.backgroundColor = '#f5f5f5';
            } else if (this.classList.contains('btn-outline')) {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            } else {
                this.style.backgroundColor = '#0b57d0'; // Dark blue
            }
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (this.classList.contains('btn-white')) {
                this.style.backgroundColor = 'white';
            } else if (this.classList.contains('btn-outline')) {
                this.style.backgroundColor = 'transparent';
            } else {
                this.style.backgroundColor = '#1a73e8'; // Primary blue
            }
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Partner logo hover effect
    const partnerItems = document.querySelectorAll('.partner-item');
    partnerItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.filter = 'grayscale(0%)';
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.filter = 'grayscale(100%)';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add a simple animation to show elements as they scroll into view
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.card, .timeline-card, .section-title, .timeline-item');
        
        elements.forEach((element, index) => {
            if (isElementInViewport(element) && !element.classList.contains('animated')) {
                // Add a slight delay based on index for cascade effect
                setTimeout(() => {
                    element.classList.add('animated');
                    element.style.opacity = '1';
                    element.style.transform = element.classList.contains('card') 
                        ? 'translateY(0)' 
                        : 'translateY(0)';
                }, index * 100);
            }
        });
    }

    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.card, .timeline-card, .section-title, .timeline-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = element.classList.contains('card') 
            ? 'translateY(20px)' 
            : 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run once on load
    handleScrollAnimation();

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
});
