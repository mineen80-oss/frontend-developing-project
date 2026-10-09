const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", function () {
    mainNav.classList.toggle("open");
  });
}

const tabs = document.querySelectorAll(".tab");
const searchButton = document.getElementById("searchButton");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (item) {
      item.classList.remove("active");
    });

    tab.classList.add("active");

    if (searchButton) {
      searchButton.textContent = "Search " + tab.dataset.service;
    }
  });
});

const searchForm = document.getElementById("searchForm");
const searchMessage = document.getElementById("searchMessage");

if (searchForm && searchMessage) {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const activeTab = document.querySelector(".tab.active");
    const service = activeTab ? activeTab.dataset.service : "Travel";

    searchMessage.textContent =
      service + " search is working as a demo. Real booking APIs will be added later.";
  });
}
