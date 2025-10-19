// Check if user is logged in
function checkAuth() {
  const isLoggedIn = localStorage.getItem("adminLoggedIn")
  if (!isLoggedIn) {
    window.location.href = "login.html"
  }
}

// Logout function
function logout() {
  localStorage.removeItem("adminLoggedIn")
  window.location.href = "login.html"
}

// Initialize data storage
function initializeStorage() {
  if (!localStorage.getItem("ekskulData")) {
    localStorage.setItem(
      "ekskulData",
      JSON.stringify([
        { id: 1, icon: "🎨", name: "Art Club", description: "Express your creativity through various art forms" },
        { id: 2, icon: "⚽", name: "Football", description: "Join our competitive football team" },
        { id: 3, icon: "🎭", name: "Drama", description: "Develop acting and performance skills" },
      ]),
    )
  }

  if (!localStorage.getItem("eventsData")) {
    localStorage.setItem(
      "eventsData",
      JSON.stringify([
        {
          id: 1,
          name: "School Festival",
          date: "December 15, 2025",
          description: "Annual celebration with performances and activities",
        },
        { id: 2, name: "Sports Day", date: "January 20, 2026", description: "Inter-class sports competition" },
      ]),
    )
  }

  if (!localStorage.getItem("galleryData")) {
    localStorage.setItem(
      "galleryData",
      JSON.stringify([
        { id: 1, url: "/school-activities.jpg", alt: "School Activities" },
        { id: 2, url: "/students-learning.jpg", alt: "Students Learning" },
      ]),
    )
  }

  if (!localStorage.getItem("subscribersData")) {
    localStorage.setItem(
      "subscribersData",
      JSON.stringify([
        { id: 1, email: "parent1@example.com", date: "2025-01-15" },
        { id: 2, email: "parent2@example.com", date: "2025-01-16" },
      ]),
    )
  }
}

// Navigation
function setupNavigation() {
  const sidebarLinks = document.querySelectorAll(".sidebar-link")
  const sections = document.querySelectorAll(".dashboard-section")

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Update active link
      sidebarLinks.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")

      // Show corresponding section
      const sectionId = link.getAttribute("data-section")
      sections.forEach((section) => {
        section.classList.remove("active")
      })
      document.getElementById(sectionId).classList.add("active")
    })
  })
}

// Update overview counts
function updateOverview() {
  const ekskulData = JSON.parse(localStorage.getItem("ekskulData") || "[]")
  const eventsData = JSON.parse(localStorage.getItem("eventsData") || "[]")
  const galleryData = JSON.parse(localStorage.getItem("galleryData") || "[]")
  const subscribersData = JSON.parse(localStorage.getItem("subscribersData") || "[]")

  document.getElementById("ekskul-count").textContent = ekskulData.length
  document.getElementById("events-count").textContent = eventsData.length
  document.getElementById("gallery-count").textContent = galleryData.length
  document.getElementById("subscribers-count").textContent = subscribersData.length
}

// Ekskul Management
function showEkskulForm() {
  document.getElementById("ekskul-form").style.display = "block"
}

function hideEkskulForm() {
  document.getElementById("ekskul-form").style.display = "none"
  document.getElementById("ekskul-icon").value = ""
  document.getElementById("ekskul-name").value = ""
  document.getElementById("ekskul-description").value = ""
}

function saveEkskul(event) {
  event.preventDefault()

  const ekskulData = JSON.parse(localStorage.getItem("ekskulData") || "[]")
  const newEkskul = {
    id: Date.now(),
    icon: document.getElementById("ekskul-icon").value,
    name: document.getElementById("ekskul-name").value,
    description: document.getElementById("ekskul-description").value,
  }

  ekskulData.push(newEkskul)
  localStorage.setItem("ekskulData", JSON.stringify(ekskulData))

  hideEkskulForm()
  loadEkskulTable()
  updateOverview()
}

function deleteEkskul(id) {
  if (confirm("Are you sure you want to delete this ekskul?")) {
    let ekskulData = JSON.parse(localStorage.getItem("ekskulData") || "[]")
    ekskulData = ekskulData.filter((item) => item.id !== id)
    localStorage.setItem("ekskulData", JSON.stringify(ekskulData))
    loadEkskulTable()
    updateOverview()
  }
}

function loadEkskulTable() {
  const ekskulData = JSON.parse(localStorage.getItem("ekskulData") || "[]")
  const tbody = document.getElementById("ekskul-table-body")

  tbody.innerHTML = ekskulData
    .map(
      (item) => `
    <tr>
      <td style="font-size: 32px;">${item.icon}</td>
      <td><strong>${item.name}</strong></td>
      <td>${item.description}</td>
      <td>
        <button class="btn-delete" onclick="deleteEkskul(${item.id})">DELETE</button>
      </td>
    </tr>
  `,
    )
    .join("")
}

// Events Management
function showEventForm() {
  document.getElementById("event-form").style.display = "block"
}

function hideEventForm() {
  document.getElementById("event-form").style.display = "none"
  document.getElementById("event-name").value = ""
  document.getElementById("event-date").value = ""
  document.getElementById("event-description").value = ""
}

function saveEvent(event) {
  event.preventDefault()

  const eventsData = JSON.parse(localStorage.getItem("eventsData") || "[]")
  const newEvent = {
    id: Date.now(),
    name: document.getElementById("event-name").value,
    date: document.getElementById("event-date").value,
    description: document.getElementById("event-description").value,
  }

  eventsData.push(newEvent)
  localStorage.setItem("eventsData", JSON.stringify(eventsData))

  hideEventForm()
  loadEventsTable()
  updateOverview()
}

function deleteEvent(id) {
  if (confirm("Are you sure you want to delete this event?")) {
    let eventsData = JSON.parse(localStorage.getItem("eventsData") || "[]")
    eventsData = eventsData.filter((item) => item.id !== id)
    localStorage.setItem("eventsData", JSON.stringify(eventsData))
    loadEventsTable()
    updateOverview()
  }
}

function loadEventsTable() {
  const eventsData = JSON.parse(localStorage.getItem("eventsData") || "[]")
  const tbody = document.getElementById("events-table-body")

  tbody.innerHTML = eventsData
    .map(
      (item) => `
    <tr>
      <td><strong>${item.name}</strong></td>
      <td>${item.date}</td>
      <td>${item.description}</td>
      <td>
        <button class="btn-delete" onclick="deleteEvent(${item.id})">DELETE</button>
      </td>
    </tr>
  `,
    )
    .join("")
}

// Gallery Management
function showGalleryForm() {
  document.getElementById("gallery-form").style.display = "block"
}

function hideGalleryForm() {
  document.getElementById("gallery-form").style.display = "none"
  document.getElementById("gallery-url").value = ""
  document.getElementById("gallery-alt").value = ""
}

function saveGalleryImage(event) {
  event.preventDefault()

  const galleryData = JSON.parse(localStorage.getItem("galleryData") || "[]")
  const newImage = {
    id: Date.now(),
    url: document.getElementById("gallery-url").value,
    alt: document.getElementById("gallery-alt").value,
  }

  galleryData.push(newImage)
  localStorage.setItem("galleryData", JSON.stringify(galleryData))

  hideGalleryForm()
  loadGalleryTable()
  updateOverview()
}

function deleteGalleryImage(id) {
  if (confirm("Are you sure you want to delete this image?")) {
    let galleryData = JSON.parse(localStorage.getItem("galleryData") || "[]")
    galleryData = galleryData.filter((item) => item.id !== id)
    localStorage.setItem("galleryData", JSON.stringify(galleryData))
    loadGalleryTable()
    updateOverview()
  }
}

function loadGalleryTable() {
  const galleryData = JSON.parse(localStorage.getItem("galleryData") || "[]")
  const tbody = document.getElementById("gallery-table-body")

  tbody.innerHTML = galleryData
    .map(
      (item) => `
    <tr>
      <td><img src="${item.url}" alt="${item.alt}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 10px; border: 2px solid #000;"></td>
      <td style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${item.url}</td>
      <td>${item.alt}</td>
      <td>
        <button class="btn-delete" onclick="deleteGalleryImage(${item.id})">DELETE</button>
      </td>
    </tr>
  `,
    )
    .join("")
}

// Subscribers Management
function deleteSubscriber(id) {
  if (confirm("Are you sure you want to delete this subscriber?")) {
    let subscribersData = JSON.parse(localStorage.getItem("subscribersData") || "[]")
    subscribersData = subscribersData.filter((item) => item.id !== id)
    localStorage.setItem("subscribersData", JSON.stringify(subscribersData))
    loadSubscribersTable()
    updateOverview()
  }
}

function loadSubscribersTable() {
  const subscribersData = JSON.parse(localStorage.getItem("subscribersData") || "[]")
  const tbody = document.getElementById("subscribers-table-body")

  tbody.innerHTML = subscribersData
    .map(
      (item) => `
    <tr>
      <td><strong>${item.email}</strong></td>
      <td>${item.date}</td>
      <td>
        <button class="btn-delete" onclick="deleteSubscriber(${item.id})">DELETE</button>
      </td>
    </tr>
  `,
    )
    .join("")
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  checkAuth()
  initializeStorage()
  setupNavigation()
  updateOverview()
  loadEkskulTable()
  loadEventsTable()
  loadGalleryTable()
  loadSubscribersTable()
})
