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