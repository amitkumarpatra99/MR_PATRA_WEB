import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"

if (typeof window !== 'undefined') {
  setTimeout(() => {
    const details = Array.from(document.querySelectorAll('*'))
      .map(el => {
        const rect = el.getBoundingClientRect();
        return {
          tag: el.tagName,
          id: el.id,
          className: el.className,
          width: rect.width
        };
      })
      .filter(el => el.width > window.innerWidth && el.tagName !== 'HTML' && el.tagName !== 'BODY');
    console.log("OVERFLOW_ELEMENTS:", JSON.stringify(details, null, 2));
  }, 3000);
}


createRoot(document.getElementById('root')).render(
  <>
    <SpeedInsights />
    <App />
  </>
)
