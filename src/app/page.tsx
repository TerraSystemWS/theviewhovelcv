'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date("May 15, 2024 12:59:59").getTime() - now;
      
      const days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
      const hours = Math.max(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
      const minutes = Math.max(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 0);
      const seconds = Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0);
      
      setCountdown({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });

      if (distance < 0) {
        clearInterval(interval);
        // Handle expired state
        // For example:
        // document.getElementById("demo").innerHTML="EXPIRED";
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming__soon" data-background="assets/img/features/coming-soon.jpg">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="coming__soon-title">
              <h1>Coming Soon</h1>
              <div className="countdown">
                <div className="countdown-item">
                  <h3 className="days">{countdown.days}</h3>
                  <span>Days</span>
                </div>
                <div className="countdown-item">
                  <h3 className="hours">{countdown.hours}</h3>
                  <span>Hours</span>
                </div>
                <div className="countdown-item">
                  <h3 className="minutes">{countdown.minutes}</h3>
                  <span>Minutes</span>
                </div>
                <div className="countdown-item">
                  <h3 className="seconds">{countdown.seconds}</h3>
                  <span>Seconds</span>
                </div>
              </div>
              <div className="subscribe">
                <h6>Subscribe to Our newsletter stay with us</h6>
                <form action="#">
                  <input type="email" name="email" placeholder="Email Address" required />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
