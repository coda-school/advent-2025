interface Challenge {
    day: number;
    title: string;
    htmlContent: string;
    hasSrcFolder: boolean;
}

declare const hljs: any;

const CHALLENGES_DATA: Challenge[] = [];

document.addEventListener('DOMContentLoaded', function(): void {
    setupCalendar();
    setupModal();
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
