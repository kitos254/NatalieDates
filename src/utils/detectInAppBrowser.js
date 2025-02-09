export function isInAppBrowser() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /FBAN|FBAV|Instagram|Telegram|Snapchat/i.test(userAgent);
}

export function redirectToBrowser() {
  const browsers = {
    Chrome: {
      android: "com.android.chrome",
      ios: "googlechrome://"
    },
    Firefox: {
      android: "org.mozilla.firefox",
      ios: "firefox://open-url?url="
    },
    Edge: {
      android: "com.microsoft.emmx",
      ios: "microsoft-edge-http://"
    },
    Opera: {
      android: "com.opera.browser",
      ios: "" // Opera doesn't support iOS custom URLs
    },
    Brave: {
      android: "com.brave.browser",
      ios: "brave://open-url?url="
    }
  };

  const selectedBrowser = prompt(
    "Choose a browser: Chrome, Firefox, Edge, Opera, Brave"
  );

  const userAgent = navigator.userAgent;
  const isAndroid = /Android/i.test(userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const siteURL = "https://nataliedates.onrender.com"; // Replace with your actual website

  if (isAndroid && browsers[selectedBrowser]?.android) {
    // Open in the chosen Android browser
    window.location.href = `intent://${window.location.host}${window.location.pathname}#Intent;scheme=https;package=${browsers[selectedBrowser].android};end;`;
  } else if (isIOS && browsers[selectedBrowser]?.ios) {
    // Open in the chosen iOS browser using URL schemes
    window.location.href = `${browsers[selectedBrowser].ios}${siteURL}`;
  } else {
    // Default fallback: Open normally
    alert("Opening in the default browser.");
    window.location.href = siteURL;
  }
}
