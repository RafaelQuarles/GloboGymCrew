self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('sw-cache').then(function(cache) {
            return cache.add('index.html', 'styles.css', 'dark.css', 'profiles/meetTheCrew.html','profiles/meetTheCrew.css', 'profiles/waveTraining.html', 'profiles/waveTraining.css');
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});