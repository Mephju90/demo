const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.leistung-box').forEach(el => {
  observer.observe(el);
});

// MAPS

function enableMap() {
  const mapContainer = document.getElementById("google-map");
  mapContainer.innerHTML = `
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.186504564186!2d8.645305077047182!3d49.21598997138275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797bcd9be10224d%3A0x1de86c1f536252b6!2sIn%20den%20Erlen%205%2C%2076669%20Bad%20Sch%C3%B6nborn!5e0!3m2!1sde!2sde!4v1744546941057!5m2!1sde!2sde"
      width="100%" height="450" style="border:0;"
      allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>`;
  
  document.getElementById("map-consent-box").style.display = "none";
  mapContainer.style.display = "block";
}