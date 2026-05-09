const nav = document.querySelector(".site-nav");
const faders = document.querySelectorAll(".fade-in");
const images = document.querySelectorAll(".design-card img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");
const cursor = document.querySelector(".cursor");
const interactiveItems = document.querySelectorAll("a, button, .design-card img");

const updateNav = () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
};

const revealOnScroll = () => {
  faders.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 90) {
      el.classList.add("show");
    }
  });
};

const openModal = (img) => {
  modal.classList.add("open");
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("open");
  modalImg.src = "";
  document.body.style.overflow = "";
};

window.addEventListener("scroll", () => {
  updateNav();
  revealOnScroll();
});

window.addEventListener("load", () => {
  updateNav();
  revealOnScroll();
});

images.forEach((img) => {
  img.addEventListener("click", () => openModal(img));
  img.addEventListener("error", () => {
    img.closest(".design-card").classList.add("is-missing");
  });
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

document.addEventListener("mousemove", (event) => {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
});

interactiveItems.forEach((item) => {
  item.addEventListener("mouseenter", () => cursor.classList.add("is-active"));
  item.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
});
