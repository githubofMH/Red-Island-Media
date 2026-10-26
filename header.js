/* ===== Header commun à toutes les pages =====
   Le menu est toujours en anglais et pointe toujours vers les pages anglaises,
   même depuis une analyse traduite en français.

   Dans chaque page :
   <div id="site-header" data-racine="../../"></div>
   <script src="../../header.js"></script>

   - data-racine : chemin pour remonter jusqu'à la RACINE DU SITE
       accueil, publications, about      -> data-racine=""
       analysis/nom-article/             -> data-racine="../../"
       fr/analysis/nom-article/          -> data-racine="../../../"
   - data-traduction="oui" : à ajouter UNIQUEMENT sur les analyses qui existent dans
       les deux langues. Un bouton EN / FR apparaît alors dans le menu.
       Il suppose que l'analyse anglaise est dans   .../analysis/nom-article/
       et la version française dans                 .../fr/analysis/nom-article/ */

(function () {
  const emplacement = document.getElementById('site-header');
  if (!emplacement) return;

  const r = emplacement.dataset.racine || '';

  // ----- Bouton de langue (analyses traduites seulement) -----
  let boutonLangue = '';
  if (emplacement.dataset.traduction === 'oui') {
    const pageFrancaise = document.documentElement.lang === 'fr';

    const autreUrl = pageFrancaise
      ? location.href.replace('/fr/analysis/', '/analysis/')   // FR -> EN
      : location.href.replace('/analysis/', '/fr/analysis/');  // EN -> FR

    const code = pageFrancaise ? 'en' : 'fr';
    const nom = pageFrancaise ? 'English' : 'Français';

    boutonLangue = `<a href="${autreUrl}" class="langue" lang="${code}" hreflang="${code}" title="${nom}">${code.toUpperCase()}</a>`;
  }

  emplacement.outerHTML = `
    <header>
      <div class="conteneur">
        <a href="${r}index.html" class="logo">Red Island Media</a>
        <nav>
          <div class="menu-deroulant">
            <a href="${r}publications.html">Publications ▾</a>
            <div class="sous-menu">
              <a href="${r}publications.html">All</a>
              <a href="${r}publications.html?cat=beyound-the-headlines">Beyound the Headlines</a>
              <a href="${r}publications.html?cat=data-insights">Data Insights</a>
            </div>
          </div>
          <a href="#podcast">Podcast</a>
          <a href="#discussions">Discussions</a>
          <a href="${r}about.html">About</a>
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
