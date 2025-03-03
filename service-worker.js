
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('karaoke-cache').then(cache => {
            return cache.addAll([
                '/index.html',
                '/song1.mp3',
                '/song2.mp3',
                '/playlist.txt',
                '/song1.txt'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
