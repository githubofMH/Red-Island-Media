/* ===== Footer commun à toutes les pages (EN + FR) =====
   Pour modifier le footer, change seulement ce fichier.

   Dans chaque page, à la place de <footer>...</footer> :
   <div id="site-footer" data-racine=""></div>
   <script src="footer.js"></script>

   - data-racine : même valeur que pour le header de la même page
       (chemin pour remonter jusqu'à la racine DE LA LANGUE de la page)
   - La langue vient de <html lang="en"> ou <html lang="fr"> */

(function () {
  const emplacement = document.getElementById('site-footer');
  if (!emplacement) return;

  const r = emplacement.dataset.racine || '';
  const langue = document.documentElement.lang === 'fr' ? 'fr' : 'en';

  const textes = {
    en: { droits: 'All rights reserved', mentions: 'Legal notice' },
    fr: { droits: 'Tous droits réservés', mentions: 'Mentions légales' }
  };
  const t = textes[langue];

  const annee = new Date().getFullYear();   // l'année se met à jour toute seule

  emplacement.outerHTML = `
    <footer>
      © ${annee} Red Island Media – ${t.droits} ·
      <a href="${r}mentions-legales.html">${t.mentions}</a>
    </footer>`;
})();
