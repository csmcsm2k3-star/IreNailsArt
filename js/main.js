/* ═══════════════════════════════════════════
   IreNailsArt — main.js
   ═══════════════════════════════════════════ */

/* ── NAV: add shadow on scroll ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

/* ── MOBILE MENU ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── GALLERY FILTER ── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.style.display = match ? 'block' : 'none';
    });
  });
});

/* ── LIGHTBOX ── */
function openLightbox(el) {
  const img = el.querySelector('img');
  // Use a higher-res version if the src contains a width parameter
  document.getElementById('lightboxImg').src = img.src.replace(/w=\d+/, 'w=900');
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (!e || e.target !== document.getElementById('lightboxImg')) {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ── REVIEWS CAROUSEL ── */
let currentSlide = 0;
const slides        = document.querySelectorAll('.review-slide');
const track         = document.getElementById('reviewsTrack');
const dotsContainer = document.getElementById('carouselDots');

// Build dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Reseña ${i + 1}`);
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

function goToSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide()  { goToSlide(currentSlide - 1); }

// Auto-advance every 5 s
const autoplay = setInterval(nextSlide, 5000);

// Pause autoplay on hover
track.addEventListener('mouseenter', () => clearInterval(autoplay));

// Touch swipe support
let touchStartX = 0;
track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; });
track.addEventListener('touchend',   e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) diff > 0 ? nextSlide() : prevSlide();
});
