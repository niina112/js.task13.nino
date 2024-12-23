const countdown = () => {
  const launchDate = new Date("Dec 31, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;

  if (timeLeft < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "Time's up!!!"
  }
};
const timer = setInterval(countdown, 1000);
countdown();