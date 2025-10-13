document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    // Desktop dropdown toggle (on click)
    const dropdownButton = document.getElementById('departments-dropdown-button');
    const dropdownMenu = document.getElementById('departments-dropdown-menu');
    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the document click listener from firing immediately
            dropdownMenu.classList.toggle('hidden');
        });
    }

    // Mobile departments dropdown toggle
    const mobileDropdownButton = document.getElementById('mobile-departments-button');
    const mobileDropdownMenu = document.getElementById('mobile-departments-menu');
    if (mobileDropdownButton && mobileDropdownMenu) {
        mobileDropdownButton.addEventListener('click', () => mobileDropdownMenu.classList.toggle('hidden'));
    }

    // Close desktop dropdown when clicking anywhere else on the page
    document.addEventListener('click', function() {
        if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // --- Gallery-specific scripts (carousel, lightbox) ---
    // Carousel script
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const totalItems = carouselItems.length;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('opacity-0', i !== index);
        });
    }

    document.getElementById('next-btn').addEventListener('click', () => {
        currentItem = (currentItem + 1) % totalItems;
        showItem(currentItem);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentItem = (currentItem - 1 + totalItems) % totalItems;
        showItem(currentItem);
    });
    
    // Auto-play carousel
    setInterval(() => {
        document.getElementById('next-btn').click();
    }, 5000);

    // Lightbox script
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const gridImages = document.querySelectorAll('#photo-grid .group');

    gridImages.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImage.src = imgSrc;
            lightbox.classList.remove('hidden');
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
    }
    if (lightbox) {
         lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.add('hidden');
            }
        });
    }

});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    // Desktop dropdown toggle (on click)
    const dropdownButton = document.getElementById('departments-dropdown-button');
    const dropdownMenu = document.getElementById('departments-dropdown-menu');
    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the document click listener from firing immediately
            dropdownMenu.classList.toggle('hidden');
        });
    }

    // Mobile departments dropdown toggle
    const mobileDropdownButton = document.getElementById('mobile-departments-button');
    const mobileDropdownMenu = document.getElementById('mobile-departments-menu');
    if (mobileDropdownButton && mobileDropdownMenu) {
        mobileDropdownButton.addEventListener('click', () => mobileDropdownMenu.classList.toggle('hidden'));
    }

    // Close desktop dropdown when clicking anywhere else on the page
    document.addEventListener('click', function() {
        if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // --- Gallery-specific scripts (carousel, lightbox) ---
    // Carousel script
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const totalItems = carouselItems.length;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('opacity-0', i !== index);
        });
    }

    document.getElementById('next-btn').addEventListener('click', () => {
        currentItem = (currentItem + 1) % totalItems;
        showItem(currentItem);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentItem = (currentItem - 1 + totalItems) % totalItems;
        showItem(currentItem);
    });
    
    // Auto-play carousel
    setInterval(() => {
        document.getElementById('next-btn').click();
    }, 5000);

    // Lightbox script
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const gridImages = document.querySelectorAll('#photo-grid .group');

    gridImages.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImage.src = imgSrc;
            lightbox.classList.remove('hidden');
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
    }
    if (lightbox) {
         lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.add('hidden');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    // Desktop dropdown toggle (on click)
    const dropdownButton = document.getElementById('departments-dropdown-button');
    const dropdownMenu = document.getElementById('departments-dropdown-menu');
    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the document click listener from firing immediately
            dropdownMenu.classList.toggle('hidden');
        });
    }

    // Mobile departments dropdown toggle
    const mobileDropdownButton = document.getElementById('mobile-departments-button');
    const mobileDropdownMenu = document.getElementById('mobile-departments-menu');
    if (mobileDropdownButton && mobileDropdownMenu) {
        mobileDropdownButton.addEventListener('click', () => mobileDropdownMenu.classList.toggle('hidden'));
    }

    // Close desktop dropdown when clicking anywhere else on the page
    document.addEventListener('click', function() {
        if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // --- Gallery-specific scripts (carousel, lightbox) ---
    // Carousel script
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const totalItems = carouselItems.length;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('opacity-0', i !== index);
        });
    }

    document.getElementById('next-btn').addEventListener('click', () => {
        currentItem = (currentItem + 1) % totalItems;
        showItem(currentItem);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentItem = (currentItem - 1 + totalItems) % totalItems;
        showItem(currentItem);
    });
    
    // Auto-play carousel
    setInterval(() => {
        document.getElementById('next-btn').click();
    }, 5000);

    // Lightbox script
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const gridImages = document.querySelectorAll('#photo-grid .group');

    gridImages.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImage.src = imgSrc;
            lightbox.classList.remove('hidden');
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
    }
    if (lightbox) {
         lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.add('hidden');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    // Desktop dropdown toggle (on click)
    const dropdownButton = document.getElementById('departments-dropdown-button');
    const dropdownMenu = document.getElementById('departments-dropdown-menu');
    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the document click listener from firing immediately
            dropdownMenu.classList.toggle('hidden');
        });
    }

    // Mobile departments dropdown toggle
    const mobileDropdownButton = document.getElementById('mobile-departments-button');
    const mobileDropdownMenu = document.getElementById('mobile-departments-menu');
    if (mobileDropdownButton && mobileDropdownMenu) {
        mobileDropdownButton.addEventListener('click', () => mobileDropdownMenu.classList.toggle('hidden'));
    }

    // Close desktop dropdown when clicking anywhere else on the page
    document.addEventListener('click', function() {
        if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // --- Gallery-specific scripts (carousel, lightbox) ---
    // Carousel script
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const totalItems = carouselItems.length;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('opacity-0', i !== index);
        });
    }

    document.getElementById('next-btn').addEventListener('click', () => {
        currentItem = (currentItem + 1) % totalItems;
        showItem(currentItem);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentItem = (currentItem - 1 + totalItems) % totalItems;
        showItem(currentItem);
    });
    
    // Auto-play carousel
    setInterval(() => {
        document.getElementById('next-btn').click();
    }, 5000);

    // Lightbox script
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const gridImages = document.querySelectorAll('#photo-grid .group');

    gridImages.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImage.src = imgSrc;
            lightbox.classList.remove('hidden');
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
    }
    if (lightbox) {
         lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.add('hidden');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    // Desktop dropdown toggle (on click)
    const dropdownButton = document.getElementById('departments-dropdown-button');
    const dropdownMenu = document.getElementById('departments-dropdown-menu');
    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the document click listener from firing immediately
            dropdownMenu.classList.toggle('hidden');
        });
    }

    // Mobile departments dropdown toggle
    const mobileDropdownButton = document.getElementById('mobile-departments-button');
    const mobileDropdownMenu = document.getElementById('mobile-departments-menu');
    if (mobileDropdownButton && mobileDropdownMenu) {
        mobileDropdownButton.addEventListener('click', () => mobileDropdownMenu.classList.toggle('hidden'));
    }

    // Close desktop dropdown when clicking anywhere else on the page
    document.addEventListener('click', function() {
        if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // --- Gallery-specific scripts (carousel, lightbox) ---
    // Carousel script
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const totalItems = carouselItems.length;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('opacity-0', i !== index);
        });
    }

    document.getElementById('next-btn').addEventListener('click', () => {
        currentItem = (currentItem + 1) % totalItems;
        showItem(currentItem);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentItem = (currentItem - 1 + totalItems) % totalItems;
        showItem(currentItem);
    });
    
    // Auto-play carousel
    setInterval(() => {
        document.getElementById('next-btn').click();
    }, 5000);

    // Lightbox script
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const gridImages = document.querySelectorAll('#photo-grid .group');

    gridImages.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImage.src = imgSrc;
            lightbox.classList.remove('hidden');
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
    }
    if (lightbox) {
         lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.add('hidden');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    // Desktop dropdown toggle (on click)
    const dropdownButton = document.getElementById('departments-dropdown-button');
    const dropdownMenu = document.getElementById('departments-dropdown-menu');
    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the document click listener from firing immediately
            dropdownMenu.classList.toggle('hidden');
        });
    }

    // Mobile departments dropdown toggle
    const mobileDropdownButton = document.getElementById('mobile-departments-button');
    const mobileDropdownMenu = document.getElementById('mobile-departments-menu');
    if (mobileDropdownButton && mobileDropdownMenu) {
        mobileDropdownButton.addEventListener('click', () => mobileDropdownMenu.classList.toggle('hidden'));
    }

    // Close desktop dropdown when clicking anywhere else on the page
    document.addEventListener('click', function() {
        if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // --- Gallery-specific scripts (carousel, lightbox) ---
    // Carousel script
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const totalItems = carouselItems.length;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('opacity-0', i !== index);
        });
    }

    document.getElementById('next-btn').addEventListener('click', () => {
        currentItem = (currentItem + 1) % totalItems;
        showItem(currentItem);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentItem = (currentItem - 1 + totalItems) % totalItems;
        showItem(currentItem);
    });
    
    // Auto-play carousel
    setInterval(() => {
        document.getElementById('next-btn').click();
    }, 5000);

    // Lightbox script
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const gridImages = document.querySelectorAll('#photo-grid .group');

    gridImages.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImage.src = imgSrc;
            lightbox.classList.remove('hidden');
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
    }
    if (lightbox) {
         lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.add('hidden');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    // Desktop dropdown toggle (on click)
    const dropdownButton = document.getElementById('departments-dropdown-button');
    const dropdownMenu = document.getElementById('departments-dropdown-menu');
    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the document click listener from firing immediately
            dropdownMenu.classList.toggle('hidden');
        });
    }

    // Mobile departments dropdown toggle
    const mobileDropdownButton = document.getElementById('mobile-departments-button');
    const mobileDropdownMenu = document.getElementById('mobile-departments-menu');
    if (mobileDropdownButton && mobileDropdownMenu) {
        mobileDropdownButton.addEventListener('click', () => mobileDropdownMenu.classList.toggle('hidden'));
    }

    // Close desktop dropdown when clicking anywhere else on the page
    document.addEventListener('click', function() {
        if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
            dropdownMenu.classList.add('hidden');
        }
    });

    // --- Gallery-specific scripts (carousel, lightbox) ---
    // Carousel script
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const totalItems = carouselItems.length;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('opacity-0', i !== index);
        });
    }

    document.getElementById('next-btn').addEventListener('click', () => {
        currentItem = (currentItem + 1) % totalItems;
        showItem(currentItem);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentItem = (currentItem - 1 + totalItems) % totalItems;
        showItem(currentItem);
    });
    
    // Auto-play carousel
    setInterval(() => {
        document.getElementById('next-btn').click();
    }, 5000);

    // Lightbox script
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const gridImages = document.querySelectorAll('#photo-grid .group');

    gridImages.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            lightboxImage.src = imgSrc;
            lightbox.classList.remove('hidden');
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
    }
    if (lightbox) {
         lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.add('hidden');
            }
        });
    }
});
