"use strict";
import modal from './modules/modal';
import calcTotal from './modules/total';

document.addEventListener('DOMContentLoaded', () => {
    modal('[data-modal]', '.modal');
    calcTotal('.total__amount');
});