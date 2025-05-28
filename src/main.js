import './style.css'
import Headers from './header.js'
import Background from './background.js'
import Goals from './goals.js'
import Projects from './projects.js'
import Timeline from './timeline.js'
import Footer from './footer.js'
import About from './about.js'
import '@fortawesome/fontawesome-free/css/all.css'

document.addEventListener('DOMContentLoaded', () => {
  const styles = getComputedStyle(document.documentElement);
  document.querySelector('#app').innerHTML = `
    ${Headers(styles)}
    <main class="w-full px-10 dark:bg-[${styles.getPropertyValue('--background-color')}] dark:bg-[${styles.getPropertyValue('--dark-background')}]">
    ${About()}
    ${Background()}
    ${Goals()}   
    ${Timeline()}
    ${Projects()}
    <div class="pb-10" bg-[${styles.getPropertyValue('--background-color')}]> </div> 
    </main>
    ${Footer()}
  `
  // dark/dark Mode Toggle
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80, // Adjust for fixed header
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              mobileMenu.classList.add('hidden');
          }
      });
  });

  // Animate elements when they come into view
  const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if (elementPosition < screenPosition) {
              element.style.opacity = 1;
          }
      });
  };

  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
})
