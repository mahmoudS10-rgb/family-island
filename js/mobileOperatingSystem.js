function getMobileOperatingSystem() {
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const appStoreBtn = document.querySelectorAll(".appStoreBtn");
  const googlePlayBtn = document.querySelectorAll(".googlePlayBtn");
  if (userAgent && appStoreBtn && googlePlayBtn) {
    if (/Android/i.test(userAgent)) {
      document.querySelectorAll(".appStoreBtn")
        .forEach((item) => item.classList.add("dnone"));
      googlePlayBtn.forEach((item) => item.style.margin = "0");
      return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      document.querySelectorAll(".googlePlayBtn")
        .forEach((item) => item.classList.add("dnone"));
      appStoreBtn.forEach((item) => item.style.margin = "0");
    }
  }
  return true;
}

getMobileOperatingSystem();