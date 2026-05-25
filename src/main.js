import { lifeProjectData } from './data/data.js';

// Estados globales de navegación horizontal
let currentSlideIdx = 0;
const slides = ['hero', 'quiensoy', 'foda', 'rueda', 'timeline', 'misionvision', 'plan'];

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de componentes e interacciones de la Opción 2
  initDataInjection();
  initNeonCursor();
  initParticles();
  initRuedaPolar();
  initHorizontalTimeline();
  initGitHubHabitGrid();
  initHorizontalSlideController();
  
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

  // Quién Soy - Perfil
  document.getElementById('profileName').textContent = data.personalInfo.name;
  
  // Quién Soy - Valores en Órbita / Nubes de Tags
  const valuesContainer = document.getElementById('valuesContainer');
  valuesContainer.innerHTML = data.personalInfo.values.map(val => `
    <div class="sci-tag" data-tilt data-tilt-max="15">
      <span style="color: var(--text-neon-cyan); font-weight: 700;"># ${val.name}</span> // ${val.desc}
    </div>
  `).join('');

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
  strategiesContainer.innerHTML += data.planDeAccion.strategies.map(strat => `
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
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentNum = document.getElementById('currentSlideNum');
  const laserTracker = document.getElementById('laserTracker');
  const sidebarLinks = document.querySelectorAll('#sidebarList a');

  if (!container || !prevBtn || !nextBtn || !currentNum || !laserTracker) return;

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

    // Actualizar la diapositiva activa agregando .active-slide para sus transiciones
    const slidesElements = document.querySelectorAll('.horizontal-slide');
    slidesElements.forEach((el, index) => {
      if (index === currentSlideIdx) {
        el.classList.add('active-slide');
      } else {
        el.classList.remove('active-slide');
      }
    });

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

  // Navegación con flechas en pantalla
  prevBtn.addEventListener('click', () => {
    if (currentSlideIdx > 0) navigateToSlide(currentSlideIdx - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlideIdx < slides.length - 1) navigateToSlide(currentSlideIdx + 1);
  });

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

  // Adaptar el desplazamiento ante un resize de ventana
  window.addEventListener('resize', () => {
    navigateToSlide(currentSlideIdx);
  });
}
