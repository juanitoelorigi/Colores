function generateQR() {
  const qrcodeDiv = document.getElementById("qr2code");

  const url = "https://github.com/juanitoelorigi/Colores";

  // Generar QR
  new QRCode(qrcodeDiv, {
    text: url,
    width: 100,
    height: 100,
    colorDark: "#2d3436",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

// Generar al cargar
window.onload = generateQR;
