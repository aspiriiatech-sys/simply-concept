document.addEventListener('DOMContentLoaded', () => {

  // Accordion Logic for FAQ
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
      // Toggle current item
      const isActive = item.classList.contains('active');
      
      // Close all items
      accordionItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-content').style.maxHeight = null;
      });

      // If it wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
        const content = item.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // Smooth scroll for anchor links
  const scrollBtns = document.querySelectorAll('.primary-scroll-btn');
  scrollBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      if(this.pathname === window.location.pathname) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // Set WhatsApp numbers dynamically correctly, to handle encode correctly if needed
  // Using user provided link structure
});
