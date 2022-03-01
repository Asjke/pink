import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';

import { initModals } from './modules/init-modals';
import { initMobileMenu } from './modules/mobile-menu';
import { initSwiper } from './modules/init-swiper';
import { burgerButton } from './modules/burger';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initMobileMenu();
initSwiper();
burgerButton();


