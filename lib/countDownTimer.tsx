import { useState, useEffect } from 'react';


const countdownTimer = () => {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the deadline date (23rd of September 2023)
    const deadlineDate: Date = new Date('2023-09-23T00:00:00Z');

    const updateCountdown = () => {
      const currentDate: Date = new Date();

      // Calculate the time remaining in milliseconds
      const timeRemaining: number = deadlineDate.getTime() - currentDate.getTime();

      if (timeRemaining <= 0) {
        // The deadline has passed
        setCountdown({
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        // Calculate days, hours, minutes, and seconds
        const hours: number = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes: number = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds: number = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the countdown state
        setCountdown({
          hours,
          minutes,
          seconds,
        });
      }
    };

    // Update the countdown initially
    updateCountdown();

    // Set up an interval to update the countdown every second
    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const { hours, minutes, seconds } = countdown

  return {
     hours,
     minutes, 
     seconds
  }
};

export default countdownTimer;
