// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active")
  hamburger.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const headerHeight = document.querySelector("header").offsetHeight
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Project filtering
const filterButtons = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"))

    // Add active class to clicked button
    button.classList.add("active")

    const filter = button.getAttribute("data-filter")

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })
})

// Form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    // For now, we'll just log it to the console
    console.log("Form submitted:", { name, email, message })

    // Reset form
    contactForm.reset()

    // Show success message (you can replace this with a more elegant solution)
    alert("Thank you for your message! I will get back to you soon.")
  })
}

// Reveal animations on scroll
const revealElements = document.querySelectorAll(".skill-category, .project-card, .timeline-item")

function checkReveal() {
  const triggerBottom = window.innerHeight * 0.8

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top

    if (elementTop < triggerBottom) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Set initial styles for animation
revealElements.forEach((element) => {
  element.style.opacity = "0"
  element.style.transform = "translateY(20px)"
  element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
})

// Check on load and scroll
window.addEventListener("load", checkReveal)
window.addEventListener("scroll", checkReveal)
