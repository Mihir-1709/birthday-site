document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const giftBoxImage = document.getElementById('gift-box-image');
    const nextButtons = document.querySelectorAll('.next-btn');

    let currentPageIndex = 0;

    function showPage(pageIndex) {
        pages.forEach((page) => {
            page.classList.remove('active');
        });
        pages[pageIndex].classList.add('active');
    }

    if (giftBoxImage) {
        giftBoxImage.addEventListener('click', () => {
            giftBoxImage.classList.add('opened');
            setTimeout(() => {
                currentPageIndex++;
                if (currentPageIndex < pages.length) {
                    showPage(currentPageIndex);
                }
            }, 500);
        });
    }

    nextButtons.forEach((button) => {
        button.addEventListener('click', () => {
            currentPageIndex++;
            if (currentPageIndex < pages.length) {
                showPage(currentPageIndex);
            }
        });
    });

    const confettiBtn = document.getElementById('confetti-btn');
    if (confettiBtn) {
        confettiBtn.addEventListener('click', () => {
            confetti({
                particleCount: 500,
                spread: 180,
                origin: { y: 0.6 }
            });
        });
    }

    showPage(currentPageIndex);
});