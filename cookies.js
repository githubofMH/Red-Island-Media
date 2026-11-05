/* ===== Gestion du consentement aux cookies (tarteaucitron.js) =====
   Dans chaque page, juste avant </body> :
   <script src="cookies.js" data-racine=""></script>

   - data-racine : même valeur que pour le header de la même page
   - la langue vient de <html lang="en"> ou <html lang="fr">

   IMPORTANT : tarteaucitron n'affiche la bannière que si au moins un service
   (statistiques, vidéo...) est déclaré plus bas. Tant qu'il n'y en a aucun,
   rien ne s'affiche, ce qui est normal pour un site sans cookies. */

(function () {
  const script = document.currentScript;
  const r = script.dataset.racine || '';
  const langue = document.documentElement.lang === 'fr' ? 'fr' : 'en';

  // Doit être défini AVANT le chargement de tarteaucitron
  window.tarteaucitronForceLanguage = langue;

  const bibliotheque = document.createElement('script');
  // Version à vérifier sur https://www.jsdelivr.com/package/npm/tarteaucitronjs
  bibliotheque.src = 'https://cdn.jsdelivr.net/npm/tarteaucitronjs@1.28.0/tarteaucitron.js';

  bibliotheque.onload = function () {
    tarteaucitron.init({
      "privacyUrl": r + "privacy-policy.html",  // lien « politique de confidentialité » de la bannière
      "bodyPosition": "bottom",
      "hashtag": "#tarteaucitron",              // un lien href="#tarteaucitron" rouvre le panneau
      "cookieName": "tarteaucitron",
      "orientation": "bottom",                  // bandeau en bas (aussi : top, middle, popup)
      "useExternalJs": false,
      "partnersList": false
    });

    // ===== TES SERVICES ICI =====
    // Quand tu ajoutes un outil de statistiques, copie le code que donne l'assistant
    // d'installation de tarteaucitron (tarteaucitron.io, « Installation guide »)
    // pour ce service. Exemple de forme :
    //
    // tarteaucitron.user.gtagUa = 'G-XXXXXXXXXX';
    // (tarteaucitron.job = tarteaucitron.job || []).push('gtag');
  };

  document.head.appendChild(bibliotheque);
})();
