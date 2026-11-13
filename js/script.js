/* ==========================================================================
   BRAGA SERVIÇOS INDUSTRIAIS - LOGIC & INTERACTIVITY
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------- 1. Configuração da Equipe & WhatsApp ---------------- */
  const TEAM = {
    thaysa: { name: "Thaysa", role: "Atendimento Comercial", number: "5592985195956" },
    caio:   { name: "Caio",   role: "Vendas de Equipamentos", number: "5592985191639" }
  };

  const DEFAULT_WA_NUMBER = TEAM.thaysa.number;
  const DEFAULT_WA_MSG = "Olá! Vim pelo site da Braga Serviços Industriais e gostaria de solicitar um orçamento para manutenção de equipamento industrial.";

  // Configura links gerais de WhatsApp
  function setupWhatsAppLinks() {
    const defaultUrl = `https://wa.me/${DEFAULT_WA_NUMBER}?text=${encodeURIComponent(DEFAULT_WA_MSG)}`;
    document.querySelectorAll(".wa-link").forEach(el => {
      el.href = defaultUrl;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });

    // Link exclusivo de vendas (Caio)
    const salesMsg = "Olá, Caio! Vim pelo site da Braga Serviços Industriais e gostaria de informações sobre compra de equipamentos industriais.";
    const salesUrl = `https://wa.me/${TEAM.caio.number}?text=${encodeURIComponent(salesMsg)}`;
    document.querySelectorAll(".wa-sales-link").forEach(el => {
      el.href = salesUrl;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });

    // Links de itens específicos da vitrine de vendas (Caio)
    document.querySelectorAll(".wa-sales-link-item").forEach(el => {
      const product = el.dataset.product || "Equipamento Industrial";
      const itemMsg = `Olá, Caio! Vi o item "${product}" no estoque do site da Braga Serviços Industriais e gostaria de consultar valores e disponibilidade.`;
      el.href = `https://wa.me/${TEAM.caio.number}?text=${encodeURIComponent(itemMsg)}`;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });

    // Links específicos de equipe no contato
    document.querySelectorAll(".wa-team-link").forEach(el => {
      const key = el.dataset.team;
      const member = TEAM[key];
      if (member) {
        const msg = `Olá, ${member.name}! Vim pelo site da Braga Serviços Industriais e gostaria de falar diretamente com você.`;
        el.href = `https://wa.me/${member.number}?text=${encodeURIComponent(msg)}`;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
      }
    });
  }

  /* ---------------- 2. Dados e Renderização Dinâmica ---------------- */

  // Serviços
  const SERVICES = [
    {
      title: "Inversores de Frequência",
      desc: "Manutenção preventiva, corretiva e parametrização em inversores de média e baixa tensão de todas as marcas.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 12h3l2-5 2 10 2-5h3"/></svg>`
    },
    {
      title: "CLPs e IHMs",
      desc: "Diagnóstico avançado de placas de controle, telas touch screen, substituição de displays e recuperação de programa.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`
    },
    {
      title: "Servo Drives e Servomotores",
      desc: "Reparo em sistemas de controle de movimento (motion control), alinhamento de resolver/encoder e troca de IGBTs.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3M8 12h.01M16 12h.01"/></svg>`
    },
    {
      title: "Placas Eletrônicas Dedicadas",
      desc: "Laboratório moderno para teste de componentes SMD/DIP, placas mãe de máquinas CNC, robôs e fontes industriais.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v18M18 3v18M3 6h18M3 18h18"/><circle cx="12" cy="12" r="3"/></svg>`
    },
    {
      title: "Manutenção Preventiva",
      desc: "Revisão periódica, limpeza ultrassônica, banho químico, substituição preventiva de capacitores e re-resinagem.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`
    },
    {
      title: "Assistência em Bancada e Campo",
      desc: "Equipe preparada para atendimento técnico in loco para start-up, comissionamento e diagnóstico direto no chão de fábrica.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
    }
  ];

  function renderServices() {
    const container = document.getElementById("servicesGrid");
    if (!container) return;
    container.innerHTML = SERVICES.map(s => `
      <div class="glass card-hover service-card reveal">
        <div class="icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `).join("");
  }

  // Equipamentos Atendidos
  const EQUIPMENTS = [
    {
      title: "Inversores de Frequência",
      desc: "Manutenção e testes em carga nas marcas WEG, Siemens, ABB, Schneider, Yaskawa e Danfoss.",
      img: "assets/images/photos/inversor-weg-cfw.jpg",
      tag: "WEG / Siemens / ABB"
    },
    {
      title: "CLPs e IHMs",
      desc: "Conserto de telas touch, placas de comunicação e CPUs Rockwell, Siemens e Delta.",
      img: "assets/images/photos/ihm-delta.jpg",
      tag: "Rockwell / Siemens / Delta"
    },
    {
      title: "Servo Drives e Servomotores",
      desc: "Sincronização de encoders, reparo de módulos de potência Fanuc, Yaskawa e Mitsubishi.",
      img: "assets/images/photos/servo-mitsubishi.jpg",
      tag: "Fanuc / Yaskawa / Indramat"
    },
    {
      title: "Placas Eletrônicas Dedicadas",
      desc: "Diagnóstico avançado em bancada para placas de controle de injetoras, CNCs e prensas.",
      img: "assets/images/photos/placa-pcb.jpg",
      tag: "Multimarcas / CNC"
    },
    {
      title: "Painéis e Switchgear",
      desc: "Revisão completa de disjuntores industriais, contatores, relés de proteção e barramentos.",
      img: "assets/images/photos/paineis-real.jpg",
      tag: "Comando / Distribuição"
    },
    {
      title: "Robótica Industrial",
      desc: "Assistência técnica em unidades de controle de braços robóticos e servopack industriais.",
      img: "assets/images/photos/robotica-real.jpg",
      tag: "Fanuc / Kuka / ABB"
    }
  ];

  function renderEquipments() {
    const container = document.getElementById("equipGrid");
    if (!container) return;
    container.innerHTML = EQUIPMENTS.map(eq => `
      <div class="glass card-hover equip-card reveal">
        <div class="img-wrapper">
          <img src="${eq.img}" alt="${eq.title}" loading="lazy">
        </div>
        <div class="card-content">
          <h4>${eq.title}</h4>
          <p class="desc">${eq.desc}</p>
          <span class="tag">${eq.tag}</span>
        </div>
      </div>
    `).join("");
  }

  // Marquee de Marcas
  const BRANDS = [
    "WEG", "SIEMENS", "SCHNEIDER ELECTRIC", "ABB", "ALLEN-BRADLEY",
    "YASKAWA", "FANUC", "OMRON", "DELTA", "MITSUBISHI", "DANFOSS", "EATON"
  ];

  function renderMarquee() {
    const container = document.getElementById("marqueeRow");
    if (!container) return;
    // Duplicar lista para efeito contínuo de marquee
    const list = [...BRANDS, ...BRANDS];
    container.innerHTML = list.map(b => `<div class="brand-chip">${b}</div>`).join("");
  }

  // Diferenciais (Why Us)
  const WHY_US = [
    {
      title: "Laboratório de Ponta",
      desc: "Bancadas equipadas com osciloscópios, fontes reguladas e giga de testes dedicados."
    },
    {
      title: "+10 Anos de Mercado",
      desc: "Experiência sólida na manutenção dos mais diversos modelos de equipamentos industriais."
    },
    {
      title: "Garantia & Nota Fiscal",
      desc: "Todos os serviços acompanham garantia formal por escrito e laudo técnico detalhado."
    },
    {
      title: "Diagnóstico Rápido",
      desc: "Agilidade no orçamento para você minimizar o tempo de máquina parada na fábrica."
    },
    {
      title: "Componentes Originais",
      desc: "Utilizamos semicondutores, IGBTs e peças de reposição homologadas pelos fabricantes."
    },
    {
      title: "Atendimento Nacional",
      desc: "Base em Manaus – AM com recebimento e envio de equipamentos para todo o Brasil."
    }
  ];

  function renderWhyUs() {
    const container = document.getElementById("whyGrid");
    if (!container) return;
    container.innerHTML = WHY_US.map(w => `
      <div class="glass card-hover service-card reveal">
        <div class="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
      </div>
    `).join("");
  }

  // Timeline de Processo
  const TIMELINE = [
    { num: "01", title: "Solicitação & Triagem", desc: "Você entra em contato via WhatsApp ou Formulário descrevendo o defeito do equipamento." },
    { num: "02", title: "Recebimento ou Coleta", desc: "O equipamento é enviado ao nosso laboratório em Manaus ou agendamos visita técnica." },
    { num: "03", title: "Diagnóstico em Bancada", desc: "Análise minuciosa de componentes elétricos, placas e firmware para identificar a causa raiz." },
    { num: "04", title: "Orçamento Transparente", desc: "Apresentamos a proposta comercial completa com peças, mão de obra e prazo sem compromisso." },
    { num: "05", title: "Manutenção & Teste em Carga", desc: "Execução do conserto, troca de componentes e testes rigorosos em bancada sob carga." },
    { num: "06", title: "Entrega com Garantia", desc: "Devolução do equipamento pronto para operação, acompanhado de laudo e nota fiscal." }
  ];

  function renderTimeline() {
    const container = document.getElementById("timelineList");
    if (!container) return;
    container.innerHTML = TIMELINE.map(t => `
      <div class="tl-item reveal">
        <div class="num">${t.num}</div>
        <div>
          <h4>${t.title}</h4>
          <p>${t.desc}</p>
        </div>
      </div>
    `).join("");
  }

  // Depoimentos
  const TESTIMONIALS = [
    {
      quote: "Estávamos com uma linha de produção parada por conta de um inversor de frequência antigo. A equipe da Braga recuperou o equipamento em tempo recorde.",
      name: "Carlos Eduardo M.",
      role: "Gerente de Manutenção Industrial"
    },
    {
      quote: "Atendimento nota 10 com o Caio no setor de vendas e o Andrei no suporte técnico. Conseguimos um CLP revisado com garantia imediata.",
      name: "Fernanda Ribeiro",
      role: "Supervisora de Automação"
    },
    {
      quote: "Excelente trabalho na reparação de servo drives Fanuc. Laudo bem detalhado e testes que nos deram total confiança.",
      name: "Roberto Silva",
      role: "Engenheiro Eletricista"
    }
  ];

  function renderTestimonials() {
    const container = document.getElementById("testiGrid");
    if (!container) return;
    container.innerHTML = TESTIMONIALS.map(t => `
      <div class="glass card-hover testi-card reveal">
        <div class="stars">
          ${`<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`.repeat(5)}
        </div>
        <p>"${t.quote}"</p>
        <div class="who">
          <div class="avatar">${t.name.charAt(0)}</div>
          <div>
            <b>${t.name}</b>
            <span>${t.role}</span>
          </div>
        </div>
      </div>
    `).join("");
  }

  // FAQ
  const FAQS = [
    {
      q: "Qual é o prazo médio para diagnóstico e emissão de orçamento?",
      a: "O diagnóstico padrão em nosso laboratório é realizado em até 24h a 48h úteis após o recebimento do equipamento."
    },
    {
      q: "Os serviços prestados possuem garantia por escrito?",
      a: "Sim! Todos os nossos serviços de manutenção acompanham garantia formal por escrito de 90 dias a 6 meses, além de nota fiscal."
    },
    {
      q: "Vocês atendem empresas fora do estado do Amazonas?",
      a: "Sim! Atendemos indústrias de todo o Brasil através do envio seguro via transportadora ou Correios (Sedex)."
    },
    {
      q: "Vocês realizam a venda de equipamentos industriais revisados?",
      a: "Sim. Possuímos estoque de inversores de frequência, CLPs, IHMs e servo drives semi-novos, revisados em bancada e prontos para pronta-entrega."
    },
    {
      q: "Como funciona a escolha do destinatário no formulário de orçamento?",
      a: "Você pode escolher diretamente qual especialista da nossa equipe receberá a sua mensagem no WhatsApp (Thaysa para atendimento comercial ou Caio para vendas de equipamentos)."
    }
  ];

  function renderFAQ() {
    const container = document.getElementById("faqList");
    if (!container) return;
    container.innerHTML = FAQS.map((f, i) => `
      <div class="faq-item reveal">
        <div class="faq-q" data-faq="${i}">
          <span>${f.q}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        </div>
        <div class="faq-a" id="faq-a-${i}">
          <p>${f.a}</p>
        </div>
      </div>
    `).join("");

    // Accordion click handlers
    document.querySelectorAll(".faq-q").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const isOpen = item.classList.contains("open");
        
        // Fechar todos os outros
        document.querySelectorAll(".faq-item").forEach(other => {
          other.classList.remove("open");
          const ans = other.querySelector(".faq-a");
          if (ans) ans.style.maxHeight = null;
        });

        // Abrir/Fechar atual
        if (!isOpen) {
          item.classList.add("open");
          const ans = item.querySelector(".faq-a");
          if (ans) ans.style.maxHeight = ans.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------------- 3. Formulário com Roteamento por Destinatário ---------------- */
  const quoteForm = document.getElementById("quoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(quoteForm);
      const nome = formData.get("nome") || "";
      const empresa = formData.get("empresa") || "Não informada";
      const telefone = formData.get("telefone") || "";
      const email = formData.get("email") || "";
      const equipamento = formData.get("equipamento") || "Não especificado";
      const descricao = formData.get("descricao") || "Sem descrição";
      const destinatarioKey = formData.get("destinatario") || "thaysa";

      const member = TEAM[destinatarioKey] || TEAM.thaysa;

      // Monta mensagem formatada para WhatsApp
      const waText = 
`Olá, *${member.name}*! Solicitação de orçamento enviada pelo site da Braga Serviços Industriais:

👤 *Nome:* ${nome}
🏢 *Empresa:* ${empresa}
📞 *Telefone:* ${telefone}
📧 *E-mail:* ${email}
⚙️ *Equipamento:* ${equipamento}
📝 *Defeito / Solicitação:* ${descricao}`;

      const waUrl = `https://wa.me/${member.number}?text=${encodeURIComponent(waText)}`;

      // Exibe Toast de confirmação
      showToast(`Solicitação direcionada para ${member.name} (${member.role}). Abrindo WhatsApp...`);

      // Redireciona para o WhatsApp após 1 segundo
      setTimeout(() => {
        window.open(waUrl, "_blank", "noopener,noreferrer");
        quoteForm.reset();
      }, 1000);
    });
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    const textSpan = toast.querySelector("span");
    if (textSpan) textSpan.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }

  /* ---------------- 4. Interações Globais da UI ---------------- */

  // Header Scroll & Top Button
  const header = document.getElementById("header");
  const topBtn = document.getElementById("topBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
      topBtn?.classList.add("show");
    } else {
      header?.classList.remove("scrolled");
      topBtn?.classList.remove("show");
    }
  });

  topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile Menu Drawer
  const burgerBtn = document.getElementById("burgerBtn");
  const closeMenu = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  function toggleMobileMenu(open) {
    if (!mobileMenu) return;
    if (open) {
      mobileMenu.classList.add("open");
      document.body.style.overflow = "hidden";
    } else {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  burgerBtn?.addEventListener("click", () => toggleMobileMenu(true));
  closeMenu?.addEventListener("click", () => toggleMobileMenu(false));

  document.querySelectorAll(".mnav-link").forEach(link => {
    link.addEventListener("click", () => toggleMobileMenu(false));
  });

  /* ---------------- 5. Scroll Reveal Observer & Contadores ---------------- */
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function initRevealAnimations() {
    document.querySelectorAll(".reveal").forEach(el => {
      revealObserver.observe(el);
    });
  }

  // Contadores animados nos números
  function initCounters() {
    const statsSection = document.querySelector(".stats-panel");
    if (!statsSection) return;

    let animated = false;
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          document.querySelectorAll("[data-count]").forEach(counter => {
            const target = parseInt(counter.dataset.count, 10);
            const suffix = counter.dataset.suffix || "";
            let current = 0;
            const step = Math.max(1, Math.floor(target / 40));
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              counter.textContent = current.toLocaleString("pt-BR") + suffix;
            }, 35);
          });
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  /* ---------------- 10. Galeria & Filtros de Vendas ---------------- */
  function initVendasGallery() {
    const filterBtns = document.querySelectorAll(".vendas-filter-btn");
    const cards = document.querySelectorAll(".vendas-card");

    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach(card => {
          if (filter === "todos" || card.dataset.category === filter) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  }

  /* ---------------- Init Execution ---------------- */
  renderServices();
  renderEquipments();
  renderMarquee();
  renderWhyUs();
  renderTimeline();
  renderTestimonials();
  renderFAQ();
  setupWhatsAppLinks();
  initVendasGallery();

  setTimeout(() => {
    initRevealAnimations();
    initCounters();
  }, 100);
});

/* Global Lightbox Handlers para Fotos de Vendas */
function openVendasLightbox(src, caption) {
  const modal = document.getElementById("vendasLightbox");
  const img = document.getElementById("vendasLightboxImg");
  const cap = document.getElementById("vendasLightboxCaption");
  if (!modal || !img) return;

  img.src = src;
  if (cap) cap.textContent = caption || "";
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeVendasLightbox(event) {
  if (event && event.target && !event.target.classList.contains("vendas-lightbox") && !event.target.classList.contains("vendas-lightbox__close")) {
    return;
  }
  const modal = document.getElementById("vendasLightbox");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeVendasLightbox();
  }
});

