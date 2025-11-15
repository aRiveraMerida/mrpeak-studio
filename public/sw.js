const CACHE_NAME = 'mrpeakstudio-v2';
// Lista mínima de recursos críticos a cachear
const urlsToCache = [
  '/'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        // Cachear solo recursos que existen y son accesibles
        return cache.addAll(urlsToCache).catch((err) => {
          console.warn('Some resources failed to cache:', err);
          // No fallar el install si algunos recursos no se pueden cachear
        });
      })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Solo cachear GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Solo cachear recursos de nuestro dominio
            const url = new URL(event.request.url);
            if (url.origin === location.origin) {
              // Clone the response for caching
              const responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                })
                .catch((err) => console.warn('Failed to cache:', err));
            }

            return response;
          }
        ).catch((err) => {
          console.warn('Fetch failed:', err);
          // Retornar respuesta offline si está disponible
          return caches.match('/');
        });
      })
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
