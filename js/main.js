function toggleSection(btn) {
  try {
    btn.classList.toggle('open');
    const subsection = btn.closest('.subsection');
    if (!subsection) return;
    const content = subsection.querySelector('.collapsible-content');
    if (content) content.classList.toggle('open');
  } catch (_) {}
}

function toggleAnswer(el) {
  try {
    const card = el.closest('.problem-card');
    if (!card) return;
    const box = card.querySelector('.answer-box');
    if (box) box.classList.toggle('show');
  } catch (_) {}
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const root = document.documentElement;
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        themeBtn.textContent = '🌙 深色模式';
      } else {
        root.setAttribute('data-theme', 'dark');
        themeBtn.textContent = '☀️ 亮色模式';
      }
    });
  }

  const sidebarBtn = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener('click', () => sidebar.classList.toggle('show'));
  }

  const backTop = document.getElementById('backToTop');
  if (backTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) backTop.classList.add('show');
      else backTop.classList.remove('show');
    });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const searchInput = document.getElementById('searchBox');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) return;
        const targets = Array.from(document.querySelectorAll('.section, .subsection, .problem-card'));
        const found = targets.find(node => node.innerText.toLowerCase().includes(q));
        if (found) found.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});