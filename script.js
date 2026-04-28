document.addEventListener("DOMContentLoaded", () => {

  /* ===== ЗАНАВЕС (invite-section) ===== */
  const invite = document.querySelector('.invite-section');

  if (invite) {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          invite.classList.add('show');
          observer1.unobserve(invite);
        }
      });
    }, { threshold: 0.5 });

    observer1.observe(invite);
  }

  /* ===== РАСПИСАНИЕ ===== */
  const schedule = document.querySelector('.schedule-section');

  if (schedule) {
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          schedule.classList.add('show');
          observer2.unobserve(schedule);
        }
      });
    }, { threshold: 0.3 });

    observer2.observe(schedule);
  }

  /* ===== ЛОКАЦИЯ ===== */
  const location = document.querySelector('.location-section');

if (location) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        location.classList.add('show');
        observer.unobserve(location);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(location);
}

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0;
let interval;

/* показать слайд */
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

/* следующий */
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

/* предыдущий */
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

/* автопрокрутка */
function startSlider() {
  interval = setInterval(nextSlide, 5000);
}

/* остановка при клике */
function resetInterval() {
  clearInterval(interval);
  startSlider();
}

/* события */
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

/* запуск */
showSlide(current);
startSlider();

const dress = document.querySelector('.dress-section');

if (dress) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        dress.classList.add('show');
        observer.unobserve(dress);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(dress);
}

const details = document.querySelector('.details-section');

if (details) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        details.classList.add('show');
        observer.unobserve(details);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(details);
}
const contacts = document.querySelector('.contacts-section');

if (contacts) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contacts.classList.add('show');
        observer.unobserve(contacts);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(contacts);
}
const form = document.querySelector('.rsvp-form');
const success = document.querySelector('.rsvp-success');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      success.classList.add('show');
    }
  });
}

const weddingDate = new Date(2026, 7, 2, 0, 0, 0).getTime();

// храним прошлые значения
let prev = {
  days: null,
  hours: null,
  minutes: null,
  seconds: null
};

function animateChange(el, value) {
  el.style.transition = "all 0.3s ease";
  el.style.opacity = "0.5";
  el.style.transform = "translateY(5px)";

  setTimeout(() => {
    el.textContent = String(value).padStart(2, '0');
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, 150);
}

function updateTimer() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const elements = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };

  // обновляем только если изменилось
  if (prev.days !== days) {
    animateChange(elements.days, days);
    prev.days = days;
  }

  if (prev.hours !== hours) {
    animateChange(elements.hours, hours);
    prev.hours = hours;
  }

  if (prev.minutes !== minutes) {
    animateChange(elements.minutes, minutes);
    prev.minutes = minutes;
  }

  if (prev.seconds !== seconds) {
    animateChange(elements.seconds, seconds);
    prev.seconds = seconds;
  }
}

setInterval(updateTimer, 1000);
updateTimer();

});
