import 'vite/modulepreload-polyfill';
import '@/scss/main.scss';
import 'swiper/css';
import "swiper/css/grid";
import 'aos/dist/aos.css';

import Alpine from 'alpinejs';
import AlpineIntersect from '@alpinejs/intersect';
import AOS from 'aos';
import { Grid, Swiper } from 'swiper';

document.addEventListener('alpine:init', () => {
    Alpine.data('slider', (options) => ({
        swiper: null,
        init() {
            const defaultOptions = {
                slidesPerView: 'auto',
                spaceBetween: 30,
                modules: [Grid],
            };

            options = Object.assign(defaultOptions, options);

            this.swiper = new Swiper(this.$el, options);
        }
    }));
});

Alpine.plugin(AlpineIntersect);
Alpine.start();
AOS.init({
    once: true,
    duration: 1000,
    easing: 'ease-in-out',
    mirror: false
});