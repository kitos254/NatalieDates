import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    // Set the launch date (midnight on January 20th, 2025)
    const launchDate = new Date('January 20, 2025 00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setCountdown("Infinity chat app has launched!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <header>
        <img src="/image.png" alt="Infinity Logo" className="infinity-logo" />
        <h1>Infinity</h1>
        <p>Launching at midnight on January 20th, 2025!</p>
      </header>

      <div className="countdown">
        <p>Countdown to launch: {countdown}</p>
      </div>

      <footer>
        <p>Stay tuned for the launch of Infinity!</p>
      </footer>
    </div>
  );
}

export default App;
