import {ripple as rawRipple} from '../js/ripple';

export const ripple = (el, option, ...args) => {
    try {
        const canvas = document.createElement('canvas');
        const gl =
            canvas.getContext('webgl') ||
            canvas.getContext('experimental-webgl');
        if (!gl || !gl.getExtension('OES_texture_float')) return;

        rawRipple(el, option, ...args);
    } catch (e) {
        console.warn('Ripple init failed:', e);
    }
};
