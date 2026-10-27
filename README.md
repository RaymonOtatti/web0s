# Web0S — Design, Technology & Monospace Arcade

Estudio de diseño y tecnología en Buenos Aires. Diseñamos y construimos plataformas web con identidad propia para marcas, personas y proyectos singulares.

Inspirado en la estética editorial y minimalista escandinava (Aino Agency, Gothenburg / Oslo), construido en HTML5, CSS3 y Vanilla JavaScript puro sin herramientas pesadas de compilación.

---

## Características

- **Estética All-Black & Grano Analógico**: Paleta negro mate profundo (`#090909`) con textura de ruido cinematográfico 35mm (`feTurbulence`) de grano ultrafino.
- **Tipografía**: 100% Helvetica Neue en títulos, cuerpo editorial y micro-interacciones.
- **Full-Width Fluid Grid**: Maquetación a ancho completo con ritmo tipográfico generoso y adaptativo.
- **Arquitectura Responsiva Multidispositivo**: Optimización de alta precisión para todo tipo de pantallas y dispositivos:
  - Móviles compactos (320px - 480px) con área segura iOS/Android (`viewport-fit=cover`, `env(safe-area-inset-*)`).
  - Menú drawer móvil con desenfoque de fondo y objetivos táctiles optimizados (mínimo 44px).
  - Tablets en vertical y horizontal (768px - 1080px) con retículas adaptativas para proyectos y servicios.
  - Laptops y pantallas de escritorio estándar (1280px - 1920px) con navegación flotante desacoplada al hacer scroll.
  - Monitores ultra-panorámicos y 4K (2560px+) con límites de ancho balanceados y preservación de jerarquía tipográfica.
  - Detección de dispositivos táctiles (`hover: none`) y modo de movimiento reducido (`prefers-reduced-motion`).
- **ScrollSpy & Indicador en Vivo**: Rastreo automático de sección con badge activo en el header (`PROYECTOS`, `NOSOTROS`, `EQUIPO`, `SERVICIOS`, `PLAY [ARCADE]`) y sincronización limpia con el historial del navegador.
- **Reloj de Estudio en Vivo**: Sincronización horaria en tiempo real con Buenos Aires (UTC-3).
- **Online Multiplayer Arcade (`#play`)**: Juegos clásicos optimizados para navegador mediante WebAssembly y WebRTC P2P:
  - **01. Virtua Tennis 3 Online**: Salas multijugador P2P, soporte para mandos USB/Bluetooth y teclado.
  - **02. PES 6 — Pro Evolution Soccer Online**: Partidos 1v1 online con WebAssembly, relatos clásicos y calibración de gamepads.
  - Pantalla responsiva con relación de aspecto 16:9 real en cualquier resolución móvil o escritorio.
- **Dirección & Equipo**: Perfiles de Raymon Otatti (Dirección Visual) y Franco Michetti (Ingeniería & Código).
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
