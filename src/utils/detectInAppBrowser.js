export function isInAppBrowser() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /FBAN|FBAV|Instagram|Telegram|Snapchat/i.test(userAgent);
}

export function redirectToBrowser() {
  const siteURL = "https://nataliedates.onrender.com"; // Your actual website URL
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/Android/i.test(userAgent)) {
    // ✅ Force open in default browser on Android (works for Telegram)
    window.location.href = `intent://${window.location.host}${window.location.pathname}#Intent;scheme=https;package=com.android.chrome;end;`;
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    // ✅ Force open in Safari on iOS (Telegram blocks window.open, so we use replace)
    setTimeout(() => {
      window.location.replace(siteURL);
    }, 500);
  } else {
    // Default behavior: Open normally in a browser
    window.location.href = siteURL;
  }

  // ⛔ If Telegram still blocks redirection, show a message
  setTimeout(() => {
    alert("If you are not redirected, tap the three dots (⋮) in the top right and select 'Open in Browser'.");
  }, 2000);
}
