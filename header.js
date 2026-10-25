/* ===== Header commun à toutes les pages =====
   Pour modifier le menu, change seulement ce fichier :
   toutes les pages seront mises à jour. */

(function () {
  // L'emplacement prévu dans la page : <div id="site-header" data-racine=""></div>
  const emplacement = document.getElementById('site-header');
  if (!emplacement) return;

  // r = préfixe des chemins : "" pour une page à la racine, "../../" pour une page
  // située deux dossiers plus bas (ex. analyses/mon-premier-article/index.html)
  const r = emplacement.dataset.racine || '';

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
        </nav>
        <button class="burger" aria-label="Menu">☰</button>
      </div>
    </header>`;

  // Ouverture et fermeture du menu sur téléphone
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('ouvert');
  });
})();
