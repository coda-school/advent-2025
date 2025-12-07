interface Challenge {
    day: number;
    title: string;
    htmlContent: string;
    hasSrcFolder: boolean;
}

declare const hljs: any;

const CHALLENGES_DATA: Challenge[] = [
  {
    "day": 1,
    "title": "Jour 1 — Un curieux message",
    "htmlContent": "<p>Ce matin, tu as reçu un message inattendu.</p>\n<p>L’expéditeur ? <strong>Le Père Noël en personne.</strong></p>\n<p>Enfin… c’est ce que laisse penser l’en-tête de l’email : <code>noel@santaops.np</code>.</p>\n<p>Le problème, c’est que le contenu du message est illisible. Une série de lettres étranges, précédée d’une petite énigme.</p>\n<p>Tu comprends vite que ce n’est pas un simple bug d’encodage : <strong>c’est un message chiffré.</strong></p>\n<h2>Énigme</h2>\nPour trouver la clé, recule chaque lettre du même nombre de pas. Ce nombre est égal au nombre de lettres du mot <strong>RENNE</strong>.\n<p><details><summary>Spoiler</summary>\n  <pre>\n    Indice : il s’agit d’un chiffre de César — chaque lettre du message a été décalée du même nombre de positions.\n  </pre>\n</details></p>\n<h2>Message chiffré</h2>\n<pre><code class=\"language-\">qjx uwjufwfynkx uwjssjsy iz wjyfwi qjx jqkjx xtsy ijgtwijx jy qf qtlnxynvzj iz ywfnsjfz jxy js ufssj. \nqj ujwj stjq hmjwhmj zs tz zsj ija hfufgqj ij qzn uwjyjw rfns ktwyj. \nqjx qzynsx xtsy itzjx fajh qjx otzjyx rtnsx fajh qj htij. \nfajh hjyyj wjxtqzynts yz fx uwtzaj yf afqjzw jy jrgfwvzj ifsx hjyyj fajsyzwj !!!</code></pre>\n<h2>Ta mission</h2>\n<ul><li><strong>Déchiffre</strong> le message (manuellement, sans coder).</li>\n<li>Trouve le <strong>texte en clair</strong> en français.</li></ul>\nBonne chance à toi.\nTa mission commence maintenant.",
    "hasSrcFolder": false
  },
  {
    "day": 2,
    "title": "Jour 2 — Compter les Rennes",
    "htmlContent": "<p>Félicitations, tu as su décrypter le message secret du Père Noël !\nTe voilà officiellement intégré·e à l’équipe du <strong>Pôle Nord Ops</strong>.</p>\n<p>Pas de répit : la grande nuit approche, et les préparatifs battent leur plein.\nLe Père Noël commence à planifier la tournée du 24 décembre… mais avant de charger le traîneau, il doit vérifier si <strong>tous ses rennes sont bien présents</strong> à l’étable.</p>\n<p>Problème : entre l’entraînement, les visites au vétérinaire et les séances de spa (oui, les rennes aussi ont besoin de se détendre 🦌💆), certains manquent à l’appel !\nEt comme toujours, le Père Noël n’a <strong>pas le temps</strong> de faire le comptage à la main — il fait donc appel à toi.</p>\n<h2>Ta mission</h2>\nÉcris un petit programme pour aider le Père Noël à <strong>compter automatiquement les rennes présents</strong> !\n<ul><li>Crée une structure <code>Reindeer</code> représentant un renne (nom + présence).</li>\n<li>Initialise un tableau avec les <strong>8 rennes officiels</strong> du traîneau.</li>\n<li>Certains sont présents, d’autres non : ton algorithme doit compter uniquement les présents.</li>\n<li>Affiche le résultat dans une phrase lisible pour Santa.</li></ul>\n<pre><code class=\"language-c\">int countPresentReindeers(Reindeer reindeers[]);</code></pre>\n<h2>Inventaire</h2>\n<p>Voici l'inventaire des <code>Rennes</code> ce jour :</p>\n<ul><li>Dasher : présent</li>\n<li>Dancer : vétérinaire</li>\n<li>Prancer : présent ? 😬</li>\n<li>Vixen : spa</li>\n<li>Comet : présent</li>\n<li>Cupid : parti</li>\n<li>Donner : présent</li>\n<li>Blitzen : présent</li></ul>\n<h2>Exemple d’exécution</h2>\n<pre><code class=\"language-\">🎅 Santa: 6 out of 8 reindeers are present in the stable tonight.</code></pre>\n<p><blockquote>“Au Pôle Nord, on ne compte pas les problèmes… on les code !”</blockquote></p>",
    "hasSrcFolder": true
  },
  {
    "day": 3,
    "title": "Jour 3 — Le script fantôme",
    "htmlContent": "<p>À peine arrivé·e au Pôle Nord, tu commences à comprendre l’ampleur de la mission.</p>\n<p>Entre les flux de données, les rennes à suivre et les cadeaux à planifier, <strong>l’infrastructure informatique</strong> du Père Noël tourne à plein régime.\nLes elfes, eux, ont un rôle crucial : ils réalisent chaque nuit des <strong>sauvegardes</strong> de la liste des enfants sages.</p>\n<p>Mais ce matin, c’est la panique à l’atelier : <strong>aucune sauvegarde n’a été effectuée</strong>.</p>\n<p>L’elfe responsable a beau lancer le script magique :</p>\n<pre><code class=\"language-bash\">./backup.sh</code></pre>\n<p>…il obtient seulement :</p>\n<pre><code class=\"language-bash\">bash: ./backup.sh: Permission denied</code></pre>\n<p>Sans ce script, <strong>impossible de protéger la liste des enfants sages</strong>.\nEt sans cette liste, comment savoir qui mérite un cadeau ? 🎁😱</p>\n<h2>Ta mission</h2>\nLe Père Noël compte sur toi pour remettre ce script d’aplomb.\n<ul><li><strong>Inspecte</strong> le fichier <code>backup.sh</code> pour comprendre pourquoi il refuse de s’exécuter.</li>\n<li><strong>Corrige</strong> le problème afin que le script puisse à nouveau fonctionner.</li>\n<li><strong>Sécurise les permissions</strong> : seul le Père Noël (propriétaire du fichier) doit pouvoir exécuter le script — aucun elfe curieux ne doit pouvoir le modifier ou l’exécuter.</li>\n<li><strong>Documente</strong> les commandes que tu as utilisées et explique ce qu’elles font.</li></ul>\n<h3>Fichier concerné</h3>\n<pre><code class=\"language-bash\">#!/bin/bash\n# Script de sauvegarde magique du Père Noël 🎅\n# Sauvegarde la liste des enfants sages dans un coffre-fort sécurisé\n\necho \"🔒 Sauvegarde en cours...\"\nsleep 1\necho \"🎁 La liste des enfants sages a bien été sauvegardée !\"</code></pre>",
    "hasSrcFolder": true
  },
  {
    "day": 4,
    "title": "Jour 4 — Bataille de biscuits",
    "htmlContent": "<p>Après plusieurs jours à réparer les serveurs, recompter les rennes et relancer les sauvegardes, le Père Noël a enfin accordé une <strong>pause goûter</strong> à son équipe.</p>\n<p>Mais au Pôle Nord, rien n’est jamais simple : chaque elfe a préparé sa propre boîte de biscuits, chocolats et bonbons pour tenir jusqu’à Noël… et la compétition fait rage.\nDepuis la fameuse “crise du cookie de 2020” (appelé crise COVID par les humains), tout le monde veut <strong>gagner le titre de Meilleur·e Snackeur·se de Noël</strong> !</p>\n<p>Pour désigner le ou la champion·ne, Santa a besoin de toi : il t’envoie la liste des calories contenues dans les douceurs de chaque elfe.</p>\n<p>Chaque bloc représente un elfe, précédé de son prénom, suivi de la liste des calories de ses gourmandises.\nLes blocs sont séparés par une ligne vide.</p>\n<h2>Exemple de données</h2>\n<pre><code class=\"language-\">Pepin\n1000\n2000\n3000\n\nLuna\n4000\n\nMarius\n5000\n6000\n\nNora\n7000\n8000\n9000\n\nTika\n10000</code></pre>\n<h2>Ce que cela signifie</h2>\n<ul><li><strong>Pepin</strong> transporte 1000 + 2000 + 3000 = <strong>6000 calories</strong>.</li>\n<li><strong>Luna</strong> transporte 4000 calories.</li>\n<li><strong>Marius</strong> transporte 11000 calories.</li>\n<li><strong>Nora</strong> transporte 24000 calories.</li>\n<li><strong>Tika</strong> transporte 10000 calories.</li></ul>\n<h2>Ta mission</h2>\n<ul><li>Trouve le <strong>Top 3</strong> des elfes transportant <strong>le plus de calories</strong></li>\n<li>Affiche leur <strong>nom</strong> et le <strong>total</strong> de calories</li></ul>\n<h2>Exemple d’exécution</h2>\n<pre><code class=\"language-\">🍪 Elf of the Day: Nora with 24000 calories!\n🥈 Then comes Marius (11000) and Tika (10000)\n🎁 Combined snack power of Top 3: 45000 calories!</code></pre>\n",
    "hasSrcFolder": true
  },
  {
    "day": 5,
    "title": "Jour 5 – Le piège de la date infernale",
    "htmlContent": "<p>Les <strong>elfes</strong>, après des mois de travail intense, décident qu’il est temps de se détendre un peu avant Noël… mais à leur manière.</p>\n<p>Leur idée ? Saboter <strong>subtilement</strong> la <strong>sélection de date</strong> dans leurs systèmes pour jouer un <strong>petit tour</strong> à leurs collègues de la <strong>logistique</strong>.</p>\n<p>Les elfes ont donc besoin de <strong>ton expertise</strong> pour les aider à réaliser ce tour de magie : <strong>rendre le Date Picker aussi inutilisable que possible</strong>, tout en conservant une apparence « propre » et professionnelle.</p>\n<p>Et le meilleur dans tout ça ? Ils veulent <strong>réutiliser</strong> ton travail dans <strong>tous leurs systèmes</strong> de gestion de dates !</p>\n<p>Ton rôle est donc de créer <strong>un DatePicker saboté</strong> qui sera utilisé pour tous leurs projets futurs.</p>\n<h2>Ta mission</h2>\nLes elfes t’ont donné une <strong>interface propre et ergonomique</strong> pour un formulaire avec un <strong>Date Picker</strong>.\n<p>À toi maintenant de saboter cette interface de manière subtile, mais efficace, pour la rendre la plus <strong>impossible</strong> à utiliser tout en gardant une apparence visuellement correcte.</p>\n<p><img src=\"challenges/day-05/img/datepicker.webp\" alt=\"Datepicker\" style=\"max-width: 100%; height: auto;\"></p>\n<h2>💡 Ressources</h2>\n<ul><li><a href=\"https://usabilis.com/dark-patterns-pieges-ux-design/\" target=\"_blank\">Dark Patterns, des pièges pour l’UX Design</a></li>\n<li><a href=\"https://www.deceptive.design/\" target=\"_blank\">Deceptive patterns</a></li>\n<li><a href=\"https://www.atipik.ch/fr/blog/definition-dark-patterns-design-ux\" target=\"_blank\">Dark patterns, le côté obscur de l’UX</a></li></ul>",
    "hasSrcFolder": true
  },
  {
    "day": 6,
    "title": "Jour 6 — Une histoire de poids",
    "htmlContent": "<p>L’escouade <strong>Logistique Traîneaux</strong> a besoin de toi.</p>\n<p>Objectif : éviter les <strong>traîneaux trop lourds</strong> (et les rennes grognons 🦌).</p>\n<p>Le Père Noël veut une estimation fiable de la <strong>moyenne des poids</strong> des cadeaux par lot.\nUn elfe a déjà codé une fonction… mais l’équipe remonte des résultats bizarres. On a besoin de <strong>tests unitaires</strong> pour sécuriser tout ça, puis de corrections (si besoin).</p>\n<h2>Ta mission</h2>\n<strong>Écris des tests unitaires</strong> qui décrivent le comportement attendu de la fonction <code>averageWeight</code>.\n<pre><code class=\"language-c\">double averageWeight(int weights[], int length) {\n    int s = 0;\n    for (int i = 0; i < length; i++) {\n        s += weights[i];\n    }\n    return s / length;\n}</code></pre>\n<h2>Cas de test fournis (Chef elfe Julian)</h2>\n<pre><code class=\"language-text\">- {2, 5, 7, 10} -> 6.00\n- {2} -> 2.00\n- {} -> 0.00\n- {1, 2} -> 1.50</code></pre>\n<p><blockquote>️ <em>Note du Chef Qualité</em> : “Un test qui échoue avant la correction, c’est un cadeau : il révèle une vérité qu’on ne voyait pas.” 🎄</blockquote></p>",
    "hasSrcFolder": true
  },
  {
    "day": 7,
    "title": "Jour 7 — L'imparfait du futur",
    "htmlContent": "<p>L’hiver bat son plein au Pôle Nord.</p>\n<p>Les chaînes de montage tournent à plein régime, les rennes font leurs échauffements, et les elfes s’affairent dans l’atelier… mais une drôle de rumeur circule depuis quelques jours.</p>\n<p><blockquote>“Il paraît que le code des elfes n’est pas... <em>parfait</em>.”</blockquote></p>\n<p>Panique générale dans la division informatique du Père Noël.</p>\n<p>Chacun prétend que <strong>son code</strong> est le plus propre.</p>\n<p>Certains disent que les tests passent “sur leur machine”, d’autres accusent la magie du traîneau de fausser les résultats.</p>\n<p>Alors, le Père Noël, fatigué de ces chamailleries techniques, a décidé de <strong>faire appel à toi</strong> :</p>\n<p><blockquote>“Toi qui comprends la qualité logicielle et les bonnes pratiques, aide mes elfes à découvrir un outil qui dit la (a minima une) vérité.”</blockquote></p>\n<h2>Ta mission</h2>\nTu vas <strong>aider les elfes à évaluer leur code</strong> à l’aide de linters professionnels.\nTon objectif : leur prouver qu’il ne suffit pas qu’un code <em>marche</em> — il doit aussi être <strong>propre, cohérent et maintenable</strong>.\n<ul><li>Choisis ton <strong>linter</strong> selon le langage : <strong>TypeScript</strong> → <a href=\"https://eslint.org\" target=\"_blank\">ESLint</a> (+ plugin <code>@typescript-eslint</code>), <strong>C# / PHP / Java</strong> → <a href=\"https://www.sonarsource.com/products/sonarlint/\" target=\"_blank\">SonarLint</a></li>\n<li><strong>Lance l’analyse</strong> du code que les elfes t’ont envoyé (même logique dans les 4 langages)</li>\n<li><strong>Dresse la liste</strong> des problèmes détectés (règle, niveau, explication)</li>\n<li><strong>Corrige</strong> les erreurs et “code smells” pour que les linters passent au vert.</li></ul>\n<pre><code class=\"language-typescript\">export class gift_registry { \n  public gifts: Gift[] = [];\n  private LastUpdated = new Date();\n  debug = true;\n\n  constructor(initial?: Gift[]) {\n    var counter = 0;\n    if (initial != null) {\n      this.gifts = initial;\n    } else if (false) {\n      console.log(\"never\");\n    }\n  }\n\n  addGift(child: string, gift: string, packed?: boolean): void {\n    if (child == \"\") {\n      console.log(\"child missing\");\n    }\n    const duplicate = this.gifts.find(g => g.childName == child && g.giftName == gift);\n    if (!duplicate) {\n      this.gifts.push({ childName: child, giftName: gift, isPacked: packed, notes: \"ok\" });\n      this.LastUpdated = new Date();\n    }\n    return;\n    console.log(\"unreachable\");\n  }\n  ...\n}</code></pre>",
    "hasSrcFolder": true
  }
];

document.addEventListener('DOMContentLoaded', function(): void {
    setupCalendar();
    setupModal();
    openChallengeIfPassedAsParam();
});

document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        const portalOverlay: HTMLElement | null = document.getElementById('portal-overlay');
        if (portalOverlay?.classList.contains('portal-active')) {
            closeVideo();
        }
    }
});

function setupCalendar(): void {
    const calendar = document.getElementById('calendar');
    if (!calendar) return;

    // Attach event listeners to pre-rendered calendar days
    const dayElements = calendar.querySelectorAll('.calendar-day.available');
    dayElements.forEach(dayElement => {
        const day = parseInt(dayElement.getAttribute('data-day') || '0');
        if (day > 0) {
            dayElement.addEventListener('click', () => {
                dayElement.classList.add('flipping');
                setTimeout(() => {
                    dayElement.classList.remove('flipping');
                    openChallenge(day);
                }, 300);
            });
        }
    });
}

function openChallengeIfPassedAsParam() {
    const params = new URLSearchParams(document.location.search);
    const day = params.get("day");

    if (day) {
        const dayNum = parseInt(day);
        if (!isNaN(dayNum)) {
            openChallenge(dayNum);
        }
    }
}

function openChallenge(day: number): void {
    const challenge = CHALLENGES_DATA.find(c => c.day === day);
    if (!challenge) return;

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');

    if (!modal || !modalTitle || !modalMessage) return;

    modalTitle.textContent = challenge.title || `Jour ${day}`;
    modalMessage.innerHTML = challenge.htmlContent;

    // Add download button if src folder exists
    if (challenge.hasSrcFolder) {
        const downloadBtn = document.createElement('button');
        downloadBtn.textContent = '↓ Télécharger les fichiers sources';
        downloadBtn.className = 'download-btn';
        downloadBtn.onclick = () => downloadSrcFolder(challenge.day);
        modalMessage.appendChild(downloadBtn);
    }

    // Highlight code blocks
    if (typeof hljs !== 'undefined') {
        modalMessage.querySelectorAll('pre code').forEach(block => {
            hljs.highlightElement(block);
        });
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function downloadSrcFolder(day: number): void {
    const dayStr = day.toString().padStart(2, '0');
    const link = document.createElement('a');
    link.href = `challenges/day-${dayStr}/src.zip`;
    link.download = `day-${dayStr}-src.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function setupModal(): void {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');

    if (!modal || !closeButton) return;

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e: MouseEvent) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e: KeyboardEvent) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function closeModal(): void {
    const modal = document.getElementById('modal');
    if (!modal) return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

const konamiCode: string[] = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

let konamiIndex: number = 0;
const videoIframe = document.getElementById('konami-video') as HTMLIFrameElement;
const originalVideoSrc: string | null = videoIframe?.getAttribute('data-video-url');

document.addEventListener('keydown', (e: KeyboardEvent) => {
    let key: string = e.key;
    switch (e.key.toLowerCase()) {
        case 'arrowup': key = 'ArrowUp'; break;
        case 'arrowdown': key = 'ArrowDown'; break;
        case 'arrowleft': key = 'ArrowLeft'; break;
        case 'arrowright': key = 'ArrowRight'; break;
        default: key = e.key.toLowerCase();
    }

    if (key !== konamiCode[konamiIndex]) {
        konamiIndex = 0;
    } else {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateVideo();
            konamiIndex = 0;
        }
    }
});

function activateVideo(): void {
    document.body.classList.add('portal-open');
    const portalOverlay: HTMLElement | null = document.getElementById('portal-overlay');
    if (portalOverlay) {
        portalOverlay.classList.remove('portal-hidden');
        portalOverlay.classList.add('portal-active');
    }
    if (videoIframe && originalVideoSrc) {
        videoIframe.src = originalVideoSrc;
    }
}

function closeVideo(): void {
    const portalOverlay: HTMLElement | null = document.getElementById('portal-overlay');
    if (portalOverlay) {
        document.body.classList.remove('portal-open');
        document.body.classList.add('portal-closing');
        portalOverlay.classList.add('portal-closing');
        setTimeout(() => {
            portalOverlay.classList.remove('portal-active', 'portal-closing');
            portalOverlay.classList.add('portal-hidden');
            document.body.classList.remove('portal-closing');
            if (videoIframe) {
                videoIframe.src = '';
            }
        }, 500);
    }
}