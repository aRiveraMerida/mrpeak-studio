import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Performance optimization: preload critical resources
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Preload LinkedIn profiles in idle time
    const linkedInUrls = [
      'https://www.linkedin.com/in/albertoriveramerida/',
      'https://www.linkedin.com/in/albert-sort-martinez/',
      'https://www.linkedin.com/in/orioldelfau/',
      'https://www.linkedin.com/in/david-dix-hidalgo-986a8a32b/'
    ];
    
    linkedInUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
