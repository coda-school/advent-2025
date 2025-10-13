const CHALLENGES_DATA = [];
document.addEventListener('DOMContentLoaded', function () {
    setupCalendar();
    setupModal();
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
