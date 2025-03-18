// Tab Switching
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanes = document.querySelectorAll(".tab-pane");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and panes
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    // Add active class to the clicked button and corresponding pane
    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Platform Switching
const platformButtons = document.querySelectorAll(".platform-buttons button");
const platformFrame = document.getElementById("platform-frame");

platformButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const platformUrl = button.getAttribute("data-platform");
    platformFrame.setAttribute("src", platformUrl);
  });
});
