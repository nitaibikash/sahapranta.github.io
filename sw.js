self.addEventListener('install', function(event) {
//  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/about.html',
        '/blog.html',
        '/contact.html',
        '/blog-details.html',
        '/work-details.html',
        '/css/',
        '/css/style.css',
        '/css/bootstrap.min.css',
        '/css/responsive.css',
        '/css/font-awesome.min.css',
        '/css/effects/set2.css',
        '/css/effects/normalize.css',
        '/css/effects/component.css',
        '/images/',
        '/images/logo.png',
        '/images/favicon.ico',
        '/images/home-images/',
        '/images/home-images/image-1.jpg',
        '/images/home-images/image-2.jpg',
        '/images/home-images/image-3.jpg',
        '/images/home-images/image-4.jpg',
        '/images/home-images/image-5.jpg',
        '/images/about-images/about-image-1.jpg',
        '/images/about-images/about-image-2.jpg',
        '/images/about-images/about-image-3.jpg',
        '/images/blog-images/blog-1.jpg',
        '/images/blog-images/blog-2.jpg',
        '/images/blog-images/blog-3.jpg',
        '/images/blog-images/blog-4.jpg',
        '/images/blog-images/blog-5.jpg',
        '/images/blog-images/image-1.jpg',
        '/images/blog-images/image-2.jpg',
        '/images/blog-images/image-3.jpg',
        '/images/blog-images/blog-details-image.jpg',
        '/images/work/works-image-1.jpg',
        '/images/work/works-image-2.jpg',
        '/images/work/works-image-3.jpg',
        '/js/',
        '/js/jquery.min.js',
        '/js/nav.js',
        '/js/custom.js',
        '/js/bootstrap.min.js',
        '/js/effects/masonry.pkgd.min.js',
        '/js/effects/imagesloaded.js',
        '/js/effects/classie.js',
        '/js/effects/AnimOnScroll.js',
        '/js/effects/modernizr.custom.js',
        '/js/html5shiv.js'        
      ]);
    })
 // );
});
