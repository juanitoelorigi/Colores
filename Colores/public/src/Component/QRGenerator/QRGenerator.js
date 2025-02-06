function generateQR() {
  const qrcodeDiv = document.getElementById("qr2code");
  const logoUrl = "";
  const url = "https://github.com/juanitoelorigi/Colores";

  // Generar QR
  new QRCode(qrcodeDiv, {
    text: url,
    width: 220,
    height: 220,
    colorDark: "#2d3436",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Insertar logo
  setTimeout(() => {
    const logo = document.createElement("img");
    logo.src = logoUrl;
    logo.classList.add("qr2-logo");
    qrcodeDiv.appendChild(logo);
  }, 100);
}

// Generar al cargar
window.onload = generateQR;
