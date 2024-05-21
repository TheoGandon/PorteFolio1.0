import React from 'react';
import '../css/Veille.css';
import Vimg from '../asset/Vimg.png';
import Vimg2 from '../asset/Vimg2.png';


const Veille = () => {
  return (
    <div className="document-page-container">
      <h1 className="document-page-heading-1">Maintenir à jour les langages de programmation pour la sécurité des projets</h1>

      <h2 className="document-page-heading-2">Introduction</h2>
      <p className="document-page-paragraph">En tant qu'expert en sécurité informatique spécialisée dans les langages de programmation, je peux affirmer que la mise à jour régulière des versions des langages est primordiale pour garantir la sécurité des projets informatiques. En effet, les langages de programmation, tout comme les logiciels, sont sujets à des failles et vulnérabilités qui peuvent être exploitées par des acteurs malveillants pour compromettre les systèmes et les données.</p>

      <h2 className="document-page-heading-2">Les différents stades de vie d'une version de langage</h2>
      <p className="document-page-paragraph">Les langages de programmation évoluent en permanence. Chaque version majeure apporte de nouvelles fonctionnalités, corrige des bugs et améliore les performances. Cependant, il est important de comprendre que chaque version a un cycle de vie défini par ses développeurs.</p>
      <ul className="document-page-list">
        <li className="document-page-list-item">Support actif (Active Support): C'est la phase pendant laquelle les développeurs du langage fournissent des mises à jour correctives et de sécurité régulières. C'est la période la plus sûre pour utiliser une version de langage.</li>
        <li className="document-page-list-item">Corrections de sécurité uniquement (Security Fixes Only): Dans cette phase, les développeurs ne fournissent plus de nouvelles fonctionnalités, mais continuent à publier des correctifs pour les failles de sécurité critiques. L'utilisation de versions dans cette phase est encore acceptable, mais il est important de mettre à jour rapidement dès qu'un correctif est disponible.</li>
        <li className="document-page-list-item">Fin de vie (End of Life): Une fois qu'une version atteint sa fin de vie, elle ne reçoit plus aucune mise à jour, ni corrective ni de sécurité. L'utilisation de versions en fin de vie est fortement déconseillée car elles représentent un risque important pour la sécurité des projets.</li>
      </ul>
      <img className='img-v' src={Vimg} alt="" />
      <h2 className="document-page-heading-2">Exemple avec PHP et Symfony</h2>
      <p className="document-page-paragraph">Prenons l'exemple du langage de programmation PHP et de son framework Symfony. La version PHP 8.3 est actuellement en phase de support actif et bénéficie de mises à jour régulières. La version PHP 8.1 est en phase de "Corrections de sécurité uniquement" jusqu'au 8 décembre 2024, après quoi elle atteindra sa fin de vie. Il est donc important de mettre à jour tous les projets PHP 8.1 vers PHP 8.3 avant cette date.</p>
      <p className="document-page-paragraph">Symfony fonctionne plus ou moins de la même manière, mais avec une fonction de « Long term Support » en addition. La version « Long Term Support » peut être une version plus ancienne, mais plus stable et maintenue pendant une période de temps certaine. La version 5.4, correspondant à la version 7 de php sera maintenue en « Active Support » jusqu'à fin 2024 puis en « Security fixes only » jusqu'à fin 2025. La version 6.4, qui est actuellement la version « Long Term Support » la plus récente sera maintenue en « Active Support » jusqu'à fin 2027 puis en « Security fixes only » jusqu'à fin 2028. On remarque que ces dates se collent sur les versions de PHP.</p>
      <img className='img-v' src={Vimg2} alt="" />
      <h2 className="document-page-heading-2">Les conséquences de ne pas mettre à jour les versions des langages</h2>
      <p className="document-page-paragraph">Ne pas mettre à jour les versions des langages de programmation peut avoir des conséquences graves pour la sécurité des projets, notamment :</p>
      <ul className="document-page-list">
        <li className="document-page-list-item">Exposition aux failles de sécurité: Les failles de sécurité connues ne sont corrigées que dans les nouvelles versions des langages. Continuer à utiliser une version obsolète expose les projets aux attaques qui exploitent ces failles. Un exemple est disponible dans la version avant PHP 7.3 : CVE-2019-9637 : Un problème a été découvert dans PHP avant 7.1.27, 7.2.x avant 7.2.16, et 7.3.x avant 7.3.3. A cause de la façon dont rename() est implémenté dans les systèmes de fichiers, il est possible que le fichier renommé soit brièvement disponible avec de mauvaises permissions pendant que le renommage est en cours, permettant ainsi à des utilisateurs non autorisés d'accéder aux données.</li>
        <li className="document-page-list-item">Incompatibilités avec les bibliothèques et frameworks: Les nouvelles versions des langages introduisent souvent des changements qui peuvent rendre les bibliothèques et frameworks obsolètes incompatibles. Cela peut entraîner des bugs, des dysfonctionnements et des problèmes de sécurité.</li>
        <li className="document-page-list-item">Diminution des performances: Les nouvelles versions des langages apportent souvent des améliorations des performances. Continuer à utiliser une version obsolète peut ralentir les applications et nuire à l'expérience utilisateur.</li>
      </ul>

      <h2 className="document-page-heading-2">Conclusion</h2>
      <p className="document-page-paragraph">Maintenir à jour les versions des langages de programmation est une mesure de sécurité essentielle pour tous les projets informatiques. En utilisant les versions les plus récentes, les développeurs peuvent s'assurer que leurs projets bénéficient des dernières fonctionnalités, corrections de bugs et protections de sécurité. Il est important de se tenir informé des cycles de vie des langages utilisés et de mettre à jour les projets dès que possible vers de nouvelles versions.</p>

      <h3 className="document-page-heading-3">Sources :</h3>
      <ul className="document-page-list">
        <li className="document-page-list-item">
          <a href="https://symfony.com/releases" target="_blank" rel="noopener noreferrer" className="document-page-link">https://symfony.com/releases</a>
        </li>
        <li className="document-page-list-item">
          <a href="https://www.php.net/supported-versions.php" target="_blank" rel="noopener noreferrer" className="document-page-link">https://www.php.net/supported-versions.php</a>
        </li>
        <li className="document-page-list-item">
          <a href="https://www.cert.ssi.gouv.fr/information/CERTA-2007-INF-002/" target="_blank" rel="noopener noreferrer" className="document-page-link">https://www.cert.ssi.gouv.fr/information/CERTA-2007-INF-002/</a>
        </li>
        <li className="document-page-list-item">
          <a href="https://www.cvedetails.com/cve/CVE-2019-9637/" target="_blank" rel="noopener noreferrer" className="document-page-link">https://www.cert.ssi.gouv.fr/information/CERTA-2007-INF-002/</a>
        </li>
      </ul>
    </div>
  );
};

export default Veille;
