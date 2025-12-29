document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Active navigation link
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle (if needed)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // Table of contents for long posts
    const headings = document.querySelectorAll('.post-content h2, .post-content h3');
    if (headings.length > 3) {
        const toc = document.createElement('div');
        toc.className = 'table-of-contents';
        toc.innerHTML = '<h4>Table of Contents</h4><ul></ul>';
        
        const tocList = toc.querySelector('ul');
        
        headings.forEach((heading, index) => {
            const id = heading.id || `heading-${index}`;
            heading.id = id;
            
            const li = document.createElement('li');
            const level = parseInt(heading.tagName[1]);
            li.style.marginLeft = `${(level - 2) * 1.5}rem`;
            
            const a = document.createElement('a');
            a.href = `#${id}`;
            a.textContent = heading.textContent;
            
            li.appendChild(a);
            tocList.appendChild(li);
        });
        
        const postContent = document.querySelector('.post-content');
        if (postContent && postContent.firstChild) {
            postContent.insertBefore(toc, postContent.firstChild);
        }
    }

    // Syntax highlighting for code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        block.classList.add('language-javascript');
    });
});

// Add styles for table of contents
const style = document.createElement('style');
style.textContent = `
    .table-of-contents {
        background: rgba(26, 26, 31, 0.5);
        border: 1px solid rgba(212, 168, 71, 0.2);
        border-radius: 8px;
        padding: 1.5rem;
        margin: 2rem 0;
    }
    
    .table-of-contents h4 {
        color: var(--gold);
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }
    
    .table-of-contents ul {
        list-style: none;
    }
    
    .table-of-contents li {
        margin-bottom: 0.5rem;
    }
    
    .table-of-contents a {
        color: var(--cream);
        opacity: 0.8;
        transition: all 0.3s ease;
    }
    
    .table-of-contents a:hover {
        color: var(--gold);
        opacity: 1;
    }
`;
document.head.appendChild(style);
