/* Dongshoes — fonctionnement du site. Le contenu est dans js/data.js */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------- Apparition au défilement ----------
     La classe « anim » est posée par index.html, sauf si le visiteur a demandé moins d'animations. */
  var animer = document.documentElement.classList.contains('anim') && 'IntersectionObserver' in window;
  var vigie = animer ? new IntersectionObserver(function (entrees) {
    entrees.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      vigie.unobserve(el);
      el.classList.add('is-in');
      /* l'effet joué, l'élément retrouve ses transitions normales (survol) */
      setTimeout(function () { el.classList.remove('reveal', 'is-in'); el.style.removeProperty('--d'); }, 1400 + (parseInt(el.style.getPropertyValue('--d'), 10) || 0));
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;

  /* Les éléments d'un même groupe apparaissent l'un après l'autre (pas en ms, par séries de « serie ») */
  function reveler(els, pas, serie) {
    if (!vigie) return;
    els.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.setProperty('--d', (i % (serie || 6)) * (pas || 90) + 'ms');
      vigie.observe(el);
    });
  }

  function animations() {
    reveler($$('.sec-head'), 0);
    reveler($$('.features-in .feature'), 110);
    reveler($$('.mosaic .tile'), 110, 3);
    reveler($$('.about-art, .about-text, .social'), 140);
    reveler($$('.banner'), 0);
    reveler($$('.contact-in > *'), 120);
    if (!animer) return;
    var barre = document.createElement('div');
    barre.className = 'progression'; barre.setAttribute('aria-hidden', 'true');
    document.body.appendChild(barre);
    var attente = false;
    function maj() {
      attente = false;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      barre.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, window.scrollY / h) : 0) + ')';
    }
    window.addEventListener('scroll', function () { if (!attente) { attente = true; requestAnimationFrame(maj); } }, { passive: true });
    maj();
  }

  /* ---------- WhatsApp ---------- */
  function lienWhatsApp(message) {
    var base = SITE.whatsapp ? 'https://wa.me/' + SITE.whatsapp : 'https://wa.me/';
    return base + '?text=' + encodeURIComponent(message);
  }
  function messageProduit(p) {
    return 'Bonjour Dongshoes, je suis intéressé(e) par le modèle « ' + p.nom + ' ».\nPointure : \nCouleur : \nEst-il disponible ? Merci.';
  }
  var MSG_GENERAL = 'Bonjour Dongshoes, je voudrais voir vos modèles disponibles.\nPointure : ';

  /* ---------- Dessins de chaussures (affichés tant qu'il n'y a pas de photo) ---------- */
  function dessinChaussure(forme, couleurs, label) {
    var c1 = couleurs[0], c2 = couleurs[1];
    var ombre = '<ellipse cx="102" cy="90" rx="86" ry="5" fill="#000" opacity=".14"/>';
    var corps = '';
    if (forme === 'basket') {
      corps =
        '<path d="M22 70 L24 38 C26 30 38 28 50 31 L72 36 C92 39 106 43 122 47 C150 53 176 57 188 65 L190 72 Z" fill="' + c1 + '" stroke="' + c2 + '" stroke-width="1.5"/>' +
        '<path d="M60 62 C90 50 130 52 160 60" fill="none" stroke="' + c2 + '" stroke-width="5" stroke-linecap="round" opacity=".85"/>' +
        '<path d="M24 40 C34 36 44 38 50 46 L50 70 L22 70 Z" fill="' + c2 + '" opacity=".9"/>' +
        '<g stroke="' + c2 + '" stroke-width="2" stroke-linecap="round"><path d="M80 40 L88 50"/><path d="M90 42 L98 52"/><path d="M100 44 L108 54"/><path d="M110 46 L118 56"/></g>' +
        '<path d="M14 70 L192 70 C198 70 198 84 190 84 L22 84 C10 84 8 71 14 70 Z" fill="#fbfaf8" stroke="' + c2 + '" stroke-width="1.5"/>' +
        '<path d="M18 79 L190 79" stroke="' + c2 + '" stroke-width="1" opacity=".5"/>';
    } else if (forme === 'mocassin') {
      corps =
        '<path d="M16 72 C16 58 26 52 46 52 L92 50 C122 44 160 50 184 62 C191 66 189 73 182 73 L18 73 Z" fill="' + c1 + '"/>' +
        '<path d="M108 50 C126 46 150 50 166 58 C150 64 124 62 108 56 Z" fill="none" stroke="' + c2 + '" stroke-width="1.6" stroke-dasharray="3 2.5"/>' +
        '<path d="M88 54 L118 54" stroke="' + c2 + '" stroke-width="4" stroke-linecap="round"/>' +
        '<path d="M14 73 L186 73 C192 73 192 80 186 80 L20 80 C12 80 10 74 14 73 Z" fill="' + c2 + '"/>' +
        '<path d="M14 73 L44 73 L44 84 L16 84 Z" fill="' + c2 + '"/>' +
        '<path d="M30 60 C40 55 60 54 80 53" fill="none" stroke="#fff" stroke-width="1.4" opacity=".25"/>';
    } else if (forme === 'sandale') {
      corps =
        '<path d="M14 74 L186 74 C194 74 194 84 186 84 L20 84 C10 84 8 75 14 74 Z" fill="' + c2 + '"/>' +
        '<path d="M20 72 L184 72 C190 72 190 76 184 76 L22 76 Z" fill="' + c1 + '" opacity=".75"/>' +
        '<path d="M110 74 C112 54 160 52 168 74" fill="none" stroke="' + c1 + '" stroke-width="9"/>' +
        '<path d="M70 74 C72 56 102 54 108 74" fill="none" stroke="' + c1 + '" stroke-width="9"/>' +
        '<path d="M26 74 C24 58 40 50 56 56" fill="none" stroke="' + c1 + '" stroke-width="5"/>' +
        '<circle cx="56" cy="56" r="3" fill="#d6b77f"/>';
    } else if (forme === 'bottine') {
      corps =
        '<path d="M24 72 L26 16 C26 12 30 10 34 10 L74 10 C78 10 80 12 80 16 L82 40 C100 44 140 48 170 56 C184 60 190 66 188 72 Z" fill="' + c1 + '"/>' +
        '<path d="M50 12 L54 50 L80 46 L78 12 Z" fill="' + c2 + '" opacity=".55"/>' +
        '<path d="M28 12 L30 24" stroke="' + c2 + '" stroke-width="3" stroke-linecap="round"/>' +
        '<path d="M16 72 L190 72 C196 72 196 82 188 82 L22 82 C12 82 10 73 16 72 Z" fill="' + c2 + '"/>' +
        '<path d="M16 72 L48 72 L48 86 L18 86 Z" fill="' + c2 + '"/>';
    } else { /* derby / richelieu */
      corps =
        '<path d="M18 71 C18 53 30 45 52 43 L78 41 C92 31 110 27 126 31 L140 35 C160 41 182 51 188 63 C190 69 186 72 180 72 L20 72 Z" fill="' + c1 + '"/>' +
        '<path d="M148 38 C158 50 162 62 160 72" fill="none" stroke="' + c2 + '" stroke-width="1.6" stroke-dasharray="2 2.5"/>' +
        '<path d="M80 42 C96 40 116 42 124 33" fill="none" stroke="' + c2 + '" stroke-width="1.5"/>' +
        '<g stroke="#efe6d6" stroke-width="2" stroke-linecap="round"><path d="M96 36 L112 40"/><path d="M100 32 L116 36"/><path d="M104 29 L118 32"/></g>' +
        '<path d="M14 72 L188 72 C193 72 194 78 189 80 L20 80 C12 80 10 74 14 72 Z" fill="' + c2 + '"/>' +
        '<path d="M14 72 L48 72 L48 86 L16 86 Z" fill="' + c2 + '"/>' +
        '<path d="M34 54 C52 48 70 47 84 47" fill="none" stroke="#fff" stroke-width="1.4" opacity=".22"/>';
    }
    return '<svg class="shoe" viewBox="0 0 204 96" role="img" aria-label="' + esc(label) + '">' + ombre + corps + '</svg>';
  }

  function visuel(p) {
    if (p.photo) return '<img src="' + esc(p.photo) + '" alt="' + esc(p.nom) + ' — Dongshoes Lomé" loading="lazy" width="900" height="900">' +
      (p.photo2 ? '<img class="alt" src="' + esc(p.photo2) + '" alt="" loading="lazy" width="900" height="900">' : '');
    return dessinChaussure(p.forme, p.couleurs, p.nom);
  }

  /* ---------- Textes simples ---------- */
  function remplirInfos() {
    $$('[data-site]').forEach(function (el) {
      var cle = el.getAttribute('data-site');
      if (SITE[cle] !== undefined) {
        el.textContent = SITE[cle];
        if (SITE[cle] === 'à confirmer') el.classList.add('tbc');
      }
    });
    $$('[data-wa]').forEach(function (a) {
      a.href = lienWhatsApp(MSG_GENERAL);
      a.target = '_blank'; a.rel = 'noopener';
    });
    $$('[data-lien]').forEach(function (a) {
      a.href = SITE[a.getAttribute('data-lien')];
      a.target = '_blank'; a.rel = 'noopener';
    });
    var an = $('#annee'); if (an) an.textContent = new Date().getFullYear();
    var cn = $('#collection-names');
    if (cn && typeof COLLECTION !== 'undefined') cn.textContent = COLLECTION.join(' · ');
  }

  /* ---------- Diaporama ---------- */
  function diaporama() {
    var piste = $('#slides'), points = $('#dots');
    if (!piste) return;
    piste.innerHTML = SLIDES.map(function (s, i) {
      var art = s.photo
        ? '<img src="' + esc(s.photo) + '" alt="' + esc(s.titre + ' — chaussures en cuir Dongshoes, Lomé') + '" width="900" height="900"' + (i ? ' loading="lazy"' : '') + '>'
        : dessinChaussure(s.forme, s.couleurs, s.titre);
      return '<article class="slide' + (i === 0 ? ' is-on' : '') + '" aria-hidden="' + (i !== 0) + '">' +
        '<div class="slide-art' + (s.photo ? ' has-photo' : '') + '">' + art + '</div>' +
        '<div class="slide-text">' +
          '<span class="script">' + esc(s.surtitre) + '</span>' +
          '<h' + (i === 0 ? '1' : '2') + ' class="slide-title">' + esc(s.titre) + '</h' + (i === 0 ? '1' : '2') + '>' +
          '<p class="slide-sub">' + esc(s.texte) + '</p>' +
          '<a class="btn btn-ink" href="' + lienWhatsApp(MSG_GENERAL) + '" target="_blank" rel="noopener">Commander sur WhatsApp</a>' +
        '</div></article>';
    }).join('');
    points.innerHTML = SLIDES.map(function (_, i) {
      return '<button type="button" class="dot' + (i === 0 ? ' is-on' : '') + '" aria-label="Image ' + (i + 1) + '"></button>';
    }).join('');
    var idx = 0, minuterie;
    var slides = $$('.slide', piste), dots = $$('.dot', points);
    function aller(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('is-on', i === idx); s.setAttribute('aria-hidden', i !== idx); });
      dots.forEach(function (d, i) { d.classList.toggle('is-on', i === idx); });
    }
    function relancer() {
      clearInterval(minuterie);
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) minuterie = setInterval(function () { aller(idx + 1); }, 6000);
    }
    dots.forEach(function (d, i) { d.addEventListener('click', function () { aller(i); relancer(); }); });
    relancer();
  }

  /* ---------- Mosaïque (dessins des bannières) ---------- */
  function mosaique() {
    $$('[data-shoe]').forEach(function (el) {
      var f = el.getAttribute('data-shoe').split('|');
      el.innerHTML = dessinChaussure(f[0], [f[1], f[2]], f[3] || '');
    });
  }

  /* ---------- Produits ---------- */
  function produits() {
    var onglets = $('#tabs'), grille = $('#grid');
    if (!grille) return;
    onglets.innerHTML = CATEGORIES.map(function (c, i) {
      return '<button type="button" role="tab" class="tab' + (i === 0 ? ' is-on' : '') + '" aria-selected="' + (i === 0) + '" data-cat="' + c.id + '">' + esc(c.nom) + '</button>';
    }).join('');
    function afficher(cat) {
      var liste = PRODUITS.filter(function (p) { return cat === 'tous' || p.categorie === cat; });
      grille.innerHTML = liste.length ? liste.map(function (p) {
        var prixTbc = p.prix === 'à confirmer';
        return '<article class="card">' +
          '<div class="card-img">' + (p.badge ? '<span class="badge">' + esc(p.badge) + '</span>' : '') + visuel(p) + '</div>' +
          '<div class="card-body">' +
            '<h3 class="card-name">' + esc(p.nom) + '</h3>' +
            (p.detail ? '<p class="card-note">' + esc(p.detail) + '</p>' : '') +
            '<p class="card-price' + (prixTbc ? ' tbc' : '') + '">' + (prixTbc ? 'Prix à confirmer' : esc(p.prix)) + '</p>' +
            (p.exemple ? '<p class="card-note">Modèle d\'exemple</p>' : '') +
            '<a class="btn btn-line" href="' + lienWhatsApp(messageProduit(p)) + '" target="_blank" rel="noopener">Commander</a>' +
          '</div></article>';
      }).join('') : '<p class="empty">Aucun modèle dans cette catégorie pour le moment. Demandez les nouveautés sur WhatsApp.</p>';
      reveler($$('.card', grille), 90, getComputedStyle(grille).gridTemplateColumns.split(' ').length || 4);
    }
    onglets.addEventListener('click', function (e) {
      var b = e.target.closest('.tab'); if (!b) return;
      $$('.tab', onglets).forEach(function (t) { var on = t === b; t.classList.toggle('is-on', on); t.setAttribute('aria-selected', on); });
      afficher(b.getAttribute('data-cat'));
    });
    $$('[data-goto-cat]').forEach(function (a) {
      a.addEventListener('click', function () {
        var b = $('.tab[data-cat="' + a.getAttribute('data-goto-cat') + '"]', onglets);
        if (b) b.click();
      });
    });
    afficher('tous');
  }

  /* ---------- Vidéos : miniature locale, lecteur Facebook chargé au clic ---------- */
  function videos() {
    var box = $('#videos-list'); if (!box || typeof VIDEOS === 'undefined') return;
    box.innerHTML = VIDEOS.map(function (v) {
      var lien = 'https://www.facebook.com/reel/' + v.id + '/';
      return '<figure class="video" data-id="' + esc(v.id) + '">' +
        '<button type="button" class="video-play" aria-label="Lire la vidéo : ' + esc(v.titre) + '">' +
          '<img src="' + esc(v.miniature) + '" alt="" loading="lazy" width="540" height="960">' +
          '<span class="play" aria-hidden="true"></span>' +
          '<span class="views">' + esc(v.vues) + '</span>' +
        '</button>' +
        '<figcaption><span>' + esc(v.titre) + '</span><a href="' + lien + '" target="_blank" rel="noopener">Voir sur Facebook</a></figcaption>' +
      '</figure>';
    }).join('');
    box.addEventListener('click', function (e) {
      var b = e.target.closest('.video-play'); if (!b) return;
      var id = b.parentNode.getAttribute('data-id');
      var src = 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent('https://www.facebook.com/reel/' + id + '/') + '&show_text=false&autoplay=true&width=360';
      var f = document.createElement('iframe');
      f.src = src; f.title = 'Vidéo Dongshoes'; f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
      f.className = 'video-frame';
      b.replaceWith(f);
    });
    reveler($$('.video', box), 100, getComputedStyle(box).gridTemplateColumns.split(' ').length || 4);
  }

  /* ---------- FAQ ---------- */
  function faq() {
    var box = $('#faq-list'); if (!box) return;
    box.innerHTML = FAQ.map(function (f) {
      return '<details class="faq-item"><summary>' + esc(f.q) + '</summary><p>' + esc(f.r) + '</p></details>';
    }).join('');
    reveler($$('.faq-item', box), 70);
  }

  /* ---------- Menu téléphone ---------- */
  function menu() {
    var b = $('#menu-btn'), nav = $('#nav');
    if (!b) return;
    b.addEventListener('click', function () {
      var ouvert = nav.classList.toggle('is-open');
      b.setAttribute('aria-expanded', ouvert);
    });
    $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('is-open'); b.setAttribute('aria-expanded', 'false'); }); });
  }

  remplirInfos(); diaporama(); mosaique(); produits(); videos(); faq(); menu(); animations();
})();
