/* ===== Header commun à toutes les pages =====
   Le menu est toujours en anglais et pointe toujours vers les pages anglaises,
   même depuis une analyse traduite en français.

   Dans chaque page :
   <div id="site-header" data-racine="../../"></div>
   <script src="../../header.js"></script>

   - data-traduction="oui" : à ajouter UNIQUEMENT sur les analyses qui existent dans
       les deux langues. Un bouton EN / FR apparaît alors dans le menu.
       Il suppose que l'analyse anglaise est dans   .../analysis/nom-article/
       et la version française dans                 .../fr/analysis/nom-article/ */

(function () {
  const emplacement = document.getElementById('site-header');
  if (!emplacement) return;

  const r = emplacement.dataset.racine || '';
  const langue = document.documentElement.lang === 'fr' ? 'fr' : 'en';

  // Textes du menu dans chaque langue
  const textes = {
    en: {
      publications: 'Publications',
      all: 'All',
      beyond: 'Beyound the Headlines',
      data: 'Data Insights',
      about: 'About',
      autre: 'fr',
      autreNom: 'Français'
    },
    fr: {
      publications: 'Publications',
      all: 'Toutes',
      beyond: 'Au-delà des gros titres',
      data: 'Data Insights',
      about: 'À propos',
      autre: 'en',
      autreNom: 'English'
    }
  };
  const t = textes[langue];

  // Adresse de la même page dans l'autre langue
  let boutonLangue = '';
  if (emplacement.dataset.traduction === 'oui') {
    const racine = new URL(r || './', location.href);
    const reste = location.href.slice(racine.href.length);
    const autreUrl = langue === 'fr'
      ? new URL('../', racine).href + reste
      : racine.href + 'fr/' + reste;

    boutonLangue = `<a href="${autreUrl}" class="langue" lang="${t.autre}" hreflang="${t.autre}" title="${t.autreNom}">${t.autre.toUpperCase()}</a>`;
  }

  emplacement.outerHTML = `
    <header>
      <div class="conteneur">
        <a href="${r}index.html" class="logo">Red Island Media</a>
        <nav>
          <div class="menu-deroulant">
            <a href="${r}publications.html">${t.publications} ▾</a>
            <div class="sous-menu">
              <a href="${r}publications.html">${t.all}</a>
              <a href="${r}publications.html?cat=beyound-the-headlines">${t.beyond}</a>
              <a href="${r}publications.html?cat=data-insights">${t.data}</a>
            </div>
          </div>
          <a href="#podcast">Podcast</a>
          <a href="#discussions">Discussions</a>
          <a href="${r}about.html">${t.about}</a>
          ${boutonLangue}
        </nav>
        <button class="burger" aria-label="Menu">☰</button>
      </div>
    </header>`;

  // Ouverture et fermeture du menu sur téléphone
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('ouvert');
  });
})();
