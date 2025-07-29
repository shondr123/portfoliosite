document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-dark");

  // בודק אם המשתמש שמר העדפה למצב כהה
  const currentMode = localStorage.getItem("dark-mode");
  if (currentMode === "enabled") {
    document.body.classList.add("dark-mode");
  }

  // מאזין ללחיצה על כפתור המצב
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
      } else {
        localStorage.setItem("dark-mode", "disabled");
      }
    });
  }
});
