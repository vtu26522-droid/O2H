// ======================
// MOBILE MENU
// ======================

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

if (hamburger) {

  hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("show");

  });

}


// ======================
// DARK MODE
// ======================

const darkBtn = document.getElementById("darkBtn");

if (localStorage.getItem("theme") === "dark") {

  document.body.classList.add("dark");

}

if (darkBtn) {

  darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

      localStorage.setItem("theme", "dark");

    } else {

      localStorage.setItem("theme", "light");

    }

  });

}


// ======================
// FORM VALIDATION
// ======================

const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    const error = document.getElementById("error");

    error.textContent = "";

    if (!name || !email || !message) {

      error.textContent = "Please fill all fields.";

      return;

    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      error.textContent = "Enter a valid email.";

      return;

    }

    alert("Message sent successfully.");

    form.reset();

  });

}


// ======================
// BLOG API
// ======================

const postsContainer = document.getElementById("posts");

async function loadPosts() {

  if (!postsContainer) return;

  postsContainer.innerHTML = "<p>Loading...</p>";

  try {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {

      throw new Error("Failed");

    }

    const data = await response.json();

    const latestPosts = data.slice(0, 6);

    postsContainer.innerHTML = "";

    latestPosts.forEach((post) => {

      const card = document.createElement("div");

      card.className = "card";

      card.innerHTML = `

      <h3>${post.title}</h3>

      <p>${post.body}</p>

      `;

      postsContainer.appendChild(card);

    });

  } catch (error) {

    postsContainer.innerHTML =

      "<p>Error loading posts.</p>";

  }

}

loadPosts();


// ======================
// KEYBOARD SUPPORT
// ======================

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape") {

    navLinks.classList.remove("show");

  }

});