// --- CONFIG ---
// Replace with Bino's official WhatsApp number (no plus, country code first).
const BINO_WHATSAPP_NUMBER = "919999999999"; // example: 91xxxxxxxxxx for India
const DEFAULT_MESSAGE = "Hi Bino, I want to try your WhatsApp-based search!";

// Build wa.me deep link
function buildWhatsAppLink(ref) {
  const text = encodeURIComponent(`${DEFAULT_MESSAGE} (ref: ${ref || "direct"})`);
  return `https://wa.me/${BINO_WHATSAPP_NUMBER}?text=${text}`;
}

// Simple referral code handling (client-side demo)
function getRefFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("ref") || "";
}

// Maintain a local referral counter per ref (demo only)
function incrementReferralCounter(ref) {
  if (!ref) return 0;
  const key = `bino_ref_${ref}`;
  const current = parseInt(localStorage.getItem(key) || "0", 10);
  const next = current + 1;
  localStorage.setItem(key, String(next));
  return next;
}

function getOwnRefCode() {
  // You can replace with a stable code or prompt user once.
  let code = localStorage.getItem("bino_my_ref");
  if (!code) {
    code = (Math.random().toString(36).slice(2, 7)).toLowerCase();
    localStorage.setItem("bino_my_ref", code);
  }
  return code;
}

function init() {
  const refFromURL = getRefFromURL();
  const refDisplay = document.getElementById("ref-code");
  const refCount = document.getElementById("ref-count");
  const tryBtn = document.getElementById("try-bino");
  const shareBtn = document.getElementById("share-btn");

  const myRef = getOwnRefCode();
  refDisplay.textContent = myRef;

  // If page opened with ?ref=someone, increment their counter locally
  const count = incrementReferralCounter(refFromURL);
  refCount.textContent = String(count);

  // Set WhatsApp CTA
  tryBtn.href = buildWhatsAppLink(myRef);

  // Share current page with ?ref=myRef
  shareBtn.addEventListener("click", async () => {
    const url = new URL(window.location.href);
    url.searchParams.set("ref", myRef);
    const shareData = {
      title: "Bino — WhatsApp-based Search",
      text: "Try Bino on WhatsApp. It’s fast and simple!",
      url: url.toString(),
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {}
    } else {
      // Fallback: open WhatsApp share
      const waText = encodeURIComponent(`${shareData.text} ${shareData.url}`);
      window.open(`https://wa.me/?text=${waText}`, "_blank");
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
