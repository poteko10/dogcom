import 'bulma/css/bulma.css';
import { createRoot } from 'react-dom/client';
import App from './App';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#content');
  if (container) {
    createRoot(container).render(<App />);
  } else {
    console.error('描画先の #content が見つかりませんでした');
  }
});
