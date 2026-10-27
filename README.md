# Web0S — Design, Technology & Monospace Arcade

Estudio de diseño y tecnología en Buenos Aires. Diseñamos y construimos plataformas web con identidad propia para marcas, personas y proyectos singulares.

Inspirado en la estética editorial y minimalista escandinava (Aino Agency, Gothenburg / Oslo), construido en HTML5, CSS3 y Vanilla JavaScript puro sin herramientas pesadas de compilación.

---

## Características

- **Estética All-Black & Grano Analógico**: Paleta negro mate profundo (`#090909`) con textura de ruido cinematográfico 35mm (`feTurbulence`) de grano ultrafino.
- **Tipografía**: 100% Helvetica Neue en títulos, cuerpo editorial y micro-interacciones.
- **Full-Width Fluid Grid**: Maquetación a ancho completo con ritmo tipográfico generoso y adaptativo.
- **ScrollSpy & Indicador en Vivo**: Rastreo automático de sección con badge activo en el header (`PROYECTOS`, `NOSOTROS`, `EQUIPO`, `SERVICIOS`, `PLAY [ARCADE]`) y sincronización limpia con el historial del navegador.
- **Reloj de Estudio en Vivo**: Sincronización horaria en tiempo real con Buenos Aires (UTC-3).
- **Retro Monospace Arcade (`#play`)**: Juegos retro funcionales reconstruidos en pantalla monospace:
  - **01. Snekst [Snake]**: Con controles por teclado (flechas o WASD), pantalla táctil D-Pad para móviles, pausa y récord guardado.
  - **02. Textris [Tetris]**: Con caída suave, caída rápida (hard drop), rotación y eliminación de líneas.
- **Dirección & Equipo**: Perfiles de Franco Michetti (Dirección Visual) y Raymon Otatti (Ingeniería & Código).
- **Casos de Estudio**:
  - `001 La Guardia Barrio Abierto`
  - `002 Raymon Otatti Design & Co.`
  - `003 Franie Smith`
  - `004 Sáenz Valiente & Asociados`

---

## Ejecución Local

Para visualizar el proyecto localmente:

```bash
cd dist
python -m http.server 4325
```

Abre en tu navegador:
```
http://127.0.0.1:4325/
```

---

## Estructura del Proyecto

```
Web0S/
├── dist/
│   ├── index.html        # Página principal
│   ├── styles.css        # Sistema de estilos y layout full-width
│   ├── main.js           # Scrollspy, reloj BUE, arcade engine y modales
│   ├── favicon.svg       # Favicon vectorial
│   ├── images/           # Capturas de casos de estudio (WebP)
│   └── logo/             # Archivos de identidad vectorial (SVG, PNG)
├── LOGO/                 # Vectores maestros originales (.ai)
├── index.html            # Redirección raíz
└── README.md
```
