function updateDarkIcon() {
  const icon = document.getElementById("toggle-dark");
  const isDark = document.body.classList.contains("dark-mode");
  icon.textContent = isDark ? "🌞" : "🌙";
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-dark");

  // מצב כהה/בהיר מהזיכרון
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
  updateDarkIcon();

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
      updateDarkIcon();
    });
  }

  // הדגשת עמוד נוכחי
  const current = location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  // טוען
  window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
  });

  AOS.init({ duration: 800, once: true });
});
