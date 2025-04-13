# Color Saturation Adjuster - Real-Time HSV Manipulation

**Una herramienta interactiva para ajustar la saturación, tono y valor de imágenes en tiempo real**

---

## Descripción
Este proyecto implementa una aplicación web que permite manipular los componentes **Hue (Tono)**, **Saturation (Saturación)** y **Value (Valor)** de una imagen en tiempo real. Los cambios se reflejan instantáneamente, lo que facilita el estudio y comprensión del modelo de colores **HSV**.

El proyecto está desarrollado con **HTML5**, **Tailwind CSS** y **JavaScript**, ofreciendo una interfaz limpia y responsive.

---

## Tecnologías utilizadas
- **Frontend**: HTML5, Tailwind CSS, JavaScript ES6+
- **Interacción**: Manejo de eventos en tiempo real
- **Recursos**: Imágenes estáticas y generación de QR Code (opcional)

---

## 📁 Estructura del proyecto
```
📦 public
├── Component/
│   ├── HSV/
│   │   └── JS/          # Lógica principal para manejar HSV
│   └── QRGenerator/     # Generador de QR Code (opcional)
├── img/
│   ├── imgroom.png      # Imagen predeterminada
│   └── paleta.png       # Paleta de colores (opcional)
└── styles/
    └── style.css        # Estilos personalizados
└── index.html           # Página principal
```

---

## Características clave
1. **Ajuste en tiempo real**:
   - Tres controles deslizantes (`H`, `S`, `V`) para modificar los valores de tono, saturación y valor.
   - Cambios visuales instantáneos en la imagen mostrada.

2. **Interfaz intuitiva**:
   - Diseño responsivo gracias a Tailwind CSS.
   - Visualización clara de los valores actuales de `H`, `S` y `V`.

3. **Compatibilidad**:
   - Funciona con imágenes estáticas cargadas previamente.
   - Opción para generar un QR Code con los valores actuales de HSV (https://www.alura.com.br).

4. **Educacional**:
   - Ideal para aprender sobre el modelo de colores HSV.
   - Aplicaciones prácticas en diseño gráfico, fotografía y procesamiento de imágenes.

---

## Instalación
```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/color-saturation-adjuster.git

# Abre el archivo principal
cd color-saturation-adjuster
open index.html
```

---

## Uso
1. Abre la página principal (`index.html`).
2. Ajusta los valores de `H`, `S` y `V` utilizando los controles deslizantes.
3. Observa cómo cambia la imagen en tiempo real según los ajustes realizados.
4. (Opcional) Genera un QR Code con los valores actuales de HSV para compartirlos.

---

## Contribuciones
¡Contribuciones bienvenidas! Para colaborar:
1. Crea un fork del repositorio.
2. Realiza cambios en una nueva rama.
3. Envía un pull request detallando las mejoras.

---

## Licencia
Este proyecto está bajo la licencia [MIT](LICENSE).

---

## Contacto
Para consultas o sugerencias:
- Email: morenogjuanma@gmail.com
- GitHub: juanitoelorigi
- Instagram: @jmmzz18

---

### ¿Para quién es este proyecto?
Este proyecto está dirigido a:
- **Estudiantes**: Aprender sobre el modelo de colores HSV.
- **Diseñadores gráficos**: Experimentar con ajustes de color.
- **Desarrolladores**: Practicar interacción en tiempo real con JavaScript.
- **Amantes de la fotografía**: Mejorar la edición de imágenes.
