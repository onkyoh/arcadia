import EmblaCarousel from 'embla-carousel';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

const viewport = document.querySelector('#carousel .cs-carousel-viewport');

if (viewport) {
    const progressBar = document.querySelector('#carousel .cs-carousel-bar');

    const embla = EmblaCarousel(
        viewport,
        {
            loop: false,
            align: 'start',
            containScroll: 'trimSnaps',
            dragFree: false,
        },
        [WheelGesturesPlugin()],
    );

    const updateProgress = () => {
        if (!progressBar) return;
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        progressBar.style.transform = `scaleX(${progress})`;
    };

    embla.on('scroll', updateProgress);
    embla.on('reInit', updateProgress);
    updateProgress();
}
