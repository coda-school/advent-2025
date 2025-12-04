const CHALLENGES_DATA = [
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
    }
];
document.addEventListener('DOMContentLoaded', function () {
    setupCalendar();
    setupModal();
    openChallengeIfPassedAsParam();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        const portalOverlay = document.getElementById('portal-overlay');
        if (portalOverlay?.classList.contains('portal-active')) {
            closeVideo();
        }
    }
});
function setupCalendar() {
    const calendar = document.getElementById('calendar');
    if (!calendar)
        return;
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
function openChallenge(day) {
    const challenge = CHALLENGES_DATA.find(c => c.day === day);
    if (!challenge)
        return;
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    if (!modal || !modalTitle || !modalMessage)
        return;
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
function downloadSrcFolder(day) {
    const dayStr = day.toString().padStart(2, '0');
    const link = document.createElement('a');
    link.href = `challenges/day-${dayStr}/src.zip`;
    link.download = `day-${dayStr}-src.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function setupModal() {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');
    if (!modal || !closeButton)
        return;
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}
function closeModal() {
    const modal = document.getElementById('modal');
    if (!modal)
        return;
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];
let konamiIndex = 0;
const videoIframe = document.getElementById('konami-video');
const originalVideoSrc = videoIframe?.getAttribute('data-video-url');
document.addEventListener('keydown', (e) => {
    let key = e.key;
    switch (e.key.toLowerCase()) {
        case 'arrowup':
            key = 'ArrowUp';
            break;
        case 'arrowdown':
            key = 'ArrowDown';
            break;
        case 'arrowleft':
            key = 'ArrowLeft';
            break;
        case 'arrowright':
            key = 'ArrowRight';
            break;
        default: key = e.key.toLowerCase();
    }
    if (key !== konamiCode[konamiIndex]) {
        konamiIndex = 0;
    }
    else {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateVideo();
            konamiIndex = 0;
        }
    }
});
function activateVideo() {
    document.body.classList.add('portal-open');
    const portalOverlay = document.getElementById('portal-overlay');
    if (portalOverlay) {
        portalOverlay.classList.remove('portal-hidden');
        portalOverlay.classList.add('portal-active');
    }
    if (videoIframe && originalVideoSrc) {
        videoIframe.src = originalVideoSrc;
    }
}
function closeVideo() {
    const portalOverlay = document.getElementById('portal-overlay');
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
