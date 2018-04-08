importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function(event) {
//  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/css/bootstrap.min.css',
        '/css/font-awesome.min.css',
        '/css/style.css',
        '/css/responsive.css',
        '/css/style.css.map',
        '/js/bootstrap.min.js',
        '/js/jquery-2.1.4.min.js',
        '/js/theme.js',
        '/js/contact.js',
        '/js/gmaps.min.js',
        '/js/jquery.form.js',
        '/js/jquery.validate.min.js',
        '/vendors/animate-css/animate.css',
        '/vendors/animate-css/wow.min.js',
        '/vendors/counter-up/jquery.counterup.min.js',
        '/vendors/counter-up/waypoints.min.js',
        '/vendors/isotope/imagesloaded.pkgd.min.js',
        '/vendors/isotope.pkgd.min.js',
        '/vendors/owl-carousel/owl.carousel.min.js',
        '/vendors/owl-carousel/assets/owl.carousel.css',
        '/fonts/FontAwesome.otf',
        '/fonts/fontawesome-webfont.eot',
        '/fonts/fontawesome-webfont.ttf',
        '/fonts/fontawesome-webfont.svg',
        '/fonts/fontawesome-webfont.woff',
        '/fonts/fontawesome-webfont.woff2',
        '/img/logo.png',
        '/img/footer-logo.png',
        '/img/fav-icon.png',
        '/img/Pattern_Light.png',
        '/img/logo/36x36.png',
        '/img/logo/60x60.png',
        '/img/logo/72x72.png',
        '/img/logo/144x144.png',
        '/img/logo/216x216.png'
        '/img/logo/360x360.png',
        '/img/logo/432x432.png',
        '/img/logo/576x576.png',
        '/img/logo/720x720.png'
      ]);
    })
 // );
});
