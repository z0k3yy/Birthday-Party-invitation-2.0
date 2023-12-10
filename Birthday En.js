 // Countdown timer
 const countdownDate = new Date('December 9, 2023 23:00:00').getTime();

 const countdown = setInterval(function() {
     const now = new Date().getTime();
     const distance = countdownDate - now;

     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

     if (distance < 0) {
         clearInterval(countdown);
         document.getElementById('countdown').innerHTML = 'Party has started!';
         document.body.style.background = 'url("wallpaperflare.com_wallpaper\ \(2\).jpg")';

     }
 }, 1000)
