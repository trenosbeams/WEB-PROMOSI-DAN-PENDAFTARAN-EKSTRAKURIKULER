// Data Storage using localStorage
const STORAGE_KEYS = {
  EKSKUL: "smaiptektangsel_ekskul",
  EVENTS: "smaiptektangsel_events",
  ADMIN: "smaiptektangsel_admin",
  IMAGES: "smaiptektangsel_images",
  GALLERY: "ssmaiptektangsel_gallery",
}

function initPageTransition() {
  const transition = document.querySelector(".page-transition")

  // Fade in page on load
  window.addEventListener("load", () => {
    document.body.classList.remove("page-loading")
    if (transition) {
      transition.classList.remove("active")
    }
  })

  // Add transition to all internal links
  document.querySelectorAll('a:not([target="_blank"])').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href")

      // Skip if it's a hash link or external
      if (!href || href.startsWith("#") || href.startsWith("http")) {
        return
      }

      e.preventDefault()

      if (transition) {
        transition.classList.add("active")
        document.body.classList.add("page-loading")

        setTimeout(() => {
          window.location.href = href
        }, 400)
      } else {
        window.location.href = href
      }
    })
  })
}

// Initialize default data
function initializeData() {
  if (!localStorage.getItem(STORAGE_KEYS.EKSKUL)) {
    const defaultEkskul = [
      {
        id: 1,
        name: "Basket",
        icon: "🏀",
        description: "Kembangkan kemampuan bermain basket dan kerja sama tim",
        fullDescription:
          "Ekstrakurikuler basket SMK IPTEK TANGSEL adalah wadah bagi siswa yang ingin mengembangkan kemampuan bermain basket, meningkatkan kebugaran fisik, dan membangun kerja sama tim yang solid. Kami memiliki pelatih berpengalaman dan fasilitas lapangan yang memadai.",
        schedule: "Senin & Rabu, 15:00 - 17:00",
        formLink: "https://forms.google.com/basket",
        images: [],
      },
      {
        id: 2,
        name: "Musik",
        icon: "🎵",
        description: "Asah bakat musik dan tampil di berbagai acara sekolah",
        fullDescription:
          "Ekstrakurikuler musik memberikan kesempatan bagi siswa untuk belajar berbagai alat musik seperti gitar, keyboard, drum, dan vokal. Kami sering tampil di acara sekolah dan kompetisi musik antar sekolah.",
        schedule: "Selasa & Kamis, 15:00 - 17:00",
        formLink: "https://forms.google.com/musik",
        images: [],
      },
      {
        id: 3,
        name: "Pramuka",
        icon: "⛺",
        description: "Belajar kepemimpinan dan keterampilan bertahan hidup",
        fullDescription:
          "Pramuka SMK IPTEK TANGSEL mengajarkan nilai-nilai kepemimpinan, kemandirian, dan keterampilan outdoor. Kami rutin mengadakan kemah, hiking, dan kegiatan sosial untuk mengembangkan karakter siswa.",
        schedule: "Jumat, 14:00 - 17:00",
        formLink: "https://forms.google.com/pramuka",
        images: [],
      },
      {
        id: 4,
        name: "Tari",
        icon: "💃",
        description: "Ekspresikan diri melalui seni tari tradisional dan modern",
        fullDescription:
          "Ekstrakurikuler tari mengajarkan berbagai jenis tarian mulai dari tari tradisional Indonesia hingga tari modern. Siswa akan tampil di berbagai event sekolah dan festival seni.",
        schedule: "Rabu & Jumat, 15:00 - 17:00",
        formLink: "https://forms.google.com/tari",
        images: [],
      },
      {
        id: 5,
        name: "Robotika",
        icon: "🤖",
        description: "Pelajari teknologi robotika dan pemrograman",
        fullDescription:
          "Ekstrakurikuler robotika mengajarkan dasar-dasar pemrograman, elektronika, dan desain robot. Siswa akan berkesempatan mengikuti kompetisi robotika tingkat nasional.",
        schedule: "Selasa & Kamis, 15:30 - 17:30",
        formLink: "https://forms.google.com/robotika",
        images: [],
      },
      {
        id: 6,
        name: "Fotografi",
        icon: "📸",
        description: "Tangkap momen berharga dengan teknik fotografi profesional",
        fullDescription:
          "Belajar teknik fotografi dari dasar hingga mahir, termasuk komposisi, lighting, dan editing. Siswa akan mendokumentasikan berbagai kegiatan sekolah dan mengikuti pameran foto.",
        schedule: "Sabtu, 09:00 - 12:00",
        formLink: "https://forms.google.com/fotografi",
        images: [],
      },
    ]
    localStorage.setItem(STORAGE_KEYS.EKSKUL, JSON.stringify(defaultEkskul))
  }

  if (!localStorage.getItem(STORAGE_KEYS.EVENTS)) {
    const defaultEvents = [
      {
        id: 1,
        title: "Lomba Basket Antar Kelas",
        date: "2024-02-15",
        description:
          "Kompetisi basket seru antar kelas untuk memperebutkan piala juara. Tunjukkan kemampuan terbaikmu!",
        image: null,
      },
      {
        id: 2,
        title: "Pentas Seni Tahunan",
        date: "2024-03-20",
        description: "Pertunjukan seni dari berbagai ekstrakurikuler. Musik, tari, teater, dan banyak lagi!",
        image: null,
      },
      {
        id: 3,
        title: "Kemah Pramuka",
        date: "2024-04-10",
        description: "Kegiatan kemah 3 hari 2 malam di Gunung Pancar. Belajar survival dan leadership skills.",
        image: null,
      },
    ]
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(defaultEvents))
  }

  // Initialize gallery images if not already present
  if (!localStorage.getItem(STORAGE_KEYS.GALLERY)) {
    const defaultGalleryImages = []
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(defaultGalleryImages))
  }
}

// Get data from localStorage
function getEkskul() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.EKSKUL) || "[]")
}

function getEvents() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS) || "[]")
}

function getGalleryImages() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.GALLERY) || "[]")
}

// Save data to localStorage
function saveEkskul(data) {
  localStorage.setItem(STORAGE_KEYS.EKSKUL, JSON.stringify(data))
}

function saveEvents(data) {
  localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(data))
}

function saveGalleryImages() {
  const galleryImages = []

  for (let i = 0; i < 10; i++) {
    const preview = document.getElementById(`galleryPreview${i}`)
    if (preview && preview.src && preview.style.display !== "none") {
      galleryImages.push(preview.src)
    }
  }

  if (galleryImages.length === 0) {
    alert("Belum ada foto yang diupload!")
    return
  }

  localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(galleryImages))
  alert(`${galleryImages.length} foto galeri berhasil disimpan!`)
}

// Load Ekskul List on Home Page
function loadEkskulList() {
  const ekskulList = getEkskul()
  const container = document.getElementById("ekskulList")

  if (!container) return

  container.innerHTML = ekskulList
    .map(
      (ekskul) => `
        <div class="service-card" onclick="goToDetail(${ekskul.id})">
            <span class="service-icon">${ekskul.icon}</span>
            <h3>${ekskul.name}</h3>
            <p>${ekskul.description}</p>
            <a href="ekskul-detail.html?id=${ekskul.id}" class="btn-detail" onclick="event.stopPropagation()">LIHAT DETAIL</a>
        </div>
    `,
    )
    .join("")
}

// Load Gallery
function loadGallery() {
  const container = document.getElementById("galleryGrid")
  if (!container) return

  const galleryImages = getGalleryImages()

  if (galleryImages.length > 0) {
    // Use uploaded images
    const colors = ["pink", "lime", "black", "pink", "lime", "black", "lime", "pink", "black", "lime"]
    container.innerHTML = galleryImages
      .map((imageData, index) => {
        const colorClass = colors[index % colors.length]
        return `
          <div class="gallery-item ${colorClass}">
              <img src="${imageData}" alt="Gallery ${index + 1}">
          </div>
        `
      })
      .join("")
  } else {
    // Use default placeholders
    const colors = ["pink", "lime", "black", "pink", "lime", "black", "lime", "pink", "black", "lime"]
    const activities = [
      "Basketball",
      "Music",
      "Scouts",
      "Dance",
      "Robotics",
      "Photography",
      "Art",
      "Science",
      "Reading",
      "Sports",
    ]

    container.innerHTML = colors
      .map((color, index) => {
        const bgColor = color === "pink" ? "ffb6c1" : color === "lime" ? "ccff00" : "1a1a1a"
        const textColor = color === "black" ? "ffffff" : "000000"
        return `
          <div class="gallery-item ${color}">
              <img src="https://placehold.co/300x300/${bgColor}/${textColor}?text=${activities[index]}" alt="Activity ${index + 1}">
          </div>
      `
      })
      .join("")
  }
}

// Load Events
function loadEvents() {
  const events = getEvents()
  const container = document.getElementById("eventsList")

  if (!container) return

  container.innerHTML = events
    .slice(0, 3)
    .map((event) => {
      const imageUrl =
        event.image || "https://placehold.co/400x300/ffb6c1/000000?text=" + encodeURIComponent(event.title)
      return `
        <div class="event-item">
            <img src="${imageUrl}" alt="${event.title}" class="event-image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 15px; margin-bottom: 10px;">
            <h4>${event.title}</h4>
            <span class="event-date">${formatDate(event.date)}</span>
            <p>${event.description}</p>
        </div>
    `
    })
    .join("")
}

// Load Schedule
function loadSchedule() {
  const ekskulList = getEkskul()
  const container = document.getElementById("scheduleGrid")

  if (!container) return

  container.innerHTML = ekskulList
    .map(
      (ekskul) => `
        <div class="schedule-card">
            <h3>${ekskul.icon} ${ekskul.name}</h3>
            <p>${ekskul.schedule}</p>
        </div>
    `,
    )
    .join("")
}

// Load Ekskul Detail Page
function loadEkskulDetail() {
  const urlParams = new URLSearchParams(window.location.search)
  const id = Number.parseInt(urlParams.get("id"))
  const ekskulList = getEkskul()
  const ekskul = ekskulList.find((e) => e.id === id)

  const container = document.getElementById("detailContent")
  if (!container || !ekskul) return

  // Get uploaded images or use placeholders - always show 4 images
  let images = []
  if (ekskul.images && ekskul.images.length > 0) {
    // Use uploaded images, fill remaining slots with placeholders
    for (let i = 0; i < 4; i++) {
      if (ekskul.images[i]) {
        images.push(ekskul.images[i])
      } else {
        const colors = ["ffb6c1", "ccff00", "ff1493", "1a1a1a"]
        const textColors = ["000000", "000000", "ffffff", "ffffff"]
        images.push(`https://placehold.co/300x200/${colors[i]}/${textColors[i]}?text=${ekskul.name}+${i + 1}`)
      }
    }
  } else {
    // Use all placeholders
    images = [
      `https://placehold.co/300x200/ffb6c1/000000?text=${ekskul.name}+1`,
      `https://placehold.co/300x200/ccff00/000000?text=${ekskul.name}+2`,
      `https://placehold.co/300x200/ff1493/ffffff?text=${ekskul.name}+3`,
      `https://placehold.co/300x200/1a1a1a/ffffff?text=${ekskul.name}+4`,
    ]
  }

  const galleryHTML = images.map((img) => `<img src="${img}" alt="${ekskul.name}">`).join("")

  container.innerHTML = `
        <div class="detail-header">
            <span class="detail-icon">${ekskul.icon}</span>
            <h1>${ekskul.name}</h1>
            <div class="detail-schedule">📅 ${ekskul.schedule}</div>
        </div>
        
        <div class="detail-body">
            <h2>Tentang ${ekskul.name}</h2>
            <p>${ekskul.fullDescription}</p>
        </div>
        
        <div class="detail-gallery">
            <h2>Galeri Kegiatan</h2>
            <div class="gallery-images">
                ${galleryHTML}
            </div>
        </div>
        
        <div class="detail-cta">
            <a href="${ekskul.formLink}" target="_blank" class="btn-register">DAFTAR SEKARANG →</a>
        </div>
    `
}

// Navigate to detail page
function goToDetail(id) {
  window.location.href = `ekskul-detail.html?id=${id}`
}

// Scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Handle Subscribe
function handleSubscribe() {
  const emailInput = document.getElementById("subscribeEmail")
  const email = emailInput.value.trim()

  if (!email) {
    alert("Mohon masukkan email Anda")
    return
  }

  if (!isValidEmail(email)) {
    alert("Mohon masukkan email yang valid")
    return
  }

  alert("Terima kasih! Anda telah berlangganan informasi dari SMK IPTEL TANGSEL")
  emailInput.value = ""
}

// Validate email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Format date
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("id-ID", options)
}

// Admin Login
function handleLogin(event) {
  event.preventDefault()

  const username = document.getElementById("username").value
  const password = document.getElementById("password").value
  const errorDiv = document.getElementById("loginError")

  // Demo credentials
  if (username === "admin" && password === "admin123") {
    localStorage.setItem(STORAGE_KEYS.ADMIN, "true")
    window.location.href = "admin-dashboard.html"
  } else {
    errorDiv.textContent = "Username atau password salah!"
    errorDiv.classList.add("show")
  }
}

// Check if logged in
function isLoggedIn() {
  return localStorage.getItem(STORAGE_KEYS.ADMIN) === "true"
}

// Handle Logout
function handleLogout() {
  localStorage.removeItem(STORAGE_KEYS.ADMIN)
  window.location.href = "admin-login.html"
}

// Show Dashboard Section
function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll(".dashboard-section").forEach((section) => {
    section.classList.remove("active")
  })

  // Remove active class from all links
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    link.classList.remove("active")
  })

  // Show selected section
  const section = document.getElementById(sectionName + "Section")
  if (section) {
    section.classList.add("active")
  }

  // Add active class to clicked link
  event.target.classList.add("active")
}

// Load Dashboard Data
function loadDashboardData() {
  loadEkskulTable()
  loadEventsTable()
  loadScheduleTable()
  loadGalleryDashboard()
}

// Load Ekskul Table
function loadEkskulTable() {
  const ekskulList = getEkskul()
  const tbody = document.getElementById("ekskulTableBody")

  if (!tbody) return

  tbody.innerHTML = ekskulList
    .map(
      (ekskul) => `
        <tr>
            <td>${ekskul.icon}</td>
            <td><strong>${ekskul.name}</strong></td>
            <td>${ekskul.description}</td>
            <td>${ekskul.schedule}</td>
            <td>
                <button class="btn-upload-img" onclick="openImageUpload(${ekskul.id})">UPLOAD FOTO</button>
                <button class="btn-delete" onclick="deleteEkskul(${ekskul.id})">HAPUS</button>
            </td>
        </tr>
    `,
    )
    .join("")
}

// Load Events Table
function loadEventsTable() {
  const events = getEvents()
  const tbody = document.getElementById("eventsTableBody")

  if (!tbody) return

  tbody.innerHTML = events
    .map(
      (event) => `
        <tr>
            <td><strong>${event.title}</strong></td>
            <td>${formatDate(event.date)}</td>
            <td>${event.description}</td>
            <td>
                <span class="photo-status ${event.image ? "has-photo" : "no-photo"}">${
                  event.image ? "✓ FOTO" : "− BELUM ADA FOTO"
                }</span>
                <button class="btn-upload-img" onclick="openEventImageUpload(${event.id})">UPLOAD FOTO</button>
                <button class="btn-delete" onclick="deleteEvent(${event.id})">HAPUS</button>
            </td>
        </tr>
    `,
    )
    .join("")
}

// Load Schedule Table
function loadScheduleTable() {
  const ekskulList = getEkskul()
  const tbody = document.getElementById("scheduleTableBody")

  if (!tbody) return

  tbody.innerHTML = ekskulList
    .map(
      (ekskul) => `
        <tr>
            <td><strong>${ekskul.icon} ${ekskul.name}</strong></td>
            <td>${ekskul.schedule}</td>
            <td><span style="color: #00cc00; font-weight: bold;">● Aktif</span></td>
        </tr>
    `,
    )
    .join("")
}

// Load Gallery Dashboard
function loadGalleryDashboard() {
  const galleryImages = getGalleryImages()

  // Reset all slots first
  for (let i = 0; i < 10; i++) {
    resetGallerySlot(i)
  }

  // Load existing images
  galleryImages.forEach((imageData, index) => {
    if (index < 10) {
      displayGalleryImage(index, imageData)
    }
  })
}

// Show Add Ekskul Form
function showAddEkskulForm() {
  document.getElementById("addEkskulForm").style.display = "block"
}

function hideAddEkskulForm() {
  document.getElementById("addEkskulForm").style.display = "none"
}

// Handle Add Ekskul
function handleAddEkskul(event) {
  event.preventDefault()

  const form = event.target
  const ekskulList = getEkskul()

  const newEkskul = {
    id: Date.now(),
    name: form.name.value,
    icon: form.icon.value,
    description: form.description.value,
    fullDescription: form.fullDescription.value,
    schedule: form.schedule.value,
    formLink: form.formLink.value,
    images: [],
  }

  ekskulList.push(newEkskul)
  saveEkskul(ekskulList)

  form.reset()
  hideAddEkskulForm()
  loadEkskulTable()
  loadScheduleTable()

  alert("Ekskul berhasil ditambahkan!")
}

// Delete Ekskul
function deleteEkskul(id) {
  if (!confirm("Yakin ingin menghapus ekskul ini?")) return

  const ekskulList = getEkskul()
  const filtered = ekskulList.filter((e) => e.id !== id)
  saveEkskul(filtered)

  loadEkskulTable()
  loadScheduleTable()
  alert("Ekskul berhasil dihapus!")
}

// Show Add Event Form
function showAddEventForm() {
  document.getElementById("addEventForm").style.display = "block"
}

function hideAddEventForm() {
  document.getElementById("addEventForm").style.display = "none"
}

// Handle Add Event
function handleAddEvent(event) {
  event.preventDefault()

  const form = event.target
  const events = getEvents()

  const newEvent = {
    id: Date.now(),
    title: form.title.value,
    date: form.date.value,
    description: form.description.value,
    image: null,
  }

  events.push(newEvent)
  saveEvents(events)

  form.reset()
  hideAddEventForm()
  loadEventsTable()

  alert("Event berhasil ditambahkan!")
}

// Delete Event
function deleteEvent(id) {
  if (!confirm("Yakin ingin menghapus event ini?")) return

  const events = getEvents()
  const filtered = events.filter((e) => e.id !== id)
  saveEvents(filtered)

  loadEventsTable()
  alert("Event berhasil dihapus!")
}

// Image Upload Functions
let currentUploadEkskulId = null
let tempUploadedImages = [null, null, null, null] // Array for 4 photos

function openImageUpload(ekskulId) {
  currentUploadEkskulId = ekskulId
  tempUploadedImages = [null, null, null, null]

  const ekskulList = getEkskul()
  const ekskul = ekskulList.find((e) => e.id === ekskulId)

  if (!ekskul) return

  document.getElementById("uploadEkskulName").textContent = ekskul.name
  document.getElementById("imageUploadSection").style.display = "block"

  // Load existing images if any
  if (ekskul.images && ekskul.images.length > 0) {
    ekskul.images.forEach((img, index) => {
      if (index < 4 && img) {
        tempUploadedImages[index] = img
        displaySlotImage(index, img)
      }
    })
  } else {
    // Reset all slots
    for (let i = 0; i < 4; i++) {
      resetSlot(i)
    }
  }

  // Scroll to upload section
  document.getElementById("imageUploadSection").scrollIntoView({ behavior: "smooth" })
}

function closeImageUpload() {
  document.getElementById("imageUploadSection").style.display = "none"
  currentUploadEkskulId = null
  tempUploadedImages = [null, null, null, null]
}

function triggerFileInput(slotIndex) {
  document.getElementById(`imageInput${slotIndex}`).click()
}

function handleSingleImageUpload(slotIndex, event) {
  const file = event.target.files[0]
  if (!file) return

  // Check file size (max 2MB)
  if (file.size > 2 * 1024 * 1024) {
    alert(`File terlalu besar! Maksimal 2MB per foto.`)
    event.target.value = ""
    return
  }

  // Check file type
  if (!file.type.startsWith("image/")) {
    alert(`File bukan gambar!`)
    event.target.value = ""
    return
  }

  // Read file as base64
  const reader = new FileReader()
  reader.onload = (e) => {
    tempUploadedImages[slotIndex] = e.target.result
    displaySlotImage(slotIndex, e.target.result)
  }
  reader.readAsDataURL(file)
}

function displaySlotImage(slotIndex, imageData) {
  const preview = document.getElementById(`preview${slotIndex}`)
  const placeholder = document.getElementById(`placeholder${slotIndex}`)
  const removeBtn = document.getElementById(`remove${slotIndex}`)

  if (preview && placeholder && removeBtn) {
    preview.src = imageData
    preview.style.display = "block"
    placeholder.style.display = "none"
    removeBtn.style.display = "block"
  }
}

function resetSlot(slotIndex) {
  const preview = document.getElementById(`preview${slotIndex}`)
  const placeholder = document.getElementById(`placeholder${slotIndex}`)
  const removeBtn = document.getElementById(`remove${slotIndex}`)
  const input = document.getElementById(`imageInput${slotIndex}`)

  if (preview && placeholder && removeBtn && input) {
    preview.style.display = "none"
    preview.src = ""
    placeholder.style.display = "flex"
    removeBtn.style.display = "none"
    input.value = ""
  }
}

function removeSlotImage(slotIndex) {
  tempUploadedImages[slotIndex] = null
  resetSlot(slotIndex)
}

function saveImages() {
  if (!currentUploadEkskulId) return

  // Filter out null values and check if at least one image exists
  const validImages = tempUploadedImages.filter((img) => img !== null)

  if (validImages.length === 0) {
    alert("Belum ada foto yang diupload!")
    return
  }

  const ekskulList = getEkskul()
  const ekskulIndex = ekskulList.findIndex((e) => e.id === currentUploadEkskulId)

  if (ekskulIndex === -1) return

  // Save all 4 slots (including nulls) to maintain slot positions
  ekskulList[ekskulIndex].images = [...tempUploadedImages]
  saveEkskul(ekskulList)

  alert(`${validImages.length} foto berhasil disimpan!`)
  closeImageUpload()
}

// Event Image Upload Functions
let currentUploadEventId = null
let tempEventImage = null

function openEventImageUpload(eventId) {
  console.log("[v0] Opening event image upload for event ID:", eventId)
  currentUploadEventId = eventId
  tempEventImage = null

  const events = getEvents()
  const event = events.find((e) => e.id === eventId)

  if (!event) {
    console.log("[v0] Event not found")
    return
  }

  console.log("[v0] Event found:", event)
  document.getElementById("uploadEventName").textContent = event.title
  document.getElementById("eventImageUploadSection").style.display = "block"

  // Load existing image if any
  if (event.image) {
    console.log("[v0] Loading existing image")
    tempEventImage = event.image
    displayEventImage(event.image)
  } else {
    console.log("[v0] No existing image, resetting slot")
    resetEventSlot()
  }

  // Scroll to upload section
  document.getElementById("eventImageUploadSection").scrollIntoView({ behavior: "smooth" })
}

function closeEventImageUpload() {
  console.log("[v0] Closing event image upload")
  document.getElementById("eventImageUploadSection").style.display = "none"
  currentUploadEventId = null
  tempEventImage = null
  resetEventSlot()
}

function handleEventImageUpload(event) {
  console.log("[v0] Handling event image upload")
  const file = event.target.files[0]
  if (!file) {
    console.log("[v0] No file selected")
    return
  }

  console.log("[v0] File selected:", file.name, "Size:", file.size)

  // Check file size (max 2MB)
  if (file.size > 2 * 1024 * 1024) {
    alert("File terlalu besar! Maksimal 2MB.")
    event.target.value = ""
    return
  }

  // Check file type
  if (!file.type.startsWith("image/")) {
    alert("File bukan gambar!")
    event.target.value = ""
    return
  }

  // Read file as base64
  const reader = new FileReader()
  reader.onload = (e) => {
    console.log("[v0] File read successfully, storing in tempEventImage")
    tempEventImage = e.target.result
    displayEventImage(e.target.result)
  }
  reader.readAsDataURL(file)
}

function displayEventImage(imageData) {
  console.log("[v0] Displaying event image")
  const preview = document.getElementById("eventPreview")
  const placeholder = document.getElementById("eventPlaceholder")
  const removeBtn = document.getElementById("eventRemove")

  if (preview && placeholder && removeBtn) {
    preview.src = imageData
    preview.style.display = "block"
    placeholder.style.display = "none"
    removeBtn.style.display = "block"
    console.log("[v0] Image displayed successfully")
  } else {
    console.log("[v0] Error: Could not find preview elements")
  }
}

function resetEventSlot() {
  console.log("[v0] Resetting event slot")
  const preview = document.getElementById("eventPreview")
  const placeholder = document.getElementById("eventPlaceholder")
  const removeBtn = document.getElementById("eventRemove")
  const input = document.getElementById("eventImageInput")

  if (preview && placeholder && removeBtn && input) {
    preview.style.display = "none"
    preview.src = ""
    placeholder.style.display = "flex"
    removeBtn.style.display = "none"
    input.value = ""
  }
}

function removeEventImage() {
  console.log("[v0] Removing event image")
  tempEventImage = null
  resetEventSlot()
}

function saveEventImage() {
  console.log("[v0] Saving event image")
  console.log("[v0] Current event ID:", currentUploadEventId)
  console.log("[v0] Temp event image exists:", !!tempEventImage)

  if (!currentUploadEventId) {
    console.log("[v0] Error: No current event ID")
    alert("Error: Tidak ada event yang dipilih!")
    return
  }

  if (!tempEventImage) {
    console.log("[v0] Error: No image uploaded")
    alert("Belum ada foto yang diupload!")
    return
  }

  const events = getEvents()
  console.log("[v0] Current events:", events)

  const eventIndex = events.findIndex((e) => e.id === currentUploadEventId)
  console.log("[v0] Event index:", eventIndex)

  if (eventIndex === -1) {
    console.log("[v0] Error: Event not found in array")
    alert("Error: Event tidak ditemukan!")
    return
  }

  events[eventIndex].image = tempEventImage
  saveEvents(events)
  console.log("[v0] Event image saved successfully")

  alert("Foto event berhasil disimpan!")
  closeEventImageUpload()
  loadEventsTable() // refresh the table so the status chip updates
}

// Gallery Management Functions
function handleGalleryImageUpload(index, event) {
  const file = event.target.files[0]
  if (!file) return

  // Check file size (max 2MB)
  if (file.size > 2 * 1024 * 1024) {
    alert("File terlalu besar! Maksimal 2MB per foto.")
    event.target.value = ""
    return
  }

  // Check file type
  if (!file.type.startsWith("image/")) {
    alert("File bukan gambar!")
    event.target.value = ""
    return
  }

  // Read file as base64
  const reader = new FileReader()
  reader.onload = (e) => {
    displayGalleryImage(index, e.target.result)
  }
  reader.readAsDataURL(file)
}

function displayGalleryImage(index, imageData) {
  const preview = document.getElementById(`galleryPreview${index}`)
  const placeholder = document.getElementById(`galleryPlaceholder${index}`)
  const removeBtn = document.getElementById(`galleryRemove${index}`)

  if (preview && placeholder && removeBtn) {
    preview.src = imageData
    preview.style.display = "block"
    placeholder.style.display = "none"
    removeBtn.style.display = "block"
  }
}

function resetGallerySlot(index) {
  const preview = document.getElementById(`galleryPreview${index}`)
  const placeholder = document.getElementById(`galleryPlaceholder${index}`)
  const removeBtn = document.getElementById(`galleryRemove${index}`)
  const input = document.getElementById(`galleryInput${index}`)

  if (preview && placeholder && removeBtn && input) {
    preview.style.display = "none"
    preview.src = ""
    placeholder.style.display = "flex"
    removeBtn.style.display = "none"
    input.value = ""
  }
}

function removeGalleryImage(index) {
  resetGallerySlot(index)
}

function clearAllGallery() {
  if (!confirm("Yakin ingin menghapus semua foto galeri?")) return

  for (let i = 0; i < 10; i++) {
    resetGallerySlot(i)
  }

  localStorage.removeItem(STORAGE_KEYS.GALLERY)
  alert("Semua foto galeri berhasil dihapus!")
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  initPageTransition()

  initializeData()
  loadEkskulList()
  loadGallery()
  loadEvents()
  loadSchedule()
})
