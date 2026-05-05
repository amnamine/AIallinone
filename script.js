// ===== CHATBOT DATA =====
const chatbots = [
  {
    name: "ChatGPT",
    company: "OpenAI",
    url: "https://chatgpt.com/",
    icon: "🤖",
    category: "general",
    pricing: "Freemium",
    accentColor: "#10a37f",
    description: "The pioneering conversational AI assistant by OpenAI. Powered by GPT-4o and beyond, ChatGPT excels at creative writing, coding, analysis, image generation, and complex reasoning with real-time web browsing capabilities.",
    tags: ["Reasoning", "Code", "Vision", "DALL-E"]
  },
  {
    name: "Gemini",
    company: "Google",
    url: "https://gemini.google.com/",
    icon: "✨",
    category: "general",
    pricing: "Freemium",
    accentColor: "#4285f4",
    description: "Google's natively multimodal AI assistant built to understand text, code, images, audio, and video simultaneously. Features a 2M token context window, Deep Research agent, and deep Google Workspace integration.",
    tags: ["Multimodal", "Research", "Workspace", "Live"]
  },
  {
    name: "Claude",
    company: "Anthropic",
    url: "https://claude.ai/",
    icon: "🧠",
    category: "general",
    pricing: "Freemium",
    accentColor: "#d4a574",
    description: "Anthropic's safety-focused AI assistant known for nuanced reasoning, complex coding, and thoughtful analysis. Features a 1M token context window, interactive Artifacts, and Constitutional AI alignment.",
    tags: ["Reasoning", "Safety", "Coding", "Artifacts"]
  },
  {
    name: "DeepSeek",
    company: "DeepSeek AI",
    url: "https://www.deepseek.com/",
    icon: "🔍",
    category: "reasoning",
    pricing: "Free",
    accentColor: "#4f6ef7",
    description: "A Chinese open-weight AI powerhouse known for exceptional reasoning. Features DeepThink mode with visible chain-of-thought, interleaved thinking, and top-tier performance in math, logic, and coding at remarkably low cost.",
    tags: ["Open-Weight", "Reasoning", "DeepThink", "Code"]
  },
  {
    name: "Kimi",
    company: "Moonshot AI",
    url: "https://www.kimi.com/",
    icon: "🌙",
    category: "general",
    pricing: "Free",
    accentColor: "#7c5cfc",
    description: "Moonshot AI's advanced assistant featuring a 1T-parameter MoE model with 256K token context. Known for its Agent Swarm technology that coordinates hundreds of sub-agents to tackle complex multi-step tasks in parallel.",
    tags: ["Long-Context", "Agent Swarm", "Multimodal", "Code"]
  },
  {
    name: "ChatGLM",
    company: "Zhipu AI",
    url: "https://chat.z.ai/",
    icon: "💬",
    category: "general",
    pricing: "Free",
    accentColor: "#00b4d8",
    description: "A versatile AI assistant powered by Zhipu AI's GLM model family. Excels in professional writing, code generation, content creation, and features an autonomous PPT/Poster agent. Strong multilingual support in Chinese and English.",
    tags: ["Multilingual", "Agents", "Writing", "Code"]
  },
  {
    name: "Copilot",
    company: "Microsoft",
    url: "https://copilot.microsoft.com/",
    icon: "🪟",
    category: "productivity",
    pricing: "Freemium",
    accentColor: "#0078d4",
    description: "Microsoft's AI-powered productivity companion deeply integrated into Windows, Microsoft 365, and the entire Microsoft ecosystem. Automates workflows in Word, Excel, PowerPoint, Teams, and Outlook with GPT-4 intelligence.",
    tags: ["Office 365", "Productivity", "Agents", "Windows"]
  },
  {
    name: "Meta AI",
    company: "Meta",
    url: "https://www.meta.ai/",
    icon: "🌐",
    category: "social",
    pricing: "Free",
    accentColor: "#0668e1",
    description: "Meta's multimodal AI assistant integrated directly into WhatsApp, Instagram, Facebook, and Messenger. Powered by Llama models, it offers proactive assistance, creative tools, and real-time group chat collaboration.",
    tags: ["Social", "Llama", "Multimodal", "Creative"]
  },
  {
    name: "Grok",
    company: "xAI",
    url: "https://grok.com/",
    icon: "⚡",
    category: "general",
    pricing: "Freemium",
    accentColor: "#1da1f2",
    description: "xAI's truth-seeking AI chatbot with a witty, unfiltered personality. Features real-time X/Twitter integration for live sentiment analysis, advanced image generation, voice mode with camera input, and agentic workflows.",
    tags: ["Real-Time", "X Integration", "Voice", "Unfiltered"]
  },
  {
    name: "Perplexity",
    company: "Perplexity AI",
    url: "https://www.perplexity.ai/",
    icon: "🔎",
    category: "research",
    pricing: "Freemium",
    accentColor: "#20b2aa",
    description: "A research-first AI answer engine that combines real-time web search with LLMs to deliver synthesized, citation-backed responses. Features Deep Research, Model Council for multi-model comparison, and the Comet browser agent.",
    tags: ["Search", "Citations", "Research", "Multi-Model"]
  },
  {
    name: "Le Chat",
    company: "Mistral AI",
    url: "https://chat.mistral.ai/",
    icon: "🇫🇷",
    category: "general",
    pricing: "Freemium",
    accentColor: "#ff6b35",
    description: "Mistral AI's European-built assistant featuring Flash Answers at ~1,000 words/sec, Deep Research mode, Canvas editor, and voice interactions via Voxtral. Offers code interpretation, image generation, and strong privacy controls.",
    tags: ["European", "Fast", "Canvas", "Voice"]
  },
  {
    name: "Poe",
    company: "Quora",
    url: "https://poe.com/",
    icon: "🏛️",
    category: "aggregator",
    pricing: "Freemium",
    accentColor: "#6c5ce7",
    description: "A unified AI chat platform that aggregates multiple frontier models (GPT, Claude, Gemini, Llama) in one interface. Create custom bots, compare model responses side-by-side, and join group conversations with multiple AIs.",
    tags: ["Multi-Model", "Custom Bots", "Comparison", "Creator"]
  },
  {
    name: "Coconut Studio",
    company: "Algerian Startup",
    url: "https://coconutstudio.io/",
    icon: "🥥",
    category: "general",
    pricing: "Free",
    accentColor: "#27ae60",
    description: "An AI assistant built by an Algerian startup, specializing in chat, translation, and document processing. A promising emerging platform bringing AI capabilities to North African and French-speaking communities.",
    tags: ["Translation", "Documents", "Chat", "Emerging"]
  },
  {
    name: "ERNIE Bot",
    company: "Baidu",
    url: "https://yiyan.baidu.com/",
    icon: "🐻",
    category: "general",
    pricing: "Free",
    accentColor: "#de1221",
    description: "Baidu's flagship AI chatbot powered by ERNIE 5.0 with native full-modality modeling across text, images, audio, and video. Features deep integration with Baidu Search and advanced chain-of-thought reasoning capabilities.",
    tags: ["Chinese", "Multimodal", "Search", "Reasoning"]
  },
  {
    name: "Qwen",
    company: "Alibaba Cloud",
    url: "https://qwen.ai/",
    icon: "☁️",
    category: "general",
    pricing: "Free",
    accentColor: "#6236ff",
    description: "Alibaba's powerful AI family supporting 100+ languages with dual Thinking/Non-Thinking modes. Features specialized variants for coding, math, and OCR, plus a 1M token context window and open-source model releases.",
    tags: ["Open-Source", "Multilingual", "Coding", "Math"]
  }
];

// ===== DOM ELEMENTS =====
const cardsGrid = document.getElementById('cards-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const scrollTopBtn = document.getElementById('scroll-top');
const navbar = document.querySelector('.navbar');
const countEl = document.getElementById('bot-count');

// ===== STATE =====
let activeFilter = 'all';

// ===== RENDER CARDS =====
function renderCards(data) {
  cardsGrid.innerHTML = '';

  if (data.length === 0) {
    cardsGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px;">
        <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
        <h3 style="font-family: 'Outfit', sans-serif; font-size: 24px; margin-bottom: 8px; color: var(--text-primary);">No results found</h3>
        <p style="color: var(--text-secondary); font-size: 15px;">Try adjusting your search or filter criteria</p>
      </div>
    `;
    return;
  }

  data.forEach((bot, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--card-accent', `linear-gradient(90deg, ${bot.accentColor}, ${adjustColor(bot.accentColor, 40)})`);
    card.style.setProperty('--card-accent-solid', bot.accentColor);
    card.style.setProperty('--card-bg', hexToRgba(bot.accentColor, 0.08));
    card.style.setProperty('--card-border', hexToRgba(bot.accentColor, 0.15));
    card.style.setProperty('--card-glow', hexToRgba(bot.accentColor, 0.25));
    card.style.animationDelay = `${index * 0.05}s`;

    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon-wrapper">${bot.icon}</div>
        <span class="card-badge">${bot.category}</span>
      </div>
      <h3 class="card-title">${bot.name}</h3>
      <p class="card-company">by ${bot.company}</p>
      <p class="card-description">${bot.description}</p>
      <div class="card-tags">
        ${bot.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
      </div>
      <div class="card-footer">
        <a href="${bot.url}" target="_blank" rel="noopener noreferrer" class="card-link" id="link-${bot.name.toLowerCase().replace(/\s+/g, '-')}">
          Launch <span class="arrow">→</span>
        </a>
        <span class="card-pricing"><span class="${bot.pricing === 'Free' ? 'free' : ''}">${bot.pricing}</span></span>
      </div>
    `;

    // Prevent card click from firing when clicking the link
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.card-link')) {
        const link = card.querySelector('.card-link');
        if (link) window.open(link.href, '_blank');
      }
    });

    cardsGrid.appendChild(card);
  });
}

// ===== FILTER & SEARCH =====
function getFilteredData() {
  const query = searchInput.value.toLowerCase().trim();

  return chatbots.filter(bot => {
    const matchesFilter = activeFilter === 'all' || bot.category === activeFilter;
    const matchesSearch = !query ||
      bot.name.toLowerCase().includes(query) ||
      bot.company.toLowerCase().includes(query) ||
      bot.description.toLowerCase().includes(query) ||
      bot.tags.some(tag => tag.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });
}

function updateView() {
  const filtered = getFilteredData();
  renderCards(filtered);
}

// ===== EVENT LISTENERS =====
searchInput.addEventListener('input', () => {
  updateView();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    updateView();
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});

// Scroll to top
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Keyboard shortcut: "/" to focus search
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === 'Escape') {
    searchInput.blur();
    searchInput.value = '';
    updateView();
  }
});

// ===== UTILITY FUNCTIONS =====
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function adjustColor(hex, amount) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  r = Math.min(255, r + amount);
  g = Math.min(255, g + amount);
  b = Math.min(255, b + amount);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// ===== INTERSECTION OBSERVER FOR CARD ANIMATIONS =====
function observeCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card').forEach(card => {
    card.style.animationPlayState = 'paused';
    observer.observe(card);
  });
}

// ===== PARTICLES EFFECT =====
function createParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const count = 50;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function init() {
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(162, 155, 254, ${p.opacity})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(108, 92, 231, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();
  window.addEventListener('resize', () => { resize(); init(); });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  if (countEl) countEl.textContent = chatbots.length;
  renderCards(chatbots);
  observeCards();
  createParticles();

  // Animate stats counters
  document.querySelectorAll('.hero-stat .number').forEach(el => {
    const target = parseInt(el.textContent);
    if (isNaN(target)) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current + '+';
    }, 30);
  });
});
