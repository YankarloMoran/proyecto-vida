import { lifeProjectData } from './data/data.js';

// Estados globales de navegación horizontal
let currentSlideIdx = 0;
const slides = ['hero', 'quiensoy', 'profesion', 'foda', 'rueda', 'timeline', 'misionvision', 'plan'];

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de componentes e interacciones de la Opción 2
  initDataInjection();
  initNeonCursor();
  initParticles();
  initRuedaPolar();
  initHorizontalTimeline();
  initGitHubHabitGrid();
  initHorizontalSlideController();
  
  // Cyber Aurora 2.0 premium initializations
  initMatrixController();
  initMatrixRain();
  initWebAudioSynth();
  initCyberHud();
  initEnhancedTilt();
  initHackerTypingEffect();

  // Feather Icons
  if (window.feather) {
    window.feather.replace();
  }
});

/* ==========================================================================
   1. INYECCIÓN DE DATOS DINÁMICOS
   ========================================================================== */
function initDataInjection() {
  const data = lifeProjectData;

  // Hero Cover
  document.getElementById('heroTitle').innerHTML = `<span>${data.personalInfo.name}</span>`;
  document.getElementById('heroSubtitle').textContent = data.personalInfo.title;
  document.getElementById('heroTagline').textContent = data.personalInfo.tagline;
  document.getElementById('heroIntro').textContent = data.personalInfo.introText;

  // Inyectar Integrantes en Slide 2
  const memberDeckGrid = document.getElementById('memberDeckGrid');
  if (memberDeckGrid) {
    memberDeckGrid.innerHTML = data.members.map(member => `
      <div class="member-card" data-tilt data-tilt-max="10">
        <div class="member-glow"></div>
        <div class="member-header">
          <span class="member-role">[MEMBER_NODE]</span>
          <i data-feather="user" class="member-icon" style="width: 12px; height: 12px;"></i>
        </div>
        <h4 class="member-name">${member.name}</h4>
        <span class="member-badge">${member.node}</span>
      </div>
    `).join('');
  }

  // Inyectar Conociendo la Profesión en Slide 3
  const professionGrid = document.getElementById('professionGrid');
  if (professionGrid) {
    professionGrid.innerHTML = data.profesion.questions.map((q, index) => `
      <div class="tech-panel profession-card ${q.accentClass}" data-tilt data-tilt-max="10">
        <div class="member-glow"></div>
        <div class="profession-card-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.5rem; margin-bottom: 0.8rem;">
          <span class="profession-badge" style="background: rgba(34, 211, 238, 0.1); color: var(--text-neon-cyan); border: 1px solid rgba(34, 211, 238, 0.2); font-family: var(--font-mono); font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 4px;">[QUESTION_NODE_0${index + 1}]</span>
          <i data-feather="${q.icon}" class="profession-icon" style="color: var(--text-neon-${q.accentClass}); width: 14px; height: 14px;"></i>
        </div>
        <h4 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 700; color: var(--text-neon-${q.accentClass}); margin-bottom: 0.6rem;">${q.question}</h4>
        <p class="profession-text" style="font-size: 0.85rem; color: var(--text-dim); line-height: 1.5;">${q.answer}</p>
      </div>
    `).join('');
  }

  // Inyectar scanline láser holográfico de fondo
  if (!document.querySelector('.holographic-scanline')) {
    const scanline = document.createElement('div');
    scanline.classList.add('holographic-scanline');
    document.body.appendChild(scanline);
  }

  // FODA Grid "Radar Scan"
  const fodaGrid = document.getElementById('fodaGrid');
  const fodaKeys = ['fortalezas', 'debilidades', 'oportunidades', 'amenazas'];
  fodaGrid.innerHTML = fodaKeys.map((key, index) => {
    const section = data.foda[key];
    return `
      <div class="tech-panel foda-panel ${key}" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="foda-panel-header">
          <h3>${section.title}</h3>
          <span>[SYSTEM_SCAN_${index + 1}]</span>
        </div>
        <ul class="sci-list">
          ${section.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }).join('');

  // Misión y Visión
  const mvContainer = document.getElementById('mvContainer');
  mvContainer.innerHTML = `
    <div class="tech-panel sci-mv-card" data-aos="fade-right">
      <div class="sci-mv-header">
        <span class="sci-mv-badge">DIRECTIVA_01 // MISIÓN</span>
        <i data-feather="cpu" style="color: var(--text-neon-cyan); width: 18px;"></i>
      </div>
      <p class="sci-mv-text">${data.misionVision.mision.text}</p>
    </div>
    <div class="tech-panel sci-mv-card" data-aos="fade-left" data-aos-delay="200">
      <div class="sci-mv-header">
        <span class="sci-mv-badge">DIRECTIVA_02 // VISIÓN</span>
        <i data-feather="target" style="color: var(--text-neon-emerald); width: 18px;"></i>
      </div>
      <p class="sci-mv-text">${data.misionVision.vision.text}</p>
    </div>
  `;

  // Plan de Acción - Estrategias
  const strategiesContainer = document.getElementById('strategiesContainer');
  strategiesContainer.innerHTML = `
    <h3 style="color: var(--text-neon-cyan); display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1rem;">
      <i data-feather="cpu"></i> Protocolos de Enfoque
    </h3>
  ` + data.planDeAccion.strategies.map(strat => `
    <div class="sci-slider-box" style="margin-bottom: 1rem; border: 1px solid rgba(255,255,255,0.03);">
      <h4 style="font-family: var(--font-display); font-size: 0.95rem; color: var(--text-bright); display: flex; align-items: center; gap: 0.6rem;">
        <i data-feather="terminal" style="color: var(--text-neon-cyan); width: 16px;"></i> ${strat.title}
      </h4>
      <p style="font-size: 0.8rem; color: var(--text-dim); line-height: 1.4; margin-top: 0.3rem;">${strat.desc}</p>
    </div>
  `).join('');

  if (window.VanillaTilt) {
    window.VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
  }
}

/* ==========================================================================
   2. PUNTERO CIBERPUNK NEÓN
   ========================================================================== */
function initNeonCursor() {
  const cursor = document.getElementById('neonCursor');
  const glow = document.getElementById('neonCursorGlow');
  
  if (!cursor || !glow) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
  });

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, input, select, textarea, .foda-card, .foda-panel, .timeline-horiz-item, .habit-cube, .sci-slider-box')) {
      document.body.classList.add('cursor-hovering');
    } else {
      document.body.classList.remove('cursor-hovering');
    }
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    glow.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    glow.style.opacity = '1';
  });
}

/* ==========================================================================
   3. PARTÍCULAS BOREALES (EMBER DRIFT)
   ========================================================================== */
function initParticles() {
  const container = document.getElementById('particlesContainer');
  if (!container) return;

  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = `${Math.random() * 100}vw`;
    const size = Math.random() * 4 + 2; // de 2px a 6px
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    
    // Tonos cian/verdes para las auroras
    p.style.background = Math.random() > 0.5 
      ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.3), rgba(6, 182, 212, 0.1))'
      : 'linear-gradient(135deg, rgba(52, 211, 153, 0.3), rgba(16, 185, 129, 0.1))';
      
    p.style.animationDelay = `${Math.random() * 14}s`;
    p.style.animationDuration = `${Math.random() * 9 + 8}s`;
    p.style.setProperty('--drift', `${Math.random() * 140 - 70}px`);
    
    container.appendChild(p);
  }
}

/* ==========================================================================
   4. RUEDA DE LA VIDA EN COCKPIT (POLAR AREA CHART)
   ========================================================================== */
function initRuedaPolar() {
  const data = lifeProjectData.ruedaDeLaVida;
  const ctx = document.getElementById('ruedaChart');
  const slidersPanel = document.getElementById('slidersPanel');

  if (!ctx || !slidersPanel) return;

  // Inyectar deslizadores dinámicamente estilo Consola Sci-Fi
  slidersPanel.innerHTML = data.map((item, idx) => `
    <div class="sci-slider-box">
      <div class="sci-slider-top">
        <span style="color: var(--text-neon-cyan); display: flex; align-items: center; gap: 0.4rem;">
          <i data-feather="${item.icon}" style="width: 14px; height: 14px;"></i>
          ${item.area.toUpperCase()}
        </span>
        <span style="color: var(--text-neon-emerald);" id="val-${idx}">${item.score}0%</span>
      </div>
      <input type="range" class="sci-range slider-input" min="1" max="10" step="1" value="${item.score}" data-index="${idx}">
    </div>
  `).join('');

  const labels = data.map(item => item.area.toUpperCase());
  const scores = data.map(item => item.score);

  // Inicializar Gráfico Polar Area con luces de Neón
  const ruedaChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: labels,
      datasets: [{
        data: scores,
        backgroundColor: [
          'rgba(6, 182, 212, 0.2)',
          'rgba(16, 185, 129, 0.2)',
          'rgba(99, 102, 241, 0.2)',
          'rgba(168, 85, 247, 0.2)',
          'rgba(6, 182, 212, 0.25)',
          'rgba(16, 185, 129, 0.25)',
          'rgba(99, 102, 241, 0.25)',
          'rgba(168, 85, 247, 0.25)'
        ],
        borderColor: [
          '#06b6d4', '#10b981', '#6366f1', '#a855f7',
          '#06b6d4', '#10b981', '#6366f1', '#a855f7'
        ],
        borderWidth: 2.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#050a11',
          titleColor: '#22d3ee',
          bodyColor: '#34d399',
          borderColor: 'rgba(6, 182, 212, 0.4)',
          borderWidth: 1,
          padding: 10,
          displayColors: false
        }
      },
      scales: {
        r: {
          grid: { color: 'rgba(6, 182, 212, 0.1)' },
          angleLines: { color: 'rgba(6, 182, 212, 0.1)' },
          ticks: { backdropColor: 'transparent', color: 'rgba(255,255,255,0.2)' },
          min: 0,
          max: 10
        }
      }
    }
  });

  // Listener en Sliders para actualizar gráfico
  const inputs = slidersPanel.querySelectorAll('.slider-input');
  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const idx = parseInt(e.target.dataset.index);
      const val = parseInt(e.target.value);
      
      document.getElementById(`val-${idx}`).textContent = `${val}0%`;
      ruedaChart.data.datasets[0].data[idx] = val;
      ruedaChart.update();
    });
  });
}

/* ==========================================================================
   5. TIMELINE METAS HORIZONTAL
   ========================================================================== */
function initHorizontalTimeline() {
  const nodesContainer = document.getElementById('timelineNodes');
  const detailsContainer = document.getElementById('goalDetailDisplay');
  const progressBar = document.getElementById('timelineProgress');
  const data = lifeProjectData.metas;

  if (!nodesContainer || !detailsContainer || !progressBar || !data) return;

  // Inyectar nodos temporales horizontales
  nodesContainer.innerHTML = data.map((meta, index) => `
    <div class="timeline-horiz-item ${index === 0 ? 'active' : ''}" data-index="${index}" data-target="${meta.id}">
      <div class="timeline-horiz-dot"></div>
      <span class="timeline-horiz-label">${meta.timeframe}</span>
    </div>
  `).join('');

  // Mostrar el primer hito académico por defecto
  showGoalDetails(0);

  const items = nodesContainer.querySelectorAll('.timeline-horiz-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index);
      
      // Actualizar nodos activos
      items.forEach((it, idx) => {
        if (idx === index) it.classList.add('active');
        else it.classList.remove('active');
      });

      // Mover barra de progreso
      progressBar.style.width = index === 0 ? '0%' : index === 1 ? '50%' : '100%';

      // Mostrar detalles correspondientes
      showGoalDetails(index);
    });
  });

  function showGoalDetails(idx) {
    const meta = data[idx];
    detailsContainer.style.opacity = '0';
    detailsContainer.style.transform = 'translateY(15px)';
    
    setTimeout(() => {
      detailsContainer.innerHTML = `
        <div class="goal-detail-header">
          <h3 class="text-gradient" style="font-size: 1.4rem;">${meta.title}</h3>
          <span style="font-family: var(--font-mono); color: var(--text-neon-cyan); font-size: 0.8rem;">[SYS_TIMEFRAME_0${idx + 1}]</span>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-dim); line-height: 1.5; margin-top: 0.3rem;">${meta.desc}</p>
        <div class="goal-checklist-grid">
          ${meta.items.map((item, num) => `
            <div class="goal-checklist-card">
              <span class="cube-index">// 0${num + 1}</span>
              <div>
                <h5 style="color: #fff; font-size: 0.9rem; font-family: var(--font-display);">${item.title}</h5>
                <p style="font-size: 0.8rem; color: var(--text-dim); line-height: 1.4; margin-top: 0.1rem;">${item.detail}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      
      detailsContainer.style.opacity = '1';
      detailsContainer.style.transform = 'translateY(0)';
      detailsContainer.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    }, 200);
  }
}

/* ==========================================================================
   6. HÁBITOS ESTILO CONTRIBUCIONES DE GITHUB (NEON COMMIT BLOCKS)
   ========================================================================== */
function initGitHubHabitGrid() {
  const container = document.getElementById('githubHabits');
  const data = lifeProjectData.planDeAccion.dailyHabits;

  if (!container || !data) return;

  const daysOfWeek = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];

  container.innerHTML = data.map(habit => `
    <div class="github-habit-row">
      <div class="github-habit-info">
        <span>${habit.name}</span>
        <span style="color: var(--text-neon-emerald); font-family: var(--font-mono); font-size: 0.75rem;">${habit.time.toUpperCase()}</span>
      </div>
      <div class="github-grid-cubes">
        ${daysOfWeek.map((day, idx) => `
          <div class="habit-cube" 
               data-level="0" 
               data-day="${day}" 
               data-tooltip="${day}: Sin registro">
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Interacción de cubos que cambian de nivel e intensidad de brillo al hacer clic (0 -> 1 -> 2 -> 3 -> 0)
  const cubes = container.querySelectorAll('.habit-cube');
  cubes.forEach(cube => {
    cube.addEventListener('click', () => {
      let level = parseInt(cube.getAttribute('data-level'));
      level = (level + 1) % 4; // ciclo
      cube.setAttribute('data-level', level);
      
      const day = cube.getAttribute('data-day');
      const tooltipTexts = [
        `${day}: Sin registro`,
        `${day}: Logrado parcialmente`,
        `${day}: Logrado con constancia`,
        `${day}: ¡Completado al 100%!`
      ];
      cube.setAttribute('data-tooltip', tooltipTexts[level]);
    });
  });
}

/* ==========================================================================
   7. CONTROLADOR DE DIAPOSITIVAS HORIZONTALES (DECK CONTROLLER)
   ========================================================================= */
function initHorizontalSlideController() {
  const container = document.getElementById('deckContainer');
  const currentNum = document.getElementById('currentSlideNum');
  const laserTracker = document.getElementById('laserTracker');
  const sidebarLinks = document.querySelectorAll('#sidebarList a');
  const segmentIndicator = document.getElementById('hudSlideIndicator');

  if (!container || !currentNum || !laserTracker) return;

  // Inyectar celdas/segmentos de diapositivas en el footer
  if (segmentIndicator) {
    segmentIndicator.innerHTML = Array(slides.length).fill(0).map((_, i) => `
      <div class="indicator-bar ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
    `).join('');
  }

  // Desplazamiento horizontal elástico asistido por GPU
  function navigateToSlide(idx) {
    if (idx < 0 || idx >= slides.length) return;
    currentSlideIdx = idx;

    const offsetWidth = window.innerWidth > 1024 ? (window.innerWidth - 260) : window.innerWidth;
    
    // Mover el contenedor de las diapositivas
    if (window.innerWidth > 1024) {
      container.style.transform = `translate3d(${-currentSlideIdx * offsetWidth}px, 0, 0)`;
    } else {
      // En celular, hacer scroll nativo
      const sectId = slides[currentSlideIdx];
      const sect = document.getElementById(sectId);
      if (sect) sect.scrollIntoView({ behavior: 'smooth' });
    }

    // Actualizar la numeración en el footer
    currentNum.textContent = currentSlideIdx + 1;

    // Actualizar los segmentos futuristas del slide en el footer
    const bars = document.querySelectorAll('.indicator-bar');
    bars.forEach((bar, i) => {
      if (i === currentSlideIdx) {
        bar.className = 'indicator-bar active';
      } else if (i < currentSlideIdx) {
        bar.className = 'indicator-bar passed';
      } else {
        bar.className = 'indicator-bar';
      }
    });

    // Actualizar la diapositiva activa agregando .active-slide para sus transiciones
    const slidesElements = document.querySelectorAll('.horizontal-slide');
    slidesElements.forEach((el, index) => {
      if (index === currentSlideIdx) {
        el.classList.add('active-slide');
        
        // Hacker typing effect on slide header title
        const headerTitle = el.querySelector('.slide-header h2');
        if (headerTitle) {
          const originalText = headerTitle.dataset.original || headerTitle.textContent;
          if (!headerTitle.dataset.original) {
            headerTitle.dataset.original = originalText;
          }
          typeHackerTitle(headerTitle, originalText);
        }
      } else {
        el.classList.remove('active-slide');
      }
    });
    
    // Play sci-fi slide sweep audio SFX
    playSynthSound('transition');

    // Actualizar links activos del sidebar
    sidebarLinks.forEach(link => {
      const linkIdx = parseInt(link.dataset.index);
      if (linkIdx === currentSlideIdx) {
        link.classList.add('active');
        
        // Mover la barra láser indicadora al offsetTop del link activo
        laserTracker.style.transform = `translate3d(0, ${link.offsetTop}px, 0)`;
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Sincronizar posición láser inicial
  setTimeout(() => {
    const activeLink = document.querySelector('#sidebarList a.active');
    if (activeLink) laserTracker.style.transform = `translate3d(0, ${activeLink.offsetTop}px, 0)`;
  }, 300);

  // Navegación con teclado lateral (Flechas ← y →)
  document.addEventListener('keydown', (e) => {
    if (window.innerWidth <= 1024) return; // Desactivar en móvil
    
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (currentSlideIdx < slides.length - 1) navigateToSlide(currentSlideIdx + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (currentSlideIdx > 0) navigateToSlide(currentSlideIdx - 1);
    }
  });

  // Habilitar clics en el menú lateral
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = parseInt(link.dataset.index);
      navigateToSlide(idx);
    });
  });

  // Habilitar clics directos en los indicadores segmentados del footer
  document.addEventListener('click', (e) => {
    const bar = e.target.closest('.indicator-bar');
    if (bar) {
      const idx = parseInt(bar.dataset.index);
      navigateToSlide(idx);
    }
  });

  // Adaptar el desplazamiento ante un resize de ventana
  window.addEventListener('resize', () => {
    navigateToSlide(currentSlideIdx);
  });
}

/* ==========================================================================
   8. MEJORAS CYBER AURORA 2.0 - LÓGICA DE CONTROL PREMIUM
   ========================================================================== */

// --- 8A. SINTETIZADOR WEB AUDIO API PROCEDIMENTAL ---
let audioCtx = null;
let sfxEnabled = true;

window.playSynthSound = function(type) {
  if (!sfxEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    
    if (type === 'hover') {
      // Soft high pitch blip
      osc.type = 'sine';
      osc.frequency.setValueAtTime(850, now);
      osc.frequency.exponentialRampToValueAtTime(1250, now + 0.06);
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'click') {
      // Tech double chirp
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(550, now);
      osc.frequency.setValueAtTime(850, now + 0.03);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.setValueAtTime(0.03, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'transition') {
      // Sci-fi modular sweep/whoosh
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(500, now + 0.4);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    }
  } catch (err) {
    console.warn("Web Audio API blocked or not supported by browser", err);
  }
};

function initWebAudioSynth() {
  const sfxToggle = document.getElementById('sfxToggle');
  if (sfxToggle) {
    sfxToggle.checked = sfxEnabled;
    sfxToggle.addEventListener('change', (e) => {
      sfxEnabled = e.target.checked;
      playSynthSound('click');
    });
  }

  // Delegar eventos hover/click
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .foda-panel, .timeline-horiz-item, .habit-cube, .sci-slider-box, .theme-select-btn, .bg-mode-btn, .slider-input')) {
      playSynthSound('hover');
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('a, button, .timeline-horiz-item, .habit-cube, .theme-select-btn, .bg-mode-btn')) {
      playSynthSound('click');
    }
  });
}

// --- 8B. EFECTO MATRIX RAIN EN CANVAS ---
let matrixInterval = null;

function initMatrixRain() {
  const canvas = document.getElementById('matrixCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  
  const columns = Math.floor(width / 20);
  const yPositions = Array(columns).fill(0);
  
  // Nodos de brillo flotantes (círculos difusos cyan que parpadean suavemente de fondo)
  const glowNodes = [];
  for (let i = 0; i < 25; i++) {
    glowNodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 25 + 15,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      angle: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.35 + 0.15
    });
  }
  
  function drawMatrix() {
    let themeColor = "#22d3ee"; // cian default
    let themeGlow = "rgba(34, 211, 238, 0.4)";
    if (document.body.classList.contains('theme-flare')) {
      themeColor = "#f59e0b";
      themeGlow = "rgba(245, 158, 11, 0.4)";
    } else if (document.body.classList.contains('theme-nebula')) {
      themeColor = "#a855f7";
      themeGlow = "rgba(168, 85, 247, 0.4)";
    } else if (document.body.classList.contains('theme-tokyo')) {
      themeColor = "#ec4899";
      themeGlow = "rgba(236, 72, 153, 0.4)";
    }

    // Relleno de fondo con estela
    ctx.fillStyle = "rgba(3, 7, 11, 0.12)";
    ctx.fillRect(0, 0, width, height);
    
    // 1. Dibujar nodos de brillo de fondo (estilo imagen de referencia)
    glowNodes.forEach(node => {
      node.angle += node.pulseSpeed;
      const currentOpacity = node.opacity + Math.sin(node.angle) * 0.08;
      
      ctx.save();
      const grad = ctx.createRadialGradient(node.x, node.y, 2, node.x, node.y, node.radius);
      grad.addColorStop(0, themeGlow.replace('0.4', currentOpacity.toString()));
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    
    // 2. Dibujar columnas de código binario vertical
    ctx.font = "14px monospace";
    
    for (let i = 0; i < yPositions.length; i++) {
      // Sólo ceros y unos para el tema tecnológico binario
      const text = Math.random() > 0.5 ? "1" : "0";
      const x = i * 20;
      const y = yPositions[i];
      
      // Aleatoriamente dar alto brillo (glow) a ciertos caracteres
      const isGlow = Math.random() > 0.95;
      
      if (isGlow) {
        ctx.save();
        ctx.shadowColor = themeColor;
        ctx.shadowBlur = 10;
        ctx.fillStyle = "#ffffff"; // Blanco brillante para el carácter de cabeza
        ctx.fillText(text, x, y);
        ctx.restore();
      } else {
        ctx.fillStyle = themeColor;
        ctx.fillText(text, x, y);
      }
      
      // Estela de desvanecimiento
      ctx.fillStyle = "rgba(3, 7, 11, 0.02)";
      ctx.fillText(text, x, y - 15);
      
      if (y > 100 + Math.random() * 12000) {
        yPositions[i] = 0;
      } else {
        yPositions[i] += 15;
      }
    }
  }
  
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    // Redistribuir nodos de brillo
    glowNodes.forEach(node => {
      node.x = Math.random() * width;
      node.y = Math.random() * height;
    });
  });

  function startMatrix() {
    if (matrixInterval) clearInterval(matrixInterval);
    ctx.clearRect(0, 0, width, height);
    matrixInterval = setInterval(drawMatrix, 50);
  }

  function stopMatrix() {
    if (matrixInterval) {
      clearInterval(matrixInterval);
      matrixInterval = null;
    }
  }

  window.startMatrixRain = startMatrix;
  window.stopMatrixRain = stopMatrix;
}

// --- 8C. CONTROLLER DE MATRIZ Y CAMBIO DE TEMAS DE NEÓN ---
function initMatrixController() {
  const toggle = document.getElementById('matrixCtrlToggle');
  const sidebar = document.getElementById('matrixSidebar');
  const closeBtn = document.getElementById('matrixSidebarClose');
  
  if (toggle && sidebar && closeBtn) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      playSynthSound('click');
    });
    
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('open');
      playSynthSound('click');
    });

    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }

  // Selección de Temas Neón
  const themeBtns = document.querySelectorAll('.theme-select-btn');
  const savedTheme = localStorage.getItem('matrix-theme') || 'aurora';
  
  function applyTheme(themeName) {
    document.body.classList.remove('theme-flare', 'theme-nebula', 'theme-tokyo');
    if (themeName !== 'aurora') {
      document.body.classList.add(`theme-${themeName}`);
    }
    
    themeBtns.forEach(btn => {
      if (btn.dataset.theme === themeName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    localStorage.setItem('matrix-theme', themeName);
  }

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(btn.dataset.theme);
      playSynthSound('click');
    });
  });

  applyTheme(savedTheme);

  // Selección de Modo de Fondo
  const bgBtns = document.querySelectorAll('.bg-mode-btn');
  const savedBg = localStorage.getItem('matrix-bg') || 'aurora-drift';

  function applyBgMode(bgMode) {
    bgBtns.forEach(btn => {
      if (btn.dataset.bg === bgMode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (bgMode === 'matrix-rain') {
      document.body.classList.add('mode-matrix-rain');
      if (window.startMatrixRain) window.startMatrixRain();
    } else {
      document.body.classList.remove('mode-matrix-rain');
      if (window.stopMatrixRain) window.stopMatrixRain();
    }

    localStorage.setItem('matrix-bg', bgMode);
  }

  bgBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      applyBgMode(btn.dataset.bg);
      playSynthSound('click');
    });
  });

  setTimeout(() => {
    applyBgMode(savedBg);
  }, 100);
}

// --- 8D. CONSOLA DE DIAGNÓSTICOS CIBER-HUD ---
function initCyberHud() {
  const hudTemp = document.getElementById('hudCoreTemp');
  const hudLatency = document.getElementById('hudLatency');
  const hudMem = document.getElementById('hudMemLoad');
  
  if (!hudTemp || !hudLatency || !hudMem) return;
  
  setInterval(() => {
    // Fluctuación de temperatura (36°C a 42°C)
    const temp = Math.floor(Math.random() * 6 + 36);
    hudTemp.textContent = `${temp}°C`;
    
    // Fluctuación de latencia (10ms a 18ms)
    const latency = Math.floor(Math.random() * 9 + 10);
    hudLatency.textContent = `${latency}ms`;
    
    // Fluctuación de carga de memoria (28% a 36%)
    const mem = Math.floor(Math.random() * 9 + 28);
    hudMem.textContent = `${mem}%`;
  }, 1500);
}

// --- 8E. EFECTO GLITCH MATRIX EN TEXTOS DE ENCABEZADO ---
window.typeHackerTitle = function(element, text) {
  let iterations = 0;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%&";
  clearInterval(element.typeInterval);
  
  element.typeInterval = setInterval(() => {
    element.innerHTML = text.split("")
      .map((char, index) => {
        if (index < iterations) {
          return text[index];
        }
        if (char === " ") return " ";
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
      
    if (iterations >= text.length) {
      clearInterval(element.typeInterval);
    }
    iterations += 1/3;
  }, 25);
};

function initHackerTypingEffect() {
  const welcomeTitle = document.querySelector('.welcome-title');
  if (welcomeTitle) {
    welcomeTitle.dataset.original = "Ingeniería en Sistemas";
    typeHackerTitle(welcomeTitle, "Ingeniería en Sistemas");
  }
}

// --- 8F. PERSPECTIVA 3D TILT EN TODOS LOS TECH PANELS ---
function initEnhancedTilt() {
  if (window.VanillaTilt) {
    window.VanillaTilt.init(document.querySelectorAll(".tech-panel, .member-card"), {
      max: 8,
      speed: 300,
      glare: true,
      "max-glare": 0.12,
      perspective: 1000
    });
  }

  // Rastrear posición del mouse para el brillo de las tarjetas
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.member-card');
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  });
}
