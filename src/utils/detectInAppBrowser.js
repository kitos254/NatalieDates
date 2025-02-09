export function isInAppBrowser() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /FBAN|FBAV|Instagram|Telegram|Snapchat/i.test(userAgent);
}

export function redirectToBrowser() {
  const siteURL = "https://nataliedates.onrender.com"; // Your actual website URL

  if (navigator.userAgent.includes("Android")) {
    // Open in the default browser on Android
    window.location.href = `intent://${window.location.host}${window.location.pathname}#Intent;scheme=https;end;`;
  } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // Open in Safari on iOS
    window.location.href = `x-web-search://?${siteURL}`;
    setTimeout(() => {
      window.location.href = siteURL;
    }, 1000); // Fallback in case the first attempt fails
  } else {
    // Default behavior: just open normally
    window.location.href = siteURL;
  }
}
