const CHALLENGES_DATA = [
    {
        "day": 1,
        "title": "Jour 1 — Compter les Rennes",
        "htmlContent": "<p>Le Père Noël commence à préparer la grande nuit du 24 décembre.\nMais avant de charger le traîneau, il doit vérifier si tous ses rennes sont présents dans l’étable.\nProblème : certains rennes manquent à l’appel (entraînement, vétérinaire, spa… oui, les rennes aussi ont besoin de se détendre 🦌💆).</p>\n<p>Le Père Noël n’a pas le temps de compter à la main : il a besoin de toi pour automatiser cette tâche !</p>\n<h2>Ta mission</h2>\n<ul><li>Crée une structure <code>Reindeer</code>.</li>\n<li>Définis un tableau avec les 8 rennes du Père Noël. Certains sont présents, d’autres non.</li>\n<li>Écris un algorithme qui compte uniquement les rennes présents.</li>\n<li>Affiche le résultat.</li></ul>\n<pre><code class=\"language-C\">int countPresentReindeers(Reindeer reindeers[]);</code></pre>\n<h2>Inventaire</h2>\n<p>Voici l'inventaire des <code>Rennes</code> ce jour :</p>\n<ul><li>Dasher : présent</li>\n<li>Dancer : vétérinaire</li>\n<li>Prancer : présent ? 😬</li>\n<li>Vixen : spa</li>\n<li>Comet : présent</li>\n<li>Cupid : parti</li>\n<li>Donner : présent</li>\n<li>Blitzen : présent</li></ul>\n<h2>Exemple d’exécution</h2>\n<pre><code class=\"language-\">🎅 Santa: 6 out of 8 reindeers are present in the stable tonight.</code></pre>",
        "hasSrcFolder": true
    },
    {
        "day": 2,
        "title": "Jour 2 – Le script fantôme",
        "htmlContent": "<p>Au Pôle Nord, l’infrastructure informatique est mise à rude épreuve : le Père Noël doit préparer la distribution des cadeaux, et ses elfes doivent assurer des sauvegardes régulières pour ne pas perdre la liste des enfants sages.\nMais catastrophe ! L’elfe responsable des sauvegardes tente de lancer le script magique :</p>\n<pre><code class=\"language-bash\">./backup.sh</code></pre>\n<p>et obtient :\n<pre><code class=\"language-bash\">bash: ./backup.sh: Permission denied</code></pre>\nSans ce script, aucune sauvegarde n’est possible, et Noël est en danger !</p>\n<h2>Ta mission</h2>\n<ul><li>Inspecte le fichier <code>backup.sh</code> et découvre pourquoi il refuse de s’exécuter. </li>\n<li>Corrige le problème.</li>\n<li>Assure-toi que seul le <strong>Père Noël</strong> (propriétaire du fichier) puisse exécuter le script, et qu’aucun elfe curieux ne puisse y toucher.</li>\n<li>Détaille ce que tu as fait.</li></ul>\n<pre><code class=\"language-bash\">#!/bin/bash\n# Script de sauvegarde magique du Père Noël 🎅\n# Sauvegarde la liste des enfants sages dans un coffre-fort sécurisé\n\necho \"🔒 Sauvegarde en cours...\"\nsleep 1\necho \"🎁 La liste des enfants sages a bien été sauvegardée !\"</code></pre>",
        "hasSrcFolder": true
    },
    {
        "day": 3,
        "title": "Jour 3 — Une histoire de poids",
        "htmlContent": "<h2>Ta mission</h2>\n<p>Père Noël souhaite calculer la <strong>moyenne des poids</strong> des cadeaux pour s'assurer qu'il n'y a pas de traîneaux trop lourds.\nL'algorithme suivant a déjà été écrit, mais il ne donne pas complètement satisfaction...</p>\n<p>Ta mission est d'écrire des <code>tests unitaires</code> pour sécuriser cet algorithme et corriger les erreurs que tu pourrais découvrir...</p>\n<pre><code class=\"language-c\">double averageWeight(int weights[], int length) {\n    int s = 0;\n    for (int i = 0; i < length; i++) {\n        s += weights[i];\n    }\n    return s / length;\n}</code></pre>\n<h2><strong>Cas de test</strong></h2>\n<p>Certains cas de tests ont été détaillés par l'elf en chef du Père Noël appelé Julian.</p>\n<pre><code class=\"language-text\">- {2, 5, 7, 10} -> 6.00\n- {2} -> 2.00\n- {} -> 0.00\n- {1, 2} -> 1.5</code></pre>",
        "hasSrcFolder": true
    }
];
document.addEventListener('DOMContentLoaded', function () {
    setupCalendar();
    setupModal();
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
