# 🏭 Braga Serviços Industriais — Landing Page & Vitrine de Produtos

Landing page institucional e comercial da **Braga Serviços Industriais**, empresa especializada em manutenção eletrônica industrial, automação e venda de equipamentos industriais revisados e com garantia em Manaus - AM.

O projeto foi desenvolvido com foco em alta performance, estética moderna em estilo *Glassmorphism*, total responsividade para dispositivos móveis e integração direta com atendimento comercial via WhatsApp.

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Principais Funcionalidades](#-principais-funcionalidades)
- [Estrutura da Landing Page](#-estrutura-da-landing-page)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura de Pastas do Projeto](#-estrutura-de-pastas-do-projeto)
- [Política de Backup e Segurança](#-política-de-backup-e-segurança)
- [Como Executar o Projeto](#-como-executar-o-projeto)

---

## ⚡ Visão Geral

A **Braga Serviços Industriais** atua há mais de 10 anos no mercado oferecendo assistência técnica especializada para linhas industriais paradas, manutenção em laboratório próprio de eletrônica e venda de componentes e equipamentos à pronta entrega.

Esta aplicação web tem como objetivo:
1. Apresentar os serviços de manutenção em **Inversores de Frequência, CLPs, IHMs, Servo Drives e Placas CNC**.
2. Exibir o **espaço físico e laboratório técnico** na seção *Quem Somos*.
3. Demonstrar fotos reais do **estoque físico à pronta entrega** na aba *Vendas*, permitindo a filtragem por categoria e consulta direta de cada item via WhatsApp.
4. Facilitar o contato direto com a equipe comercial (**Thaysa**) e a equipe de vendas de equipamentos (**Caio**).

---

## 🔥 Principais Funcionalidades

### 🛒 Vitrine Interativa do Estoque de Vendas (`#vendas`)
- **Fotos Reais do Estoque**: Demonstração de equipamentos revisados e testados em bancada (Servo Drivers, Disjuntores, CLPs, Módulos e Fontes Chaveadas).
- **Filtros por Categoria**: Navegação rápida entre *Todos os Produtos*, *Servo Drivers & Servos*, *CLPs & Automação*, *Disjuntores & Elétrica*, *Fontes de Alimentação* e *Inversores & Soft-Starters*.
- **Cards com Selos de Qualidade**: Badges indicativas (`Pronta Entrega`, `Revisado com Garantia`, `Testado em Bancada`, `Estoque Físico`).
- **Mensagem Direta de WhatsApp por Produto**: Cada card possui um botão *"Consultar Peça no WhatsApp"* que redireciona diretamente para o especialista **Caio (Vendas)** preenchendo o nome exato do equipamento.

### 🖼️ Visualizador Modal (Lightbox em Tela Cheia)
- Tanto na galeria *Quem Somos* quanto na vitrine de *Vendas*, o clique no ícone de lupa abre a fotografia em alta resolução em tela cheia com efeito de desfoque de fundo (backdrop blur).
- Suporte a fechamento via tecla `Esc` ou clique fora do modal.

### 🏢 Galeria Institucional "Quem Somos" (`#sobre`)
- Exibição destacada do painel de recepção, laboratório de eletrônica industrial, bancadas técnicas de reparo minucioso e testes de diagnósticos com multímetro.

### 💬 Roteamento Dinâmico de WhatsApp
- **Atendimento Geral / Orçamentos**: Encaminha para **Thaysa (Comercial)**.
- **Venda de Equipamentos**: Encaminha diretamente para **Caio (Vendas)** — `(92) 98519-1639`.

---

## 🗺️ Estrutura da Landing Page

1. **Cabeçalho (Header / Navbar)**: Logo institucional, links de rolagem suave (`#sobre`, `#servicos`, `#equipamentos`, `#vendas`, `#depoimentos`, `#contato`) e botão de contato rápido.
2. **Hero Section**: Apresentação da marca, destaques numéricos (10+ anos, 2.000+ reparos/ano) e chamada principal.
3. **Quem Somos (`#sobre`)**: Galeria institucional interativa, diferenciais da empresa e laboratório próprio.
4. **Serviços (`#servicos`)**: Cartões explicativos dos 6 principais serviços de manutenção eletrônica.
5. **Equipamentos Atendidos (`#equipamentos`)**: Lista de tipos de equipamentos e marcas atendidas.
6. **Vitrine de Vendas (`#vendas`)**: Acervo em estoque com fotos reais, filtros e consulta por item via WhatsApp.
7. **Mercado Livre (`#mercado-livre`)**: Redirecionamento para a loja oficial no Mercado Livre.
8. **Marcas (`#marcas`)**: Carrossel infinito (marquee) com logomarcas dos principais fabricantes (Siemens, WEG, ABB, Schneider, Fanuc, Yaskawa, Omron, Mitsubishi, Delta).
9. **Diferenciais & Processo Passo a Passo**: Metodologia de trabalho desde o envio até a entrega com garantia.
10. **Contato & Localização (`#contato`)**: Formulário de contato, seleção de atendente, mapa interativo do Google Maps (Manaus - AM) e informações de endereço.
11. **Rodapé & Botões Flutuantes**: Links de navegação, direitos autorais, botão flutuante do WhatsApp e botão *"Voltar ao Topo"*.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Marcação semântica, acessibilidade e estrutura limpa.
- **CSS3 Vanilla**:
  - Design System baseado em Variáveis CSS (Custom Properties).
  - Layouts responsivos com **Flexbox** e **CSS Grid**.
  - Estética *Glassmorphism* (efeitos de desfoque, gradientes escuros e bordas translúcidas).
  - Micro-animações e transições suaves.
- **JavaScript (ES6+)**:
  - Manipulação de DOM e rotas dinâmicas para o WhatsApp.
  - Filtros de categoria em tempo real sem recarregamento de página.
  - Modal Lightbox customizado para ampliação de imagens.
  - Animação de contadores numéricos e inicialização por scroll (*Intersection Observer*).

---

## 📁 Estrutura de Pastas do Projeto

```
braga-novo-4/
├── index.html                       # Arquivo HTML principal da landing page
├── README.md                        # Documentação técnica e operacional do projeto
├── css/
│   └── styles.css                   # Folha de estilos completa do site
├── js/
│   └── script.js                    # Código JavaScript para interatividade, modal e filtros
├── assets/
│   └── images/
│       ├── logo-braga.png           # Logomarca oficial Braga Serviços Industriais
│       ├── photos/                  # Fotos gerais da empresa e equipamentos
│       ├── fotos-vendas/            # Imagens dos produtos ofertados na seção de Vendas
│       └── photos-quemsomos/        # Imagens institucionais da seção Quem Somos
├── fotos-vendas/                    # Pasta demarcada de fotos da vitrine de vendas
├── photos-quemsomos/                # Pasta demarcada de fotos da seção Quem Somos
└── backup-versao-anterior/          # Diretório de backup de segurança da versão original
    ├── index.html
    └── styles.css
```

---

## 🛡️ Política de Backup e Segurança

Para garantir a rastreabilidade e permitir a restauração rápida do código anterior caso necessário:
- Todas as versões originais dos arquivos foram preservadas no diretório [backup-versao-anterior/](file:///Users/mahtsales/Downloads/braga-novo-4/backup-versao-anterior/).
- Cópia adicional de segurança: `index.html.bak` e `css/styles.css.bak`.

---

## 🚀 Como Executar o Projeto

Como o projeto é construído em código web nativo (HTML5/CSS3/JS Vanilla), não é necessária a instalação de dependências ou compilação.

1. **Clonar ou baixar o repositório**:
   ```bash
   git clone https://github.com/mahtsales/services-braga.git
   ```
2. **Abrir localmente**:
   - Basta dar um duplo clique no arquivo `index.html` para abrir diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
   - Ou executar através de um servidor local simples no terminal:
     ```bash
     python3 -m http.server 8000
     ```
     Em seguida, acesse no navegador: `http://localhost:8000`

---

© 2026 **Braga Serviços Industriais**. Todos os direitos reservados.
