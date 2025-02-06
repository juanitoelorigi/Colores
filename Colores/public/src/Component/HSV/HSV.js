function generateIMG() {
  const qrcodeDiv = document.getElementById("qrcode");
  qrcodeDiv.innerHTML = `<img src="src/img/imgRoom.jpeg">`;
}

generateIMG();

function updateFilter() {
  const inputs = document.querySelectorAll(".input");
  // Obtener valores H, S, V (valores por defecto 0 si están vacíos)
  const h = inputs[0].value || 0;
  const s = inputs[1].value || 0;
  const v = inputs[2].value || 0;

  // Convertir a enteros
  const hue = parseInt(h, 10) || 0;
  const saturation = parseInt(s, 10) || 0;
  const brightness = parseInt(v, 10) || 0;

  // Aplicar filtros CSS
  const filter = `
      hue-rotate(${hue}deg) 
      saturate(${saturation}%) 
      brightness(${brightness}%)
    `;

  const img = document.querySelector("#qrcode img");
  if (img) {
    img.style.filter = filter;
  }
}

let timeoutId;
const inputs = document.querySelectorAll(".input");

// Escuchar cambios en los inputs y actualizar después de 2 segundos
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    clearTimeout(timeoutId); // Cancelar el timeout anterior
    timeoutId = setTimeout(updateFilter, 2000); // Nuevo timeout
  });
});
