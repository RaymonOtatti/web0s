/**
 * Web0S — Full-Width Scandinavian Design & Technology System
 * Inspired by Aino Agency (Gothenburg / Oslo)
 * 
 * Features:
 * 1. Real-time ScrollSpy & Browser Section Tracker
 * 2. Scandinavian Live Studio Clock (Buenos Aires, UTC-3)
 * 3. Fast & Whisper-Subtle Text Shimmer (.hoverchar)
 * 4. Microscopic Ambient Matrix Grid Canvas
 * 5. Procedural Retro Arcade Audio Synthesizer (Safe Web Audio API)
 * 6. High-Performance Retro Monospace Arcade: Snekst (Snake) & Textris (Tetris)
 * 7. Panic "Boss Key" Terminal Screen
 * 8. Project Detail Modal Dialog & Mobile Navigation
 */

// ==========================================================================
// 1. Projects Data Definition & Internationalization (EN / ES)
// ==========================================================================
const projects = {
  laguardia: {
    id: 'la-guardia',
    count: '001',
    category: { en: 'Real Estate / Web', es: 'Real Estate / Web' },
    discipline: { en: 'Digital Strategy, Web & Identity', es: 'Estrategia Digital, Web & Identidad' },
    title: 'La Guardia Barrio Abierto',
    description: {
      en: 'An open neighborhood told through its landscape, human scale, and the serene experience of living close to everything.',
      es: 'Un barrio abierto narrado desde su paisaje, su escala humana y la experiencia serena de vivir cerca de todo.'
    },
    image: 'images/laguardia.webp',
    url: 'https://barriolaguardia.com/',
    year: '2026'
  },
  raymon: {
    id: 'raymon-otatti',
    count: '002',
    category: { en: 'Creative Portfolio / Web', es: 'Portfolio Creativo / Web' },
    discipline: { en: 'Art Direction & Creative Coding', es: 'Dirección de Arte & Creative Coding' },
    title: 'Raymon Otatti Design & Co.',
    description: {
      en: 'An austere and immersive digital experience where every piece of design and art direction takes center stage.',
      es: 'Una experiencia inmersiva y austera donde cada pieza de diseño y dirección de arte adquiere absoluto protagonismo.'
    },
    image: 'images/raymon.webp',
    url: 'https://raymonotatti.com/',
    year: '2026'
  },
  franie: {
    id: 'franie-smith',
    count: '003',
    category: { en: 'Music & Culture / Web', es: 'Música & Cultura / Web' },
    discipline: { en: 'Web Design, Identity & Discography', es: 'Diseño Web, Identidad & Discografía' },
    title: 'Franie Smith',
    description: {
      en: 'A digital haven bringing together music releases, live dates, and the acoustic and visual universe of a singular artist.',
      es: 'Un espacio digital que reúne música, lanzamientos, fechas en vivo y el universo sonoro y visual de una artista singular.'
    },
    image: 'images/franie.webp',
    url: 'https://franiesmith.com/',
    year: '2026'
  },
  svya: {
    id: 'svya',
    count: '004',
    category: { en: 'Law Firm / Web', es: 'Estudio Jurídico / Web' },
    discipline: { en: 'Editorial Design & Digital Architecture', es: 'Diseño Editorial & Arquitectura Digital' },
    title: 'Sáenz Valiente & Asociados',
    description: {
      en: 'A restrained, typographic, and editorial online presence built for a prestigious law firm with deep heritage and contemporary vision.',
      es: 'Una presencia sobria, tipográfica y editorial diseñada para un estudio jurídico con sólida trayectoria y visión contemporánea.'
    },
    image: 'images/svya.webp',
    url: null,
    year: '2026'
  }
};

const translations = {
  en: {
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_team: 'Team',
    nav_services: 'Services',
    nav_arcade: 'Arcade',
    nav_contact: 'Contact',
    mob_menu: 'Menu',
    statement_h1: 'Design and technology studio in Buenos Aires. We design and build distinctive web platforms for singular brands, people, and projects.',
    cta_projects: 'Explore projects',
    cta_arcade: 'Arcade',
    section_projects: 'Projects',
    p1_tag: 'Real Estate / 2026',
    p2_tag: 'Art Direction & Co. / 2026',
    p3_tag: 'Music & Culture / 2026',
    p4_tag: 'Law Firm / 2026',
    copy_big: 'Contemporary design backed by digital engineering, crafted in Buenos Aires. We build websites with distinct character, typographic architecture, and performance for clients in Argentina, Latin America, and worldwide.',
    team_headline: 'Team & Direction',
    bio_raymon_role: 'Visual Direction',
    bio_raymon_p1: 'Specialized in visual identity, typographic systems, and art direction for interactive media. His work explores the relationship between printed editorial tradition and the ease of contemporary digital design, creating coherent, refined aesthetic universes with strong authorial identity.',
    bio_raymon_p2: 'At Web0S he leads visual conceptualization, aesthetic curation, and the graphic architecture of every project, ensuring each website precisely conveys the character of those who inhabit it.',
    disc_art_dir: 'Art Direction',
    disc_design_sys: 'Design Systems',
    disc_typo: 'Typographic Craft',
    disc_branding: 'Brand Identity',
    bio_franco_role: 'Engineering & Code',
    bio_franco_p1: 'Specialized in frontend architecture, high-performance interfaces, and bespoke interactive experiences. He approaches software development as a craft where fluidity, accessibility, and loading speeds are just as essential as visual impact.',
    bio_franco_p2: 'At Web0S he coordinates technical architecture, search engine optimization, and interaction design, ensuring every platform is fast, resilient, and enjoyable across any resolution or device.',
    disc_interaction: 'Interaction Design',
    services_kicker: '03 / Capabilities & Services',
    services_headline: 'Capabilities',
    services_lead: 'We merge typographic rigor, art direction, and modern software engineering to build high-impact, lightning-fast web platforms with distinct character.',
    pillar_a_title: 'Visual Direction & Design',
    cap_1_title: 'Digital Art Direction',
    cap_1_desc: 'Aesthetic conceptualization, visual composition, and singular graphic tone for each project.',
    cap_2_title: 'Visual Identity & Branding',
    cap_2_desc: 'Complete identity systems, color palettes, brand voice, and digital assets.',
    cap_3_title: 'Typographic Systems & UI',
    cap_3_desc: 'High-legibility typographic architecture, content hierarchies, and scalable design systems.',
    cap_4_title: 'Editorial Experiences',
    cap_4_desc: 'Design for publications, monographs, and web experiences with contemporary editorial spirit.',
    pillar_b_title: 'Web Engineering & Technology',
    cap_5_title: 'Bespoke Web Development',
    cap_5_desc: 'Clean, semantic, modular code with zero pre-made templates or unnecessary bloat.',
    cap_6_title: 'Frontend Architecture & Performance',
    cap_6_desc: 'Extreme optimization, instant load times, and strict standards compliance.',
    cap_7_title: 'Interaction Design & Motion',
    cap_7_desc: 'Fluid micro-interactions at 60/120 FPS, organic transitions, and refined interactive states.',
    cap_8_title: 'Creative Coding & Web Experiences',
    cap_8_desc: 'Interactive canvas animations, discrete shaders, and immersive branded experiences.',
    cta_status: 'Availability 2026',
    cta_message: "Let's start a project together.",
    cta_description: 'We work with a select number of clients each year to guarantee undivided focus and handcrafted quality in every line of design and code.',
    cta_button: 'Start a conversation',
    cta_reply: 'Typical reply in < 24h',
    arcade_kicker: '04 / Online Multiplayer Arcade',
    arcade_webrtc: 'WebRTC P2P Online',
    arcade_gamepad: 'Gamepad Ready',
    tag_multiplayer: 'Multiplayer',
    hud_game: 'Game',
    hud_mode: 'Mode',
    mode_multiplayer: 'Rooms & Matchmaking',
    hud_platform: 'Platform',
    btn_lobby_rooms: 'Rooms / Matchmaking',
    btn_direct_play: 'Direct Play',
    btn_fullscreen: '⛶ Fullscreen',
    overlay_launch_game: 'Enter the Game',
    overlay_launch_rooms: 'Create / Join Room',
    overlay_click_hint: 'Click to run in browser (WebAssembly)',
    matchmaking_title: 'Online Multiplayer · Invite a Friend',
    matchmaking_p2p: 'P2P Lag-Free',
    matchmaking_desc: 'Copy the match link or share your room code so your opponent can join instantly from any PC or phone.',
    btn_copy_link: 'Copy Link',
    btn_open_rooms: 'Open Rooms ↗',
    link_copied: 'Link copied to clipboard!',
    guide_steps_title: 'How to play online with friends',
    guide_controls_title: 'Controls & Compatibility',
    vt3_title: 'Virtua Tennis 3 Online',
    vt3_desc: 'Play single matches or create your online multiplayer room without downloads. Compatible with keyboard and USB/Bluetooth controllers.',
    vt3_step_1: 'Create a room: Click «Rooms / Matchmaking» and choose a room name or code.',
    vt3_step_2: 'Share the link: Send the link or code to your rival to enter the same court.',
    vt3_step_3: 'Select player & court: Choose surface, set count, and start the rally!',
    vt3_ctrl_1: 'Keyboard: Arrow keys to move. Z (topspin/flat), X (slice), A (lob/drop shot), Space (Start).',
    vt3_ctrl_2: 'Gamepad USB / Bluetooth: Automatically detected (PlayStation, Xbox, or generic). Move stick or press button to calibrate.',
    vt3_ctrl_3: 'Mobile / Tablet: Virtual on-screen touch controls supported (landscape mode recommended).',
    pes6_title: 'PES 6 — Pro Evolution Soccer Online',
    pes6_desc: 'The legendary football classic running natively in your browser. WebRTC P2P multiplayer rooms, authentic Argentine/Spanish commentary, and full gamepad support.',
    pes6_step_1: 'Go to Wireless: In the in-game main menu, scroll down to the «Inalámbrico / Wireless» section.',
    pes6_step_2: 'Pick or create a room: In the Online tab, browse available rooms or create your own with a custom name.',
    pes6_step_3: 'Connect & Kick off: Your friend connects via P2P direct link. Pick your classic club or national team and play!',
    pes6_ctrl_1: 'Keyboard P1: Arrows to move. X (Short pass), C (Long pass / Cross), S (Shoot), W (Through ball), E (Sprint).',
    pes6_ctrl_2: 'Dual Gamepads: Full plug-and-play support for Player 1 and Player 2 with PlayStation / Xbox controllers.',
    pes6_ctrl_3: 'Audio & Commentary: Choose between Mariano Closs Argentine commentary, original Spanish commentary, or lightweight mode.',
    footer_contact: 'Contact',
    dialog_case: 'Case',
    dialog_close: 'Close ×',
    dialog_visit: 'Visit live site ↗',
    scroll_top: 'Top'
  },
  es: {
    nav_projects: 'Proyectos',
    nav_about: 'Nosotros',
    nav_team: 'Equipo',
    nav_services: 'Servicios',
    nav_arcade: 'Arcade',
    nav_contact: 'Contacto',
    mob_menu: 'Menú',
    statement_h1: 'Estudio de diseño y tecnología en Buenos Aires. Diseñamos y construimos plataformas web con identidad propia para marcas, personas y proyectos singulares.',
    cta_projects: 'Explorar proyectos',
    cta_arcade: 'Arcade',
    section_projects: 'Proyectos',
    p1_tag: 'Real Estate / 2026',
    p2_tag: 'Dirección de Arte & Co. / 2026',
    p3_tag: 'Música & Cultura / 2026',
    p4_tag: 'Estudio Jurídico / 2026',
    copy_big: 'Diseño contemporáneo con ingeniería digital por debajo, hecho en Buenos Aires. Construimos sitios web con carácter propio, arquitectura tipográfica y performance para clientes en Argentina, Latinoamérica y el mundo.',
    team_headline: 'Equipo & Dirección',
    bio_raymon_role: 'Dirección Visual',
    bio_raymon_p1: 'Especializado en identidad visual, sistemas tipográficos y dirección de arte para medios interactivos. Su trabajo explora la relación entre la tradición editorial impresa y la soltura del diseño digital contemporáneo, creando universos estéticos coherentes, depurados y con fuerte identidad de autor.',
    bio_raymon_p2: 'En Web0S lidera la conceptualización visual, la curaduría estética y la estructura gráfica de cada proyecto, garantizando que cada sitio web transmita con precisión el carácter de quien lo habita.',
    disc_art_dir: 'Dirección de Arte',
    disc_design_sys: 'Sistemas de Diseño',
    disc_typo: 'Criterio Tipográfico',
    disc_branding: 'Identidad de Marca',
    bio_franco_role: 'Ingeniería & Código',
    bio_franco_p1: 'Especializado en arquitectura frontend, interfaces de alto rendimiento y experiencias interactivas a medida. Concibe el desarrollo de software como una disciplina artesanal donde la fluidez, la accesibilidad y los tiempos de carga son tan importantes como el impacto visual.',
    bio_franco_p2: 'En Web0S coordina la arquitectura técnica, la optimización para buscadores y el diseño de interacción, asegurando que cada plataforma sea rápida, robusta y disfrutable en cualquier resolución o dispositivo.',
    disc_interaction: 'Diseño de Interacción',
    services_kicker: '03 / Capacidades & Servicios',
    services_headline: 'Capacidades',
    services_lead: 'Unimos rigor tipográfico, dirección de arte e ingeniería de software moderna para construir plataformas web de alto impacto, veloces y con carácter propio.',
    pillar_a_title: 'Dirección Visual & Diseño',
    cap_1_title: 'Dirección de Arte Digital',
    cap_1_desc: 'Conceptualización estética, composición visual y tono gráfico singular para cada proyecto.',
    cap_2_title: 'Identidad Visual & Branding',
    cap_2_desc: 'Sistemas de identidad completos, paletas cromáticas, voz de marca y activos digitales.',
    cap_3_title: 'Sistemas Tipográficos & UI',
    cap_3_desc: 'Arquitectura tipográfica de alta legibilidad, jerarquías de contenido y design systems escalables.',
    cap_4_title: 'Experiencias Editoriales',
    cap_4_desc: 'Tratamiento de publicaciones, monografías y sitios con espíritu editorial contemporáneo.',
    pillar_b_title: 'Ingeniería Web & Tecnología',
    cap_5_title: 'Desarrollo Web a Medida',
    cap_5_desc: 'Código limpio, semántico y modular sin plantillas prediseñadas ni sobrecarga innecesaria.',
    cap_6_title: 'Arquitectura Frontend & Performance',
    cap_6_desc: 'Optimización extrema, tiempos de carga instantáneos y cumplimiento estricto de estándares.',
    cap_7_title: 'Diseño de Interacción & Motion',
    cap_7_desc: 'Microinteracciones fluidas a 60/120 FPS, transiciones orgánicas y estados interactivos refinados.',
    cap_8_title: 'Creative Coding & Experiencias Web',
    cap_8_desc: 'Animaciones canvas interactivas, shaders discretos y experiencias inmersivas con identidad.',
    cta_status: 'Disponibilidad 2026',
    cta_message: 'Iniciemos un proyecto juntos.',
    cta_description: 'Trabajamos con un número selecto de clientes por año para garantizar dedicación total y calidad artesanal en cada línea de diseño y código.',
    cta_button: 'Iniciar conversación',
    cta_reply: 'Respuesta habitual en < 24hs',
    arcade_kicker: '04 / Arcade Multijugador Online',
    arcade_webrtc: 'WebRTC P2P Online',
    arcade_gamepad: 'Mandos compatibles',
    tag_multiplayer: 'Multijugador',
    hud_game: 'Juego',
    hud_mode: 'Modo',
    mode_multiplayer: 'Salas Online & Solo',
    hud_platform: 'Plataforma',
    btn_lobby_rooms: 'Salas / Rooms',
    btn_direct_play: 'Cancha / Directo',
    btn_fullscreen: '⛶ Pantalla completa',
    overlay_launch_game: 'Entrar a la pista',
    overlay_launch_rooms: 'Crear / Unirse a sala',
    overlay_click_hint: 'Click para cargar en el navegador (WebAssembly)',
    matchmaking_title: 'Multijugador Online · Invita a un rival',
    matchmaking_p2p: 'P2P Sin Lag',
    matchmaking_desc: 'Copia el enlace de partida o comparte tu código de sala para que tu rival se una al instante desde cualquier PC o celular.',
    btn_copy_link: 'Copiar enlace',
    btn_open_rooms: 'Abrir salas ↗',
    link_copied: '¡Enlace copiado al portapapeles!',
    guide_steps_title: 'Cómo jugar online con amigos',
    guide_controls_title: 'Controles & Compatibilidad',
    vt3_title: 'Virtua Tennis 3 Online',
    vt3_desc: 'Juega partidos individuales o crea tu sala multijugador online sin descargas. Compatible con teclado y mandos USB/Bluetooth.',
    vt3_step_1: 'Crea una sala: Haz click en «Salas / Rooms» y selecciona un nombre o código de sala.',
    vt3_step_2: 'Comparte el enlace: Pasa el link o código a tu rival para que entre en la misma pista.',
    vt3_step_3: 'Selecciona tenista y pista: Configura set, superficie y ¡que comience el peloteo!',
    vt3_ctrl_1: 'Teclado: Flechas de dirección para moverte. Teclas Z (tiro plano/liftado), X (cortado), A (globo/dejada), Space (Start).',
    vt3_ctrl_2: 'Mando USB / Bluetooth: Detectado automáticamente (PlayStation, Xbox o genérico). Mueve el joystick o presiona un botón para calibrar.',
    vt3_ctrl_3: 'Móvil / Tablet: Compatible con controles virtuales táctiles en pantalla (modo horizontal recomendado).',
    pes6_title: 'PES 6 — Pro Evolution Soccer Online',
    pes6_desc: 'El clásico indiscutido del fútbol de Konami corriendo nativo en el navegador. Salas multijugador P2P WebRTC, relatos de Mariano Closs o España, y compatibilidad total con mandos.',
    pes6_step_1: 'Entra a Inalámbrico: En el menú principal del juego, baja hasta la opción «Inalámbrico» (abajo del todo).',
    pes6_step_2: 'Elige o crea sala: En la pestaña «Online» selecciona una sala existente o crea una nueva con el nombre que prefieras.',
    pes6_step_3: 'Conexión P2P directa: Pasa el link a tu rival para conectar por WebRTC. Elige equipo clásico o selección y ¡a la cancha!',
    pes6_ctrl_1: 'Teclado J1: Flechas para moverte. X (Pase corto), C (Pase largo/Centro), S (Tiro al arco), W (Pase al hueco), E (Pique / Sprint).',
    pes6_ctrl_2: 'Mandos USB / Bluetooth: Soporte para 2 controles en simultáneo (PlayStation, Xbox o genéricos) con mapeo configurable.',
    pes6_ctrl_3: 'Relatos a elección: Podés elegir relatos de Mariano Closs (Argentina), relatos españoles o jugar en modo ligero sin comentarios.',
    footer_contact: 'Contacto',
    dialog_case: 'Caso',
    dialog_close: 'Cerrar ×',
    dialog_visit: 'Visitar sitio en vivo ↗',
    scroll_top: 'Arriba'
  }
};

let currentLanguage = localStorage.getItem('web0s_lang') || 'en';

function applyLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('web0s_lang', lang);

  const t = translations[lang] || translations.en;

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.textContent = t[key];
      if (el.dataset.text !== undefined) {
        el.dataset.text = t[key];
      }
    }
  });

  // Update language toggle buttons
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const mobLangToggleBtn = document.getElementById('mob-lang-toggle-btn');
  const nextLangLabel = lang === 'en' ? 'ES' : 'EN';
  const nextLangAria = lang === 'en' ? 'Cambiar idioma a Español' : 'Switch language to English';

  if (langToggleBtn) {
    langToggleBtn.textContent = nextLangLabel;
    langToggleBtn.dataset.text = nextLangLabel;
    langToggleBtn.setAttribute('aria-label', nextLangAria);
  }
  if (mobLangToggleBtn) {
    mobLangToggleBtn.textContent = nextLangLabel;
    mobLangToggleBtn.setAttribute('aria-label', nextLangAria);
  }

  // Update mobile menu button text
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileToggle) {
    const isDrawerOpen = mobileDrawer && mobileDrawer.classList.contains('is-active');
    const closeText = lang === 'en' ? 'Close' : 'Cerrar';
    const menuText = lang === 'en' ? 'Menu' : 'Menú';
    mobileToggle.textContent = isDrawerOpen ? closeText : menuText;
  }

  // Update Arcade dynamic texts
  if (typeof updateArcadeUI === 'function') {
    updateArcadeUI();
  }
}

function toggleLanguage() {
  const nextLang = currentLanguage === 'en' ? 'es' : 'en';
  applyLanguage(nextLang);
}

function initLanguageSwitch() {
  const btn = document.getElementById('lang-toggle-btn');
  const mobBtn = document.getElementById('mob-lang-toggle-btn');
  if (btn) btn.addEventListener('click', toggleLanguage);
  if (mobBtn) mobBtn.addEventListener('click', toggleLanguage);
  applyLanguage(currentLanguage);
}

// ==========================================================================
// 2. Real-time ScrollSpy & Browser Section Tracking
// ==========================================================================
const sectionBadge = document.getElementById('current-section-label');
const mobSectionBadge = document.getElementById('mob-section-label');
const navLinks = document.querySelectorAll('.nav-link[data-section]');
const trackedSections = document.querySelectorAll('section[id], section[data-section-name]');

let activeSectionId = 'proyectos';

function updateActiveSection(sectionId, sectionName) {
  if (activeSectionId === sectionId && sectionBadge && sectionBadge.textContent === sectionName) {
    return;
  }
  activeSectionId = sectionId;

  if (sectionBadge) sectionBadge.textContent = sectionName;
  if (mobSectionBadge) mobSectionBadge.textContent = sectionName;

  navLinks.forEach((link) => {
    const isTarget = link.dataset.section === sectionId ||
      (sectionId === 'top' && link.dataset.section === 'nosotros') ||
      (sectionId === 'codigo' && link.dataset.section === 'nosotros');
    link.classList.toggle('active', isTarget);
  });

  if (window.history && window.history.replaceState && sectionId) {
    const newHash = sectionId === 'top' || sectionId === 'codigo' ? '#nosotros' : '#' + sectionId;
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, '', newHash);
    }
  }
}

if ('IntersectionObserver' in window) {
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -50% 0px',
    threshold: [0, 0.2, 0.5]
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id || 'proyectos';
        const name = entry.target.dataset.sectionName || id.toUpperCase();
        updateActiveSection(id, name);
      }
    });
  }, observerOptions);

  trackedSections.forEach((sec) => observer.observe(sec));
}

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 180;
  trackedSections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    if (scrollPos >= top && scrollPos < top + height) {
      const id = sec.id || 'proyectos';
      const name = sec.dataset.sectionName || id.toUpperCase();
      updateActiveSection(id, name);
    }
  });
}, { passive: true });

// ==========================================================================
// 3. Scandinavian Live Studio Clock (Buenos Aires Time)
// ==========================================================================
function updateStudioClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const navTime = document.getElementById('nav-time');
  const studioTime = document.getElementById('studio-time');

  if (navTime) navTime.textContent = timeString;
  if (studioTime) studioTime.textContent = timeString;
}
setInterval(updateStudioClock, 1000);
updateStudioClock();

// ==========================================================================
// 4. Fast & Whisper-Subtle Text Shimmer (.hoverchar)
// ==========================================================================
const shimmerChars = '01·';

function bindHoverchar() {
  // Only bind on devices that actually support hover (mouse/trackpad), avoiding jank on touch devices
  const supportsHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!supportsHover) return;

  document.querySelectorAll('.hoverchar').forEach((el) => {
    const originalText = el.dataset.text || el.textContent.trim();
    el.dataset.text = originalText;

    let animId = null;
    let isAnimating = false;

    el.addEventListener('mouseenter', () => {
      if (isAnimating) return;
      isAnimating = true;
      cancelAnimationFrame(animId);
      const start = performance.now();
      const duration = 85;

      function frame(now) {
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / duration);
        const resolvedChars = Math.floor(progress * originalText.length);

        let scrambled = '';
        for (let i = 0; i < originalText.length; i++) {
          if (originalText[i] === ' ' || originalText[i] === '\n') {
            scrambled += originalText[i];
          } else if (i === resolvedChars) {
            scrambled += shimmerChars[Math.floor(Math.random() * shimmerChars.length)];
          } else {
            scrambled += originalText[i];
          }
        }
        el.textContent = scrambled;

        if (progress < 1) {
          animId = requestAnimationFrame(frame);
        } else {
          el.textContent = originalText;
          isAnimating = false;
        }
      }
      animId = requestAnimationFrame(frame);
    });

    el.addEventListener('mouseleave', () => {
      cancelAnimationFrame(animId);
      el.textContent = originalText;
      isAnimating = false;
    });
  });
}
bindHoverchar();

// ==========================================================================
// 5. Microscopic Ambient Matrix Grid Canvas
// ==========================================================================
const matrixCanvas = document.getElementById('matrix-canvas');
const gridCoords = document.getElementById('grid-coords');

if (matrixCanvas) {
  const ctx = matrixCanvas.getContext('2d');
  let width = (matrixCanvas.width = window.innerWidth);
  let height = (matrixCanvas.height = window.innerHeight);

  const charW = 16;
  const charH = 24;
  let mouseCol = -1;
  let mouseRow = -1;

  window.addEventListener('resize', () => {
    width = matrixCanvas.width = window.innerWidth;
    height = matrixCanvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouseCol = Math.floor(e.clientX / charW);
    mouseRow = Math.floor(e.clientY / charH);
    if (gridCoords) {
      gridCoords.textContent = `COLS: ${Math.floor(width / charW)} ROWS: ${Math.floor(height / charH)} [X: ${e.clientX} Y: ${e.clientY}]`;
    }
  }, { passive: true });

  function drawGrid() {
    ctx.clearRect(0, 0, width, height);
    const cols = Math.ceil(width / charW);
    const rows = Math.ceil(height / charH);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const dist = Math.hypot(c - mouseCol, r - mouseRow);
        if (dist < 4) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.fillRect(c * charW + 7, r * charH + 11, 2, 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
        } else if ((c + r) % 2 === 0) {
          ctx.fillRect(c * charW + 7, r * charH + 11, 1, 1);
        }
      }
    }
    requestAnimationFrame(drawGrid);
  }
  requestAnimationFrame(drawGrid);
}

// ==========================================================================
// 6. Online Multiplayer Arcade: Virtua Tennis 3 & PES 6 (WebAssembly / WebRTC)
// ==========================================================================
const arcadeGames = {
  vt3: {
    id: 'vt3',
    name: 'Virtua Tennis 3',
    title: {
      en: 'Virtua Tennis 3 Online',
      es: 'Virtua Tennis 3 Online'
    },
    badge: 'SEGA WebAssembly Port',
    desc: {
      en: 'Play single matches or create your online multiplayer room without downloads. Compatible with keyboard and USB/Bluetooth controllers.',
      es: 'Juega partidos individuales o crea tu sala multijugador online sin descargas. Compatible con teclado y mandos USB/Bluetooth.'
    },
    directUrl: 'https://vt3.online/player.html?mode=solo&project=echorec0de&game=vt3',
    lobbyUrl: 'https://vt3.online/#salas',
    embedUrl: 'https://vt3.online/',
    shareUrl: 'https://vt3.online/#salas',
    launchBtnText: {
      en: 'Enter the Court',
      es: 'Entrar a la pista'
    },
    roomsBtnText: {
      en: 'Create / Join Room',
      es: 'Crear / Unirse a sala'
    },
    stepsTitle: {
      en: 'How to play online with friends',
      es: 'Cómo jugar online con amigos'
    },
    steps: {
      en: [
        '<strong>1. Create a room:</strong> Click «Rooms / Matchmaking» and choose a room name or code.',
        '<strong>2. Share the link:</strong> Send the link or code to your rival to enter the same court.',
        '<strong>3. Select player & court:</strong> Choose surface, set count, and start the rally!'
      ],
      es: [
        '<strong>1. Crea una sala:</strong> Haz click en «Salas / Rooms» y selecciona un nombre o código de sala.',
        '<strong>2. Comparte el enlace:</strong> Pasa el link o código a tu rival para que entre en la misma pista.',
        '<strong>3. Selecciona tenista y pista:</strong> Configura set, superficie y ¡que comience el peloteo!'
      ]
    },
    controlsTitle: {
      en: 'Controls & Compatibility',
      es: 'Controles & Compatibilidad'
    },
    controls: {
      en: [
        '<strong>Keyboard:</strong> Arrow keys to move. Z (topspin/flat), X (slice), A (lob/drop shot), Space (Start).',
        '<strong>Gamepad USB / Bluetooth:</strong> Automatically detected (PlayStation, Xbox, or generic). Move stick or press button to calibrate.',
        '<strong>Mobile / Tablet:</strong> Virtual on-screen touch controls supported (landscape mode recommended).'
      ],
      es: [
        '<strong>Teclado:</strong> Flechas de dirección para moverte. Teclas Z (tiro plano/liftado), X (cortado), A (globo/dejada), Space (Start).',
        '<strong>Mando USB / Bluetooth:</strong> Detectado automáticamente (PlayStation, Xbox o genérico). Mueve el joystick o presiona un botón para calibrar.',
        '<strong>Móvil / Tablet:</strong> Compatible con controles virtuales táctiles en pantalla (modo horizontal recomendado).'
      ]
    }
  },
  pes6: {
    id: 'pes6',
    name: 'PES 6 — Pro Evolution Soccer',
    title: {
      en: 'PES 6 — Pro Evolution Soccer Online',
      es: 'PES 6 — Pro Evolution Soccer Online'
    },
    badge: 'Konami / OptiJuegos WebAssembly Port',
    desc: {
      en: 'The legendary football classic running natively in your browser. WebRTC P2P multiplayer rooms, authentic Argentine/Spanish commentary, and full gamepad support.',
      es: 'El clásico indiscutido del fútbol de Konami corriendo nativo en el navegador. Salas multijugador P2P WebRTC, relatos de Mariano Closs o España, y compatibilidad total con mandos.'
    },
    directUrl: 'https://pes6.optijuegos.net/',
    lobbyUrl: 'https://pes6.optijuegos.net/',
    embedUrl: 'https://pes6.optijuegos.net/',
    shareUrl: 'https://pes6.optijuegos.net/',
    launchBtnText: {
      en: 'Start PES 6',
      es: 'Iniciar PES 6'
    },
    roomsBtnText: {
      en: 'Online Multiplayer Rooms',
      es: 'Salas Online Multijugador'
    },
    stepsTitle: {
      en: 'How to play online 1v1',
      es: 'Cómo jugar online 1v1'
    },
    steps: {
      en: [
        '<strong>1. Go to Wireless:</strong> In the in-game main menu, scroll down to the «Inalámbrico / Wireless» section.',
        '<strong>2. Pick or create a room:</strong> In the Online tab, browse available rooms or create your own with a custom name.',
        '<strong>3. Connect & Kick off:</strong> Your friend connects via P2P direct link. Pick your classic club or national team and play!'
      ],
      es: [
        '<strong>1. Entra a Inalámbrico:</strong> En el menú principal del juego, baja hasta la opción «Inalámbrico» (abajo del todo).',
        '<strong>2. Elige o crea sala:</strong> En la pestaña «Online» selecciona una sala existente o crea una nueva con el nombre que prefieras.',
        '<strong>3. Conexión P2P directa:</strong> Pasa el link a tu rival para conectar por WebRTC. Elige equipo clásico o selección y ¡a la cancha!'
      ]
    },
    controlsTitle: {
      en: 'Controls & Gamepad Setup',
      es: 'Controles & Mandos'
    },
    controls: {
      en: [
        '<strong>Keyboard P1:</strong> Arrows to move. X (Short pass), C (Long pass / Cross), S (Shoot), W (Through ball), E (Sprint).',
        '<strong>Dual Gamepads:</strong> Full plug-and-play support for Player 1 and Player 2 with PlayStation / Xbox controllers.',
        '<strong>Audio & Commentary:</strong> Choose between Mariano Closs Argentine commentary, original Spanish commentary, or lightweight mode.'
      ],
      es: [
        '<strong>Teclado J1:</strong> Flechas para moverte. X (Pase corto), C (Pase largo/Centro), S (Tiro al arco), W (Pase al hueco), E (Pique / Sprint).',
        '<strong>Mandos USB / Bluetooth:</strong> Soporte para 2 controles en simultáneo (PlayStation, Xbox o genéricos) con mapeo configurable.',
        '<strong>Relatos a elección:</strong> Podés elegir relatos de Mariano Closs (Argentina), relatos españoles o jugar en modo ligero sin comentarios.'
      ]
    }
  }
};

let activeArcadeGameKey = 'vt3';
let arcadeCurrentMode = 'lobby';
let isArcadeRunning = false;

function updateArcadeUI() {
  const game = arcadeGames[activeArcadeGameKey] || arcadeGames.vt3;
  const lang = currentLanguage || 'en';

  // HUD
  const hudGameName = document.getElementById('hud-game-name');
  const hudModeName = document.getElementById('hud-mode-name');
  const externalLink = document.getElementById('arcade-external-link');
  if (hudGameName) hudGameName.textContent = game.name;
  if (hudModeName) {
    hudModeName.textContent = arcadeCurrentMode === 'lobby' 
      ? (lang === 'en' ? 'Rooms & Matchmaking' : 'Salas Online & Solo') 
      : (lang === 'en' ? 'Direct Match' : 'Cancha Directa');
  }
  if (externalLink) externalLink.href = game.embedUrl;

  // Mode Buttons
  const btnLobby = document.getElementById('game-mode-lobby');
  const btnDirect = document.getElementById('game-mode-direct');
  if (btnLobby) btnLobby.classList.toggle('active', arcadeCurrentMode === 'lobby');
  if (btnDirect) btnDirect.classList.toggle('active', arcadeCurrentMode === 'direct');

  // Overlay
  const overlayBadge = document.getElementById('overlay-badge');
  const overlayTitle = document.getElementById('overlay-title');
  const overlayDesc = document.getElementById('overlay-desc');
  const startBigBtn = document.getElementById('arcade-start-big');
  const startRoomsBtn = document.getElementById('arcade-start-rooms');

  if (overlayBadge) overlayBadge.textContent = game.badge;
  if (overlayTitle) overlayTitle.textContent = game.title[lang] || game.title.en;
  if (overlayDesc) overlayDesc.textContent = game.desc[lang] || game.desc.en;
  if (startBigBtn) startBigBtn.textContent = game.launchBtnText[lang] || game.launchBtnText.en;
  if (startRoomsBtn) startRoomsBtn.textContent = game.roomsBtnText[lang] || game.roomsBtnText.en;

  // Invite input link
  const inviteInput = document.getElementById('match-invite-link');
  if (inviteInput) {
    inviteInput.value = game.shareUrl;
  }

  // Guides & Controls
  const stepsTitle = document.getElementById('guide-steps-title');
  const stepsList = document.getElementById('guide-steps-list');
  const controlsTitle = document.getElementById('guide-controls-title');
  const controlsList = document.getElementById('guide-controls-list');

  if (stepsTitle) stepsTitle.textContent = game.stepsTitle[lang] || game.stepsTitle.en;
  if (stepsList) {
    const stepsArray = game.steps[lang] || game.steps.en;
    stepsList.innerHTML = stepsArray.map((s) => `<li>${s}</li>`).join('');
  }

  if (controlsTitle) controlsTitle.textContent = game.controlsTitle[lang] || game.controlsTitle.en;
  if (controlsList) {
    const controlsArray = game.controls[lang] || game.controls.en;
    controlsList.innerHTML = controlsArray.map((c) => `<li>${c}</li>`).join('');
  }
}

function launchArcade(mode = 'lobby') {
  arcadeCurrentMode = mode;
  isArcadeRunning = true;
  const game = arcadeGames[activeArcadeGameKey] || arcadeGames.vt3;
  const targetUrl = mode === 'direct' ? game.directUrl : game.lobbyUrl;

  const iframe = document.getElementById('arcade-game-iframe');
  const overlay = document.getElementById('arcade-overlay');

  if (iframe) {
    if (iframe.src !== targetUrl) {
      iframe.src = targetUrl;
    }
  }

  if (overlay) {
    overlay.classList.add('is-hidden');
  }

  updateArcadeUI();
}

function selectArcadeGame(gameKey) {
  if (!arcadeGames[gameKey]) return;
  activeArcadeGameKey = gameKey;

  // Update tabs
  document.querySelectorAll('.arcade-tab[data-game]').forEach((tab) => {
    const isActive = tab.dataset.game === gameKey;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  const overlay = document.getElementById('arcade-overlay');
  if (overlay) {
    overlay.classList.remove('is-hidden');
  }

  const iframe = document.getElementById('arcade-game-iframe');
  if (iframe) {
    iframe.src = 'about:blank';
  }
  isArcadeRunning = false;

  updateArcadeUI();
}

function toggleArcadeFullscreen() {
  const cabinet = document.getElementById('arcade-cabinet');
  if (!cabinet) return;

  if (!document.fullscreenElement) {
    if (cabinet.requestFullscreen) {
      cabinet.requestFullscreen().catch(() => {
        cabinet.classList.toggle('is-fullscreen');
      });
    } else {
      cabinet.classList.toggle('is-fullscreen');
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    cabinet.classList.remove('is-fullscreen');
  }
}

function copyMatchInviteLink() {
  const game = arcadeGames[activeArcadeGameKey] || arcadeGames.vt3;
  const shareUrl = game.shareUrl;
  const lang = currentLanguage || 'en';
  const feedback = document.getElementById('copy-feedback-msg');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareUrl).then(() => {
      showCopyFeedback(lang === 'en' ? 'Link copied to clipboard!' : '¡Enlace copiado al portapapeles!');
    }).catch(() => {
      showCopyFeedback(shareUrl);
    });
  } else {
    const input = document.getElementById('match-invite-link');
    if (input) {
      input.select();
      document.execCommand('copy');
      showCopyFeedback(lang === 'en' ? 'Link copied to clipboard!' : '¡Enlace copiado al portapapeles!');
    }
  }

  function showCopyFeedback(msg) {
    if (feedback) {
      feedback.textContent = msg;
      feedback.style.opacity = '1';
      setTimeout(() => {
        feedback.style.opacity = '0';
      }, 3500);
    }
  }
}

function initArcade() {
  // Tabs
  document.querySelectorAll('.arcade-tab[data-game]').forEach((tab) => {
    tab.addEventListener('click', () => {
      selectArcadeGame(tab.dataset.game);
    });
  });

  // Mode Buttons
  const btnLobby = document.getElementById('game-mode-lobby');
  const btnDirect = document.getElementById('game-mode-direct');
  if (btnLobby) {
    btnLobby.addEventListener('click', () => {
      launchArcade('lobby');
    });
  }
  if (btnDirect) {
    btnDirect.addEventListener('click', () => {
      launchArcade('direct');
    });
  }

  // Start Buttons on Overlay
  const startBig = document.getElementById('arcade-start-big');
  const startRooms = document.getElementById('arcade-start-rooms');
  if (startBig) {
    startBig.addEventListener('click', () => {
      launchArcade('direct');
    });
  }
  if (startRooms) {
    startRooms.addEventListener('click', () => {
      launchArcade('lobby');
    });
  }

  // Fullscreen Button
  const fsBtn = document.getElementById('arcade-fullscreen-btn');
  if (fsBtn) {
    fsBtn.addEventListener('click', toggleArcadeFullscreen);
  }

  // Copy Match Link Button
  const copyBtn = document.getElementById('copy-match-link-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', copyMatchInviteLink);
  }

  // Open Rooms Direct Button
  const openRoomsBtn = document.getElementById('open-rooms-direct-btn');
  if (openRoomsBtn) {
    openRoomsBtn.addEventListener('click', () => {
      const game = arcadeGames[activeArcadeGameKey] || arcadeGames.vt3;
      window.open(game.lobbyUrl, '_blank', 'noopener,noreferrer');
    });
  }

  updateArcadeUI();
}

// ==========================================================================
// 7. Project Detail Modal Dialog
// ==========================================================================
const dialog = document.querySelector('.project-dialog');
const dialogCloseBtn = dialog ? dialog.querySelector('.dialog-close') : null;
let openerElement = null;

function openProjectModal(projectId, triggerEl = null) {
  const project = projects[projectId];
  if (!project || !dialog) return;

  const lang = currentLanguage || 'en';
  const cat = typeof project.category === 'object' ? (project.category[lang] || project.category.en) : project.category;
  const desc = typeof project.description === 'object' ? (project.description[lang] || project.description.en) : project.description;

  openerElement = triggerEl;
  document.getElementById('dialog-count').textContent = project.count;
  document.getElementById('dialog-category').textContent = cat;
  document.getElementById('dialog-title').textContent = project.title;
  document.getElementById('dialog-description').textContent = desc;

  const image = document.getElementById('dialog-image');
  image.src = project.image;
  image.alt = lang === 'en' ? `Full view of ${project.title}` : `Captura ampliada de la web ${project.title}`;

  const link = document.getElementById('dialog-link');
  const note = document.getElementById('dialog-note');

  if (project.url) {
    link.hidden = false;
    link.href = project.url;
    note.hidden = true;
  } else {
    link.hidden = true;
    note.hidden = false;
    note.textContent = lang === 'en' ? 'Under private client deployment' : 'En fase de despliegue privado';
  }

  dialog.showModal();
}

if (dialog && dialogCloseBtn) {
  dialogCloseBtn.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    openerElement?.focus();
  });
}

document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    openProjectModal(button.dataset.project, button);
  });
});

// ==========================================================================
// 9. Mobile Menu Navigation (Full Touch & Accessibility Support)
// ==========================================================================
function initMobileNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (!mobileToggle || !mobileDrawer) return;

  function closeDrawer() {
    mobileDrawer.classList.remove('is-active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileToggle.setAttribute('aria-expanded', 'false');
    const menuText = currentLanguage === 'en' ? 'Menu' : 'Menú';
    mobileToggle.textContent = menuText;
    document.body.style.overflow = '';
  }

  function openDrawer() {
    mobileDrawer.classList.add('is-active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileToggle.setAttribute('aria-expanded', 'true');
    const closeText = currentLanguage === 'en' ? 'Close' : 'Cerrar';
    mobileToggle.textContent = closeText;
    document.body.style.overflow = 'hidden';
  }

  mobileToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileDrawer.classList.contains('is-active');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  mobileDrawer.querySelectorAll('.mob-link').forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close when tapping outside the inner drawer content
  mobileDrawer.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      closeDrawer();
    }
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('is-active')) {
      closeDrawer();
      mobileToggle.focus();
    }
  });

  // Close if window resized to desktop breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && mobileDrawer.classList.contains('is-active')) {
      closeDrawer();
    }
  }, { passive: true });
}

// ==========================================================================
// 10. Sublime Text 4 Code Animation (Interactive Full-Width Code Engine)
// ==========================================================================
function initSublimeTextAnimation() {
  const codeTarget = document.getElementById('sublime-code-target');
  const gutter = document.getElementById('sublime-gutter');
  const cursor = document.getElementById('sublime-cursor');
  const codeContainer = document.getElementById('sublime-code-container');
  const minimapLines = document.getElementById('minimap-lines');
  const minimapViewport = document.getElementById('minimap-viewport');
  const cursorPos = document.getElementById('sublime-cursor-pos');
  const pauseBtn = document.getElementById('code-pause-btn');
  const restartBtn = document.getElementById('code-restart-btn');
  const copyBtn = document.getElementById('code-copy-btn');
  const editorWindow = document.querySelector('.sublime-window');

  if (!codeTarget || !gutter || !cursor) return;

  const snippet = [
    [
      { t: '<!', c: 'syn-bracket' },
      { t: 'doctype', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'html', c: 'syn-attr' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '<', c: 'syn-bracket' },
      { t: 'html', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'lang', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"es-AR"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '  <', c: 'syn-bracket' },
      { t: 'head', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '    <', c: 'syn-bracket' },
      { t: 'meta', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'charset', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"UTF-8"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '    <', c: 'syn-bracket' },
      { t: 'title', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' },
      { t: 'Web0S — Design & Technology', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'title', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '  </', c: 'syn-bracket' },
      { t: 'head', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '  <', c: 'syn-bracket' },
      { t: 'body', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"home"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '    ', c: '' },
      { t: '<!-- Web0S: Design & technology studio in Buenos Aires -->', c: 'syn-comment' }
    ],
    [
      { t: '    <', c: 'syn-bracket' },
      { t: 'header', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"header"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '      <', c: 'syn-bracket' },
      { t: 'div', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"logo"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: 'Web0S', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'div', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '      <', c: 'syn-bracket' },
      { t: 'nav', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"nav"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'a', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'href', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"#proyectos"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: 'Projects', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'a', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'a', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'href', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"#nosotros"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: 'About', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'a', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'a', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'href', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"#equipo"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: 'Team', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'a', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'a', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'href', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"#capacidades"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: 'Services', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'a', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'a', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'href', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"#play"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: 'Arcade', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'a', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '      </', c: 'syn-bracket' },
      { t: 'nav', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '      <', c: 'syn-bracket' },
      { t: 'div', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"clock"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: 'BUE 17:35:00', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'div', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '    </', c: 'syn-bracket' },
      { t: 'header', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '    <', c: 'syn-bracket' },
      { t: 'main', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"main"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '      <', c: 'syn-bracket' },
      { t: 'section', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"statement"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'h1', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"mega"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '          Design and technology studio in Buenos Aires. We design and build distinctive web platforms.', c: 'syn-text' }
    ],
    [
      { t: '        </', c: 'syn-bracket' },
      { t: 'h1', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '      </', c: 'syn-bracket' },
      { t: 'section', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '      <', c: 'syn-bracket' },
      { t: 'section', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"projects"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'article', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'data-id', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"001"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: '001 La Guardia Barrio Abierto — Real Estate / 2026', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'article', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'article', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'data-id', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"002"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: '002 Raymon Otatti Design & Co. — Art Direction / 2026', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'article', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'article', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'data-id', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"003"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: '003 Franie Smith — Music & Culture / 2026', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'article', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'article', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'data-id', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"004"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: '004 Sáenz Valiente & Asociados — Law Firm / 2026', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'article', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '      </', c: 'syn-bracket' },
      { t: 'section', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '      <', c: 'syn-bracket' },
      { t: 'section', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"team"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'div', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"bio"', c: 'syn-str' },
      { t: ' ', c: '' },
      { t: 'data-role', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"visual"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: '01 Raymon Otatti — Visual Direction (contact@raymonotatti.com)', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'div', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '        <', c: 'syn-bracket' },
      { t: 'div', c: 'syn-tag' },
      { t: ' ', c: '' },
      { t: 'class', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"bio"', c: 'syn-str' },
      { t: ' ', c: '' },
      { t: 'data-role', c: 'syn-attr' },
      { t: '=', c: 'syn-punct' },
      { t: '"code"', c: 'syn-str' },
      { t: '>', c: 'syn-bracket' },
      { t: '02 Franco Michetti — Engineering & Code (portfolio.francomichetti.com)', c: 'syn-text' },
      { t: '</', c: 'syn-bracket' },
      { t: 'div', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '      </', c: 'syn-bracket' },
      { t: 'section', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '    </', c: 'syn-bracket' },
      { t: 'main', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '  </', c: 'syn-bracket' },
      { t: 'body', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ],
    [
      { t: '</', c: 'syn-bracket' },
      { t: 'html', c: 'syn-tag' },
      { t: '>', c: 'syn-bracket' }
    ]
  ];

  let currentLineIdx = 0;
  let currentTokenIdx = 0;
  let currentCharIdx = 0;
  let currentLineEl = null;
  let currentTokenSpan = null;
  let isPaused = false;
  let isVisible = true;
  let timeoutId = null;

  function getRawCodeText() {
    return snippet.map(line => line.map(tok => tok.t).join('')).join('\n');
  }

  function resetEditor() {
    clearTimeout(timeoutId);
    codeTarget.innerHTML = '';
    gutter.innerHTML = '';
    if (minimapLines) minimapLines.innerHTML = '';
    currentLineIdx = 0;
    currentTokenIdx = 0;
    currentCharIdx = 0;
    currentLineEl = null;
    currentTokenSpan = null;
    if (cursorPos) cursorPos.textContent = 'Line 1, Column 1';
    if (codeContainer) codeContainer.scrollTop = 0;
    if (minimapViewport) minimapViewport.style.top = '8px';
  }

  function startNextLine() {
    if (currentLineIdx >= snippet.length) {
      // Completed full file! Hold for 9s then re-loop
      timeoutId = setTimeout(() => {
        resetEditor();
        step();
      }, 9000);
      return;
    }

    currentLineEl = document.createElement('div');
    currentLineEl.className = 'code-line';
    codeTarget.appendChild(currentLineEl);

    // Gutter line number
    const lineNum = document.createElement('span');
    lineNum.className = 'sublime-gutter-num';
    lineNum.textContent = String(currentLineIdx + 1);
    gutter.appendChild(lineNum);

    // Minimap micro representation
    if (minimapLines) {
      const mmLine = document.createElement('div');
      const lineStr = snippet[currentLineIdx].map(t => t.t).join('');
      let mmClass = 'minimap-line';
      if (lineStr.includes('<!--')) mmClass += ' comment';
      else if (lineStr.includes('class=') || lineStr.includes('lang=')) mmClass += ' attr';
      else if (lineStr.includes('<') && lineStr.includes('>')) mmClass += ' tag';
      else mmClass += ' str';
      mmLine.className = mmClass;
      const widthPct = Math.min(95, Math.max(15, lineStr.trim().length * 1.8));
      mmLine.style.width = widthPct + '%';
      minimapLines.appendChild(mmLine);
    }

    // Place cursor in line
    currentLineEl.appendChild(cursor);

    currentTokenIdx = 0;
    currentCharIdx = 0;
    currentTokenSpan = null;

    step();
  }

  function step() {
    if (isPaused || !isVisible) return;

    if (!currentLineEl || currentLineIdx >= snippet.length) {
      if (currentLineIdx < snippet.length) {
        startNextLine();
      }
      return;
    }

    const currentLineTokens = snippet[currentLineIdx];

    if (currentTokenIdx >= currentLineTokens.length) {
      // Line is finished!
      currentLineIdx++;
      if (codeContainer) {
        codeContainer.scrollTop = codeContainer.scrollHeight;
        if (minimapViewport) {
          const maxScroll = codeContainer.scrollHeight - codeContainer.clientHeight;
          if (maxScroll > 0) {
            const ratio = codeContainer.scrollTop / maxScroll;
            minimapViewport.style.top = (8 + ratio * 60) + 'px';
          }
        }
      }
      timeoutId = setTimeout(startNextLine, 85);
      return;
    }

    const token = currentLineTokens[currentTokenIdx];

    if (!currentTokenSpan) {
      currentTokenSpan = document.createElement('span');
      if (token.c) currentTokenSpan.className = token.c;
      currentLineEl.insertBefore(currentTokenSpan, cursor);
    }

    // Fast-type spaces/indentation or single characters
    let charsToTake = 1;
    if (token.t.startsWith('  ') && currentCharIdx === 0) {
      charsToTake = token.t.length; // type leading tabs/spaces immediately
    }

    const nextChars = token.t.slice(currentCharIdx, currentCharIdx + charsToTake);
    currentTokenSpan.textContent += nextChars;
    currentCharIdx += charsToTake;

    // Update cursor pos
    if (cursorPos) {
      cursorPos.textContent = `Line ${currentLineIdx + 1}, Column ${currentLineEl.textContent.length}`;
    }

    let delay = 18;
    if (token.c === 'syn-comment') delay = 12;
    else if (token.t === '>' || token.t === '<') delay = 35;
    else if (charsToTake > 1) delay = 8;
    else delay = Math.floor(Math.random() * 16) + 16;

    if (currentCharIdx >= token.t.length) {
      currentTokenIdx++;
      currentCharIdx = 0;
      currentTokenSpan = null;
    }

    timeoutId = setTimeout(step, delay);
  }

  // IntersectionObserver to pause typing when user scrolls away
  if ('IntersectionObserver' in window && editorWindow) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !isPaused) {
          step();
        }
      });
    }, { threshold: 0.1 });
    observer.observe(editorWindow);
  }

  // Controls
  pauseBtn?.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? 'Play' : 'Pausa';
    if (!isPaused) step();
  });

  restartBtn?.addEventListener('click', () => {
    isPaused = false;
    if (pauseBtn) pauseBtn.textContent = 'Pausa';
    resetEditor();
    step();
  });

  copyBtn?.addEventListener('click', async () => {
    const fullCode = getRawCodeText();
    try {
      await navigator.clipboard.writeText(fullCode);
      const prevText = copyBtn.textContent;
      copyBtn.textContent = '✓ Copiado';
      setTimeout(() => { copyBtn.textContent = prevText; }, 2000);
    } catch (e) {
      // Fallback
    }
  });

  // Start initial typing
  startNextLine();
}

// ==========================================================================
// 11. Scroll to Top Ultra-Contrast High-Visibility Button
// ==========================================================================
function initScrollToTop() {
  const btn = document.getElementById('scroll-to-top');
  if (!btn) return;

  function checkScroll() {
    if (window.scrollY > 280) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==========================================================================
// 12. Floating & Shrinking Detached Navigation on Scroll
// ==========================================================================
function initNavScroll() {
  const headerEl = document.querySelector('header[data-component="header"]');
  if (!headerEl) return;

  function updateNav() {
    if (window.scrollY > 40) {
      headerEl.classList.add('is-scrolled');
    } else {
      headerEl.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

// ==========================================================================
// 13. Interactive Web0S Logo: Circles in 'b' and 'o' Track Mouse Across Page
// ==========================================================================
function initHeroLogoCircleTracking() {
  const groupB = document.getElementById('logo-circle-b') || document.getElementById('pupil-group-b');
  const groupO = document.getElementById('logo-circle-o') || document.getElementById('pupil-group-o');
  if (!groupB || !groupO) return;

  const maxRadius = 7.5; // Restrained so circles move smoothly within the letter boundaries
  const isTouchDevice = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (isTouchDevice) {
    // Subtle ambient wander on touch devices so the logo comes to life without mouse cursor
    let startTime = performance.now();
    let animId = null;

    function ambientWander(now) {
      const elapsed = (now - startTime) / 1000;
      const sx = (Math.sin(elapsed * 0.9) * 3.5).toFixed(2);
      const sy = (Math.cos(elapsed * 1.2) * 2.5).toFixed(2);
      groupB.style.transform = `translate(${sx}px, ${sy}px)`;
      groupO.style.transform = `translate(${sx}px, ${sy}px)`;
      animId = requestAnimationFrame(ambientWander);
    }

    const heroHeader = document.querySelector('.hero-brand-header');
    if ('IntersectionObserver' in window && heroHeader) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTime = performance.now();
            animId = requestAnimationFrame(ambientWander);
          } else if (animId) {
            cancelAnimationFrame(animId);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(heroHeader);
    } else {
      requestAnimationFrame(ambientWander);
    }
    return;
  }

  // Desktop Mouse Tracking
  window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Circle B tracking
    const rectB = groupB.getBoundingClientRect();
    const cxB = rectB.left + rectB.width / 2;
    const cyB = rectB.top + rectB.height / 2;
    const dxB = mouseX - cxB;
    const dyB = mouseY - cyB;
    const angleB = Math.atan2(dyB, dxB);
    const distB = Math.hypot(dxB, dyB);
    const rB = Math.min(maxRadius, distB / 32);
    const sxB = (Math.cos(angleB) * rB).toFixed(2);
    const syB = (Math.sin(angleB) * rB).toFixed(2);
    groupB.style.transform = `translate(${sxB}px, ${syB}px)`;

    // Circle O tracking
    const rectO = groupO.getBoundingClientRect();
    const cxO = rectO.left + rectO.width / 2;
    const cyO = rectO.top + rectO.height / 2;
    const dxO = mouseX - cxO;
    const dyO = mouseY - cyO;
    const angleO = Math.atan2(dyO, dxO);
    const distO = Math.hypot(dxO, dyO);
    const rO = Math.min(maxRadius, distO / 32);
    const sxO = (Math.cos(angleO) * rO).toFixed(2);
    const syO = (Math.sin(angleO) * rO).toFixed(2);
    groupO.style.transform = `translate(${sxO}px, ${syO}px)`;
  }, { passive: true });
}
const initHeroLogoEyeTracking = initHeroLogoCircleTracking;

// ==========================================================================
// 14. Full-Site Smooth GPU Parallax Engine (Tangible & Noticeable Across All Web)
// ==========================================================================
function initParallaxEffects() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const heroBrand = document.querySelector('.hero-brand-header');
  const heroWindow = document.querySelector('.hero-code-section .sublime-window, .code-editor-section .sublime-window');
  const statementCard = document.querySelector('.statement-card');
  const projectImages = document.querySelectorAll('.work-item .image img.main-img');
  const copyBig = document.querySelector('.home-copy .copy-box');
  const teamBlocks = document.querySelectorAll('.bio-block');
  const capabilityPillars = document.querySelectorAll('.capability-pillar');
  const capabilityCta = document.querySelector('.capability-cta-card');
  const arcadeContainer = document.querySelector('.arcade-container');
  const matrixCanvas = document.getElementById('matrix-canvas');

  let ticking = false;

  function clearParallaxTransforms() {
    if (heroBrand) heroBrand.style.transform = '';
    if (heroWindow) heroWindow.style.transform = '';
    if (statementCard) statementCard.style.transform = '';
    if (copyBig) copyBig.style.transform = '';
    if (capabilityCta) capabilityCta.style.transform = '';
    if (arcadeContainer) arcadeContainer.style.transform = '';
    teamBlocks.forEach((b) => { b.style.transform = ''; });
    capabilityPillars.forEach((p) => { p.style.transform = ''; });
    projectImages.forEach((img) => { img.style.transform = ''; });
  }

  function onScroll() {
    // Only run on desktop/tablets with fine pointer to avoid scroll lag on mobile
    if (window.innerWidth < 768) return;

    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  function updateParallax() {
    if (window.innerWidth < 768) {
      ticking = false;
      return;
    }

    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    // 1. Hero Brand Header & Sublime Window: visible differential descent
    if (heroBrand && scrollY < vh * 1.5) {
      heroBrand.style.transform = `translate3d(0, ${(scrollY * 0.22).toFixed(1)}px, 0)`;
    }
    if (heroWindow && scrollY < vh * 1.8) {
      heroWindow.style.transform = `translate3d(0, ${(scrollY * 0.16).toFixed(1)}px, 0)`;
    }

    // 2. Matrix Canvas Grid Drift
    if (matrixCanvas && scrollY < 4000) {
      matrixCanvas.style.transform = `translate3d(0, ${(scrollY * 0.18).toFixed(1)}px, 0)`;
    }

    // 3. Statement Section
    if (statementCard) {
      const rect = statementCard.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        const center = (rect.top + rect.height / 2) - (vh / 2);
        statementCard.style.transform = `translate3d(0, ${(center * 0.08).toFixed(1)}px, 0)`;
      }
    }

    // 4. Project Images: noticeable vertical parallax sweep inside frame (60px range)
    projectImages.forEach((img) => {
      const card = img.closest('.work-item');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        const progress = (vh - rect.top) / (vh + rect.height);
        const shift = ((progress - 0.5) * 60).toFixed(1);
        img.style.transform = `scale(1.18) translate3d(0, ${shift}px, 0)`;
      }
    });

    // 5. Editorial Copy Box
    if (copyBig) {
      const rect = copyBig.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        const center = (rect.top + rect.height / 2) - (vh / 2);
        copyBig.style.transform = `translate3d(0, ${(center * 0.09).toFixed(1)}px, 0)`;
      }
    }

    // 6. Team Bio Blocks: multi-plane vertical stagger
    if (teamBlocks.length >= 2) {
      teamBlocks.forEach((block, idx) => {
        const rect = block.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          const center = (rect.top + rect.height / 2) - (vh / 2);
          const factor = idx === 0 ? 0.06 : -0.06;
          block.style.transform = `translate3d(0, ${(center * factor).toFixed(1)}px, 0)`;
        }
      });
    }

    // 7. Capability Pillars & CTA: dynamic 3-column parallax float
    if (capabilityPillars.length >= 2) {
      capabilityPillars.forEach((pillar, idx) => {
        const rect = pillar.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          const center = (rect.top + rect.height / 2) - (vh / 2);
          const factor = idx === 0 ? 0.05 : -0.04;
          pillar.style.transform = `translate3d(0, ${(center * factor).toFixed(1)}px, 0)`;
        }
      });
    }
    if (capabilityCta) {
      const rect = capabilityCta.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        const center = (rect.top + rect.height / 2) - (vh / 2);
        capabilityCta.style.transform = `translate3d(0, ${(center * 0.07).toFixed(1)}px, 0)`;
      }
    }

    // 8. Arcade Cabinet Parallax
    if (arcadeContainer) {
      const rect = arcadeContainer.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        const center = (rect.top + rect.height / 2) - (vh / 2);
        arcadeContainer.style.transform = `translate3d(0, ${(center * 0.06).toFixed(1)}px, 0)`;
      }
    }

    ticking = false;
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      clearParallaxTransforms();
    }
  }, { passive: true });

  window.addEventListener('scroll', onScroll, { passive: true });
  if (window.innerWidth >= 768) {
    updateParallax();
  }
}

// Initialize on DOM ready
function initApp() {
  initLanguageSwitch();
  initNavScroll();
  initMobileNavigation();
  initHeroLogoCircleTracking();
  initSublimeTextAnimation();
  initArcade();
  initScrollToTop();
  initParallaxEffects();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
