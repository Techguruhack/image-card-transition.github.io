document.addEventListener('DOMContentLoaded', () => {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    let isCard1Visible = true;

    const explodeConfetti = () => {
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    };

    card1.addEventListener('click', () => {
        if (isCard1Visible) {
            card1.style.transform = 'translateX(-220px)';
            card2.style.transform = 'translateX(0)';
        } else {
            card1.style.transform = 'translateX(0)';
            card2.style.transform = 'translateX(220px)';
        }
        explodeConfetti();
        isCard1Visible = !isCard1Visible;
    });

    card2.addEventListener('click', () => {
        if (isCard1Visible) {
            card1.style.transform = 'translateX(-220px)';
            card2.style.transform = 'translateX(0)';
        } else {
            card1.style.transform = 'translateX(0)';
            card2.style.transform = 'translateX(220px)';
        }
        explodeConfetti();
        isCard1Visible = !isCard1Visible;
    });
});
