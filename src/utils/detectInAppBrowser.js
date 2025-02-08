export function isInAppBrowser() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /FBAN|FBAV|Instagram|Telegram|Snapchat/i.test(userAgent);
}

export function redirectToBrowser() {
  setTimeout(() => {
    if (navigator.userAgent.includes("Android")) {
      window.location.href = `intent://${window.location.host}${window.location.pathname}#Intent;scheme=https;package=com.android.chrome;end;`;
    } else {
      window.location.href = "https://nataliedates.onrender.com"; // Change this to your actual website URL
    }
  }, 3000); // Delay redirection by 3 seconds
}
