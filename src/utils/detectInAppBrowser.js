export function isInAppBrowser() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /FBAN|FBAV|Instagram|Telegram|Snapchat/i.test(userAgent);
}

export function redirectToBrowser() {
  const siteURL = "https://nataliedates.onrender.com"; // Your actual website URL
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/Android/i.test(userAgent)) {
    // Force open in the default browser on Android (works for Telegram & others)
    window.location.href = `intent://${window.location.host}${window.location.pathname}#Intent;scheme=https;action=android.intent.action.VIEW;end;`;
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    // Force open Safari on iOS (works for Telegram & others)
    window.open(siteURL, "_blank"); // Opens in a new Safari tab
    setTimeout(() => {
      window.location.href = siteURL; // Fallback if first attempt fails
    }, 1000);
  } else {
    // Default behavior: Open normally in a browser
    window.location.href = siteURL;
  }
}
